import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 이메일 유효성 검사 (정규식)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));

    // 에러 메시지 숨기기
    if (showError) {
      setShowError(false);
    }
  };

  const handleNext = () => {
    if (!isEmailValid) {
      setShowError(true); // 에러 메시지 표시
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/pw");
  };

  return (
    <SignUpForm
      title={`견주님의\n이메일 주소를 알려주세요`}
      placeholder="abcd@naver.com"
      label="이메일"
      type="email"
      onChange={handleEmailChange}
      onNext={handleNext}
      showError={showError} // 에러 상태 전달
      errorMessage="올바른 이메일주소를 입력해 주세요." // 에러 메시지 전달
    >
      <Button type="button" onClick={handleNext} 
      bgColor={isEmailValid ? "#FF6969" : "#BDBDBD"}>
        다음
      </Button>
    </SignUpForm>
  );
};

