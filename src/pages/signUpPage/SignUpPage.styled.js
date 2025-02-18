import styled from "styled-components";

// 공통 Wrapper
export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 화면 전체 높이 */
  align-items: center;
  overflow: hidden;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`;

// 텍스트 스타일
export const Text = styled.section`
  width: 100%;
  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; 
  position: sticky; /* 스크롤 시 상단 고정 */
  top: 0; /* 화면의 최상단에 고정 */
  background: #FAFAFC; /* 고정된 영역 배경색 */
  z-index: 10; /* 다른 요소 위로 배치 */
`;

// 입력 폼 공통 Wrapper
export const PetWrapper = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 66px - 94px);
  margin-top: 66px;
  padding-bottom: 10px;
  box-sizing: border-box; /* 패딩 포함하여 크기 계산 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

// 나이 컨테이너
export const AgeContainer = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 33px;
`;

export const AgePlace = styled.input`
  display: flex;
  height: 51px;
  padding: 0px 153px 0px 13.5px;
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

  &:focus {
    outline: none; /* 기본 포커스 외곽선 제거 */
    border: 1px solid #E7E8EB; /* 원하는 테두리 색상으로 변경 */
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
  padding: 0px 153px 0px 13.5px;
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

  &:focus {
    outline: none; /* 기본 포커스 외곽선 제거 */
    border: 1px solid #E7E8EB; /* 원하는 테두리 색상으로 변경 */
  }
`;

export const WeightContainer = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 33px;
`;

export const WeightPlace = styled.input`
  display: flex;
  height: 51px;
  padding: 0px 155px 0px 13.5px;
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

export const BloodContainer = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 33px;
`;

export const BloodWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  padding: 16px 16px 15px 19px;
  justify-content: space-between;
  align-items: center;
  gap: auto;
  border-radius: 20px;
  border: 1px solid #E7E8EB;
  background: #FFF;
`;

export const BloodSelect = styled.input`
  display: flex;
  width: 74px;
  height: 14px;
  flex-direction: column;
  justify-content: center;
  color: #E7E8EB;
  font-family: SUIT;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 304px;
  height: 416px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px 20px 20px 20px;
  border-top: 1px solid #E7E8EB;
  border-right: 1px solid #E7E8EB;
  border-left: 1px solid #E7E8EB;
  border-bottom: 1px solid #E7E8EB;
  background: #FFF;
`;

export const DropdownItem = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 182px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid #E7E8EB;
  border-right: 1px solid #E7E8EB;
  border-left: 1px solid #E7E8EB;
  border-bottom: 1px solid #E7E8EB;
  background: #FFF;

  color: #2A2A2A;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #FF6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-right: 1px solid #E7E8EB;
    border-left: 1px solid #E7E8EB;
    background: rgba(255, 215, 215, 0.60);
  }
`;

export const DropdownItemTop = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 80px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid #E7E8EB;
  border-right: 1px solid #E7E8EB;
  border-left: 1px solid #E7E8EB;
  border-bottom: 1px solid #E7E8EB;
  background: #FFF;

  color: #2A2A2A;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #FF6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-radius: 15px 15px 0px 0px;
    border-right: 1px solid #E7E8EB;
    border-left: 1px solid #E7E8EB;
    background: rgba(255, 215, 215, 0.60);
  }
`;

export const DropdownItemBottom = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 182px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px 20px 20px;
  border-top: 1px solid #E7E8EB;
  border-right: 1px solid #E7E8EB;
  border-left: 1px solid #E7E8EB;
  border-bottom: 1px solid #E7E8EB;
  background: #FFF;
  cursor: pointer;

  color: #2A2A2A;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #FF6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-radius: 0px 0px 20px 20px;
    border-right: 1px solid #E7E8EB;
    border-left: 1px solid #E7E8EB;
    background: rgba(255, 215, 215, 0.60);
  }
`;

export const DynamicSpan = styled.span`
  display: flex;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: ${(props) => (props.active ? '#FF6969' : '#8A8A8A')}; /* 색상 조건 추가 */
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수직 중앙 정렬 */
  gap: 8px;           /* 아이콘과 텍스트 간 간격 */
  color: #FF6969;     /* 에러 메시지 색상 */
  font-size: 14px;    /* 텍스트 크기 */
  font-family: SUIT, sans-serif;
  font-weight: 500;
  line-height: 160%;
  margin-top: 5px;    /* 입력 필드와 에러 메시지 간격 */
`;