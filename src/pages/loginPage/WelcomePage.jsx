import * as S from "./WelcomePage.styled";
import Logo from "@assets/icons/Logo.svg";
import KakaoLogo from "@assets/icons/kakao.svg";
import { Link } from "react-router-dom";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

import { useKakaoAuth } from "@hooks/useKakaoAuth"; // KakaoAuthProvider에서 제공하는 훅 가져오기
export const WelcomePage = () => {
  const { kakaoLogin } = useKakaoAuth(); // Kakao 로그인 함수 가져오기
  // 확인용 콘솔 로그 추가
  const handleKakaoLogin = () => {
    console.log("카카오 로그인 버튼 클릭됨"); // 확인 메시지
    kakaoLogin(); // 실제 카카오 로그인 함수 호출
  };

  const { goTo } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.Header onClick={() => goTo("/main")}>둘러보기</S.Header>
      <S.Title>
        나눠주개
        <S.TitleInfo>반려견 헌혈 정보 커뮤니티</S.TitleInfo>
      </S.Title>
      <S.LogoWrapper>
        <S.Logo src={Logo} alt="나눠주개 로고" />
      </S.LogoWrapper>

      <S.BtnWrapper>
        <S.Btn onClick={handleKakaoLogin} type="kakao">
          <S.Kakao src={KakaoLogo} alt="카카오 로고" />
          카카오로 로그인하기
        </S.Btn>
        {/* <S.Btn onClick={() => goTo('/login')} type="email">
          이메일로 로그인하기
        </S.Btn> */}
        {/* <S.SignUp>
          아직 회원이 아니신가요?
          <S.SignUpLink to="/signup">회원가입하기</S.SignUpLink>
        </S.SignUp> */}
      </S.BtnWrapper>
    </S.Wrapper>
  );
};
