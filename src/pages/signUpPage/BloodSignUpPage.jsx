import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import RedCheck from "@assets/icons/RedCheck.svg";
import Drop from "@assets/icons/Drop.svg";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../context/SignupContext"; // ✅ Context API 사용

export const BloodSignUpPage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData, submitSignupData } = useSignup(); // ✅ Context API 사용
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    updateSignupData("blood", option); // ✅ Context에 저장
    setIsOpen(false);
  };

  const handleNext = async () => {
    if (!signupData.blood) {
      //console.log("혈액형을 선택해주세요!");
      return;
    }

    try {
      await submitSignupData(); // ✅ 최종 `POST` 요청 실행
      navigate("/signup/last"); // ✅ 회원가입 완료 페이지로 이동
    } catch (error) {
      //console.error("회원가입 실패:", error);
    }
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 혈액형을 <br /> 알려주세요
          </S.Text>
          <S.BloodContainer>
            <S.DynamicSpan active={true}>혈액형</S.DynamicSpan>
            <S.BloodWrapper onClick={toggleDropdown}>
              <S.BloodSelect hasValue={!!signupData.blood}>
                {signupData.blood ? signupData.blood : "혈액형 선택"}
              </S.BloodSelect>
              <S.Drop src={Drop} alt="드롭다운" />
              {isOpen && (
                <S.DropdownContent>
                  <S.DropdownItemTop onClick={() => selectOption("잘 모르겠어요")}>잘 모르겠어요</S.DropdownItemTop>
                  <S.DropdownItem onClick={() => selectOption("DEA 1-")}>DEA 1-</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption("DEA 1.1")}>DEA 1.1</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption("DEA 1.2")}>DEA 1.2</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption("DEA 3")}>DEA 3</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption("DEA 4")}>DEA 4</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption("DEA 5")}>DEA 5</S.DropdownItem>
                  <S.DropdownItemBottom onClick={() => selectOption("DEA 7")}>DEA 7</S.DropdownItemBottom>
                </S.DropdownContent>
              )}
            </S.BloodWrapper>
          </S.BloodContainer>

          {/* 이전 페이지 값 유지 (읽기 전용) */}
          <S.OpContainer>
            <S.DynamicSpan active={false}>중성화 수술 여부</S.DynamicSpan>
            <S.OpSelect>
              <S.OBtn
                style={{
                  border:
                    signupData.neuter === "yes"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.neuter === "yes" ? "#FFD7D7" : "transparent",
                  cursor: "default",
                }}
              >
                <S.Check src={signupData.neuter === "yes" ? RedCheck : Check} alt="체크표시" />
                <S.OpText 
                  style={{
                    color: signupData.neuter === "yes" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >했어요</S.OpText>
              </S.OBtn>
              <S.XBtn
                style={{
                  border:
                    signupData.neuter === "no"
                      ? "1px solid #FFC5C5"
                      : "1px solid #E7E8EB",
                  background:
                    signupData.neuter === "no" ? "#FFD7D7" : "transparent",
                  cursor: "default",
                }}
              >
                <S.Check src={signupData.neuter === "no" ? RedCheck : Check} alt="체크표시" />
                <S.OpText
                  style={{
                    color: signupData.neuter === "no" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >안했어요</S.OpText>
              </S.XBtn>
            </S.OpSelect>
          </S.OpContainer>

          <S.GenderContainer>
            <S.DynamicSpan active={false}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn
                style={{
                  border: signupData.gender === "female" ? "1px solid #FFC5C5" : "1px solid #E7E8EB",
                  background: signupData.gender === "female" ? "#FFD7D7" : "transparent",
                  cursor: "default",
                }}
              >
                <S.Check src={signupData.gender === "female" ? RedCheck : Check} alt="체크표시" />
                <S.GenText
                  style={{
                    color: signupData.gender === "female" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >여아</S.GenText>
              </S.WBtn>
              <S.MBtn
                style={{
                  border: signupData.gender === "male" ? "1px solid #FFC5C5" : "1px solid #E7E8EB",
                  background: signupData.gender === "male" ? "#FFD7D7" : "transparent",
                  cursor: "default",
                }}
              >
                <S.Check src={signupData.gender === "male" ? RedCheck : Check} alt="체크표시" />
                <S.GenText
                  style={{
                    color: signupData.gender === "male" ? "#FF6969" : "#BDBDBD", // 텍스트 색상 변경
                  }}
                >남아</S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>

          <S.WeightContainer>
            <S.DynamicSpan active={false}>몸무게(kg)</S.DynamicSpan>
            <S.WeightPlace placeholder="예) 5" value={signupData.weight} readOnly />
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
          bgColor={signupData.blood ? "#FF6969" : "#BDBDBD"} // ✅ 혈액형 선택 시 버튼 활성화 색상
          disabled={!signupData.blood} // ✅ 혈액형이 선택되지 않았으면 버튼 비활성화
        >
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
