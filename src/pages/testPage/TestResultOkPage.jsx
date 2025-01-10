import * as S from "./TestResultPage.styled";
import resultBloodIcon from "@assets/icons/resultBlood.png";
import testOkPng from "@assets/images/testok.png";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { replace } from "react-router-dom";
import useKakaoShare from "@hooks/useKaKaoShare";
export const TestResultOkPage = () => {
  const { goTo } = useCustomNavigate();
  const { shareKakao } = useKakaoShare();
  return (
    <S.Wrapper>
      {/* 위치조절용 div */}
      <div></div>
      <S.ContentsBox>
        <S.Title>헌혈견이 될 수 있어요!</S.Title>
        <S.TestPng>
          <img src={testOkPng} alt="오케이손가락이미지" />
        </S.TestPng>
        <S.Line />
        <S.InfoBox>
          <InfoText text="1번의 헌혈로 4마리의 생명을 살릴 수 있어요." />
          <InfoText text="헌혈 시 무료 건강검진을 받을 수 있어요." />
          <InfoText text="헌혈은 지정 동물병원에서 진행할 수 있어요." />
          <InfoText text="헌혈 후 강아지는 건강한 새 혈액을 생성해요." />
        </S.InfoBox>
      </S.ContentsBox>
      <S.NavBtnBox>
        <S.Btn onClick={() => shareKakao()}>공유</S.Btn>
        <S.Btn
          props="ok"
          onClick={() => goTo("/main", { replace: true })}
        >
          확인
        </S.Btn>
      </S.NavBtnBox>
    </S.Wrapper>
  );
};

const InfoText = ({ text }) => {
  return (
    <S.InfoTextBox>
      <S.InfoIcon>
        <img src={resultBloodIcon} alt="피아이콘" />
      </S.InfoIcon>
      <S.InfoText>{text}</S.InfoText>
    </S.InfoTextBox>
  );
};
