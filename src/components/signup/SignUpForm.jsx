import React from "react";
import * as S from "./SignUpForm.styled";
import Circle from "@assets/icons/Circle.svg";

export const SignUpForm = ({ 
  title,        
  placeholder,  
  label,        
  type = "text",
  value,         // 🔥 외부에서 value를 받아 컨트롤된 컴포넌트로 변경
  onChange,      // 🔥 입력 값이 변경될 때 호출 (부모에서 관리)
  onNext,       
  children,
  showError = false,      
  errorMessage = "",      
}) => {
  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.Text>
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </S.Text>
        <S.Container>
          <span>{label}</span>
          <S.InputField
            type={type}
            placeholder={placeholder}
            value={value}  // 🔥 value를 props로 받아 컨트롤된 입력 필드로 변경
            onChange={onChange}  // 🔥 상태 변경을 부모가 관리하도록 수정
            style={{
              border: showError ? "1px solid #FF6969" : "1px solid #E7E8EB",
            }}
          />
          {showError && (
            <S.ErrorContainer>
              <img src={Circle} alt="Error Icon" width="12.6px" height="12.6px" />
              <span>{errorMessage}</span>
            </S.ErrorContainer>
          )}
        </S.Container>
      </S.Wrapper>
      {React.cloneElement(children, { onClick: onNext })}
    </S.MainWrapper>
  );
};
