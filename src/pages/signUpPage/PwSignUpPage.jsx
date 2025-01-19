import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const PwSignUpPage = () => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;
  setIsPasswordValid(passwordRegex.test(value));

  if (showError) {
    setShowError(false);
  }
};

  const handleNext = () => {
    if (!isPasswordValid) {
      setShowError(true); // 에러 메시지 표시
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/name");
  };

  return (
    <SignUpForm
      title={`안전한 비밀번호를\n 입력해 주세요`}
      placeholder="8~16 자리 영문, 숫자, 특수문자"
      label="비밀번호"
      type="pw"
      onChange={handlePasswordChange}
      onNext={handleNext}
    >
      <Button type="button" onClick={handleNext}
      bgColor={isPasswordValid ? "#FF6969" : "#BDBDBD"}>
        다음
      </Button>
    </SignUpForm>
  );
};

