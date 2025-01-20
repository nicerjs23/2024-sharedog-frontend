import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */
  position: fixed;

  /* top: 50%; */
  /* left: 50%; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Text = styled.section`
  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; 
`;

export const Wrapper = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 66px - 94px);
  margin-top: 66px;
  padding-bottom: 10px;
  box-sizing: border-box; /* 패딩 포함하여 크기 계산 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 33px;

  span {
    display: flex;
    height: 13px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;

    color: #FF6969;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 22.4px */
  };
`;

export const InputField = styled.input`
  display: flex;
  height: 51px;
  padding: 0px 13.5px;
  align-items: center;
  width: 98%;

  border-radius: 20px;
  border: 1px solid #E7E8EB;
  background: #FFF;

  ::placeholder {
    display: flex;
    color: #E7E8EB;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }

  &:focus {
    outline: none; /* 기본 포커스 외곽선 제거 */
    border: 1px solid #E7E8EB; /* 원하는 테두리 색상으로 변경 */
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center; /* 아이콘과 텍스트 수직 정렬 */
  gap: 5px;           /* 아이콘과 텍스트 간격 */

  span {
    color: #ff6969;     /* 에러 메시지 색상 */
    font-size: 14px;    /* 글자 크기 */
    font-family: SUIT; /* 폰트 설정 */
    font-weight: 500;   /* 글자 굵기 */
    line-height: 160%;  /* 줄 간격 */
    margin-top: 5px;    /* 입력 필드와 에러 메시지 간격 */
  }
`;