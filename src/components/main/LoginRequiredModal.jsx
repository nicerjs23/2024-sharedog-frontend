import styled from 'styled-components';
import X from '@assets/icons/X.svg';
const LoginRequiredModal = ({ isOpen, onClose, onLogin }) => {
  //console.log('Modal isOpen 상태:', isOpen);
  if (!isOpen) return null; // ✅ isOpen이 false면 모달을 렌더링하지 않음
  //   onClick={onClose} onClick={onLogin} onClick={onClose}
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContents>
          <ModalClose>
            <img src={X} alt="x" onClick={onClose} />
          </ModalClose>
          <ModalBody>
            <ModalTitle>
              로그인하시면
              <br />
              다양한 나눠주개 서비스를 이용하실 수 있어요!
            </ModalTitle>
            <ModalText>1분이면 충분해요.</ModalText>
            <ModalBtnBox>
              <ModalBtn onClick={onLogin}>로그인</ModalBtn>
              <ModalSkip onClick={onClose}>다음에 하기</ModalSkip>
            </ModalBtnBox>
          </ModalBody>
          <div style={{ height: '50px', maxHeight: '50px' }} />
        </ModalContents>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default LoginRequiredModal;

// ✅ 모달 배경
const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

// ✅ 모달 컨테이너 (하단에서 올라오는 형태)
const ModalContainer = styled.div`
  width: 100%;
  flex-direction: column;
  height: calc(100% - 430px);
  min-height: 2px;
  max-width: 540px; /* MainWrapper와 동일한 최대 너비 */
  margin: 0 auto;
  background-color: white;
  border-radius: 20px 20px 0 0;

  position: relative;
  animation: slideUp 0.3s ease-out;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.1);
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 21px;
  box-sizing: border-box;
  gap: 36px;
  height: 100%;
  /* justify-content: space-between; */
  @media screen and (max-height: 700px) {
    gap: 10px;
  }
`;
// ✅ 닫기 버튼 (X)
const ModalClose = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;

  img {
    cursor: pointer;
    width: 30px;
    height: auto;
  }

  @media screen and (max-height: 700px) {
    margin-top: 5px;
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  gap: 19px;
  @media screen and (max-height: 700px) {
    gap: 10px;
  }
`;

// ✅ 모달 제목
const ModalTitle = styled.p`
  display: flex;
  width: 100%;
  color: #2a2a2a;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
`;

// ✅ 모달 본문 텍스트
const ModalText = styled.p`
  color: #bdbdbd;
  font-size: 15px;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;

const ModalBtnBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
// ✅ 로그인 버튼
const ModalBtn = styled.button`
  width: 100%;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 15px;
  border-radius: 20px;
  cursor: pointer;
`;

// ✅ '다음에 하기' 버튼
const ModalSkip = styled.p`
  margin-top: 14px;
  color: #8a8a8a;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 13px;
  cursor: pointer;
`;
