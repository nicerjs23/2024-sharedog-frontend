import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import axiosInstance from "@apis/axiosInstance";

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
  "hanmail.net",
  "example.com"
];

const SignUpPage = ({ formData, updateFormData, nextStep }) => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const isValidEmail = (email) => {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)) return false;

      const domain = email.split("@")[1]; // 도메인 부분만 가져오기 위해 [1]을 사용한다. [0]은 @ 이전의 부분을 의미한다.
      return allowedDomains.includes(domain);
  };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        updateFormData("email", email);

        if(isValidEmail(email)) {
          setShowError(false);
        }
    };

    const handleNext = async () => {
        if (!isValidEmail(formData.email)) {
          setErrorMessage("올바른 이메일 주소를 입력해 주세요.");
          setShowError(true);
          return;
        }

        try {
          const response = await axiosInstance.post("/api/accounts/check-email", {
            email: formData.email,
          });

        if (response.data.exists) {
          setErrorMessage("이미 사용 중인 이메일입니다.");
          setShowError(true);
        } 
        else {
          setShowError(false);
          nextStep();
        }
      } catch (error) {
        console.error("이메일 중복 검사 오류:", error.response?.data || error.message);
        setErrorMessage("이메일 확인 중 오류가 발생했습니다.");
        setShowError(true);
      }  
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
          errorMessage={errorMessage}
        >
          <Button type="button" onClick={handleNext} bgColor={isValidEmail(formData.email) ? "#FF6969" : "#BDBDBD"}>
              다음
          </Button>
        </SignUpForm>
    );
};

export default SignUpPage;
