import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "@assets/icons/Circle.svg";
import { useSignup } from "../../context/SignupContext"; // ✅ Context API 사용

export const AgeSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData } = useSignup(); // ✅ Context API 사용

  const [isAgeValid, setIsAgeValid] = useState(signupData.dog_age !== ""); // ✅ 기존 값 있으면 유효성 유지
  const [showError, setShowError] = useState(false);

  const handleAgeChange = (e) => {
    const value = e.target.value;
    updateSignupData("dog_age", value); // ✅ Context에 저장

    // 나이 유효성 검사 (숫자만 입력 가능)
    const ageRegex = /^\d+$/;
    if (ageRegex.test(value.trim())) {
      setIsAgeValid(true);
      setShowError(false); // 유효하면 에러 메시지 숨기기
    } else {
      setIsAgeValid(false);
    }
  };

  const handleNext = () => {
    if (!isAgeValid || !signupData.dog_age.trim()) {
      setShowError(true); // 유효하지 않으면 에러 메시지 표시
      return;
    }

    navigate("/signup/weight"); // 다음 페이지로 이동
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 나이를 <br /> 알려주세요
          </S.Text>
          <S.AgeContainer>
            <S.DynamicSpan active={true}>나이(세)</S.DynamicSpan>
            <S.AgePlace
              placeholder="예) 1"
              value={signupData.dog_age} // ✅ Context에서 불러오기
              onChange={handleAgeChange}
              style={{
                border: showError ? "1px solid #FF6969" : "1px solid #E7E8EB", // 에러 시 빨간 테두리
              }}
            />
            {showError && (
              <S.ErrorContainer>
                <img src={Circle} alt="Error Icon" width="12.6px" height="12.6px" />
                <span>숫자만 입력해 주세요.</span>
              </S.ErrorContainer>
            )}
          </S.AgeContainer>
        </S.PetWrapper>
        <Button
          type="button"
          onClick={handleNext}
          bgColor={isAgeValid ? "#FF6969" : "#BDBDBD"} // 나이가 유효하면 버튼 색상 변경
          disabled={!isAgeValid} // 나이가 유효하지 않으면 버튼 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
