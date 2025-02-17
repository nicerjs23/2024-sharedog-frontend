import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  top: 50%;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
  /* margin-bottom: 60px; */
  background: #FAFAFC;
`;

export const Container = styled.div`
  margin: 41px 25px 25px 32px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  /* box-shadow: 0px 6px 14px 0px rgba(47, 47, 47, 0.04); */
  align-items: center;
  justify-content: center;
  gap: 86px;
  margin-bottom: 9px;
`;

export const Cancel = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: rgba(156, 156, 161, 0.50);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */
`;

export const Write = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 187.5% */
`;

export const Upload = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: rgba(156, 156, 161, 0.50);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */
`;

export const Title = styled.div`
  display: flex;
  height: 24px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 214.286% */
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  align-self: stretch;
  /* margin: 9px 32px 0 32px; */
`;

export const CateBox = styled.div`
  display: grid;
  width: 100%;
  align-items: flex-start;
  grid-template-columns: repeat(2, 74px); // 2개의 열 생성
  gap: 14px;
`;

export const CateBtn = styled.div`
  display: flex;
  width: auto; /* 텍스트 길이에 맞게 조정 */
  min-width: 74px; /* 최소 너비 유지 */
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 20.043px;
  border: 1px solid rgba(156, 156, 161, 0.70);

  color: rgba(156, 156, 161, 0.70);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
`;

export const Line = styled.div`
  width: 100%;
  height: 1.018px;
  background: #EEE;
  margin-top: 8px;
  margin-bottom: 25px;
`;

export const Region = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  align-self: stretch;
  /* margin: 9px 32px 0 32px; */
`;

export const RegionBox = styled.div`
  display: grid;
  align-items: flex-start;
  width: 100%;
  gap: 14px;
  grid-template-columns: repeat(5, 50px); 
`;

export const RegionBtn = styled.div`
  display: flex;
  width: auto; /* 텍스트 길이에 맞게 조정 */
  min-width: 50px; /* 최소 너비 유지 */
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 15px;
  border: 0.842px solid rgba(156, 156, 161, 0.70);
  /* background: #FFF; */

  color: rgba(156, 156, 161, 0.70);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
`;

export const Blood = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 17px;
  /* margin: 9px 32px 0 32px; */
`;

export const BloodBox = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 14px;
  grid-template-columns: repeat(3, 74px); 
  width: 100%;
`;

export const BloodBtn = styled.div`
  display: flex;
  width: auto;
  min-width: 74px;
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 20.043px;
  border: 1px solid rgba(156, 156, 161, 0.70);

  color: rgba(156, 156, 161, 0.70);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
`;

export const Caution = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 12px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  margin-bottom: 25px;

  border-radius: 5px;
  background: #FFECEC;  

  color: #FF6969;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.24px;

  .img{
    width: 18px;
    height: 18px;
  }
`;

export const WriteTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
`;

export const TitlePlace = styled.input`
  display: flex;
  height: 40px;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 29px 0px 14px;
  margin-bottom: 19px;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #EFF1F3;
  background: var(--Grayscale-White, #FFF);

  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: #9C9CA1;
  }

  &:focus {
    outline: none; /* 기본 아웃라인 제거 */
    border: 1px solid #EFF1F3; /* 기존 테두리 유지 */
  }
`;

export const WriteMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const MainPlace = styled.input`
  display: flex;
  height: 164px;
  padding: 0px 29px 113px 14px;
  align-items: center;
  align-self: stretch;
  margin-bottom: 19px;
  border-radius: 12px;
  border: 1px solid var(--Grayscale-Gray200, #EFF1F3);
  background: var(--Grayscale-White, #FFF);

  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 125% */

  &::placeholder {
    color: #9C9CA1;
  }

  &:focus {
    outline: none; /* 기본 아웃라인 제거 */
    border: 1px solid #EFF1F3; /* 기존 테두리 유지 */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
`;

export const Explain = styled.div`
  align-self: stretch;
  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Image = styled.div`
  margin-top: 4px;
  .img{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }
`;
