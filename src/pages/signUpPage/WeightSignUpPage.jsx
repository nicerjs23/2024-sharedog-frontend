import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "@assets/icons/Circle.svg";
import { useSignup } from "../../context/SignupContext"; // ✅ Context API 사용

export const WeightSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData } = useSignup(); // ✅ Context API 사용

  const [isWeightValid, setIsWeightValid] = useState(signupData.weight !== ""); // ✅ 기존 값 있으면 유효성 유지
  const [showError, setShowError] = useState(false);

  const handleWeightChange = (e) => {
    const value = e.target.value;
    updateSignupData("weight", value); // ✅ Context에 저장

    // 몸무게 유효성 검사 (숫자만 입력 가능)
    const weightRegex = /^\d+$/;
    if (weightRegex.test(value.trim())) {
      setIsWeightValid(true);
      setShowError(false); // 유효하면 에러 메시지 숨기기
    } else {
      setIsWeightValid(false);
    }
  };

  const handleNext = () => {
    if (!isWeightValid || !signupData.weight.trim()) {
      setShowError(true); // 유효하지 않으면 에러 메시지 표시
      return;
    }

    navigate("/signup/gen"); // 다음 페이지로 이동
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 몸무게를 <br /> 알려주세요
          </S.Text>
          <S.WeightContainer>
            <S.DynamicSpan active={true}>몸무게(kg)</S.DynamicSpan>
            <S.AgePlace 
              placeholder="예) 5" 
              value={signupData.weight} // ✅ Context에서 불러오기
              onChange={handleWeightChange}
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
          </S.WeightContainer>

          {/* 나이 & 이름 필드 (입력 불가) */}
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1세" value={signupData.dog_age} readOnly />
          </S.AgeContainer>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" " value={signupData.dog_name} readOnly />
          </S.NameContainer> 
        </S.PetWrapper>

        <Button
          type="button"
          onClick={handleNext}
          bgColor={isWeightValid ? "#FF6969" : "#BDBDBD"} // 몸무게가 유효하면 버튼 색상 변경
          disabled={!isWeightValid} // 몸무게가 유효하지 않으면 버튼 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
