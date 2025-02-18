import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  /* position: fixed; */

  top: 50%;

  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요소를 양쪽 끝과 가운데 정렬 */
  margin-top: 30px;
  width: 100%;
  padding: 0 20px; /* 좌우 여백 추가 */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const InfoBox = styled.section`
  display: flex;
  width: 80%;
  padding: 19.197px;
  flex-direction: column;
  justify-content: center;
  gap: 26.876px;

  margin-top: 19px;

  border-radius: 11.587px;
  border: 1.159px solid rgba(234, 234, 234, 0.8);
  background: #fff;
`;

export const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11.518px;

  color: var(--Grayscale-Gray400, #8490a0);
  font-family: SUIT;
  font-size: 11.518px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 11.518px */
`;

export const CategoryDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 끝으로 배치 */

  color: var(--Gray-Gray02, #636366);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.28px;
`;

export const NextIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 15.357px;
  height: 15.357px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  display: flex;
  width: 273px;
  height: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #fff;
  backdrop-filter: blur(11px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  color: var(--Label-Color-Light-Primary, #000);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  flex: 1;
  color: #ff6969;
  text-align: center;
  font-feature-settings: "case" on;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const MailText = styled.div`
  width: 126px;
  flex-shrink: 0;

  color: var(--Gray-Gray01, #9c9ca1);
  text-align: right;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 21.6px */
  letter-spacing: -0.24px;
`;

export const BackButton = styled.div`
  display: flex;
  width: 11px;
  height: 17px;
  margin-left: 20px;
`;

export const Blank = styled.div`
  display: flex;
  width: 11px;
  height: 17px;
`;
