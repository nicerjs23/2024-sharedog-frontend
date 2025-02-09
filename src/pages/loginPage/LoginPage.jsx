import React, { useState } from "react";
import * as S from "./LoginPage.styled";
import Logo from "@assets/icons/Logo.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axios from "axios";

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
      let refreshToken = localStorage.getItem("refresh");
      if (!refreshToken) refreshToken = null; // ✅ refresh_token이 없을 경우 null 처리

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/accounts/login`, {
        email,
        password,
        refresh_token: refreshToken, // ✅ 로그인 요청 시 refresh_token 추가
      });

      const { access_token, refresh_token: newRefreshToken } = response.data;

      localStorage.setItem("access", access_token);
      localStorage.setItem("refresh", newRefreshToken);

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
          $isError={isError && !email} // ✅ 수정: $isError 사용
        />
        <S.TitleInfo>비밀번호</S.TitleInfo>
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $isError={isError && !password} // ✅ 수정: $isError 사용
        />
        {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Btn onClick={handleLogin}>로그인</S.Btn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};