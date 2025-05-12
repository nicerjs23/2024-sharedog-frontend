import { useState, createContext, useContext } from 'react';
import axios from '@apis/axiosInstance';

// KakaoAuthContext 생성: 로그인 상태를 관리하는 Context
const KakaoAuthContext = createContext();

// KakaoAuthProvider: 로그인 상태와 관련된 기능을 제공하는 Provider
export const KakaoAuthProvider = ({ children }) => {
  // localStorage에서 토큰을 동기적으로 읽어와 초기값 설정
  const initialAuth = (() => {
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    return accessToken && refreshToken
      ? { access: accessToken, refresh: refreshToken }
      : null;
  })();

  const [auth, setAuth] = useState(initialAuth);

  // 카카오 로그인 버튼 클릭 시 백엔드의 카카오 로그인 엔드포인트로 리다이렉트
  const kakaoLogin = () => {
    //console.log('kakaoLogin 함수 호출됨'); // 함수 호출 여부 확인
    const kakaoLoginUrl = `${
      import.meta.env.VITE_BASE_URL
    }/api/accounts/kakao/login`;
    //console.log('카카오 로그인 URL:', kakaoLoginUrl);
    window.location.href = kakaoLoginUrl;
  };

  // 로그아웃: 로컬스토리지에서 토큰 삭제 및 상태 초기화
  const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setAuth(null);
  };

  // Refresh Token: 만료된 Access Token을 새로 발급받기 위한 요청
  const refreshToken = async () => {
    try {
      const response = await axios.post(
        '/api/accounts/auth/refresh',
        {
          refresh_token: auth.refresh, // 저장된 refresh 토큰 전달
        }
      );

      // 새로 발급받은 access 토큰을 로컬스토리지와 상태에 저장
      localStorage.setItem('access', response.data.access_token);
      setAuth((prev) => ({
        ...prev,
        access: response.data.access_token,
      }));
    } catch (error) {
      console.error('Refresh Token Error:', error);
      logout(); // 갱신 실패 시 로그아웃 처리
    }
  };

  // KakaoAuthContext를 통해 상태와 기능 제공
  return (
    <KakaoAuthContext.Provider
      value={{ auth, setAuth, kakaoLogin, logout, refreshToken }}
    >
      {children}
    </KakaoAuthContext.Provider>
  );
};

// useKakaoAuth: KakaoAuthContext를 쉽게 사용하도록 도와주는 커스텀 훅
export const useKakaoAuth = () => useContext(KakaoAuthContext);
