import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import RedCheck from "@assets/icons/RedCheck.svg";
import { useNavigate } from "react-router-dom";

export const OpSignUpPage = () => {
  const [selectedOp, setSelectedOp] = useState("");
  const navigate = useNavigate();

  const handleOpClick = (op) => {
    setSelectedOp(op);
  }

  const handleNext = () => {
    if(!selectedOp) {
      console.log("수술 여부를 선택해주세요!");
      return;
    }
    console.log("다음 페이지로 이동!");
    navigate("/signup/blood");
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            중성화수술 여부를 <br /> 알려주세요
          </S.Text>
          <S.OpContainer>
            <S.DynamicSpan active={true}>중성화 수술 여부</S.DynamicSpan>
            <S.OpSelect>
              <S.OBtn
                onClick={() => handleOpClick("yes")}
                style={{
                  borderRadius: "15px",
                  border:
                    selectedOp === "yes"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    selectedOp === "yes" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    selectedOp === "yes" ? RedCheck : Check // 조건부로 아이콘 변경
                  }  
                  alt="체크표시"
                />
                <S.OpText 
                  style={{
                    color: selectedOp === "yes" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  했어요
                </S.OpText>
              </S.OBtn>
              <S.XBtn
                onClick={() => handleOpClick("no")}
                style={{
                  borderRadius: "15px",
                  border:
                    selectedOp === "no"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    selectedOp === "no" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    selectedOp === "no" ? RedCheck : Check // 조건부로 아이콘 변경
                  }  
                  alt="체크표시"
                />
                <S.OpText 
                  style={{
                    color: selectedOp === "no" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  안했어요
                </S.OpText>
              </S.XBtn>
            </S.OpSelect>
          </S.OpContainer>
          <S.GenderContainer>
            <S.DynamicSpan active={false}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>여아</S.GenText>
              </S.WBtn>
              <S.MBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>남아</S.GenText>
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
        <Button type="button" 
          onClick={handleNext}
          bgColor={selectedOp ? "#FF6969" : "#BDBDBD"} // 성별이 선택되면 버튼 활성화 색상
          disabled={!selectedOp} // 성별이 선택되지 않으면 버튼 비활성화       
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
