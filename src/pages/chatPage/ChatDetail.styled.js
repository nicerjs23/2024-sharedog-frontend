import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-bottom: 98px;
  box-sizing: border-box;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  min-width: 300px;
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const BackIcon = styled.img`
  height: 17px;
  width: auto;
  margin-right: 55.94px;
`;

export const HeaderName = styled.p`
  color: #000000;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const HeaderPromise = styled.div`
  color: #ff6969;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const Date = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: rgba(156, 156, 161, 0.7);
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};

  margin-bottom: 5px;
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;
