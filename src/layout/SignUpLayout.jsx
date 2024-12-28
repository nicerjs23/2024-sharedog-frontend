import { Outlet } from "react-router-dom";
import styled from "styled-components";
import XButton from "@assets/icons/X.svg";
import LeftButton from "@assets/icons/Left.svg";

export const SignUpLayout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 540px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: calc(var(--vh, 1vh) * 100);
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <img src={LeftButton} alt="백 버튼"/>
        <img src={XButton} alt="X 버튼" />
      </HeaderWrapper>
    </>
  )
};

const HeaderWrapper = styled.section`
  display: flex;
  height: 50px;
  padding: 10px;
  /* flex-direction: column; */
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: #FFF;
  justify-content: space-between;
`;
