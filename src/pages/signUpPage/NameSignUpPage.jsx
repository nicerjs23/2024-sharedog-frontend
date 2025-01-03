import * as S from "./NameSignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";

export const NameSignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.NameWrapper>
          <S.Text>
            견주님의 <br /> 이름을 알려주세요
          </S.Text>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder="이름 입력" />
          </S.NameContainer>
        </S.NameWrapper>
        <Button type="button">
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
