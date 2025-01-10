import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const PwSignUpPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/name");
  };

  return (
    <SignUpForm
      title={`안전한 비밀번호를\n 입력해 주세요`}
      placeholder="8~16 자리 영문, 숫자, 특수문자"
      label="비밀번호"
      type="pw"
      onNext={handleNext}
    >
      <Button type="button" onClick={handleNext}>
        다음
      </Button>
    </SignUpForm>
  );
};

