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

  // REST API를 통해 채팅방 데이터를 불러옴
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get('/api/chat/rooms');
      console.log('📌 REST 채팅방 데이터:', response.data);

      // REST 응답 데이터를 웹소켓과 동일한 구조로 매핑
      // (필요한 필드만 가져오거나, 서버 필드와 일치하도록 조정)
      const normalizedRooms = response.data.map((room) => ({
        id: room.id,
        is_promise: room.is_promise,
        latest_message: room.latest_message,
        latest_message_time: room.latest_message_time, // 추가
        opponent_user: room.opponent_user,
        opponent_image: room.opponent_image,
        opponent_user_profile: room.opponent_user_profile,
        unread_messages: room.unread_messages,
        participants: room.participants,
      }));

      setChatRoom(normalizedRooms);
    } catch (error) {
      console.error('채팅방 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  // ChatPage 전용 WebSocket 연결 함수
  const connectWebSocket = () => {
    // 기존 연결이 남아있으면 강제로 종료 후 재설정
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

    // 채팅 리스트 전용 엔드포인트
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

        // type이 'chatrooms_list'인 경우만 처리
        if (data.type === 'chatrooms_list' && data.chatrooms) {
          setChatRoom((prevRooms) => {
            // 복사본 생성
            let updatedRooms = [...prevRooms];

            // 서버에서 전송된 채팅방 목록 순회
            data.chatrooms.forEach((wsRoom) => {
              // 기존 채팅방 중에 동일한 room_id가 있는지 확인
              const index = updatedRooms.findIndex(
                (room) => room.id === wsRoom.room_id
              );

              if (index !== -1) {
                // 기존 방이 있으면 업데이트 후 맨 앞으로 이동
                const oldRoom = updatedRooms[index];
                const newRoom = {
                  ...oldRoom,
                  unread_messages: wsRoom.unread_messages,
                  latest_message:
                    wsRoom.last_message || oldRoom.latest_message,
                  latest_message_time:
                    wsRoom.latest_message_time ||
                    oldRoom.latest_message_time,
                  opponent_user:
                    wsRoom.opponent_name || oldRoom.opponent_user,
                  opponent_image:
                    wsRoom.opponent_image || oldRoom.opponent_image,
                  opponent_user_profile:
                    wsRoom.opponent_user_profile ||
                    oldRoom.opponent_user_profile,
                  is_promise:
                    wsRoom.is_promise != null
                      ? wsRoom.is_promise
                      : oldRoom.is_promise,
                  participants:
                    wsRoom.participants || oldRoom.participants,
                };
                // 기존 위치에서 제거
                updatedRooms.splice(index, 1);
                // 업데이트된 방을 맨 앞에 추가(최근 메시지가 온 순서대로 정렬)
                updatedRooms.unshift(newRoom);
              } else {
                // 새로운 방이면 맨 앞으로 추가
                const newRoom = {
                  id: wsRoom.room_id,
                  is_promise: wsRoom.is_promise || false,
                  latest_message: wsRoom.last_message || '',
                  latest_message_time:
                    wsRoom.latest_message_time || '',
                  opponent_user: wsRoom.opponent_name || '이름 없음',
                  opponent_image: wsRoom.opponent_image || '',
                  opponent_user_profile:
                    wsRoom.opponent_user_profile || '',
                  unread_messages: wsRoom.unread_messages || 0,
                  participants: wsRoom.participants || [],
                };
                updatedRooms.unshift(newRoom);
              }
            });
            return updatedRooms;
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
    // 컴포넌트 언마운트 시 WebSocket 연결 종료
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
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
