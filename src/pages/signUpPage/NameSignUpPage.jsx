import React, { useState } from "react";
import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const NameSignUpPage = () => {
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim()) {
      setShowError(false);
    }
  };

  const handleNext = () => {
    if (!name.trim()) {
      // 이름이 비어 있으면 에러 메시지 표시
      setShowError(true);
      return;
    }

    console.log("다음 페이지로 이동!");
    navigate("/signup/phone");
  };

  return (
    <SignUpForm
      title={`견주님의 \n 이름을 알려주세요`}
      placeholder="이름 입력"
      label="이름"
      type="text"
      onChange={handleNameChange}
      onNext={handleNext}
      showError={showError} // 에러 상태 전달
      errorMessage="이름을 입력해 주세요." // 에러 메시지 전달
    >
      <Button type="button" onClick={handleNext}
      bgColor={name.trim() ? "#FF6969" : "#BDBDBD"} // 이름이 입력되면 버튼 색상 변경
      disabled={!name.trim()}> 
        다음
      </Button>
    </SignUpForm>
  );
};
