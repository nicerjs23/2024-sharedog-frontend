import * as S from "./SignUpPage.styled";
import Button from "@components/common/button";

export const SignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.EmailWrapper>
          <S.Text>
            견주님의 <br /> 이메일 주소를 알려주세요
          </S.Text>
          <span>이메일</span>
          <S.EmailPlace type="email" placeholder="abcd@naver.com" />
        </S.EmailWrapper>
        <Button />
      </S.MainWrapper>
    </>
  );
};
