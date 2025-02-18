import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PetEdit.styled";
import PetProfile from "@assets/images/petprofile.png";
import YesCheck from "@assets/icons/YesCheck.svg";
import NoCheck from "@assets/icons/NoCheck.svg";
import CameraIcon from "@assets/icons/CameraIcon.svg";

export const PetEdit = () => {
  const navigate = useNavigate();
  const [selectedDog, setSelectedDog] = useState(null);
  const [gender, setGender] = useState(null);
  const [neutered, setNeutered] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
  });

  const [profileImage, setProfileImage] = useState(PetProfile);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNumberInput = (field, value) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // 숫자만 허용
    setFormData((prev) => ({ ...prev, [field]: numericValue }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = {
      ...formData,
      selectedDog,
      gender,
      neutered,
      profileImage,
    };

    console.log("저장된 데이터:", updatedData);
    alert("정보가 성공적으로 저장되었습니다!");
    navigate("/petinfo"); // 저장 후 petinfo 페이지로 이동
  };

  const handleCancel = () => {
    navigate("/petinfo");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Cancel onClick={handleCancel}>취소</S.Cancel>반려견 정보 수정
        <S.Save onClick={handleSave}>저장</S.Save>
      </S.Header>
      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} alt="강아지 프로필사진" />
        <S.Camera>
          <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
            <img src={CameraIcon} alt="카메라 아이콘" />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </S.Camera>
      </S.ProfileContainer>

      <S.ScrollableContent>
        <S.TitleBox>이름</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="이름을 입력해주세요"
          />
        </S.DetailBox>

        <S.TitleBox>나이(세)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.age}
            onChange={(e) => handleNumberInput("age", e.target.value)}
            placeholder="나이를 입력해주세요"
          />
        </S.DetailBox>

        <S.TitleBox>몸무게(kg)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.weight}
            onChange={(e) => handleNumberInput("weight", e.target.value)}
            placeholder="몸무게를 입력해주세요"
          />
        </S.DetailBox>

        <S.TitleBox>성별</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setGender("female")}
              selected={gender === "female"}
            >
              <img
                src={gender === "female" ? YesCheck : NoCheck}
                alt="여아 체크 아이콘"
              />
              여아
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setGender("male")}
              selected={gender === "male"}
            >
              <img
                src={gender === "male" ? YesCheck : NoCheck}
                alt="남아 체크 아이콘"
              />
              남아
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

        <S.TitleBox>중성화 수술 여부</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setNeutered(true)}
              selected={neutered === true}
            >
              <img
                src={neutered === true ? YesCheck : NoCheck}
                alt="했어요 체크 아이콘"
              />
              했어요
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setNeutered(false)}
              selected={neutered === false}
            >
              <img
                src={neutered === false ? YesCheck : NoCheck}
                alt="안했어요 체크 아이콘"
              />
              안했어요
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
