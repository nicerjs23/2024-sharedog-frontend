import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";
import Check from "@assets/icons/Check.svg";
import RedCheck from "@assets/icons/RedCheck.svg";
import { useSignup } from "../../context/SignupContext"; // ✅ Context API 사용

export const OpSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData } = useSignup(); // ✅ Context API 사용

  const handleOpClick = (op) => {
    updateSignupData("neuter", op); // ✅ Context에 저장
  };

  const handleNext = () => {
    if (!signupData.neuter) {
      console.log("수술 여부를 선택해주세요!");
      return;
    }

    navigate("/signup/blood"); // 다음 페이지로 이동
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
                    signupData.neuter === "yes"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.neuter === "yes" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    signupData.neuter === "yes" ? RedCheck : Check // 조건부로 아이콘 변경
                  }  
                  alt="체크표시"
                />
                <S.OpText 
                  style={{
                    color: signupData.neuter === "yes" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
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
                    signupData.neuter === "no"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.neuter === "no" ? "#FFD7D7" : "transparent",
                  cursor: "pointer",
                }}
              >
                <S.Check 
                  src={
                    signupData.neuter === "no" ? RedCheck : Check // 조건부로 아이콘 변경
                  }  
                  alt="체크표시"
                />
                <S.OpText 
                  style={{
                    color: signupData.neuter === "no" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >
                  안했어요
                </S.OpText>
              </S.XBtn>
            </S.OpSelect>
          </S.OpContainer>

          {/* 이전 페이지 값 유지 (읽기 전용) */}
          <S.GenderContainer>
            <S.DynamicSpan active={false}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn
                style={{
                  opacity: signupData.gender === "female" ? 1 : 0.5,
                  cursor: "default",
                }}
              >
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>여아</S.GenText>
              </S.WBtn>
              <S.MBtn
                style={{
                  opacity: signupData.gender === "male" ? 1 : 0.5,
                  cursor: "default",
                }}
              >
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>남아</S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>

          <S.WeightContainer>
            <S.DynamicSpan active={false}>몸무게(kg)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 5" value={signupData.weight} readOnly />
          </S.WeightContainer>

          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1" value={signupData.dog_age} readOnly />
          </S.AgeContainer>

          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" " value={signupData.dog_name} readOnly />
          </S.NameContainer> 
        </S.PetWrapper>

        <Button 
          type="button" 
          onClick={handleNext}
          bgColor={signupData.neuter ? "#FF6969" : "#BDBDBD"} // 중성화 여부 선택 시 버튼 활성화 색상
          disabled={!signupData.neuter} // 선택되지 않으면 버튼 비활성화       
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
