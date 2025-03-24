import { flushSync } from 'react-dom';
import styled from 'styled-components';

const MyChat = ({ read, time, text }) => {
  return (
    <Wrapper>
      <TimeText>
        <ReadText> {read ? ' ' : '1'}</ReadText> {time}
      </TimeText>
      <ChatBox>{text}</ChatBox>
    </Wrapper>
  );
};

export default MyChat;

export const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 6px;
`;
export const ChatBox = styled.div`
  max-width: 180px;
  display: flex;
  height: auto;
  align-items: center;
  padding: 10px 8px 10px 10px;
  border-radius: 20px 0px 20px 20px;
  background: #ff6969;

  color: #ffffff;
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

  gap: 5px; //나중에 지우기
`;

export const ReadText = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  /* height: 100%; */
`;
