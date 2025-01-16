import { useState } from "react";
import * as S from "./AccountManagement.styled";
import { useNavigate } from "react-router-dom";
import Next from "@assets/icons/Next.svg";

export const AccountManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리 로직
    console.log("로그아웃되었습니다.");
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <S.Header>계정 관리</S.Header>
      <S.InfoBox>
        <S.CategoryText>계정 정보</S.CategoryText>
        <S.CategoryDetail>카카오 로그인</S.CategoryDetail>
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
              <S.ModalButton cancel onClick={() => setIsModalOpen(false)}>
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleLogout}>로그아웃</S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <p>더 이상 이용을 원치 않으신가요?</p>
            <S.ModalButtonContainer>
              <S.ModalButton cancel onClick={() => setIsModalOpen(false)}>
                취소
              </S.ModalButton>
              <S.ModalButton onClick={handleLogout}>탈퇴</S.ModalButton>
            </S.ModalButtonContainer>
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};
