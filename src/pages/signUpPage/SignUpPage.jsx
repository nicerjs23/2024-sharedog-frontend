import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";

const SignUpPage = ({ formData, updateFormData, nextStep }) => {
    const [showError, setShowError] = useState(false);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        updateFormData("email", email);

        // 이메일 유효성 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setShowError(false);
        }
    };

    const handleNext = () => {
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
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
            <Button type="button" onClick={handleNext} bgColor={formData.email ? "#FF6969" : "#BDBDBD"}>
                다음
            </Button>
        </SignUpForm>
    );
};

export default SignUpPage;
