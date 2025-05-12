import * as S from "./TestResultPage.styled";
import resultBloodIcon from "@assets/icons/resultBlood.png";
import testOkPng from "@assets/images/testok.png";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { replace } from "react-router-dom";
import useShare from "@hooks/useShare";

import axiosInstance from "@apis/axiosInstance";

export const TestResultOkPage = () => {
  const { goTo } = useCustomNavigate();
  const startUrl = `${window.location.origin}/`; // 시작화면의 URL을 고정시킴
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
        //console.log("테스트 결과 업데이트 완료");
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
