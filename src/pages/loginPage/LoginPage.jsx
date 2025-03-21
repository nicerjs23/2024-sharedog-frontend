import React, { useState } from 'react';
import * as S from './LoginPage.styled';
import Logo from '@assets/icons/Logo.svg';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

import axiosInstance from '@apis/axiosInstance'; // ✅ axiosInstance 사용
import usePreventZoom from '@hooks/usePreventZoom'; //확대방지api
export const LoginPage = () => {
  const { goTo } = useCustomNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  usePreventZoom(); // 확대 방지 적용!

  const handleLogin = async () => {
    if (!email || !password) {
      setIsError(true);
      setErrorMessage('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const loginData = { email, password };
      const refreshToken = localStorage.getItem('refresh');

      if (refreshToken) {
        loginData.refresh_token = refreshToken;
      }

      console.log('📌 로그인 요청 데이터:', loginData);

      const response = await axiosInstance.post(
        '/api/accounts/login',
        loginData
      );

      const accessToken = response.data.token.access;
      const newRefreshToken = response.data.token.refresh;

      if (!accessToken || !newRefreshToken) {
        throw new Error('토큰이 반환되지 않았습니다.');
      }

      // ✅ [1] 토큰을 먼저 localStorage에 저장
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', newRefreshToken);

      console.log('저장된 access token:', accessToken);
      console.log('저장된 refresh token:', newRefreshToken);

      // ✅ [2] axiosInstance의 Authorization 헤더 즉시 업데이트
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;

      // ✅ [3] 로그인 성공 후 main 페이지로 이동 (리렌더링 유도)
      goTo('/main');
    } catch (err) {
      console.error(
        '로그인 오류:',
        err.response?.data || err.message
      );
      setIsError(true);
      setErrorMessage(err.response?.data?.error || '로그인 실패');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
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
          onKeyDown={handleKeyPress} // ✅ [5] Enter 입력 시 로그인 실행
        />
        <S.TitleInfo>비밀번호</S.TitleInfo>
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $isError={isError && !password} // ✅ 수정: $isError 사용
          onKeyDown={handleKeyPress} // ✅ [5] Enter 입력 시 로그인 실행
        />
        <div style={{ width: '100%', height: '30px' }}>
          {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </div>
        <S.Btn onClick={handleLogin}>로그인</S.Btn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};
