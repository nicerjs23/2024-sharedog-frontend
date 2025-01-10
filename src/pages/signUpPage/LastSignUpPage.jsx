import Button from "@components/common/CommonButton";
import * as S from "./LastSignUpPage.styled";
import Doctor from "@assets/icons/Vetdoctor.svg";

export const LastSignUpPage = () => {

  return(
    <>
      <S.LastWrapper>
        <S.Text>
          반가워요!
        </S.Text>
        <S.LastText>
          <span>이제부터 나눠주개와 함께 <br /> 편리한 헌혈생활을 시작해봐요.</span>
        </S.LastText>
        <S.LastImg>
          <img src={Doctor} alt="강아지의사로고" />
        </S.LastImg>
        <Button type="button">
          시작하기
        </Button>
      </S.LastWrapper>
    </>
  );
};