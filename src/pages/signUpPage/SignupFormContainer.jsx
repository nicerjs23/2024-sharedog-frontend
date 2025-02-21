import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance"; // ✅ axiosInstance 사용
import SignUpPage from "./SignUpPage";
import PwSignUpPage from "./PwSignUpPage";
import NameSignUpPage from "./NameSignUpPage";
import PhoneSignUpPage from "./PhoneSignUpPage";

const SignupFormContainer = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        user_name: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateFormData = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            // ✅ 회원가입 API 호출
            const response = await axiosInstance.post("/api/accounts/signup", formData);

            console.log("회원가입 성공:", response.data);
            alert("회원가입이 완료되었습니다.");

            // ✅ 응답에서 토큰 추출
            const accessToken = response.data.token.access;
            const refreshToken = response.data.token.refresh;

            if (!accessToken || !refreshToken) {
                throw new Error("토큰이 반환되지 않았습니다.");
            }

            // ✅ 토큰을 localStorage에 저장
            localStorage.setItem("access", accessToken);
            localStorage.setItem("refresh", refreshToken);

            console.log(
                "저장된 access token:",
                localStorage.getItem("access")
            );
            console.log(
                "저장된 refresh token:",
                localStorage.getItem("refresh")
            );

            // ✅ axiosInstance의 Authorization 헤더 즉시 업데이트
            axiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${accessToken}`;

            // ✅ 회원가입 후 자동 로그인 효과
            navigate("/signup/pro");
        } catch (err) {
            console.error("회원가입 오류:", err.response?.data || err.message);
            setError(err.response?.data?.error || "회원가입 실패");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {step === 1 && <SignUpPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
            {step === 2 && <PwSignUpPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
            {step === 3 && <NameSignUpPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
            {step === 4 && <PhoneSignUpPage formData={formData} updateFormData={updateFormData} nextStep={handleSubmit} />}

            {step > 1 && <button onClick={prevStep}>이전</button>}
            {step === 4 && <button onClick={handleSubmit} disabled={loading}>회원가입 완료</button>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignupFormContainer;
