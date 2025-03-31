import * as S from "./ProSignUpPage.styled";
import Button from "@components/common/CommonButton";
import ProImagePlaceholder from "@assets/icons/ProImage.svg";
import CameraIcon from "@assets/icons/CameraIcon.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSignup } from "../../context/SignupContext";

export const ProSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData } = useSignup();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [proImage, setProImage] = useState(signupData.dog_image || ProImagePlaceholder);

  // ✅ 이미지 업로드 및 FormData 저장
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // ✅ 확장자 검사: PNG, JPG만 허용
    const allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert("PNG 또는 JPG 형식의 이미지만 업로드 가능합니다.");
      return;
    }

    // // ✅ 파일 크기 검사 (500KB 이하)
    // const maxSize = 500 * 1024;
    // if (file.size > maxSize) {
    //   alert("이미지 파일이 너무 큽니다! 500KB 이하의 파일을 선택해주세요.");
    //   return;
    // }

    // ✅ 이미지 리사이징 및 최적화
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const MAX_WIDTH = 300;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, { type: file.type });

            // ✅ 미리보기 이미지 업데이트
            setProImage(URL.createObjectURL(blob));

            // ✅ FormData 생성 및 Context API에 저장 (API 호출 없이)
            const formData = new FormData();
            formData.append("dog_image", resizedFile);

            updateSignupData("dog_image", formData);
          }
        }, file.type, 0.7);
      };
    };
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    updateSignupData("dog_name", value);
    if (value.trim()) setShowError(false);
  };

  const handleNext = () => {
    if (!signupData.dog_name.trim()) {
      setShowError(true);
      return;
    }
    navigate("/signup/age");
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate("/signup/last");
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

          {/* ✅ 프로필 이미지 업로드 */}
          <S.ProImageWrapper>
            <S.ProImage src={proImage} alt="프로필 이미지" />
            <S.Camera>
              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                <img src={CameraIcon} alt="카메라 아이콘" />
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/png, image/jpeg"
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
              value={signupData.dog_name}
              onChange={handleNameChange}
            />
            {showError && <S.ErrorMessage>이름을 입력해주세요.</S.ErrorMessage>}
          </S.ProContainer>

          {/* 나중에 등록 버튼 */}
          <S.LaterWrapper>
            <S.LaterButton onClick={handleModal}>
              <span>반려견 정보는 나중에 등록할게요</span>
            </S.LaterButton>
          </S.LaterWrapper>
        </S.ProWrapper>

        {/* ✅ 다음 버튼 */}
        <Button
          type="button"
          onClick={handleNext}
          bgColor={signupData.dog_name.trim() ? "#FF6969" : "#BDBDBD"}
          disabled={!signupData.dog_name.trim()}
        >
          다음
        </Button>
      </S.MainWrapper>

      {/* ✅ 모달 유지 */}
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
