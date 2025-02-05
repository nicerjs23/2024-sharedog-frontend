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
  margin-bottom: 60px;
  background: #FAFAFC;
`;

export const Header = styled.div`
  display: flex;
  width: 375px;
  height: 50px;
  flex-shrink: 0;
  box-shadow: 0px 6px 14px 0px rgba(47, 47, 47, 0.04);
  align-items: center;
  justify-content: center;
  gap: 86px;
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
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

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
  align-items: flex-start;
  gap: 17px;
  align-self: stretch;
`;

export const CateBox = styled.div`
  display: flex;
  width: 312px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const CateBtn = styled.div`
  display: flex;
  width: 74px;
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
`;

export const Line = styled.div`
  width: 290px;
  height: 1.018px;
  background: #EEE;
`;

export const Region = styled.div`

`;

export const RegionBox = styled.div`

`;

export const RegionBtn = styled.div`

`;

export const Blood = styled.div`

`;

export const BloodBox = styled.div`

`;

export const BloodBtn = styled.div`

`;

export const Caution = styled.div`

`;

export const WriteTitle = styled.div`

`;

export const TitlePlace = styled.div`

`;

export const WriteMain = styled.div`

`;

export const MainPlace = styled.div`

`;

export const ImageContainer = styled.div`

`;

export const Explain = styled.div`

`;

export const Image = styled.img`

`;
