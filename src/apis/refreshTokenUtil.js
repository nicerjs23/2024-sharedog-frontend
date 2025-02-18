// refreshTokenUtil.js
import axios from "./axiosInstance";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh");
  if (!refreshToken)
    throw new Error("Refresh Token이 존재하지 않습니다.");

  try {
    const response = await axios.post("/api/accounts/auth/refresh", {
      refresh_token: refreshToken,
    });

    const { access_token, refresh_token } = response.data;

    localStorage.setItem("access", access_token);
    localStorage.setItem("refresh", refresh_token);

    return access_token; // 새로 발급받은 Access Token 반환
  } catch (error) {
    console.error(
      "Refresh Token 요청 실패:",
      error.response?.data || error.message
    );
    throw error;
  }
};
