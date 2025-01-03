import * as S from "./TestStartPage.styled";
import xIcon from "@assets/icons/X.svg";
export const TestStartPage = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.XBtn>
          <img src={xIcon} alt="x버튼" />
        </S.XBtn>
      </S.Header>
      나눠주개 테스트 시작페이지
    </S.Wrapper>
  );
};
