import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "@assets/icons/Circle.svg";

export const AgeSignUpPage = () => {
  const [age, setAge] = useState("");
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);

    // 나이 유효성 검사 (정규식: "숫자 + 세" 형식)
    const ageRegex = /^\d+/;
    if (ageRegex.test(value.trim())) {
      setIsAgeValid(true);
      setShowError(false); // 유효하면 에러 메시지 숨기기
    } else {
      setIsAgeValid(false);
    }
  };

  const handleNext = () => {
    if (!isAgeValid) {
      setShowError(true); // 유효하지 않으면 에러 메시지 표시
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/weight");
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
              placeholder="예) 1세"
              value={age}
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
