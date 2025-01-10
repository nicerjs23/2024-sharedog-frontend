import { SignUpForm } from "@components/signup/SignUpForm";
import Button from "@components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export const NameSignUpPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/phone");
  };

  return (
    <SignUpForm
      title={`견주님의 \n 이름을 알려주세요`}
      placeholder="이름 입력"
      label="이름"
      type="name"
      onNext={handleNext}
    >
      <Button type="button" onClick={handleNext}>
        다음
      </Button>
    </SignUpForm>
  );
};
