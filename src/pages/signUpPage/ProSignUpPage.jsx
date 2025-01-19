import * as S from "./ProSignUpPage.styled";
import Button from "@components/common/CommonButton";
import ProImage from "@assets/icons/ProImage.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const ProSignUpPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim()) {
      setShowError(false);
    }
  };

  const handleNext = () => {
    if (!name.trim()) {
      // 이름이 비어 있으면 에러 메시지 표시
      setShowError(true);
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/age");
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate("/signup/last"); // 홈 또는 다른 페이지로 이동
  };

  return (
    <>
      <S.MainWrapper>
        <S.ProWrapper>
          <S.TextWrapper>
            <S.MainText>
              이제 나눠주개에서 활동할 <br /> 프로필을 등록해봐요
            </S.MainText>
            <S.Text>
              반려견 정보는 나중에 추가로 등록할 수 있어요!
            </S.Text>
          </S.TextWrapper>
          <S.ProImageWrapper>
            <S.ProImage src={ProImage} alt="프로필 이미지"/>
          </S.ProImageWrapper>
          <S.ProContainer>
            <span>반려견 이름</span>
            <S.ProPlace placeholder="반려견 이름 입력" onChange={handleNameChange}/>
          </S.ProContainer>
          <S.LaterWrapper>
            <S.LaterButton onClick={handleModal}>
                <span>반려견 정보는 나중에 등록할게요</span>
            </S.LaterButton>
          </S.LaterWrapper>
        </S.ProWrapper>
        <Button type="button" onClick={handleNext}
        bgColor={name.trim() ? "#FF6969" : "#BDBDBD"} // 이름이 입력되면 버튼 색상 변경
        disabled={!name.trim()}>
          다음
        </Button>
      </S.MainWrapper>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalTitle>
              <span>나중에 등록 하시겠어요?</span>
            </S.ModalTitle>
            <S.ModalButtonWrapper>
              <S.NoBtn onClick={handleCloseModal}>아니요</S.NoBtn>
              <S.YesBtn onClick={handleConfirm}>네</S.YesBtn>
            </S.ModalButtonWrapper>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </>
  );
};
