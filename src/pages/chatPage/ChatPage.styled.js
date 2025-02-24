import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  width: 88%;
  min-width: 330px;

  margin-bottom: 98px;
`;
export const ChatHeader = styled.div`
  width: 100%;
  /* justify-content: flex-start; */
  color: #000000;
  font-size: 1.375rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin-top: 24px;
  margin-bottom: 5px;
`;
