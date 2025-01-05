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

export const TextWrapper = styled.section`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const MainText = styled.section`
  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; 
`;

export const Text = styled.section`
  display: flex;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: #7C7F91;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 250% */
`;

export const ProWrapper = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 34px;
`;

export const ProImage = styled.img`
  display: flex;
  width: 114px;
  height: 110px;
  flex-shrink: 0;
`;

export const ProContainer = styled.section`
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

export const ProPlace = styled.input`
  display: flex;
  height: 51px;
  padding: 0px 161.5px 0px 13.5px;
  align-items: center;

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
`;

export const LaterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LaterButton = styled.section`
  display: flex;
  height: 36px;
  padding: 8px 13px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  background: #FFE8E8;
  width: auto;
  margin-top: 25px;

  span {
    color: #FF6969;
    font-family: SUIT;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
  }
`;
