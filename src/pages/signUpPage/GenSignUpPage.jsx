import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import { useNavigate } from "react-router-dom";

export const GenSignUpPage = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/op");
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 성별을 <br /> 알려주세요
          </S.Text>
          <S.GenderContainer>
            <span>성별</span>
            <S.GenderSelect>
              <S.WBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>여아</S.GenText>
              </S.WBtn>
              <S.MBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>남아</S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>
          <S.WeightContainer>
            <span>몸무게(kg)</span>
            <S.AgePlace placeholder="예) 5" />
          </S.WeightContainer>
          <S.AgeContainer>
            <span>나이(세)</span>
            <S.AgePlace placeholder="예) 1" />
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
