import styled from 'styled-components';

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

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const NameBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80%;
  height: 88px;
  padding: 19px 130px 18px 17px;
  margin-top: 26px;

  border-radius: 11.587px;
  border: 1.159px solid rgba(234, 234, 234, 0.8);
  background: #fff;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-right: 12px; /* 이미지와 텍스트 사이 간격 조정 */
  flex-shrink: 0;

  border-radius: 50%;
  overflow: hidden; /* 이미지가 둥근 모양에 맞게 잘리도록 설정 */
  background: lightgray; /* 백업 색상 */
`;

export const NameText = styled.div`
  font-size: 18px;

  line-height: 1; /* 텍스트가 정렬되지 않는 경우 조정 */
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
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
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 11.518px;

  line-height: 100%; /* 11.518px */
`;

export const CategoryDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 끝으로 배치 */

  color: var(--Grayscale-Gray600, #333d4b);
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 13.438px;
  line-height: 160%; /* 21.5px */
  letter-spacing: -0.269px;
`;

export const NextIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  width: 15.357px;
  height: 15.357px;
`;

export const Contents = styled.div`
  border: 1px solid blue;
  display: flex;
  width: 88%;
  flex-direction: column;
`;
export const ProfileCard = styled.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(234, 234, 234, 0.8);
  background: #fff;
  height: 88px;
`;
