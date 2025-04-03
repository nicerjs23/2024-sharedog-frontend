import styled from 'styled-components';
import Logo from '@assets/images/defaultDogImg.png';

const ChatRoom = ({ room, onClick }) => {
  return (
    <ChatRoomWrapper onClick={onClick}>
      <ChatContent>
        <ChatProfile
          src={room.opponent_user_profile || Logo}
          alt="프로필 이미지"
        />
        <TextContainer>
          <ChatNameDate>
            <Name>{room.opponent_user || '이름 없음'}</Name>
            <Date>{room.latest_message_time || '시간 없음'}</Date>
          </ChatNameDate>
          <ChatBody>
            {room.latest_message || '최근 메시지가 없습니다.'}
            {room.unread_messages > 0 && (
              <Unread>{room.unread_messages}</Unread>
            )}
          </ChatBody>
        </TextContainer>
      </ChatContent>
    </ChatRoomWrapper>
  );
};

export default ChatRoom;

// ==================== Styled Components ====================

const ChatRoomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  padding-left: 4px;
  padding-right: 11px;
  box-sizing: border-box;
  align-items: center;
`;

const ChatContent = styled.div`
  width: 100%;
  gap: 17px;
  display: flex;
  align-items: center;
`;

const ChatProfile = styled.img`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: #ffffff;
  object-fit: cover; /* 이미지 비율 유지하면서 채우기 */
  object-position: center; /* 중앙 정렬 */
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1; /* 부모가 차지할 수 있는 공간을 차지하도록 설정 */
  min-width: 0; /* 내부 요소가 줄바꿈 제한을 받을 수 있도록 설정 */
  flex-direction: column;
  gap: 8px;
`;

const ChatNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
`;

const Date = styled.div`
  color: #9c9ca1;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
`;

const ChatBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #9c9ca1;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};

  white-space: nowrap; /* 한 줄로 유지 */
  overflow: hidden; /* 넘치는 내용 숨김 */
  text-overflow: ellipsis; /* 말줄임표(...) 적용 */
`;

const Unread = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  background-color: ${({ theme }) => theme.colors.mainColor};
  height: 15px;
  min-width: 15px;
  padding: 0 3px; /* 좌우 여백으로 자연스럽게 너비 증가 */
  box-sizing: border-box;
  border-radius: 999px; /* pill 형태 유지 */
  line-height: 1;
`;
