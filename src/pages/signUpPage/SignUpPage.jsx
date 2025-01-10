import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/pw");
  };

  return (
    <SignUpForm
      title={`견주님의\n이메일 주소를 알려주세요`}
      placeholder="abcd@naver.com"
      label="이메일"
      type="email"
      onNext={handleNext}
    >
      <Button type="button" onClick={handleNext}>
        다음
      </Button>
    </SignUpForm>
  );
};

