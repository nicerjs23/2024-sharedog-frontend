import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  /* min-height: 700px; */
  max-width: 540px;

  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */
  /* position: fixed; */
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  width: 89.33%;
  justify-content: flex-end;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const TitleInfo = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  margin-left: 70px;
`;
export const InputBox = styled.input`
  display: flex;
  height: 51px;
  width: 85.33%;
  padding: 0px 218px 0px 13px;
  align-items: center;

  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.$isError ? "#ff6969" : "#e7e8eb")};
  background: #fff;

  &::placeholder {
    color: #dcdcdc;
    opacity: 1;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    border: 1px solid
      ${(props) => (props.$isError ? "#ff6969" : "#e7e8eb")};
    outline: none;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex: 3.46;
`;
export const Logo = styled.img`
  display: flex;
  width: 85px;
  height: auto;
`;

export const BtnWrapper = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85.33%;
  height: 53px;
  border-radius: 50px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold};

  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #ffffff;
`;

export const SignUp = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  justify-content: center;

  font-size: 12px;
  color: #2a2a2a;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`;

export const SignUpLink = styled(Link)`
  display: flex;
  margin-left: 7px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
