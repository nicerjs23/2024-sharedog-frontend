import * as S from "./PhoneSignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";

export const PhoneSignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.PhoneWrapper>
          <S.Text>
            견주님의 <br /> 휴대폰 번호를 알려주세요
          </S.Text>
          <S.PhoneContainer>
            <span>휴대폰 번호</span>
            <S.PhonePlace placeholder="010-1234-5678" />
          </S.PhoneContainer>
        </S.PhoneWrapper>
        <Button type="button">
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
