import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  top: 50%;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
  /* margin-bottom: 60px; */
  background: #FAFAFC;
`;

export const Container = styled.div`
  margin: 41px 25px 25px 32px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  /* box-shadow: 0px 6px 14px 0px rgba(47, 47, 47, 0.04); */
  align-items: center;
  justify-content: center;
  gap: 86px;
  margin-bottom: 9px;
`;

export const Cancel = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: rgba(156, 156, 161, 0.50);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */

  cursor: pointer;
`;

export const Write = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 187.5% */

  cursor: pointer;
`;

export const Upload = styled.div`
  display: flex;
  width: 50px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: ${(props) => (props.isFormComplete ? "#FF6969" : "rgba(156, 156, 161, 0.50)")};
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */

  cursor: ${(props) => (props.isFormComplete ? "pointer" : "default")};
`;

export const Title = styled.div`
  display: flex;
  height: 24px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 214.286% */
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  align-self: stretch;
  /* margin: 9px 32px 0 32px; */
`;

export const CateBox = styled.div`
  display: grid;
  width: 100%;
  align-items: flex-start;
  grid-template-columns: repeat(2, 74px); // 2개의 열 생성
  gap: 14px;
`;

export const CateBtn = styled.div`
  display: flex;
  width: auto; /* 텍스트 길이에 맞게 조정 */
  min-width: 74px; /* 최소 너비 유지 */
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 20.043px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#FF6969" : "rgba(156, 156, 161, 0.70)")};
  background: ${({ isSelected }) => (isSelected ? "#FF6969" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "rgba(156, 156, 161, 0.70)")};
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1.018px;
  background: #EEE;
  margin-top: 8px;
  margin-bottom: 25px;
`;

export const Region = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  align-self: stretch;
  /* margin: 9px 32px 0 32px; */
`;

export const RegionBox = styled.div`
  display: grid;
  align-items: flex-start;
  width: 100%;
  gap: 14px;
  grid-template-columns: repeat(5, 50px); 
`;

export const RegionBtn = styled.div`
  display: flex;
  width: auto; /* 텍스트 길이에 맞게 조정 */
  min-width: 50px; /* 최소 너비 유지 */
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 15px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#FF6969" : "rgba(156, 156, 161, 0.70)")};
  background: ${({ isSelected }) => (isSelected ? "#FF6969" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "rgba(156, 156, 161, 0.70)")};
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
  cursor: pointer;
`;

export const Blood = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 17px;
  /* margin: 9px 32px 0 32px; */
`;

export const BloodBox = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 14px;
  grid-template-columns: repeat(3, 74px); 
  width: 100%;
`;

export const BloodBtn = styled.div`
  display: flex;
  width: auto;
  min-width: 74px;
  height: 32px;
  padding: 7.349px 21.38px;
  justify-content: center;
  align-items: center;
  gap: 5.345px;
  flex-shrink: 0;

  border-radius: 20.043px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#FF6969" : "rgba(156, 156, 161, 0.70)")};
  background: ${({ isSelected }) => (isSelected ? "#FF6969" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "rgba(156, 156, 161, 0.70)")};
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
  cursor: pointer;
`;

export const Caution = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 12px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin-bottom: 25px;

  border-radius: 5px;
  background: #FFECEC;  

  color: #FF6969;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.24px;

  span {
    display: flex;
    text-align: center;
  }

  .img{
    width: 18px;
    height: 18px;
  }
`;

export const WriteTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
`;

export const TitlePlace = styled.textarea`
  display: flex;
  height: 40px;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 29px 0px 14px;
  margin-bottom: 19px;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #EFF1F3;
  background: var(--Grayscale-White, #FFF);

  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  resize: none;
  overflow: hidden;

  &::placeholder {
    color: #9C9CA1;
  }

  &:focus {
    outline: none; /* 기본 아웃라인 제거 */
    border: 1px solid #EFF1F3; /* 기존 테두리 유지 */
  }
`;

export const WriteMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const MainPlace = styled.textarea`
  display: flex;
  height: 164px;
  padding: 11px 29px 113px 14px;
  align-items: center;
  align-self: stretch;
  margin-bottom: 19px;
  border-radius: 12px;
  border: 1px solid var(--Grayscale-Gray200, #EFF1F3);
  background: var(--Grayscale-White, #FFF);

  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 125% */

  resize: none;
  overflow: hidden;

  &::placeholder {
    color: #9C9CA1;
  }

  &:focus {
    outline: none; /* 기본 아웃라인 제거 */
    border: 1px solid #EFF1F3; /* 기존 테두리 유지 */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
`;

export const Explain = styled.div`
  align-self: stretch;
  color: var(--Gray-Gray01, #9C9CA1);
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Image = styled.div`
  margin-top: 4px;
  .img{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }
`;

export const ImageList = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: #FFECEC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  img {
    width: 80px;
    height: 80px;
  }

  span {
    font-size: 12px;
    color: #FF6969;
    margin-top: 5px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 237.72px;
  flex-direction: column;
  align-items: center;

  border-radius: 12.326px;
  background: #FFF;
  backdrop-filter: blur(9.684893608093262px);
`;

export const ModalText = styled.div`
  display: flex;
  padding: 21.131px 14.087px 14.087px 14.087px;
  flex-direction: column;
  align-items: center;
  gap: 14.087px;
  align-self: stretch;

  border-bottom: 0.44px solid var(--Separator-Color-Light-With-Transparency, rgba(60, 60, 67, 0.36));

  span{
    color: var(--Label-Color-Light-Primary, #000);
    text-align: center;
    font-feature-settings: 'case' on;
    font-family: SUIT;
    font-size: 14.968px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.37px; /* 129.412% */
    letter-spacing: -0.359px;
  } 
`;

export const ModalButton = styled.button`
  display: flex;
  padding: 9.685px 7.044px;
  justify-content: center;
  align-items: center;
  gap: 8.804px;
  align-self: stretch;
  /* flex: 1 0 0; */
  color: #FF6969;
  text-align: center;
  font-feature-settings: 'case' on;
  font-family: SUIT;
  font-size: 14.968px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.37px; /* 129.412% */
  letter-spacing: -0.359px;
`;
