import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import { useNavigate } from "react-router-dom";

export const OpSignUpPage = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/blood");
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            중성화수술 여부를 <br /> 알려주세요
          </S.Text>
          <S.OpContainer>
            <S.DynamicSpan active={true}>중성화 수술 여부</S.DynamicSpan>
            <S.OpSelect>
              <S.OBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.OpText>했어요</S.OpText>
              </S.OBtn>
              <S.XBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.OpText>안했어요</S.OpText>
              </S.XBtn>
            </S.OpSelect>
          </S.OpContainer>
          <S.GenderContainer>
            <S.DynamicSpan active={false}>성별</S.DynamicSpan>
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
            <S.DynamicSpan active={false}>몸무게(kg)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 5" />
          </S.WeightContainer>
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
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
