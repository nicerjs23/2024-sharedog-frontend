import { Outlet } from "react-router-dom";
import styled from "styled-components";
import XButton from "@assets/icons/X.svg";
import LeftButton from "@assets/icons/Left.svg";

export const SignUpLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <img src={LeftButton} alt="백 버튼" />
        <img src={XButton} alt="X 버튼" />
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.section`
  display: flex;
  height: 50px;
  padding: 10px;
  /* flex-direction: column; */
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: #fff;
  justify-content: space-between;
  margin-bottom: 16px;
`;
