import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";

const PhoneSignUpPage = ({ formData, updateFormData, nextStep }) => {
    const [showError, setShowError] = useState(false);

    const handlePhoneChange = (e) => {
        const phone = e.target.value;
        updateFormData("phone", phone);

        // 전화번호 유효성 검사 (정규식)
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        if (phoneRegex.test(phone)) {
            setShowError(false);
        }
    };

    const handleNext = () => {
        if (!formData.phone.match(/^010-\d{4}-\d{4}$/)) {
            setShowError(true);
            return;
        }
        nextStep();
    };

    return (
        <SignUpForm
            title={`견주님의 \n 휴대폰 번호를 알려주세요`}
            placeholder="010-1234-5678"
            label="휴대폰 번호"
            type="text"
            onChange={handlePhoneChange}
            onNext={handleNext}
            showError={showError}
            errorMessage="올바른 휴대폰 번호를 입력해 주세요."
        >
            <Button
                type="button"
                onClick={handleNext}
                bgColor={formData.phone.match(/^010-\d{4}-\d{4}$/) ? "#FF6969" : "#BDBDBD"}
                disabled={!formData.phone.match(/^010-\d{4}-\d{4}$/)}
            >
                다음
            </Button>
        </SignUpForm>
    );
};

export default PhoneSignUpPage;
