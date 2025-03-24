import * as S from './ChatDetail.styled';
import backIconNew from '@assets/icons/backIconNew.svg';
import ChatFooter from '@components/chat/ChatFooter';
import MyChat from '@components/chat/MyChat';
import PeerChat from '@components/chat/PeerChat';
import postImg2 from '@assets/images/postImg2.png';
import { useCustomNavigate } from '@hooks/useCustomNavigate';
import promiseIcon from '@assets/icons/promiseIcon.svg';
import axiosInstance from '@apis/axiosInstance';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import PromiseCard from '@components/chat/PromiseCard'; // ✅ 약속 카드 컴포넌트 추가
import DateInput from '@components/chat/DateInput';
import TimeInput from '@components/chat/TimeInput';

import usePreventZoom from '@hooks/usePreventZoom'; //확대방지api

export const ChatDetailPage = () => {
  usePreventZoom(); // 확대 방지 적용!
  const { goTo, goBack } = useCustomNavigate();
  const { id } = useParams();
  const roomId = parseInt(id, 10);
  const [chatData, setChatData] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [opponentName, setOpponentName] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false); // ✅ 데이터 로딩 상태 추가
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  // ✅ (1) 최초 렌더링 시 "즉시" 스크롤 맨 아래로 이동
  const scrollToBottomInstant = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'instant' });
    }
  };

  // ✅ (2) 새로운 메시지가 추가될 때 "부드럽게" 스크롤 이동
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ (4) 데이터 로딩이 완료된 후에도 즉시 맨 아래로 이동 (최초 1회)
  useEffect(() => {
    if (isDataLoaded) {
      setTimeout(scrollToBottomInstant, 50);
    }
  }, [isDataLoaded]);

  // ✅ (5) 새로운 메시지가 추가될 때 부드럽게 스크롤
  useEffect(() => {
    if (!isDataLoaded) return;
    scrollToBottom();
  }, [chatData]);

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
      // ✅ [2] 새로고침 (F5) 왜냐면 약속잡기가 바로안떠서..
      setTimeout(() => {
        window.location.reload(); // F5와 동일한 새로고침
      }, 500); // 0.5초 후 새로고침
      // ✅ [1] 모달 닫기
      setShowPromiseModal(false);
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

    // ★ 컴포넌트 언마운트 시 웹소켓 연결을 닫는 cleanup 함수
    return () => {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        console.log('Unmounting chat detail, closing WebSocket...');
        // onclose에서 재연결 로직이 동작하지 않도록 핸들러를 해제하거나 code=1000으로 종료
        ws.current.onclose = null;
        ws.current.close(1000, 'Leaving chat page'); // 정상 종료 코드(1000)
      }
    };
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

      const isPromiseMessage = newMessage.promise_id !== null; // ✅ promise 값이 null이 아니면 약속 메시지로 판별

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
        is_read: newMessage.is_read, // ✅ 읽음 상태 추가

        is_promise: isPromiseMessage, // ✅ 약속 메시지 여부 저장
      };

      setChatData((prevData) => {
        // 날짜 추출(서버에서 주는 값 혹은 new Date() 등)
        const newMsgDate = newMessage.date || '2025-03-21';
        if (!prevData.length) {
          // 기존 그룹이 전혀 없는 경우, 새 그룹 생성
          return [
            {
              date: newMsgDate,
              messages: [formattedMessage],
            },
          ];
        }

        // 마지막 그룹과 날짜가 같으면 메시지만 푸시
        const lastGroup = prevData[prevData.length - 1];
        if (lastGroup.date === newMsgDate) {
          return prevData.map((group, idx) => {
            if (idx === prevData.length - 1) {
              return {
                ...group,
                messages: [...group.messages, formattedMessage],
              };
            }
            return group;
          });
        } else {
          // 날짜가 다르면 새 그룹 추가
          return [
            ...prevData,
            {
              date: newMsgDate,
              messages: [formattedMessage],
            },
          ];
        }
      });
      scrollToBottom();
      // ★ 추가: 상대방이 약속을 만든 메시지면 새로고침
      if (isPromiseMessage && !isSender) {
        // 상대방이 보낸 약속 메시지 → 내 화면도 새로고침
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
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
                isSender={msg.is_sender} // ✅ 내가 보낸 메시지인지 여부 전달
              >
                {msg.promise ? ( // ✅ promise 값이 존재하면 PromiseCard로 렌더링
                  <PromiseCard
                    day={msg.promise_info.day_display}
                    time={msg.promise_info.time_display}
                    place={msg.promise_info.place}
                  />
                ) : msg.is_sender ? (
                  <MyChat
                    read={msg.is_read}
                    time={msg.formatted_time}
                    text={msg.text}
                  />
                ) : (
                  <PeerChat
                    read={msg.is_read}
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
            <S.ModalTitle>
              <img src={promiseIcon} alt="약속잡기아이콘" />
              약속 잡기
            </S.ModalTitle>

            <S.PromiseForm>
              <S.FormContents>
                <S.PromiseField>
                  <S.FieldLabel>
                    날짜<S.Required>*</S.Required>
                  </S.FieldLabel>
                  <DateInput
                    dateValue={promiseData.day}
                    onDateChange={(newDate) =>
                      setPromiseData((prev) => ({
                        ...prev,
                        day: newDate,
                      }))
                    }
                  />
                </S.PromiseField>

                <S.PromiseField>
                  <S.FieldLabel>
                    시간 <S.Required>*</S.Required>
                  </S.FieldLabel>
                  <TimeInput
                    timeValue={promiseData.time}
                    onTimeChange={(newTime) =>
                      setPromiseData((prev) => ({
                        ...prev,
                        time: newTime,
                      }))
                    }
                    dateValue={promiseData.day} // ★ 오늘인지 비교용
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
              </S.FormContents>
            </S.PromiseForm>

            <S.ButtonContainer>
              <S.CancelButton
                onClick={() => setShowPromiseModal(false)}
              >
                취소
              </S.CancelButton>
              <S.ConfirmButton onClick={handlePromiseClick}>
                약속 확정
              </S.ConfirmButton>
            </S.ButtonContainer>
          </S.ModalWrapper>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};
