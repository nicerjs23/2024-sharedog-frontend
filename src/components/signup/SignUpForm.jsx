import React from "react";
import * as S from "./SignUpForm.styled";

export const SignUpForm = ({ 
  title,        // 타이틀 문구
  placeholder,  // 입력 필드 placeholder
  label,        // 입력 필드 레이블
  type = "text", // 입력 타입 기본값 text
  onChange,
  onNext,
  children,     
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
          <S.InputField type={type} placeholder={placeholder} 
          onChange={onChange}/>
        </S.Container>
      </S.Wrapper>
      {React.cloneElement(children, { onClick: onNext })}
    </S.MainWrapper>
  );
};
