import React, { useState } from 'react';
import * as S from './LoginPage.styled';
import Logo from '@assets/icons/Logo.svg';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

import axiosInstance from '@apis/axiosInstance'; // ✅ axiosInstance 사용

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setIsError(true);
      setErrorMessage('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    try {
      let refreshToken = localStorage.getItem('refresh') || null;

      const response = await axiosInstance.post(
        '/api/accounts/login',
        {
          email,
          password,
          refresh_token: refreshToken,
        }
      );

      const accessToken = response.data.token.access;
      const newRefreshToken = response.data.token.refresh;

      if (!accessToken || !newRefreshToken) {
        throw new Error('토큰이 반환되지 않았습니다.');
      }

      // ✅ 토큰을 localStorage에 저장
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', newRefreshToken);

      console.log('저장된 access token:', accessToken);
      console.log('저장된 refresh token:', newRefreshToken);

      // ✅ axiosInstance의 Authorization 헤더를 업데이트 (여기서부터 중요)
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;

      // ✅ 새로고침 없이 상태 업데이트 보장 (토큰 저장 후 navigate)
      setTimeout(() => {
        goTo('/main');
      }, 100);
    } catch (err) {
      console.error(
        '로그인 오류:',
        err.response?.data || err.message
      );
      setIsError(true);
      setErrorMessage(err.response?.data?.error || '로그인 실패');
    }
  };

  return (
    <S.Wrapper>
      <S.Header onClick={() => goTo('/main')}>둘러보기</S.Header>
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
