import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import RedCheck from "@assets/icons/RedCheck.svg";
import { useNavigate } from "react-router-dom";

export const GenSignUpPage = () => {
  const [selectedGen, setSelectedGen] = useState("");
  const navigate = useNavigate();

  const handleGenClick = (gen) => {
    setSelectedGen(gen);
  }

  const handleNext = () => {
    if (!selectedGen) {
      console.log("성별을 선택해주세요!");
      return;
    }
    console.log("다음 페이지로 이동!");
    navigate("/signup/op");
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 성별을 <br /> 알려주세요
          </S.Text>
          <S.GenderContainer>
            <S.DynamicSpan active={true}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn
                onClick={() => handleGenClick("female")}
                style={{
                  borderRadius: "15px",
                  border:
                    selectedGen === "female"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    selectedGen === "female" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    selectedGen === "female" ? RedCheck : Check // 조건부로 아이콘 변경
                  } 
                  alt="체크표시"
                />
                <S.GenText
                  style={{
                    color: selectedGen === "female" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  여아
                </S.GenText>
              </S.WBtn>
              <S.MBtn
                onClick={() => handleGenClick("male")}
                style={{
                  borderRadius: "15px",
                  border:
                    selectedGen === "male"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    selectedGen === "male" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    selectedGen === "male" ? RedCheck : Check // 조건부로 아이콘 변경
                  } 
                  alt="체크표시"
                />
                <S.GenText
                  style={{
                    color: selectedGen === "male" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  남아
                </S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>
          <S.WeightContainer>
            <S.DynamicSpan active={false}>몸무게(kg)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 5" />
          </S.WeightContainer>
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1" />
          </S.AgeContainer>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" "/>
          </S.NameContainer> 
        </S.PetWrapper>
        <Button 
          type="button" 
          onClick={handleNext}
          bgColor={selectedGen ? "#FF6969" : "#BDBDBD"} // 성별이 선택되면 버튼 활성화 색상
          disabled={!selectedGen} // 성별이 선택되지 않으면 버튼 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
