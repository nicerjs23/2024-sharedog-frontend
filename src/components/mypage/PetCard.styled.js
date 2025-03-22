// PetCard.styled.js
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

export const Card = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #fffafa;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 20px;

  border-radius: 50%; /* 원형으로 만들기 */

  object-fit: cover; /* 이미지 비율 유지 */
  object-position: center; /* 중앙 정렬 */
`;

export const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const NameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%; /* 25.6px */
`;
/* 이름 텍스트만 감싸는 래퍼 - 줄바꿈 가능하도록 */
export const NameWrapper = styled.div`
  flex: 1;
  overflow-wrap: break-word;
  word-break: break-all;
`;
export const NameText = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const TitleImgDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleText = styled.div`
  color: #7c7f91;
  font-size: 14px;
`;

export const DetailText = styled.span`
  color: #2a2a2a;
  font-weight: 500;
`;

export const ProfileEdit = styled.span`
  display: flex;
  width: 76px;
  padding: 2px 4px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Grayscale-Gray100, #f6f7f8);

  color: var(--Grayscale-Gray400, #8490a0);
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 10px */
`;
