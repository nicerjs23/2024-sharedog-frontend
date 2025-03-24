import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@apis/axiosInstance";
import { useKakaoAuth } from "@hooks/useKakaoAuth";

export const KakaoCallbackPage = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate
  const { setAuth } = useKakaoAuth(); // 카카오 로그인 상태 관리 함수 가져오기
  const isRequesting = useRef(false); // 요청 상태 관리
  useEffect(() => {
    const handleKakaoCallback = async () => {
      if (isRequesting.current) return; // 이미 요청 중이면 중단
      isRequesting.current = true;
      try {
        console.log("KakaoCallbackPage useEffect 실행");
        const queryParams = new URLSearchParams(
          window.location.search
        );
        const code = queryParams.get("code");
        if (!code) {
          throw new Error("카카오 로그인 code가 없습니다.");
        }

        console.log("카카오 로그인 code:", code); // 받은 code 확인

        // 백엔드의 토큰 교환 API 호출
        const response = await axios.post(
          "/api/accounts/kakao/exchange-token",
          {
            code, // code를 POST 요청의 body에 포함
          }
        );

        console.log("백엔드 응답 ,JWT 토큰 응답:", response.data); // 응답 데이터 출력

        const { access, refresh } = response.data.token;
        const isSigned = response.data.is_signed;

        // 로컬스토리지에 access, refresh 토큰 저장
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        // useKakaoAuth를 통해 상태 업데이트
        setAuth({ access, refresh });

        if (!isSigned) {
          navigate("/main");
        } else {
          navigate("/signup/pro");
        }
      } catch (error) {
        console.error(
          "카카오 로그인 실패:",
          error.response?.data || error.message
        );
        // 로그인 실패 시 로그인 페이지로 이동
        // navigate("/login?error=카카오 로그인 실패");
      }
    };

    handleKakaoCallback(); // 컴포넌트가 마운트되면 실행
  }, [navigate, setAuth]);

  return <div>로그인 중입니다...</div>; // 로딩 상태 표시
};

export default KakaoCallbackPage;
