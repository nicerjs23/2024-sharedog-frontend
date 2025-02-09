import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 화면 높이에 맞게 설정 */
  overflow: hidden; /* 내부에서만 스크롤 되도록 제한 */
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
`;

export const Header = styled.section`
  display: flex;
  margin-top: 30px;
  width: 100%;

  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`;

export const ReservationList = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  margin-top: 20px;
`;

export const BackButton = styled.div`
  align-items: stretch;
  width: 11px;
  height: 17px;
  margin-left: 20px;
`;

export const Blank = styled.div`
  width: 11px;
  height: 17px;
`;
