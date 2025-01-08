import styled from "styled-components";

// 공통 Wrapper
export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;
  position: fixed;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`;

// 텍스트 스타일
export const Text = styled.section`
  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; 
`;

// 입력 폼 공통 Wrapper
export const PetWrapper = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
`;

// 나이 컨테이너
export const AgeContainer = styled.section`
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
    line-height: 160%;
  };
`;

export const AgePlace = styled.input`
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
    line-height: 160%;
  }
`;

// 이름 컨테이너
export const NameContainer = styled.section`
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
    color: #8A8A8A;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  };
`;

export const NamePlace = styled.input`
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
    line-height: 160%;
  }
`;

export const WeightContainer = styled.section`
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
    color: #8A8A8A;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  };
`;

export const WeightPlace = styled.input`
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
    line-height: 160%;
  }
`;

export const GenderContainer = styled.section`
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
    color: #8A8A8A;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  };
`;

export const GenderSelect = styled.section`
  display: flex;
  gap: 20px;
  height: 48px;
`;

export const Check = styled.img`
  display: flex;
  width: 18px;
  height: 18px;
`;

export const WBtn = styled.section`
  display: flex;
  width: 142px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  border-radius: 15px;
  border: 1px solid #E7E8EB;
  background: rgba(249, 249, 251, 0.62);
`;

export const MBtn = styled.section`
  display: flex;
  width: 142px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  border-radius: 15px;
  border: 1px solid #E7E8EB;
  background: rgba(249, 249, 251, 0.62);
`;

export const GenText = styled.section`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  
  color: #BDBDBD;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

export const OpContainer = styled.section`
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
    line-height: 160%;
  };
`;

export const OpSelect = styled.section`
  display: flex;
  gap: 20px;
  height: 48px;
`;

export const OBtn = styled.section`
  display: flex;
  width: 142px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  border-radius: 15px;
  border: 1px solid #E7E8EB;
  background: rgba(249, 249, 251, 0.62);
`;

export const XBtn = styled.section`
  display: flex;
  width: 142px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  border-radius: 15px;
  border: 1px solid #E7E8EB;
  background: rgba(249, 249, 251, 0.62);
`;

export const OpText = styled.section`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  
  color: #BDBDBD;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;
