import styled from "styled-components";

export const Wrapper = styled.section`
  /* 테스트페이지는 배경색달라서 디폴트레이아웃 코드 배경색만바꿔서 그대로씀 -테스트페이지만 배경색다르니 굳이 props처리안하고 코드반복함   */
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.testBgColor};
  min-height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;

  /* position: fixed; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
`;

export const XBtn = styled.button`
  display: flex;
`;
