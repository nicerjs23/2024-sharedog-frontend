import { Outlet, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const BackClick = () => {
    navigate(-1);
  }
  const XClick = () => {
    navigate("/");
  }

  return (
    <>
      <HeaderWrapper>
        <img src={LeftButton} alt="백 버튼" onClick={BackClick}/>
        <img src={XButton} alt="X 버튼" onClick={XClick}/>
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
  background: #FAFAFC;
  justify-content: space-between;
  margin-bottom: 16px;

  img {
    cursor: pointer;
  }
`;
