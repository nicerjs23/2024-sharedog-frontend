import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import RedCheck from "@assets/icons/RedCheck.svg";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../context/SignupContext"; // ✅ Context API 사용

export const GenSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData } = useSignup(); // ✅ Context API 사용

  const handleGenClick = (gen) => {
    updateSignupData("gender", gen); // ✅ Context에 저장
  };

  const handleNext = () => {
    if (!signupData.gender) {
      console.log("성별을 선택해주세요!");
      return;
    }

    navigate("/signup/op"); // 다음 페이지로 이동
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 성별을 <br /> 알려주세요
          </S.Text>
          <S.GenderContainer>
            <S.DynamicSpan active={true}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn
                onClick={() => handleGenClick("female")}
                style={{
                  borderRadius: "15px",
                  border:
                    signupData.gender === "female"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.gender === "female" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    signupData.gender === "female" ? RedCheck : Check // 조건부로 아이콘 변경
                  } 
                  alt="체크표시"
                />
                <S.GenText
                  style={{
                    color: signupData.gender === "female" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  여아
                </S.GenText>
              </S.WBtn>
              <S.MBtn
                onClick={() => handleGenClick("male")}
                style={{
                  borderRadius: "15px",
                  border:
                    signupData.gender === "male"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.gender === "male" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    signupData.gender === "male" ? RedCheck : Check // 조건부로 아이콘 변경
                  } 
                  alt="체크표시"
                />
                <S.GenText
                  style={{
                    color: signupData.gender === "male" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  남아
                </S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>

          {/* 이전 페이지 값 유지 (읽기 전용) */}
          <S.WeightContainer>
            <S.DynamicSpan active={false}>몸무게(kg)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 5" value={signupData.weight} readOnly />
          </S.WeightContainer>
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1" value={signupData.dog_age} readOnly />
          </S.AgeContainer>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" " value={signupData.dog_name} readOnly />
          </S.NameContainer> 
        </S.PetWrapper>

        <Button 
          type="button" 
          onClick={handleNext}
          bgColor={signupData.gender ? "#FF6969" : "#BDBDBD"} // 성별이 선택되면 버튼 활성화 색상
          disabled={!signupData.gender} // 성별이 선택되지 않으면 버튼 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
