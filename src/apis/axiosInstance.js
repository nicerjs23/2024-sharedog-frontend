// axiosInstance.js
import axios from "axios";
import { refreshAccessToken } from "@apis/refreshTokenUtil"; // 리프레시 토큰 갱신 유틸리티 함수 가져오기

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // API 기본 URL을 환경 변수에서 가져옴
  withCredentials: true, // 쿠키를 포함한 요청 허용
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전에 로컬 스토리지에서 Access Token을 가져와 Authorization 헤더에 추가
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Bearer 토큰 형식으로 헤더 설정
    }
    return config; // 수정된 요청 반환
  },
  (error) => Promise.reject(error) // 요청 설정 중 에러 발생 시 그대로 에러 반환
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response, // 응답이 성공적이면 그대로 반환
  async (error) => {
    const originalRequest = error.config; // 원래 요청 객체 저장

    // Access Token 만료로 인해 401 Unauthorized 응답이 왔을 경우
    if (
      error.response && // 서버로부터 응답이 존재하고
      error.response.status === 401 && // 응답 상태 코드가 401이며
      !originalRequest._retry // 원래 요청이 아직 재시도되지 않은 경우
    ) {
      originalRequest._retry = true; // 재시도 여부를 플래그로 설정

      try {
        // Refresh Token을 사용해 새로운 Access Token 발급
        const newAccessToken = await refreshAccessToken();

        // 새로운 Access Token을 Authorization 헤더에 추가
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // 원래 요청을 새로 발급받은 Access Token으로 재시도
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh Token 갱신 실패 시 에러 로그 출력 및 에러 반환
        console.error("토큰 갱신 실패:", refreshError);
        return Promise.reject(refreshError); // 에러를 그대로 상위로 전달
      }
    }

    // 다른 에러는 그대로 반환
    return Promise.reject(error);
  }
);

export default axiosInstance; // Axios 인스턴스 내보내기
