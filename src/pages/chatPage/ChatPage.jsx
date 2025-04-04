import * as S from './ChatPage.styled';
import ChatRoom from '@components/chat/ChatRoom';
import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect, useRef } from 'react';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const ChatPage = () => {
  const { goTo } = useCustomNavigate();
  const [chatRoom, setChatRoom] = useState([]);
  // WebSocket 연결을 위한 ref
  const socketRef = useRef(null);

  // 1) REST API로 채팅방 목록을 먼저 가져오기
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get('/api/chat/rooms');
      console.log('📌 REST 채팅방 데이터:', response.data);

      // REST 응답을 필요한 형태로 매핑
      const normalizedRooms = response.data.map((room) => ({
        id: room.id,
        is_promise: room.is_promise,
        latest_message: room.latest_message,
        latest_message_time: room.latest_message_time,
        opponent_email: room.opponent_email,
        opponent_user: room.opponent_user,
        opponent_user_profile: room.opponent_user_profile,
        participants: room.participants,
        unread_messages: room.unread_messages,
      }));

      setChatRoom(normalizedRooms);
    } catch (error) {
      console.error('채팅방 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // 2) WebSocket 연결 함수
  const connectWebSocket = () => {
    // 기존 연결이 살아있으면 강제로 종료 후 재설정
    if (
      socketRef.current &&
      socketRef.current.readyState !== WebSocket.CLOSED
    ) {
      console.log(
        '기존 WebSocket 연결이 존재합니다. 연결을 재설정합니다.'
      );
      socketRef.current.close();
      socketRef.current = null;
    }

    const token = localStorage.getItem('access');
    if (!token) {
      console.error('❌ 액세스 토큰이 없습니다! 웹소켓 연결 불가');
      return;
    }

    // 채팅 리스트 전용 WebSocket 엔드포인트
    const socketUrl = `wss://sharedog.shop/ws/user/chatrooms?token=${token}`;
    const socket = new WebSocket(socketUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('✅ ChatList WebSocket 연결 성공:', socketUrl);
    };

    // 3) WebSocket 메시지 수신
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('💬 ChatList WebSocket 수신 데이터:', data);

        if (data.type === 'chatrooms_list') {
          // 빈 배열이 오면 그냥 무시
          if (!data.chatrooms || data.chatrooms.length === 0) {
            console.log('빈 데이터 수신: 업데이트 무시');
            return;
          }

          // 업데이트: 기존 채팅방과 비교해서 변경된 부분만 반영
          setChatRoom((prevRooms) => {
            // 기존 채팅방을 id 기준으로 매핑
            const roomMap = new Map();
            prevRooms.forEach((room) => roomMap.set(room.id, room));

            // 새로 온 데이터에 대해 업데이트
            data.chatrooms.forEach((wsRoom) => {
              // 만약 기존에 있다면 병합
              if (roomMap.has(wsRoom.id)) {
                const existingRoom = roomMap.get(wsRoom.id);
                roomMap.set(wsRoom.id, {
                  ...existingRoom,
                  ...wsRoom,
                });
              } else {
                // 새로운 채팅방이면 추가
                roomMap.set(wsRoom.id, wsRoom);
              }
            });

            // Map을 배열로 변환해서 반환
            return Array.from(roomMap.values());
          });
        } else {
          console.log('처리되지 않은 type:', data.type);
        }
      } catch (error) {
        console.error(
          'ChatList WebSocket 수신 데이터 파싱 오류:',
          error
        );
      }
    };

    socket.onerror = (error) => {
      console.error('ChatList WebSocket 에러:', error);
    };

    socket.onclose = (event) => {
      console.log('ChatList WebSocket 연결 해제:', event);
      socketRef.current = null;
    };
  };

  // 4) 컴포넌트 마운트 시점에 REST + WebSocket 연결
  useEffect(() => {
    fetchChatRooms();
    connectWebSocket();

    // 언마운트 시점에 WebSocket 연결 종료
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, []);

  // 5) 렌더링
  return (
    <S.Wrapper>
      <S.Contents>
        <S.ChatHeader>채팅</S.ChatHeader>
        <S.Line />
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
