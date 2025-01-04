import * as S from "./WelcomePage.styled";
import Logo from "@assets/icons/Logo.svg";
import KakaoLogo from "@assets/icons/kakao.svg";
import { Link } from "react-router-dom";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
export const WelcomePage = () => {
  const { goTo } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.Header onClick={() => goTo("/main")}>둘러보기</S.Header>
      <S.Title>
        나눠주개
        <S.TitleInfo>반려견 헌혈 및 수혈까지 편리하게!</S.TitleInfo>
      </S.Title>
      <S.LogoWrapper>
        <S.Logo src={Logo} alt="나눠주개 로고" />
      </S.LogoWrapper>

      <S.BtnWrapper>
        <S.Btn onClick={() => goTo("/main")} type="kakao">
          <S.Kakao src={KakaoLogo} alt="카카오 로고" />
          카카오로 로그인하기
        </S.Btn>
        <S.Btn onClick={() => goTo("/login")} type="email">
          이메일로 로그인하기
        </S.Btn>
        <S.SignUp>
          아직 회원이 아니신가요?
          <S.SignUpLink to="/main">회원가입하기</S.SignUpLink>
        </S.SignUp>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};
