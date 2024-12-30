import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";

export const SignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.EmailWrapper>
          <S.Text>
            견주님의 <br /> 이메일 주소를 알려주세요
          </S.Text>
          <S.EmailContainer>
            <span>이메일</span>
            <S.EmailPlace type="email" placeholder="abcd@naver.com" />
          </S.EmailContainer>
        </S.EmailWrapper>
        <Button type="button">
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
