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
  margin-top: 10px;
  /* margin-bottom: 5px; */
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(isSender) =>
    isSender.isSender ? 'flex-end' : 'flex-start'};

  margin-top: 30px;
  gap: 10px;
`;

//약속잡기 모달
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
  width: 80%;
  max-width: 400px;
  background: white;
  border: 2px #eaeaea solid;
  border-radius: 20px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const ModalTitle = styled.h2`
  display: flex;
  font-size: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  gap: 8px;
  margin-top: 20px;
  img {
    width: 18px;
    height: auto;
  }
`;

//약속잡기 임시

export const PromiseForm = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  flex-direction: column;
  gap: 12px;
`;
export const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 14px;
  gap: 23px;

  background-color: #fffafa;
  border-radius: 6px;
`;
export const PromiseField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: relative;
`;

export const FieldLabel = styled.label`
  font-size: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  color: #32333f;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Required = styled.span`
  height: 15px;
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  color: #ff3b30;
  font-size: 6px;
  display: flex;
  vertical-align: top;
`;

export const Input = styled.input`
  width: 120px;
  text-align: right;
  padding-right: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  color: #7c7f91;
  font-size: 0.625rem;

  &::placeholder {
    font-family: ${({ theme }) =>
      theme.fonts.SUITMedium['font-family']};
    color: #7c7f91;
    font-size: 0.625rem;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

//약속잡기,취소 버튼
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;

  border-radius: 0 0 20px 20px;

  border-top: 1px solid rgba(60, 60, 67, 0.36);
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: #ff6969;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  border: none;
  border-right: 1px solid rgba(60, 60, 67, 0.36);
  &:hover {
    font-size: 0.9rem;
  }
`;
export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  color: #ff6969;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  border: none;

  &:hover {
    font-size: 0.9rem;
  }
`;
