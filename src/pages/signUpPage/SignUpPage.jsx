import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";

const allowedDomains = [
  "gmail.com",
  "naver.com",
  "daum.net",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "nate.com",
  "hanmail.net"
];

const SignUpPage = ({ formData, updateFormData, nextStep }) => {
    const [showError, setShowError] = useState(false);

    const isValidEmail = (email) => {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)) return false;

      const domain = email.split("@")[1];
      return allowedDomains.includes(domain);
  };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        updateFormData("email", email);

        if(isValidEmail(email)) {
          setShowError(false);
        }
    };

    const handleNext = () => {
        if (!isValidEmail(formData.email)) {
            setShowError(true);
            return;
        }
        nextStep();
    };

    return (
        <SignUpForm
            title={`견주님의\n이메일 주소를 알려주세요`}
            placeholder="abcd@naver.com"
            label="이메일"
            type="email"
            onChange={handleEmailChange}
            onNext={handleNext}
            showError={showError}
            errorMessage="올바른 이메일 주소를 입력해 주세요."
        >
            <Button type="button" onClick={handleNext} bgColor={isValidEmail(formData.email) ? "#FF6969" : "#BDBDBD"}>
                다음
            </Button>
        </SignUpForm>
    );
};

export default SignUpPage;
