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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 35px;
`

export const Text = styled.div`
  display: flex;
  width : 100%;
  margin-bottom: 11px;
  margin-top: 50px;
  align-items: flex-start;

  span {
    color: #2A2A2A;
    font-family: SUIT;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 16px; 
  }
`;

export const LastText = styled.div`
  display: flex;
  width : 100%;
  height: 59px;
  align-items: flex-start;

  span {
    color: #FF6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 187.5% */
  }
`;

export const LastImg = styled.div`
  display: flex;
  margin-top: 68px;
  img {
    width: 256px;
    height: 268px;
  }
`;

