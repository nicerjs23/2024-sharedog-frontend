import * as S from "./TestResultPage.styled";
import testNoPng from "@assets/images/testStartLogo.png";
import resultBloodIcon from "@assets/icons/resultBlood.png";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import useShare from "@hooks/useShare";
import axiosInstance from "@apis/axiosInstance";

export const TestResultNoPage = () => {
  const { goTo } = useCustomNavigate();
  const startUrl = ` ${window.location.origin}/testStart`; // 시작화면의 URL을 고정시킴
  const { handleShare } = useShare({
    url: startUrl,
  });
  // 확인 버튼 클릭 시 실행되는 함수
  const handleConfirm = async () => {
    const token = localStorage.getItem("access"); // 로그인 여부 확인

    if (token) {
      // 로그인 상태라면 POST 요청 보냄
      try {
        await axiosInstance.post("/api/tests/check");
       // console.log("테스트 결과 업데이트 완료");
      } catch (error) {
        //console.error("테스트 결과 업데이트 실패:", error);
      }
    } else {
      //console.log("비로그인 사용자 → POST 요청 안 보냄");
    }

    // 로그인 여부 상관없이 메인 페이지 이동
    goTo("/main", { replace: true });
  };
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
          <InfoText text="주기적인 예방접종을 진행하지 않았을 수 있어요." />
        </S.InfoBox>
      </S.ContentsBox>
      <S.NavBtnBox>
        <S.Btn onClick={handleShare}>공유</S.Btn>
        <S.Btn props="ok" onClick={handleConfirm}>
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
