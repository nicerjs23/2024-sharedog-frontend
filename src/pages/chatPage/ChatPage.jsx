import * as S from './ChatPage.styled';
import ChatRoom from '@components/chat/ChatRoom';
import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect, useRef } from 'react';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const ChatPage = () => {
  const { goTo } = useCustomNavigate();
  const [chatRoom, setChatRoom] = useState([]);
  // ChatPage 전용 WebSocket 연결 ref
  const socketRef = useRef(null);

  // REST API를 통해 풍부한 채팅방 데이터를 불러옴
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get(`/api/chat/rooms`);
      console.log('📌 REST 채팅방 데이터:', response.data);
      setChatRoom(response.data);
    } catch (error) {
      console.error('채팅방 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // ChatPage 전용 WebSocket 연결 함수
  const connectWebSocket = () => {
    if (socketRef.current) return; // 이미 연결되어 있다면 리턴

    const token = localStorage.getItem('access');
    if (!token) {
      console.error('❌ 액세스 토큰이 없습니다! 웹소켓 연결 불가');
      return;
    }

    // 채팅 리스트 전용 엔드포인트 (예: /ws/user/chatrooms)
    const socketUrl = `wss://sharedog.shop/ws/user/chatrooms?token=${token}`;
    const socket = new WebSocket(socketUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('✅ ChatList WebSocket 연결 성공:', socketUrl);
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('💬 ChatList WebSocket 수신 데이터:', data);
        if (data.type === 'chatrooms_list' && data.chatrooms) {
          // REST API 데이터와 WebSocket 업데이트 데이터를 병합하여 업데이트
          setChatRoom((prevRooms) => {
            const updatedRooms = prevRooms.map((oldRoom) => {
              const newRoom = data.chatrooms.find(
                (wsRoom) => wsRoom.room_id === oldRoom.id
              );
              if (!newRoom) return oldRoom;
              return {
                ...oldRoom,
                unread_messages: newRoom.unread_messages,
                latest_message:
                  newRoom.last_message || oldRoom.latest_message,
                // 서버가 보내주는 이름 필드가 'opponant_name'인 경우 매핑
                opponent_user:
                  newRoom.opponant_name || oldRoom.opponent_user,
              };
            });
            // 새로 추가된 채팅방이 있다면 추가
            const newRooms = data.chatrooms
              .filter(
                (wsRoom) =>
                  !updatedRooms.some(
                    (room) => room.id === wsRoom.room_id
                  )
              )
              .map((wsRoom) => ({
                id: wsRoom.room_id,
                opponent_user: wsRoom.opponant_name || '이름 없음',
                opponent_user_profile: '', // 프로필 정보가 없으면 빈 값
                unread_messages: wsRoom.unread_messages,
                latest_message: wsRoom.last_message || '',
              }));
            return [...updatedRooms, ...newRooms];
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

  useEffect(() => {
    fetchChatRooms();
    connectWebSocket();
    // ChatPage가 언마운트될 때 연결 종료
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
