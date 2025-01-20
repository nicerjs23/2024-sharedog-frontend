import * as S from "./SignUpPage.styled";
import Button from "@components/common/CommonButton";
import { useState } from "react";
import Check from "@assets/icons/Check.svg";
import Drop from "@assets/icons/Drop.svg";
import { useNavigate } from "react-router-dom";

export const BloodSignUpPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('혈액형 선택');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    console.log("다음 페이지로 이동!");
    navigate("/signup/last");
  };

  return (
    <>
      <S.MainWrapper>
        <S.PetWrapper>
          <S.Text>
            우리 반려견 혈액형을 <br /> 알려주세요
          </S.Text>
          <S.BloodContainer>
            <S.DynamicSpan active={true}>혈액형</S.DynamicSpan>
            <S.BloodWrapper>
              <S.BloodSelect
                onClick={toggleDropdown}
                value={selectedOption}
                readOnly
              />
              <S.Drop src={Drop} alt="드롭다운" onClick={toggleDropdown} />
              {isOpen && (
                <S.DropdownContent>
                  <S.DropdownItemTop onClick={() => selectOption('잘 모르겠어요')}>잘 모르겠어요</S.DropdownItemTop>
                  <S.DropdownItem onClick={() => selectOption('DEA1-')}>DEA 1-</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption('DEA 1.1')}>DEA 1.1</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption('DEA 1.2')}>DEA 1.2</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption('DEA 3')}>DEA 3</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption('DEA 4')}>DEA 4</S.DropdownItem>
                  <S.DropdownItem onClick={() => selectOption('DEA 5')}>DEA 5</S.DropdownItem>
                  <S.DropdownItemBottom onClick={() => selectOption('DEA 7')}>DEA 7</S.DropdownItemBottom>
                </S.DropdownContent>
              )}
            </S.BloodWrapper>
          </S.BloodContainer>
          <S.OpContainer>
            <S.DynamicSpan active={false}>중성화 수술 여부</S.DynamicSpan>
            <S.OpSelect>
              <S.OBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.OpText>했어요</S.OpText>
              </S.OBtn>
              <S.XBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.OpText>안했어요</S.OpText>
              </S.XBtn>
            </S.OpSelect>
          </S.OpContainer>
          <S.GenderContainer>
            <S.DynamicSpan active={false}>성별</S.DynamicSpan>
            <S.GenderSelect>
              <S.WBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>여아</S.GenText>
              </S.WBtn>
              <S.MBtn>
                <S.Check src={Check} alt="체크표시"/>
                <S.GenText>남아</S.GenText>
              </S.MBtn>
            </S.GenderSelect>
          </S.GenderContainer>
          <S.WeightContainer>
            <S.DynamicSpan active={false}>몸무게</S.DynamicSpan>
            <S.WeightPlace placeholder="예) 5" />
          </S.WeightContainer>
          <S.AgeContainer>
            <S.DynamicSpan active={false}>나이(세)</S.DynamicSpan>
            <S.AgePlace placeholder="예) 1" />
          </S.AgeContainer>
          <S.NameContainer>
            <span>이름</span>
            <S.NamePlace placeholder=" "/>
          </S.NameContainer> 
        </S.PetWrapper>
        <Button type="button" onClick={handleNext}>
          다음
        </Button>
      </S.MainWrapper>
    </>
  );
};
