import React from "react";
import * as S from "./CommonButtonstyled";

const Button = (props) => {
  return (
    <S.BtnBack>
      <S.commonButton bgColor={props.bgColor} onClick={props.onClick}>
        <S.buttonText>{props.children}</S.buttonText>
      </S.commonButton>
    </S.BtnBack>
  );
};

export default Button;
