import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";

const PwSignUpPage = ({ updateFormData, nextStep }) => {
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // 비밀번호 유효성 검사
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;
        if (passwordRegex.test(value)) {
            setShowError(false);
        }
    };

    const handleNext = () => {
        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/)) {
            setShowError(true);
            return;
        }
        updateFormData("password", password);
        setPassword(""); // 🔥 비밀번호는 저장하지 않고 즉시 초기화
        nextStep();
    };

    return (
        <SignUpForm
            title={`안전한 비밀번호를\n 입력해 주세요`}
            placeholder="8~16 자리 영문, 숫자, 특수문자"
            label="비밀번호"
            type="password"
            onChange={handlePasswordChange}
            onNext={handleNext}
            showError={showError}
            errorMessage="8~16자리 영문, 숫자, 특수문자만 입력할 수 있어요."
        >
            <Button type="button" onClick={handleNext} bgColor={password ? "#FF6969" : "#BDBDBD"}>
                다음
            </Button>
        </SignUpForm>
    );
};

export default PwSignUpPage;
