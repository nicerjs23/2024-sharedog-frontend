import styled from 'styled-components';

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

  margin-top: 64px;
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  max-width: 540px;
  padding: 0 30px;
  box-sizing: border-box;
  top: 0; /* 최상단에 고정 */
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  z-index: 100; /* 다른 요소 위에 배치 */
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
    theme.fonts.SUITSemiBold['font-family']};
`;
export const HeaderPromise = styled.button`
  color: #ff6969;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;
export const Date = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: rgba(156, 156, 161, 0.7);
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};

  margin-bottom: 5px;
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;

//약속잡기 임시
export const PromiseWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.pageBgColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  margin-top: 20px;
`;

export const PromiseTitle = styled.div`
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Emoji = styled.span`
  font-size: 1.2rem;
`;

export const PromiseForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PromiseField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  position: relative;
`;

export const FieldLabel = styled.label`
  font-size: 0.9rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Required = styled.span`
  color: #ff3b30;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  flex: 1;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  background: #ff6969;
  color: #fff;
  padding: 12px;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #ff4d4d;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  width: 90%;
  max-width: 400px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
`;

export const ModalTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  width: 100%;
  background: #ddd;
  color: #333;
  padding: 12px;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #bbb;
  }
`;
