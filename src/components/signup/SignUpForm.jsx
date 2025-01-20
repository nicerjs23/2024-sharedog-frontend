import React from "react";
import * as S from "./SignUpForm.styled";
import Circle from "@assets/icons/Circle.svg";

export const SignUpForm = ({ 
  title,        
  placeholder,  
  label,        
  type = "text",
  onChange,
  onNext,
  children,
  showError = false,       // 에러 상태 추가
  errorMessage = "",       // 에러 메시지 추가
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
            onChange={onChange}
            style={{
              border: showError ? "1px solid #FF6969" : "1px solid #E7E8EB", // 에러 상태에 따른 테두리
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

