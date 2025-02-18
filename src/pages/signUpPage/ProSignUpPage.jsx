import * as S from "./ProSignUpPage.styled";
import Button from "@components/common/CommonButton";
import ProImagePlaceholder from "@assets/icons/ProImage.svg";
import CameraIcon from "@assets/icons/CameraIcon.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const ProSignUpPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const [proImage, setProImage] = useState(ProImagePlaceholder); // 초기 프로필 이미지 상태

  // 이미지 업로드 핸들러
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProImage(reader.result); // 업로드된 이미지를 Base64 URL로 저장
      };
      reader.readAsDataURL(file);
    }
  };

  // 이름 입력 핸들러
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim()) {
      setShowError(false); // 에러 메시지 숨기기
    }
  };

  // 다음 버튼 핸들러
  const handleNext = () => {
    if (!name.trim()) {
      setShowError(true); // 이름이 비어있으면 에러 메시지 표시
      return;
    }

    console.log("프로필 정보:", { name, proImage });
    navigate("/signup/age"); // 다음 페이지로 이동
  };

  // 모달 열기/닫기 핸들러
  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <S.Text>반려견 정보는 나중에 추가로 등록할 수 있어요!</S.Text>
          </S.TextWrapper>

          {/* 프로필 이미지 업로드 */}
          <S.ProImageWrapper>
            <S.ProImage src={proImage} alt="프로필 이미지" />
            <S.Camera>
              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                <img src={CameraIcon} alt="카메라 아이콘" />
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </S.Camera>
          </S.ProImageWrapper>

          {/* 이름 입력 필드 */}
          <S.ProContainer>
            <span>반려견 이름</span>
            <S.ProPlace
              placeholder="반려견 이름 입력"
              value={name}
              onChange={handleNameChange}
            />
            {showError && (
              <S.ErrorMessage>이름을 입력해주세요.</S.ErrorMessage>
            )}
          </S.ProContainer>

          {/* 나중에 등록 버튼 */}
          <S.LaterWrapper>
            <S.LaterButton onClick={handleModal}>
              <span>반려견 정보는 나중에 등록할게요</span>
            </S.LaterButton>
          </S.LaterWrapper>
        </S.ProWrapper>

        {/* 다음 버튼 */}
        <Button
          type="button"
          onClick={handleNext}
          bgColor={name.trim() ? "#FF6969" : "#BDBDBD"}
          disabled={!name.trim()} // 이름이 없으면 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>

      {/* 모달 */}
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
