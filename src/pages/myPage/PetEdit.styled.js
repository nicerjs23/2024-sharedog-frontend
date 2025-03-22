import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 화면 높이에 맞게 설정 */
  overflow: hidden; /* 내부에서만 스크롤 되도록 제한 */
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
`;

export const Header = styled.section`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
`;

export const Cancel = styled.section`
  margin-left: 22px;
  color: #8a8a8a;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
`;

export const Save = styled.section`
  margin-right: 22px;
  color: #ff6969;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  object-fit: cover; /* 이미지 비율 유지 */
  object-position: center; /* 중앙 정렬 */
`;

export const Camera = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #e7e8eb;
  background: #fff;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ScrollableContent = styled.div`
  margin-bottom: 98px;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  align-items: center;
  padding: 20px 0;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 80%;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 700;
  color: #8a8a8a;
`;

export const DetailBox = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: 15px 0;
`;

export const CheckBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const YesCheckBox = styled.div`
  display: flex;
  width: 202px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid
    ${({ selected }) => (selected ? '#FFC5C5' : '#E7E8EB')};
  background: ${({ selected }) => (selected ? '#FFD7D7' : '#F9F9FB')};
  color: ${({ selected }) => (selected ? '#FF6969' : '#BDBDBD')};
  cursor: pointer;
`;

export const NoCheckBox = styled.div`
  display: flex;
  width: 202px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid
    ${({ selected }) => (selected ? '#FFC5C5' : '#E7E8EB')};
  background: ${({ selected }) => (selected ? '#FFD7D7' : '#F9F9FB')};
  color: ${({ selected }) => (selected ? '#FF6969' : '#BDBDBD')};
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 51px;
  padding: 0 13px;
  border: 1px solid #e7e8eb;
  border-radius: 20px;
  background: #fff;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
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
  border: 1px solid #e7e8eb;
  background: #fff;
`;

export const BloodSelect = styled.div`
  display: flex;
  height: 14px;
  flex-direction: column;
  justify-content: center;
  color: #202020;
  font-size: 1rem;
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
  border-top: 1px solid #e7e8eb;
  border-right: 1px solid #e7e8eb;
  border-left: 1px solid #e7e8eb;
  border-bottom: 1px solid #e7e8eb;
  background: #fff;
`;

export const DropdownItem = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 182px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid #e7e8eb;
  border-right: 1px solid #e7e8eb;
  border-left: 1px solid #e7e8eb;
  border-bottom: 1px solid #e7e8eb;
  background: #fff;

  color: #2a2a2a;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #ff6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-right: 1px solid #e7e8eb;
    border-left: 1px solid #e7e8eb;
    background: rgba(255, 215, 215, 0.6);
  }
`;

export const DropdownItemTop = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 80px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid #e7e8eb;
  border-right: 1px solid #e7e8eb;
  border-left: 1px solid #e7e8eb;
  border-bottom: 1px solid #e7e8eb;
  background: #fff;

  color: #2a2a2a;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #ff6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-radius: 15px 15px 0px 0px;
    border-right: 1px solid #e7e8eb;
    border-left: 1px solid #e7e8eb;
    background: rgba(255, 215, 215, 0.6);
  }
`;

export const DropdownItemBottom = styled.div`
  display: flex;
  height: 52px;
  padding: 0px 182px 0px 32px;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px 20px 20px;
  border-top: 1px solid #e7e8eb;
  border-right: 1px solid #e7e8eb;
  border-left: 1px solid #e7e8eb;
  border-bottom: 1px solid #e7e8eb;
  background: #fff;
  cursor: pointer;

  color: #2a2a2a;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:hover {
    color: #ff6969;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */

    height: 52px;
    border-radius: 0px 0px 20px 20px;
    border-right: 1px solid #e7e8eb;
    border-left: 1px solid #e7e8eb;
    background: rgba(255, 215, 215, 0.6);
  }
`;

export const DynamicSpan = styled.div`
  display: flex;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: ${(props) =>
    props.active ? '#FF6969' : '#8A8A8A'}; /* 색상 조건 추가 */
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;
