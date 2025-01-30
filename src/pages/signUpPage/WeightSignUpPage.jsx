import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "@assets/icons/Circle.svg";

export const WeightSignUpPage = () => {
  const [weight, setWeight] = useState("");
  const [isWeightValid, setIsWeightValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setWeight(value);

    const weightRegex = /^\d+/;
    if (weightRegex.test(value.trim())) {
      setIsWeightValid(true);
      setShowError(false); // 유효하면 에러 메시지 숨기기
    } else {
      setIsWeightValid(false);
    }
  };

  const handleNext = () => {
    if (!isWeightValid) {
      setShowError(true); // 유효하지 않으면 에러 메시지 표시
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/gen");
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
              placeholder="예) 5kg" 
              value={weight}
              onChange={handleWeightChange}
              style={{
                border: showError ? "1px solid #FF6969" : "1px solid #E7E8EB", // 에러 시 빨간 테두리
              }}
            />
            {showError && (
            <S.ErrorContainer>
              <img src={Circle} alt="Error Icon" width="12.6" height="12.6" />
              <span>숫자만 입력해 주세요.</span>
            </S.ErrorContainer>
          )}
          </S.WeightContainer>
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1세" />
          </S.AgeContainer>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" "/>
          </S.NameContainer> 
        </S.PetWrapper>
        <Button type="button" onClick={handleNext}>
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
