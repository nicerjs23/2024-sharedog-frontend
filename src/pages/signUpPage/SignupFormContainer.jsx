import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/accounts/signup`, formData, {
                withCredentials: true,
            });
            console.log("회원가입 성공:", response.data);
            alert("회원가입이 완료되었습니다.");
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
