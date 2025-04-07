// ReservationCard.styled.js
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

export const DateSection = styled.section`
  width: 80%;
  display: flex;
  height: 15px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  margin-bottom: 20px;

  color: var(--Text, #2a2a2a);
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: 160%; /* 24px */
`;

export const CardSection = styled.section`
  display: flex;
  padding: 21px 0px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 15px;
  border: 1px solid #eee;
  background: #fffafa;
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

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const NameText = styled.div`
  color: var(--Text, #2a2a2a);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 214.286% */
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: 20px;
`;

export const Progress = styled.div`
  margin-right: 20px;

  display: flex;
  padding: 5.742px 12.005px;
  justify-content: center;
  align-items: center;
  gap: 4.176px;
  flex-shrink: 0;

  border-radius: 15.659px;
  background: ${({ $isPast }) => ($isPast ? '#FF6969' : '#FFECEC')};
  color: ${({ $isPast }) =>
    $isPast ? '#FFF' : 'var(--Red-Red04, #FF6969)'};
  text-align: center;
  font-family: SUIT;
  font-size: 10.526px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Line = styled.div`
  background: #eeeeee;
  width: 100%;
  height: 1px;
  margin-top: 14px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-top: 15px;
  align-self: stretch;
  margin-left: 20px;
  margin-right: 20px;

  color: #2a2a2a;
  text-align: right;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 19.2px */
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  color: #636366;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
`;
