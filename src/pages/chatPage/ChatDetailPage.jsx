import * as S from "./ChatDetail.styled";
import backIconNew from "@assets/icons/backIconNew.svg";

import ChatFooter from "@components/chat/ChatFooter";
import MyChat from "@components/chat/MyChat";
import PeerChat from "@components/chat/PeerChat";
import postImg2 from "@assets/images/postImg2.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"; // useParams 추가

export const ChatDetailPage = () => {
  const { goTo, goBack } = useCustomNavigate();
  const { id } = useParams(); // URL에서 roomId 가져오기
  const roomId = parseInt(id, 10); // 문자열을 숫자로 변환
  const [chatData, setChatData] = useState([]); // 날짜별 메시지 데이터
  const [currentUserId, setCurrentUserId] = useState(null); // 로그인한 유저 ID
  const [opponentName, setOpponentName] = useState(""); // 상대방 이름
  const ws = useRef(null);
  const chatEndRef = useRef(null); // ✅ 최신 채팅 위치로 이동할 Ref 추가
  const [currentUserEmail, setCurrentUserEmail] = useState(""); // ✅ 이메일 추가
  // 📌 1. 기존 채팅 불러오기 (날짜별 그룹화)
  const fetchMessages = async () => {
    try {
      console.log(`📌 GET 요청: /api/chat/${roomId}/messages`);
      const response = await axiosInstance.get(
        `/api/chat/${roomId}/messages`
      );
      console.log("📌 채팅 데이터:", response.data);

      if (response.data) {
        const { user_info, messages_by_date } = response.data;

        // 📌 현재 로그인한 유저 ID 저장
        setCurrentUserId(user_info.current_user.user_id);

        // 📌 상대방 이름 저장
        setOpponentName(user_info.opponent.name);

        // 📌 채팅 데이터 저장 (날짜별 메시지)
        setChatData(messages_by_date);
        // ✅ 이메일 저장
        setCurrentUserEmail(user_info.current_user.email);
      }
    } catch (error) {
      console.error("❌ 채팅 데이터 불러오기 실패:", error);
    }
  };
  // ✅ 웹소켓 연결 함수
  const connectWebSocket = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN)
      return;

    const token = localStorage.getItem("access");
    if (!token) {
      console.error(
        "❌ 액세스 토큰이 없습니다! 웹소켓을 연결할 수 없습니다."
      );
      return;
    }

    // ✅ 토큰을 URL에 포함하여 웹소켓 연결
    const socketUrl = `wss://sharedog.shop/ws/room/${roomId}/messages?token=${token}`;

    console.log(`📌 웹소켓 연결 시도: ${socketUrl}`);

    ws.current = new WebSocket(socketUrl);

    ws.current.onopen = () => {
      console.log("✅ 웹소켓 연결 성공!");
    };
    ws.current.onmessage = (event) => {
      console.log("📩 웹소켓 메시지 수신:", event.data);
      let newMessage;

      try {
        newMessage = JSON.parse(event.data);
      } catch (error) {
        console.error("❌ JSON 파싱 오류:", error);
        return;
      }

      // 🚨 빈 메시지 필터링
      if (!newMessage.message?.trim()) {
        console.warn(
          "⚠️ 빈 메시지 수신 - 추가하지 않음:",
          newMessage
        );
        return;
      }

      // 🚨 한글이 깨지는 경우, 디코딩 시도
      try {
        newMessage.message = decodeURIComponent(
          escape(newMessage.message)
        );
      } catch (e) {
        console.warn("⚠️ 메시지 디코딩 실패:", newMessage.message);
      }

      setChatData((prevData) => {
        const lastDate = prevData[prevData.length - 1]?.date;
        if (lastDate === newMessage.date) {
          return prevData.map((day) =>
            day.date === lastDate
              ? {
                  ...day,
                  messages: [
                    ...day.messages,
                    {
                      ...newMessage,
                      id: newMessage.id || Date.now(),
                    },
                  ],
                }
              : day
          );
        } else {
          return [
            ...prevData,
            {
              date: newMessage.date,
              messages: [
                { ...newMessage, id: newMessage.id || Date.now() },
              ],
            },
          ];
        }
      });

      scrollToBottom();
    };

    ws.current.onerror = (error) => {
      console.error("❌ 웹소켓 오류 발생:", error);
    };

    ws.current.onclose = (event) => {
      console.log(
        "⚠️ 웹소켓 연결 종료됨. 이유:",
        event.code,
        event.reason
      );

      // 1000 (정상 종료) 외에는 자동 재연결
      if (event.code !== 1000) {
        console.log("🔄 웹소켓 자동 재연결 시도...");
        setTimeout(connectWebSocket, 2000); // 2초 후 재연결
      }
    };
  };

  useEffect(() => {
    if (!roomId) return;

    fetchMessages();
    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [roomId]);

  // ✅ 3️⃣ 채팅이 갱신될 때 스크롤을 맨 아래로 이동
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom(); // ✅ 채팅 데이터가 변경될 때마다 실행
  }, [chatData]);

  return (
    <S.Wrapper>
      <S.Contents>
        {/* 채팅헤더 */}
        <S.ChatHeader>
          <S.BackIcon
            src={backIconNew}
            alt="뒤로가기"
            onClick={goBack}
          />
          <S.HeaderName>{opponentName || "이름없음"}</S.HeaderName>
          <S.HeaderPromise>약속잡기</S.HeaderPromise>
        </S.ChatHeader>

        {/* 📌 날짜별 메시지 렌더링 */}
        {chatData.map((chatGroup) => (
          <div style={{ width: "100%" }} key={chatGroup.date}>
            {" "}
            {/* ✅ date를 key로 사용 */}
            <S.Date>{chatGroup.date}</S.Date>
            {chatGroup.messages.map((msg, index) => (
              <S.ChatContainer
                key={msg.id || `${chatGroup.date}-${index}`}
              >
                {" "}
                {/* ✅ msg.id가 없을 경우, 안전한 key 값 사용 */}
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

      {/* ✅ ChatFooter에 웹소켓 인스턴스 전달 */}
      <ChatFooter
        ws={ws}
        roomId={roomId}
        currentUserEmail={currentUserEmail}
        setChatData={setChatData}
      />
    </S.Wrapper>
  );
};
