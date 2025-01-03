import * as S from "./PwSignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";

export const PwSignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.PwWrapper>
          <S.Text>
            안전한 비밀번호를 <br /> 입력해 주세요
          </S.Text>
          <S.PwContainer>
            <span>비밀번호</span>
            <S.PwPlace placeholder="8~16 자리 영문, 숫자, 특수문자" />
          </S.PwContainer>
        </S.PwWrapper>
        <Button type="button">
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
