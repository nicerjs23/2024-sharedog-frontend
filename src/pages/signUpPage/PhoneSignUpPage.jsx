import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const PhoneSignUpPage = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false); // 전화번호 유효성 상태
  const [showError, setShowError] = useState(false); // 에러 메시지 표시 여부
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    // 전화번호 유효성 검사 (정규식)
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (phoneRegex.test(value)) {
      setIsPhoneValid(true);
      setShowError(false); // 유효하면 에러 메시지 숨기기
    } else {
      setIsPhoneValid(false);
    }
  };

  const handleNext = () => {
    if (!isPhoneValid) {
      setShowError(true); // 유효하지 않은 경우 에러 메시지 표시
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/pro");
  };

  return (
    <SignUpForm
      title={`견주님의 \n 휴대폰 번호를 알려주세요`}
      placeholder="010-1234-5678"
      label="휴대폰 번호"
      type="text" 
      onChange={handlePhoneChange} // 입력값 변경 핸들러
      onNext={handleNext} // '다음' 버튼 클릭 핸들러
      showError={showError} // 에러 상태 전달
      errorMessage="올바른 휴대폰 번호를 입력해 주세요." // 에러 메시지 전달
    >
      <Button
        type="button"
        onClick={handleNext}
        bgColor={isPhoneValid ? "#FF6969" : "#BDBDBD"} // 전화번호가 유효하면 버튼 색상 변경
        disabled={!isPhoneValid} // 전화번호가 유효하지 않으면 버튼 비활성화
      >
        다음
      </Button>
    </SignUpForm>
  );
};
