import * as S from "./ProSignUpPage.styled";
import Button from "@components/common/CommonButton";
import ProImage from "@assets/icons/ProImage.svg";

export const ProSignUpPage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.ProWrapper>
          <S.TextWrapper>
            <S.MainText>
              이제 나눠주개에서 활동할 <br /> 프로필을 등록해봐요
            </S.MainText>
            <S.Text>
              반려견 정보는 나중에 추가로 등록할 수 있어요!
            </S.Text>
          </S.TextWrapper>
          <S.ProImageWrapper>
            <S.ProImage src={ProImage} alt="프로필 이미지"/>
          </S.ProImageWrapper>
          <S.ProContainer>
            <span>반려견 이름</span>
            <S.ProPlace placeholder="반려견 이름 입력" />
          </S.ProContainer>
          <S.LaterWrapper>
            <S.LaterButton>
                <span>반려견 정보는 나중에 등록할게요</span>
            </S.LaterButton>
          </S.LaterWrapper>
        </S.ProWrapper>
        <Button type="button">
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
