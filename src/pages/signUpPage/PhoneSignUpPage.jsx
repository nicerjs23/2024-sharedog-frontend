import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const PhoneSignUpPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/pro");
  };

  return (
    <SignUpForm
      title={`견주님의 \n 휴대폰 번호를 알려주세요`}
      placeholder="010-1234-5678"
      label="휴대폰 번호"
      type="phone"
      onNext={handleNext}
    >
      <Button type="button" onClick={handleNext}>
        다음
      </Button>
    </SignUpForm>
  );
};
