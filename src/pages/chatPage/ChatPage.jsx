import * as S from './ChatPage.styled';
import ChatRoom from '@components/chat/ChatRoom';

import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect, useRef } from 'react';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const ChatPage = () => {
  const { goTo } = useCustomNavigate();

  // 채팅방 리스트
  const [chatRoom, setChatRoom] = useState([]);
  // 웹소켓 인스턴스 보관용 ref (재렌더링에 의한 재연결 방지)
  const socketRef = useRef(null);

  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get(`/api/chat/rooms`);
      console.log('📌 채팅방 데이터:', response.data);
      setChatRoom(response.data); // REST API 데이터 상태 업데이트
    } catch (error) {
      console.error('채팅방 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // 웹소켓 연결 함수 (토큰을 쿼리 파라미터로 추가)
  const connectWebSocket = () => {
    // 이미 소켓이 연결되어 있으면 중복 연결 방지
    if (socketRef.current) {
      return;
    }

    const token = localStorage.getItem('access');
    if (!token) {
      console.error(
        '❌ 액세스 토큰이 없습니다! 웹소켓 연결을 할 수 없습니다.'
      );
      return;
    }

    // 토큰을 URL에 쿼리 파라미터로 추가
    const socketUrl = `wss://sharedog.shop/ws/user/chatrooms?token=${token}`;
    const socket = new WebSocket(socketUrl);
    socketRef.current = socket;

    // 연결 성공
    socket.onopen = () => {
      console.log('✅ WebSocket 연결 성공:', socketUrl);
    };

    // 서버에서 데이터가 오면 실행되는 콜백
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('💬 WebSocket 수신 데이터:', data);

        // 백엔드에서는 오직 chatrooms_list 타입만 사용
        if (data.type === 'chatrooms_list' && data.chatrooms) {
          setChatRoom(data.chatrooms);
        } else {
          console.log('처리되지 않은 type:', data.type);
        }
      } catch (error) {
        console.error('WebSocket 수신 데이터 파싱 오류:', error);
      }
    };

    // 에러 처리
    socket.onerror = (error) => {
      console.error('WebSocket 에러:', error);
    };

    // 소켓이 닫혔을 때
    socket.onclose = (event) => {
      console.log('WebSocket 연결 해제:', event);
      socketRef.current = null; // 닫힌 후에는 ref 초기화
    };
  };

  // 마운트 시 REST API와 WebSocket 연결 세팅
  useEffect(() => {
    fetchChatRooms();
    connectWebSocket();

    // 언마운트 시 소켓 정리
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.ChatHeader>채팅</S.ChatHeader>
        <S.Line />
        {/* 채팅방 데이터를 ChatRoom 컴포넌트에 props로 전달 */}
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
