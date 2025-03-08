import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요소를 양쪽 끝과 가운데 정렬 */
  margin-top: 30px;
  width: 100%;
  padding: 0 20px; /* 좌우 여백 추가 */

  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 1rem;
`;

export const InfoBox = styled.section`
  display: flex;
  width: 87%;
  padding: 19.197px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  gap: 26.876px;

  margin-top: 30px;

  border-radius: 12px;
  border: 1.159px solid rgba(234, 234, 234, 0.8);
  background: #fff;

  /* Card Shadow */
  box-shadow: 0px 8px 20px 0px rgba(154, 170, 207, 0.1);
`;

export const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11.518px;

  color: ${({ theme }) => theme.colors.gray03};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 0.75rem;
`;

export const CategoryDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 끝으로 배치 */

  color: #636366;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.875rem;
`;

export const NextIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 16px;
  height: 16px;
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
  /* height: 100px; */
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  border-radius: 14px;
  background: #fff;
  /* backdrop-filter: blur(11px); */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  text-align: center;

  padding-top: 16px;
  box-sizing: border-box;
  line-height: 22px; /* 137.5% */
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 1rem;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  /* 버튼 상단에 구분선 추가 */
  border-top: 0.5px solid rgba(60, 60, 67, 0.36);
`;

export const ModalButton = styled.button`
  flex: 1;
  height: 50px;
  color: #ff6969;
  text-align: center;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 1rem;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
  border: none;
  background: none;
  cursor: pointer;

  /* 첫 번째 버튼(취소 버튼) 오른쪽에 구분선 추가 */
  &:first-child {
    border-right: 0.5px solid rgba(60, 60, 67, 0.36);
  }
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
