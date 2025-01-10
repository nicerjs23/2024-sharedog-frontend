import styled from "styled-components";

export const LastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */
  /* top: 50%; */
  /* left: 50%; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Text = styled.section`
  display: flex;
  height: 38px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin-top: 50px;
  margin-left: 30px;

  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 16.123px; /* 73.287% */
`;

export const LastText = styled.section`
  display: flex;
  height: 59px;
  width: 100%;
  margin-left: 30px;
  margin-top: 11px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: #FF6969;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 187.5% */
`;

export const LastImg = styled.div`
  display: flex;
  width: 256px;
  height: 268px;
  margin-top: 68px;
`;

