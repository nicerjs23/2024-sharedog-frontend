import styled from 'styled-components';
import { useCustomNavigate } from '@hooks/useCustomNavigate';
const PromiseCard = ({ day, time, place }) => {
  const { goTo, goBack } = useCustomNavigate();
  return (
    <Wrapper>
      <TextContainer>
        <Title>약속을 만들었어요.</Title>
        <Body>날짜: {day}</Body>
        <Body>시간: {time}</Body>
        <Body>장소: {place}</Body>
      </TextContainer>
      <PromiseBtn onClick={() => goTo('/mypage/reservation')}>
        약속 보기
      </PromiseBtn>
    </Wrapper>
  );
};

export default PromiseCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 185px;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1.5px solid #eaeaea;

  background: #fff;
`;

const TextContainer = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 14px;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
  font-size: 0.875rem;
`;
const Body = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 0.75rem;
`;

const PromiseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  background: #ffecec;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 0.75rem;
`;
