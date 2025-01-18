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

export const LaterButton = styled.div`
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
  cursor: pointer;

  span {
    color: #FF6969;
    font-family: SUIT;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); // 배경 뿌옇게
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 창
export const Modal = styled.div`
  display: flex;
  width: 273px;
  height: 98px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: #FFF;
  backdrop-filter: blur(11px);
`;

export const ModalTitle = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-bottom: 0.5px solid var(--Separator-Color-Light-With-Transparency, rgba(60, 60, 67, 0.36));
  
  span {
    color: var(--Label-Color-Light-Primary, #000);
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.408px;
  }
`;

// 모달 버튼 컨테이너
export const ModalButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  /* margin-top: 20px; */
`;

export const NoBtn = styled.div`
  display: flex;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
  /* flex: 1 0 0; */
  align-self: stretch;
  border-right: 0.5px solid var(--Separator-Color-Light-With-Transparency, rgba(60, 60, 67, 0.36));

  color: #FF6969;
  text-align: center;
  font-feature-settings: 'case' on;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

export const YesBtn = styled.div`
  display: flex;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
  /* flex: 1 0 0; */
  align-self: stretch;
  align-items: flex-start;

  color: #FF6969;
  text-align: center;
  font-feature-settings: 'case' on;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;