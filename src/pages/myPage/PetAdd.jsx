import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PetAdd.styled";
import PetProfile from "@assets/images/petprofile.png";
import YesCheck from "@assets/icons/YesCheck.svg";
import NoCheck from "@assets/icons/NoCheck.svg";
import CameraIcon from "@assets/icons/CameraIcon.svg";
import LeftButton from "@assets/icons/Left.svg";

export const PetAdd = () => {
  const navigate = useNavigate();
  const [selectedDog, setSelectedDog] = useState(null);
  const [gender, setGender] = useState(null);
  const [neutered, setNeutered] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
  });

  const [isFilled, setIsFilled] = useState(false);
  const [profileImage, setProfileImage] = useState(PetProfile);

  useEffect(() => {
    // 모든 필드가 입력되었는지 확인
    const allFilled =
      formData.name.trim() !== "" &&
      formData.age.trim() !== "" &&
      formData.weight.trim() !== "" &&
      selectedDog !== null &&
      gender !== null &&
      neutered !== null;
    setIsFilled(allFilled);
  }, [formData, selectedDog, gender, neutered]);

  const handleInputChange = (field, value) => {
    if (field === "age" || field === "weight") {
      value = value.replace(/[^0-9]/g, "");
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!isFilled) return; // 모든 필드가 채워지지 않았으면 저장 안 함

    const newPet = {
      id: Date.now(), // 고유한 ID 생성
      name: formData.name,
      age: formData.age,
      weight: formData.weight,
      profileImage,
      selectedDog,
      gender,
      neutered,
    };

    // 기존 petList 불러와서 새 데이터 추가
    const existingPets = JSON.parse(localStorage.getItem("petList")) || [];
    const updatedList = [...existingPets, newPet];

    localStorage.setItem("petList", JSON.stringify(updatedList)); // 저장
    navigate("/petinfo"); // PetInfo 페이지로 이동
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <img src={LeftButton} alt="뒤로 가기" />
        </S.BackButton>
        새로운 반려견 등록
        <S.Blank />
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
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => setProfileImage(reader.result);
                reader.readAsDataURL(file);
              }
            }}
          />
        </S.Camera>
      </S.ProfileContainer>

      <S.ScrollableContent>
        <S.TitleBox>대표 강아지</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setSelectedDog(true)}
              selected={selectedDog === true}
            >
              <img src={selectedDog === true ? YesCheck : NoCheck} alt="예" />{" "}
              예
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setSelectedDog(false)}
              selected={selectedDog === false}
            >
              <img
                src={selectedDog === false ? YesCheck : NoCheck}
                alt="아니오"
              />{" "}
              아니오
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

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
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            placeholder="나이를 입력해주세요"
          />
        </S.DetailBox>

        <S.TitleBox>몸무게(kg)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            value={formData.weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
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
              <img src={gender === "female" ? YesCheck : NoCheck} alt="여아" />{" "}
              여아
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setGender("male")}
              selected={gender === "male"}
            >
              <img src={gender === "male" ? YesCheck : NoCheck} alt="남아" />{" "}
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
              <img src={neutered === true ? YesCheck : NoCheck} alt="했어요" />{" "}
              했어요
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setNeutered(false)}
              selected={neutered === false}
            >
              <img
                src={neutered === false ? YesCheck : NoCheck}
                alt="안했어요"
              />{" "}
              안했어요
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

        <S.Save isFilled={isFilled} onClick={handleSave}>
          저장
        </S.Save>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
