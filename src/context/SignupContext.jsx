import React, { createContext, useContext, useState } from "react";
import axiosInstance from "@apis/axiosInstance"; // ✅ axiosInstance 사용

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    dog_name: "",
    dog_age: "",
    weight: "",
    gender: "",
    neuter: "",
    blood: "",
    dog_image: "",
  });

  const updateSignupData = (key, value) => {
    setSignupData((prev) => ({ ...prev, [key]: value }));
  };

  const submitSignupData = async () => {
    try {
      const formData = new FormData();
  
      // ✅ JSON 데이터를 FormData에 추가
      Object.keys(signupData).forEach((key) => {
        if (key === "dog_image" && signupData[key] instanceof FormData) {
          // ✅ 이미지 데이터 처리
          const imageFile = signupData[key].get("dog_image"); // FormData에서 파일 가져오기
          formData.append("dog_image", imageFile);
        } else {
          formData.append(key, signupData[key]);
        }
      });
  
      // ✅ axiosInstance 사용하여 API 호출
      const response = await axiosInstance.post("/api/accounts/dog", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // ✅ 파일 업로드를 위한 Content-Type 설정
        },
      });
  
      //console.log("강아지 정보 등록 성공!", response.data);
    } catch (error) {
      console.error("강아지 정보 등록 중 오류 발생:", error.response?.data || error.message);
    }
  };
  

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData, submitSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};
