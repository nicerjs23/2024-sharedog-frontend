import React, { useState } from "react";
import * as S from "./LoginPage.styled";
import Logo from "@assets/icons/Logo.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setIsError(true); // 에러 상태 설정
      return; // 메인으로 이동하지 않음
    }
    goTo("/main"); // 모든 입력값이 유효하면 이동
  };

  return (
    <S.Wrapper>
      <S.Header onClick={() => goTo("/main")}>둘러보기</S.Header>
      <S.LogoWrapper>
        <S.Logo src={Logo} alt="나눠주개 로고" />
      </S.LogoWrapper>

      <S.BtnWrapper>
        <S.TitleInfo>이메일</S.TitleInfo>
        <S.InputBox
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isError={isError && !email} // 에러 상태 전달
        />
        <S.TitleInfo>비밀번호</S.TitleInfo>
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isError={isError && !password} // 에러 상태 전달
        />
        <S.Btn onClick={handleLogin}>로그인</S.Btn>
        {/* <S.SignUp>
          아직 회원이 아니에요.
          <S.SignUpLink to="/main">회원가입하기</S.SignUpLink>
        </S.SignUp> */}
      </S.BtnWrapper>
    </S.Wrapper>
  );
};
