import * as S from "./ChatPage.styled";
import ChatRoom from "@components/chat/ChatRoom";

import axiosInstance from "@apis/axiosInstance";
import { useState, useEffect } from "react";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const ChatPage = () => {
  const { goTo } = useCustomNavigate();

  const [chatRoom, setChatRoom] = useState([]);
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get(`/api/chat/rooms`);
      console.log("📌 채팅방 데이터:", response.data);
      setChatRoom(response.data); // 데이터 상태 업데이트
    } catch (error) {
      console.error("채팅방 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.ChatHeader>채팅</S.ChatHeader>
        <S.Line />
        {/* 채팅방 데이터를 ChatRoom에 props로 전달 */}
        {chatRoom.map((room) => (
          <ChatRoom
            key={room.id}
            room={room}
            onClick={() => goTo(`/chat/${room.id}`)}
          />
        ))}
      </S.Contents>
    </S.Wrapper>
  );
};
