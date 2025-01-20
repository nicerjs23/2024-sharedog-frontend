import { useState, useEffect } from "react";
import * as S from "./AccountManagement.styled";
import { useNavigate } from "react-router-dom";
import Next from "@assets/icons/Next.svg";
import { useKakaoAuth } from "@hooks/useKakaoAuth"; // useKakaoAuth 훅 가져오기
import axios from "@apis/axiosInstance"; // axiosInstance 가져오기

export const AccountManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useKakaoAuth(); // useKakaoAuth에서 logout 함수 가져오기

  const [email, setEmail] = useState(""); // 이메일 상태 추가
  // 로그아웃 처리 함수
  const handleLogout = () => {
    logout(); // useKakaoAuth의 logout 함수 호출
    setIsModalOpen(false);
    navigate("/");
  };

  //API연결 함수 부분이야~~~~~~~~//
  // 사용자 정보 가져오기 함수
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("/api/users/mypage"); // API 호출
      console.log("API 응답 전체 데이터:", response.data); // 전체 응답 데이터를 콘솔에 출력
      const { email } = response.data[0]; // // 배열의 첫 번째 객체에서 email 추출
      setEmail(email); // email 상태 업데이트
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };

  // 컴포넌트 마운트 시 사용자 정보 가져오기
  useEffect(() => {
    fetchUserInfo();
  }, []);
  //API연결부분 end~~~~~~~//

  return (
    <S.Wrapper>
      <S.Header>계정 관리</S.Header>
      <S.InfoBox>
        <S.CategoryText>계정 정보</S.CategoryText>
        <S.CategoryDetail>
          카카오 로그인 {email && `${email}`}
        </S.CategoryDetail>
        <S.CategoryText>계정 관리</S.CategoryText>
        <S.CategoryDetail onClick={() => setIsModalOpen(true)}>
          로그아웃{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryDetail onClick={() => setIsModalOpen(true)}>
          회원 탈퇴{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
      </S.InfoBox>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <p>로그아웃 하시겠어요?</p>
            <S.ModalButtonContainer>
              <S.ModalButton
                cancel
                onClick={() => setIsModalOpen(false)}
              >
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleLogout}>
                로그아웃
              </S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <p>더 이상 이용을 원치 않으신가요?</p>
            <S.ModalButtonContainer>
              <S.ModalButton
                cancel
                onClick={() => setIsModalOpen(false)}
              >
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleLogout}>
                로그아웃
              </S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};
