import React, { useState } from "react";
import * as S from "./LoginPage.styled";
import Logo from "@assets/icons/Logo.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance";

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setIsError(true);
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axiosInstance.post("/api/accounts/login", {
        email,
        password,
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem("access", access_token);
      localStorage.setItem("refresh", refresh_token);

      console.log("로그인 성공:", response.data);
      goTo("/main"); // 로그인 성공 시 메인 페이지로 이동
    } catch (err) {
      console.error("로그인 오류:", err.response?.data || err.message);
      setIsError(true);
      setErrorMessage(err.response?.data?.error || "로그인 실패");
    }
  };

  return (
    <S.Wrapper>
      <S.Header onClick={() => goTo("/main")}>
        둘러보기
      </S.Header>
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
          isError={isError && !email}
        />
        <S.TitleInfo>비밀번호</S.TitleInfo>
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isError={isError && !password}
        />
        {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Btn onClick={handleLogin}>로그인</S.Btn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};