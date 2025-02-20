import * as S from "./TestResultPage.styled";
import testNoPng from "@assets/images/testStartLogo.png";
import resultBloodIcon from "@assets/icons/resultBlood.png";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import useShare from "@hooks/useShare";
export const TestResultNoPage = () => {
  const { goTo } = useCustomNavigate();
  const startUrl = ` ${window.location.origin}/testStart`; // 시작화면의 URL을 고정시킴
  const { handleShare } = useShare({
    url: startUrl,
  });
  return (
    <S.Wrapper>
      {/* 위치조절용 div */}
      <div></div>
      <S.ContentsBox>
        <S.Title>헌혈 대상이 아니에요</S.Title>
        <S.TestPng>
          <img src={testNoPng} alt="수의사 로고" />
        </S.TestPng>
        <S.Line />
        <S.InfoBox>
          <InfoText text="만 2~8세를 초과하였을 수 있어요." />
          <InfoText text="20~25kg에 미달하였을 수 있어요." />
          <InfoText text="혈액 및 바이러스 질병 이력이 있을 수 있어요." />
          <InfoText text="만 2~8세를 초과하였을 수 있어요." />
          <InfoText text="주기적인 예방접종을 진행하지 않았을 수 있어요." />
        </S.InfoBox>
      </S.ContentsBox>
      <S.NavBtnBox>
        <S.Btn onClick={handleShare}>공유</S.Btn>
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
