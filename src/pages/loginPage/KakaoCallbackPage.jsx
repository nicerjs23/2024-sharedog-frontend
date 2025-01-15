import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@apis/axiosInstance";
import { useKakaoAuth } from "@hooks/useKakaoAuth";

// 카카오 로그인 콜백을 처리하는 페이지
export const KakaoCallbackPage = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate
  const { setAuth } = useKakaoAuth(); // 카카오 로그인 상태 관리 함수 가져오기

  useEffect(() => {
    const handleKakaoCallback = async () => {
      try {
        const queryParams = new URLSearchParams(
          window.location.search
        );
        const code = queryParams.get("code");
        if (!code) {
          throw new Error("카카오 로그인 code가 없습니다.");
        }
        // 백엔드의 카카오 콜백 API 호출
        const response = await axios.get(
          `/api/accounts/kakao/callback?code=${code}`
        );
        console.log("JWT 토큰 응답:", response);

        console.log("카카오 로그인 응답:", response); // 응답 데이터 출력

        const { access, refresh, is_new_user } = response.data.token;

        // 로컬스토리지에 access, refresh 토큰 저장
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        // useKakaoAuth를 통해 상태 업데이트
        setAuth({ access, refresh });

        // 회원가입 여부에 관계없이 무조건 메인 페이지로 이동
        navigate("/main");

        /* 🧨아직 회원가입 개발완료안돼서 일단 무조건 메인으로보냄 
        // 회원가입 여부에 따라 분기 처리
        if (is_new_user) {
          // 새로운 회원이라면 회원가입 페이지로 이동
          navigate("/signup");
        } else {
          // 기존 회원이라면 메인 페이지로 이동
          navigate("/main");
        }
          */
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        // 로그인 실패 시 로그인 페이지로 이동하며 에러 메시지 전달
        // navigate("/?error=카카오 로그인 실패");
      }
    };

    handleKakaoCallback(); // 컴포넌트가 마운트되면 실행
  }, [navigate, setAuth]);

  return <div>로그인 중입니다...</div>; // 로딩 상태 표시
};
