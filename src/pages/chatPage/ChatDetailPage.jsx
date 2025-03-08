import * as S from './ChatDetail.styled';
import backIconNew from '@assets/icons/backIconNew.svg';
import ChatFooter from '@components/chat/ChatFooter';
import MyChat from '@components/chat/MyChat';
import PeerChat from '@components/chat/PeerChat';
import postImg2 from '@assets/images/postImg2.png';
import { useCustomNavigate } from '@hooks/useCustomNavigate';
import axiosInstance from '@apis/axiosInstance';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const ChatDetailPage = () => {
  const { goTo, goBack } = useCustomNavigate();
  const { id } = useParams();
  const roomId = parseInt(id, 10);
  const [chatData, setChatData] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [opponentName, setOpponentName] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false); // ✅ 데이터 로딩 상태 추가
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  const [showPromiseModal, setShowPromiseModal] = useState(false);

  const [promiseData, setPromiseData] = useState({
    time: '',
    day: '',
    place: '',
  });

  const handlePromiseClick = async () => {
    if (!promiseData.time || !promiseData.day || !promiseData.place) {
      alert('시간, 날짜, 장소를 입력해주세요.');
      return;
    }

    try {
      console.log(`📌 POST 요청: /api/chat/rooms/${roomId}/promise`);
      const response = await axiosInstance.post(
        `/api/chat/rooms/${roomId}/promise`,
        promiseData
      );

      console.log('✅ 약속 생성 성공:', response.data);
      alert(
        `약속이 잡혔습니다: ${response.data.day_display}, ${response.data.time_display}, ${response.data.place}`
      );

      // ✅ [1] 모달 닫기
      setShowPromiseModal(false);

      // // ✅ [2] 새로고침 (F5)
      // setTimeout(() => {
      //   window.location.reload(); // F5와 동일한 새로고침
      // }, 500); // 0.5초 후 새로고침
    } catch (error) {
      console.error(
        '❌ 약속 잡기 실패:',
        error.response?.data || error.message
      );
      alert('약속을 잡는 데 실패했습니다. 다시 시도해주세요.');
    }
  };

  const fetchMessages = async () => {
    try {
      console.log(`📌 GET 요청: /api/chat/${roomId}/messages`);
      const response = await axiosInstance.get(
        `/api/chat/${roomId}/messages`
      );
      console.log('📌 채팅 데이터:', response.data);

      if (response.data) {
        const { user_info, messages_by_date } = response.data;
        setCurrentUserEmail(user_info.current_user.email || '');
        setOpponentName(user_info.opponent.name);
        setChatData(messages_by_date);
        setIsDataLoaded(true); // ✅ 데이터 로딩 완료
      }
    } catch (error) {
      console.error('❌ 채팅 데이터 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    if (!roomId) return;
    fetchMessages();
  }, [roomId]);

  useEffect(() => {
    if (!currentUserEmail) return;
    connectWebSocket();
  }, [currentUserEmail]);

  const connectWebSocket = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN)
      return;

    const token = localStorage.getItem('access');
    if (!token) {
      console.error(
        '❌ 액세스 토큰이 없습니다! 웹소켓을 연결할 수 없습니다.'
      );
      return;
    }

    const socketUrl = `wss://sharedog.shop/ws/room/${roomId}/messages?token=${token}`;
    console.log(`📌 웹소켓 연결 시도: ${socketUrl}`);

    ws.current = new WebSocket(socketUrl);

    ws.current.onopen = () => {
      console.log('✅ 웹소켓 연결 성공!');
    };
    ws.current.onmessage = (event) => {
      let newMessage;
      try {
        newMessage = JSON.parse(event.data);
        console.log('📩 웹소켓 메시지 수신:', newMessage);
      } catch (error) {
        console.error('❌ JSON 파싱 오류:', error);
        return;
      }

      console.log('현재 유저 이메일:', currentUserEmail);
      console.log(
        '받은 메시지 발신자 이메일:',
        newMessage.sender_email
      );

      const isSender =
        newMessage.sender_email.trim().toLowerCase() ===
        currentUserEmail.trim().toLowerCase();

      const now = new Date();
      const formattedTime = `${
        now.getHours() >= 12 ? '오후' : '오전'
      } ${now.getHours() % 12 || 12}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;

      console.log('📤 보낸 메시지의 시간:', formattedTime);

      const formattedMessage = {
        ...newMessage,
        text: newMessage.message,
        is_sender: isSender,
        formatted_time: formattedTime,
      };

      setChatData((prevData) => {
        if (!isDataLoaded) return prevData; // 데이터가 로드되지 않았다면 변경하지 않음

        // ✅ WebSocket 메시지는 날짜를 추가하지 않고, 기존 날짜 그룹에 메시지만 추가
        return prevData.map((chat) =>
          chat.date === prevData[prevData.length - 1].date
            ? {
                ...chat,
                messages: [...chat.messages, formattedMessage],
              }
            : chat
        );
      });

      scrollToBottom();
    };

    ws.current.onerror = (error) => {
      console.error('❌ 웹소켓 오류 발생:', error);
    };

    ws.current.onclose = (event) => {
      console.log(
        '⚠️ 웹소켓 연결 종료됨. 이유:',
        event.code,
        event.reason
      );
      if (event.code !== 1000) {
        console.log('🔄 웹소켓 자동 재연결 시도...');
        setTimeout(connectWebSocket, 2000);
      }
    };
  };

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.ChatHeader>
          <S.BackIcon
            src={backIconNew}
            alt="뒤로가기"
            onClick={goBack}
          />
          <S.HeaderName>{opponentName || '이름없음'}</S.HeaderName>
          <S.HeaderPromise onClick={() => setShowPromiseModal(true)}>
            약속잡기
          </S.HeaderPromise>
        </S.ChatHeader>

        {chatData.map((chatGroup) => (
          <div style={{ width: '100%' }} key={chatGroup.date}>
            <S.Date>{chatGroup.date}</S.Date>
            {chatGroup.messages.map((msg, index) => (
              <S.ChatContainer
                key={msg.id || `${chatGroup.date}-${index}`}
              >
                {msg.is_sender ? (
                  <MyChat time={msg.formatted_time} text={msg.text} />
                ) : (
                  <PeerChat
                    img={postImg2}
                    time={msg.formatted_time}
                    text={msg.text}
                  />
                )}
              </S.ChatContainer>
            ))}
          </div>
        ))}
        <div ref={chatEndRef} />
      </S.Contents>
      <ChatFooter ws={ws} currentUserEmail={currentUserEmail} />
      {showPromiseModal && (
        <S.ModalOverlay>
          <S.ModalWrapper>
            <S.ModalTitle>📅 약속 잡기</S.ModalTitle>

            <S.PromiseForm>
              <S.PromiseField>
                <S.FieldLabel>
                  날짜 <S.Required>*</S.Required>
                </S.FieldLabel>
                <S.Input
                  type="date"
                  value={promiseData.day}
                  onChange={(e) =>
                    setPromiseData((prev) => ({
                      ...prev,
                      day: e.target.value,
                    }))
                  }
                />
              </S.PromiseField>

              <S.PromiseField>
                <S.FieldLabel>
                  시간 <S.Required>*</S.Required>
                </S.FieldLabel>
                <S.Input
                  type="time"
                  value={promiseData.time}
                  onChange={(e) =>
                    setPromiseData((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                />
              </S.PromiseField>

              <S.PromiseField>
                <S.FieldLabel>장소</S.FieldLabel>
                <S.Input
                  type="text"
                  placeholder="장소를 입력해 주세요."
                  value={promiseData.place}
                  onChange={(e) =>
                    setPromiseData((prev) => ({
                      ...prev,
                      place: e.target.value,
                    }))
                  }
                />
              </S.PromiseField>
            </S.PromiseForm>

            <S.ButtonContainer>
              <S.ConfirmButton onClick={handlePromiseClick}>
                약속 확정
              </S.ConfirmButton>
              <S.CancelButton
                onClick={() => setShowPromiseModal(false)}
              >
                취소
              </S.CancelButton>
            </S.ButtonContainer>
          </S.ModalWrapper>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};
