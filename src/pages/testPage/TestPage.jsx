import * as S from "./TestPage.styled";
import { useState } from "react";
import TestHeader from "@components/test/TestHeader";
import { testQuestions } from "@data/testData/TestData";
import TestQna from "@components/test/TestQna";
import VetDoctorLogo from "@assets/images/vetDoctorCut.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import TestLoading from "@components/test/TestLoading";
export const TestPage = () => {
  const { goTo } = useCustomNavigate();

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문항 인덱스
  const [selectedOptions, setSelectedOptions] = useState(
    Array(testQuestions.length).fill(null)
  ); // 선택된 옵션 상태
  const [questionScores, setQuestionScores] = useState(
    Array(testQuestions.length).fill(0)
  ); // 문항별 점수 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // ✅ 뒤로 가기 핸들러
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // ✅ X 버튼 (테스트 초기화 및 /main 이동)
  const handleExit = () => {
    setSelectedOptions(Array(testQuestions.length).fill(null)); // 선택된 옵션 초기화
    setQuestionScores(Array(testQuestions.length).fill(0)); // 점수 초기화
    goTo("/main", { replace: true }); // 메인 페이지로 이동
  };

  // ✅ 옵션 선택 핸들러
  const handleSelectOption = (id) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentIndex] = id; // 선택된 옵션의 ID 저장
    setSelectedOptions(updatedOptions);

    // 선택된 옵션 점수 업데이트
    const selectedOption = testQuestions[currentIndex].options.find(
      (option) => option.id === id
    );
    const score = selectedOption ? selectedOption.score : 0;

    const updatedScores = [...questionScores];
    updatedScores[currentIndex] = score; // 현재 문항 점수 업데이트
    setQuestionScores(updatedScores);
  };

  // ✅ 다음 버튼 클릭 핸들러
  const handleNext = () => {
    if (currentIndex < testQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1); // 다음 문항으로 이동
      //console.log(
      //  `📝 **${currentIndex + 1}번 문항 점수:** ${
      //    questionScores[currentIndex]
      //  }`
      //);
    } else {
      // ✅ 마지막 문항 처리
      //console.log(
      //  `📝 **${currentIndex + 1}번 문항 점수:** ${
      //    questionScores[currentIndex]
      //  }`
      //);
      setIsLoading(true); // 로딩 상태 활성화
      const LOADING_DURATION = 2000; // 로딩 시간 (2초)
      const ResultScore = questionScores.reduce(
        (acc, score) => acc + score,
        0
      );
      setTimeout(() => {
        setIsLoading(false);
        //console.log("📝 전체 문항 점수:", questionScores);
        //console.log("✅ **총합 점수**:", ResultScore);
        // ✅ 마지막 문항 완료 후 결과 페이지로 이동
        if (ResultScore == 5) {
          goTo("/test/resultOK", { replace: true });
        } else {
          goTo("/test/resultNO", { replace: true });
        }
      }, LOADING_DURATION);
    }
  };
  // ✅ 로딩 화면만 표시
  if (isLoading) {
    return <TestLoading />;
  }

  return (
    <S.Wrapper>
      <S.GapDiv>
        <TestHeader
          currentIndex={currentIndex}
          totalQuestions={testQuestions.length}
          onBack={handleBack}
          onExit={handleExit}
        />

        <TestQna
          {...testQuestions[currentIndex]}
          selectedOption={selectedOptions[currentIndex]}
          onSelect={handleSelectOption}
        />
      </S.GapDiv>
      <S.BtnBox>
        <S.TestLogo>
          <img src={VetDoctorLogo} alt="강아지의사로고" />
        </S.TestLogo>
        <S.NextBtn
          onClick={handleNext}
          disabled={selectedOptions[currentIndex] === null}
          $isActive={selectedOptions[currentIndex] !== null}
        >
          다음
        </S.NextBtn>
      </S.BtnBox>
    </S.Wrapper>
  );
};
