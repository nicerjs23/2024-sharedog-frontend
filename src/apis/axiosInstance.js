import axios from "axios";

// Axios 인스턴스 생성: 기본 설정 추가
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // API 기본 URL
  withCredentials: true, // 쿠키 포함 설정
});

// 요청 인터셉터: Access Token을 Authorization 헤더에 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
