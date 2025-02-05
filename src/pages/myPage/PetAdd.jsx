import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import * as S from "./PetAdd.styled";
import PetProfile from "@assets/images/petprofile.png";
import YesCheck from "@assets/icons/YesCheck.svg";
import NoCheck from "@assets/icons/NoCheck.svg";
import CameraIcon from "@assets/icons/CameraIcon.svg";
import LeftButton from "@assets/icons/Left.svg";

export const PetAdd = () => {
  const navigate = useNavigate(); // navigate 객체 생성
  const [selectedDog, setSelectedDog] = useState(null);
  const [gender, setGender] = useState(null);
  const [neutered, setNeutered] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
  });

  const [profileImage, setProfileImage] = useState(PetProfile); // 초기 프로필 이미지

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // 프로필 이미지 상태 업데이트
      };
      reader.readAsDataURL(file); // 파일을 Base64 URL로 변환
    }
  };

  const handleSave = () => {
    const updatedData = {
      ...formData,
      selectedDog,
      gender,
      neutered,
      profileImage, // 프로필 이미지 포함
    };

    console.log("저장된 데이터:", updatedData);
    alert("정보가 성공적으로 저장되었습니다!");
    // 실제 API 호출 로직을 여기에 추가 (ex. axios.post)
  };

  const handleCancel = () => {
    navigate("/petinfo"); // 취소 버튼 클릭 시 PetInfo 페이지로 이동
  };

  const BackClick = () => {
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton>
          <img src={LeftButton} alt="백 버튼" onClick={BackClick} />
        </S.BackButton>
        반려견 정보 수정
        <S.Blank></S.Blank>
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
        <S.TitleBox>대표 강아지</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setSelectedDog(true)}
              selected={selectedDog === true}
            >
              <img
                src={selectedDog === true ? YesCheck : NoCheck}
                alt="예 체크 아이콘"
              />
              예
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setSelectedDog(false)}
              selected={selectedDog === false}
            >
              <img
                src={selectedDog === false ? YesCheck : NoCheck}
                alt="아니오 체크 아이콘"
              />
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
            type="number"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            placeholder="나이를 입력해주세요"
          />
        </S.DetailBox>

        <S.TitleBox>몸무게(kg)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="number"
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

        <S.Save>저장</S.Save>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
