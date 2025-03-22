import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './PetEdit.styled';
import PetProfile from '@assets/images/defaultDogImg.png';
import YesCheck from '@assets/icons/YesCheck.svg';
import NoCheck from '@assets/icons/NoCheck.svg';
import Drop from '@assets/icons/Drop.svg';
import CameraIcon from '@assets/icons/CameraIcon.svg';
import axiosInstance from '@apis/axiosInstance';

/**
 * 백엔드에서 "남아", "여아"로 저장하고,
 * 프론트에서는 내부적으로 'male', 'female'을 사용한다고 가정.
 */
function mapGenderToInternal(genderValue) {
  if (genderValue === '남아') return 'male';
  if (genderValue === '여아') return 'female';
  return genderValue; // 이미 'male'/'female'이면 그대로
}

function mapGenderToServer(genderValue) {
  if (genderValue === 'male') return '남아';
  if (genderValue === 'female') return '여아';
  return '';
}

export const PetEdit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // (1) PetCard에서 넘겨온 반려견 ID와 기존 정보
  const dogId = state?.id;
  // 대표 강아지 여부
  const initialRepresent = state?.represent ?? false;

  // (2) 성별, 중성화 초기값 맵핑
  const initialGender = mapGenderToInternal(state?.gender);
  const initialNeutered =
    typeof state?.neutered === 'boolean' ? state?.neutered : null;

  // (3) 폼 상태 (이름, 나이, 몸무게)
  const [formData, setFormData] = useState({
    name: state?.name || '',
    age: state?.age?.toString() || '',
    weight: state?.weight || '',
  });
  const [gender, setGender] = useState(initialGender); // 'male'/'female' | null
  const [neutered, setNeutered] = useState(initialNeutered); // true | false | null
  const [represent, setRepresent] = useState(initialRepresent); // true | false
  // (4) 파일 업로드용 상태
  const [selectedFile, setSelectedFile] = useState(null);
  // (5) 미리보기용 (기존 이미지 또는 Base64)
  const [profileImage, setProfileImage] = useState(
    state?.profileImage || PetProfile
  );

  // (6) 혈액형 드롭다운 상태
  //     PetCard에서 넘어온 bloodType을 기본값으로 사용
  const [bloodType, setBloodType] = useState(state?.bloodType || '');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setBloodType(option);
    setIsOpen(false);
  };

  // 숫자만 입력
  const handleNumberInput = (field, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData((prev) => ({ ...prev, [field]: numericValue }));
  };

  // 일반 문자열 입력
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 이미지 업로드 (파일 + 미리보기)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // "저장" 버튼 -> PATCH API
  const handleSave = async () => {
    if (!dogId) {
      alert(
        '반려견 ID가 없습니다. 이전 화면에서 데이터를 확인하세요.'
      );
      return;
    }

    try {
      // FormData 생성
      const formDataToSend = new FormData();
      // 대표 강아지 여부
      formDataToSend.append('represent', represent);

      // 이름, 나이, 몸무게
      formDataToSend.append('dog_name', formData.name);
      formDataToSend.append('dog_age', parseInt(formData.age, 10));
      formDataToSend.append('weight', formData.weight);

      // 성별 (프론트 'male'/'female' -> 백엔드 '남아'/'여아')
      const serverGender = mapGenderToServer(gender);
      formDataToSend.append('gender', serverGender);

      // 중성화 (boolean)
      formDataToSend.append('neuter', neutered);

      // (★) 혈액형
      // PetCard에서 받은 bloodType or 드롭다운에서 선택한 값
      // 예: 백엔드에서 "DEA 1-" 형태를 그대로 저장한다고 가정
      formDataToSend.append('blood', bloodType);

      // 새 파일 선택 시에만 이미지 업로드
      if (selectedFile) {
        formDataToSend.append('dog_image', selectedFile);
      }

      // PATCH 요청
      const response = await axiosInstance.patch(
        `/api/users/dogs/${dogId}/`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('서버 응답:', response.data);
      alert('정보가 성공적으로 수정되었습니다!');
      navigate('/mypage/petinfo');
    } catch (error) {
      console.error('반려견 정보 수정 실패:', error);
      alert('반려견 정보 수정에 실패했습니다.');
    }
  };

  // 취소 버튼
  const handleCancel = () => {
    navigate('/mypage/petinfo');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Cancel onClick={handleCancel}>취소</S.Cancel>
        반려견 정보 수정
        <S.Save onClick={handleSave}>저장</S.Save>
      </S.Header>

      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} alt="강아지 프로필사진" />
        <S.Camera>
          <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
            <img src={CameraIcon} alt="카메라 아이콘" />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </S.Camera>
      </S.ProfileContainer>

      <S.ScrollableContent>
        {/* 대표 강아지 여부 */}
        <S.TitleBox>대표 강아지</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setRepresent(true)}
              selected={represent === true}
            >
              <img
                src={represent === true ? YesCheck : NoCheck}
                alt="예"
              />{' '}
              예
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setRepresent(false)}
              selected={represent === false}
            >
              <img
                src={represent === false ? YesCheck : NoCheck}
                alt="아니오"
              />{' '}
              아니오
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

        {/* 이름 */}
        <S.TitleBox>이름</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            value={formData.name}
            onChange={(e) =>
              handleInputChange('name', e.target.value)
            }
            placeholder="이름을 입력해주세요"
          />
        </S.DetailBox>

        {/* 나이 */}
        <S.TitleBox>나이(세)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.age}
            onChange={(e) => handleNumberInput('age', e.target.value)}
            placeholder="나이를 입력해주세요"
          />
        </S.DetailBox>

        {/* 몸무게 */}
        <S.TitleBox>몸무게(kg)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.weight}
            onChange={(e) =>
              handleNumberInput('weight', e.target.value)
            }
            placeholder="몸무게를 입력해주세요"
          />
        </S.DetailBox>

        {/* 성별 */}
        <S.TitleBox>성별</S.TitleBox>
        <S.DetailBox>
          <S.CheckBox>
            <S.YesCheckBox
              onClick={() => setGender('female')}
              selected={gender === 'female'}
            >
              <img
                src={gender === 'female' ? YesCheck : NoCheck}
                alt="여아 체크 아이콘"
              />
              여아
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setGender('male')}
              selected={gender === 'male'}
            >
              <img
                src={gender === 'male' ? YesCheck : NoCheck}
                alt="남아 체크 아이콘"
              />
              남아
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

        {/* 중성화 */}
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

        {/* 혈액형 (드롭다운) */}
        <S.TitleBox>혈액형</S.TitleBox>
        <S.DetailBox>
          <S.BloodWrapper onClick={toggleDropdown}>
            <S.BloodSelect>
              {bloodType ? bloodType : '혈액형 선택'}
            </S.BloodSelect>
            <S.Drop src={Drop} alt="드롭다운 아이콘" />
            {isOpen && (
              <S.DropdownContent>
                <S.DropdownItemTop
                  onClick={() => selectOption('잘 모르겠어요')}
                >
                  잘 모르겠어요
                </S.DropdownItemTop>
                <S.DropdownItem
                  onClick={() => selectOption('DEA 1-')}
                >
                  DEA 1-
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => selectOption('DEA 1.1')}
                >
                  DEA 1.1
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => selectOption('DEA 1.2')}
                >
                  DEA 1.2
                </S.DropdownItem>
                <S.DropdownItem onClick={() => selectOption('DEA 3')}>
                  DEA 3
                </S.DropdownItem>
                <S.DropdownItem onClick={() => selectOption('DEA 4')}>
                  DEA 4
                </S.DropdownItem>
                <S.DropdownItem onClick={() => selectOption('DEA 5')}>
                  DEA 5
                </S.DropdownItem>
                <S.DropdownItemBottom
                  onClick={() => selectOption('DEA 7')}
                >
                  DEA 7
                </S.DropdownItemBottom>
              </S.DropdownContent>
            )}
          </S.BloodWrapper>
        </S.DetailBox>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
