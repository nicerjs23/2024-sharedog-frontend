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
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
  user-select: none;
  cursor: pointer;
`;

export const Title = styled.div`
  flex: 4;
  display: flex;
  width: 84%;
  flex-direction: column;

  /* gap: 14px; */
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
export const TitleInfo = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 5;
`;
export const Logo = styled.img`
  display: flex;
  width: 110px;
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
  /* min-width: 300px; */
  height: 53px;
  border-radius: 50px;

  font-size: 16px;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};

  background-color: ${({ type }) =>
    type === "kakao"
      ? "#FFE812"
      : ({ theme }) => theme.colors.mainColor};
  color: ${({ type }) => (type === "kakao" ? "#000000" : "#ffffff")};
`;
export const Kakao = styled.img`
  display: flex;
  width: 23px;
  height: 23px;
  margin-right: 5px;
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
