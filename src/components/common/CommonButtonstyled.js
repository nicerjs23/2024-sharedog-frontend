import { styled } from "styled-components";

export const commonButton = styled.section`
  display: flex;
  width: 332px;
  height: 52px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  margin-bottom: 42px;
  position: fixed;
  bottom: 0%;
  background-color: ${(props) => props.bgColor || "#FF6969"};
  cursor: pointer;
  border-radius: 1550px;
  z-index: 10; /* 버튼을 위로 올림 */
`;

export const BtnBack = styled.div`
  display: flex;
  width: 332px;
  height: 52px;
  position: fixed;
  bottom: 0; /* 화면 하단에 고정 */
  justify-content: center;
  background-color: #FFFFFF;
  z-index: 5; /* 버튼보다 낮은 z-index */
`;

export const buttonText = styled.p`
  color: #FFF;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  width: fit-content
`;

