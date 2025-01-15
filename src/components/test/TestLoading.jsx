import styled, { keyframes } from "styled-components";

const TestLoading = () => {
  return (
    <Wrapper>
      <LoadingBox>
        <Spinner>
          <SpinnerCircle />
        </Spinner>
        <TextBox>
          <Title>
            <span>테스트 결과</span>를 불러오고 있어요!
          </Title>
          <SubText>잠시만 기다려주세요!</SubText>
        </TextBox>
      </LoadingBox>
    </Wrapper>
  );
};

export default TestLoading;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Wrapper = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: calc(var(--vh, 1vh) * 100);
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 90px;
`;

// 스피너 컨테이너
export const Spinner = styled.div`
  position: relative;
  width: 94px;
  height: 94px;
`;

// 원형 스피너
export const SpinnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #ff6969 0%,
    #f7d5d5 77%,
    #fff7f7 100%
  );
  mask: radial-gradient(circle, transparent 58%, white 59%);
  -webkit-mask: radial-gradient(circle, transparent 55%, white 56%);
  animation: ${spin} 1.5s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0; /* 스피너 끝에 맞추기 위해 조정 */
    left: 50%;
    transform: translate(-50%, 0); /* 정확한 위치 조정 */
    width: 10px;
    height: 10px;
    background-color: #ff6969;
    border-radius: 50%;
    z-index: 10; /* 원형 포인터가 위로 올라오도록 설정 */
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  color: #000000;
  span {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
export const SubText = styled.div`
  display: flex;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  color: ${({ theme }) => theme.colors.gray01};
`;
