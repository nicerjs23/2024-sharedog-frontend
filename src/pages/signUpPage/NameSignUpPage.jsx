import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";

const NameSignUpPage = ({ formData, updateFormData, nextStep }) => {
  const [showError, setShowError] = useState(false);

  const handleNameChange = (e) => {
      const name = e.target.value;
      updateFormData("user_name", name);
      if (name.trim()) setShowError(false);
  };

  const handleNext = () => {
      if (!formData.user_name.trim()) {
          setShowError(true);
          return;
      }
      nextStep();
  };

  return (
      <SignUpForm
          title={`견주님의 \n 이름을 알려주세요`}
          placeholder="이름 입력"
          label="이름"
          type="text"
          onChange={handleNameChange}
          onNext={handleNext}
          showError={showError}
          errorMessage="이름을 입력해 주세요."
      >
          <Button type="button" onClick={handleNext} bgColor={formData.user_name ? "#FF6969" : "#BDBDBD"}>
              다음
          </Button>
      </SignUpForm>
  );
};

export default NameSignUpPage;
