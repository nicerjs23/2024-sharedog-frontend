import Button from "@components/common/CommonButton";
import * as S from "./LastSignUpPage.styled";
import Doctor from "@assets/icons/Vetdoctor.svg";
import { useNavigate } from "react-router-dom";

export const LastSignUpPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/main");
  }

  return(
    <>
      <S.LastWrapper>
        <S.Container>
          <S.Text>
            <span>반가워요!</span>
          </S.Text>
          <S.LastText>
            <span>이제부터 나눠주개와 함께 <br /> 편리한 헌혈생활을 시작해봐요.</span>
          </S.LastText>
          <S.LastImg>
            <img src={Doctor} alt="강아지의사로고" />
          </S.LastImg>
        </S.Container>
        <Button type="button" onClick={handleHome}>
            시작하기
        </Button>
      </S.LastWrapper>
    </>
  );
};