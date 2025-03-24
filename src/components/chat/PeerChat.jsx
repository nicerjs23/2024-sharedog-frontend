import styled from 'styled-components';
import Logo from '@assets/icons/Logo.png';
const PeerChat = ({ read, time, text, img }) => {
  return (
    <Wrapper>
      <ProfileImg src={img || Logo} alt="프로필 이미지" />
      <ChatBox>{text}</ChatBox>
      <TimeText>
        {time} <ReadText> {read ? ' ' : '1'}</ReadText>
      </TimeText>
    </Wrapper>
  );
};

export default PeerChat;

export const Wrapper = styled.section`
  display: flex;

  width: 100%;
  gap: 6px;
`;

export const ProfileImg = styled.img`
  display: flex;
  align-items: flex-start;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  object-fit: cover; /* 이미지 비율 유지 + 꽉 차게 */
`;
export const ChatBox = styled.div`
  max-width: 180px;
  display: flex;
  height: auto;
  align-items: center;
  padding: 10px 8px 10px 10px;
  border-radius: 0px 20px 20px 20px;
  background: rgba(234, 234, 234, 0.6);
  color: #2a2a2a;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};

  word-break: break-word; /* 💡 긴 단어나 문장이 자동으로 줄바꿈되도록 설정 */
  white-space: pre-line; /* 💡 줄바꿈(\n)이 있으면 반영 */
`;
export const TimeText = styled.div`
  display: flex;
  color: rgba(156, 156, 161, 0.7);
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  /* height: 100%; */
  align-items: flex-end;
  gap: 5px;
`;

export const ReadText = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  /* height: 100%; */
`;
