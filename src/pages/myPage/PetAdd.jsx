import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PetAdd.styled';
import PetProfile from '@assets/images/defaultDogImg.png';
import YesCheck from '@assets/icons/YesCheck.svg';
import NoCheck from '@assets/icons/NoCheck.svg';
import Drop from '@assets/icons/Drop.svg';
import CameraIcon from '@assets/icons/CameraIcon.svg';
import LeftButton from '@assets/icons/backIconNew.svg';
import axiosInstance from '@apis/axiosInstance'; // 이미 만든 axios 인스턴스

export const PetAdd = () => {
  const navigate = useNavigate();

  // 대표 강아지 여부 (true/false)
  const [selectedDog, setSelectedDog] = useState(null);

  // 성별 ("male"/"female")
  const [gender, setGender] = useState(null);

  // 중성화 여부 (true/false)
  const [neutered, setNeutered] = useState(null);

  // 이름, 나이, 몸무게
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
  });

  // 모든 필드가 채워졌는지 체크
  const [isFilled, setIsFilled] = useState(false);

  // 미리보기용 프로필 이미지 (Base64)
  const [profileImage, setProfileImage] = useState(PetProfile);
  // 실제 서버 전송용 파일
  const [selectedFile, setSelectedFile] = useState(null);

  // (1) 혈액형 드롭다운 상태
  const [bloodType, setBloodType] = useState(''); // 혈액형
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setBloodType(option);
    setIsOpen(false);
  };

  // (2) 모든 필드가 채워졌는지 확인
  useEffect(() => {
    const allFilled =
      formData.name.trim() !== '' &&
      formData.age.trim() !== '' &&
      formData.weight.trim() !== '' &&
      selectedDog !== null &&
      gender !== null &&
      neutered !== null &&
      bloodType !== ''; // 혈액형도 필수
    setIsFilled(allFilled);
  }, [formData, selectedDog, gender, neutered, bloodType]);

  // (3) 숫자만 입력 (나이, 몸무게)
  const handleInputChange = (field, value) => {
    if (field === 'age' || field === 'weight') {
      value = value.replace(/[^0-9]/g, '');
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // (4) 이미지 업로드 (파일 + 미리보기)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // 실제 서버 전송용 파일
      // 미리보기(Base64)
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // (5) "저장" 버튼 -> 서버에 POST 요청
  const handleSave = async () => {
    if (!isFilled) return; // 모든 필드가 채워지지 않았다면 중단

    try {
      // multipart/form-data로 전송할 FormData 생성
      const fd = new FormData();

      // 대표 강아지 여부 (백엔드에서 boolean으로 받는다고 가정)
      fd.append('represent', selectedDog);

      // 이름, 나이, 몸무게
      fd.append('dog_name', formData.name);
      fd.append('dog_age', parseInt(formData.age, 10));
      fd.append('weight', formData.weight);

      // 성별 (백엔드가 "남아"/"여아"를 받는다고 가정)
      if (gender === 'male') {
        fd.append('gender', '남아');
      } else if (gender === 'female') {
        fd.append('gender', '여아');
      }

      // 중성화 (boolean)
      fd.append('neuter', neutered);

      // 혈액형
      fd.append('blood', bloodType);

      // 이미지 파일 (선택한 경우에만)
      if (selectedFile) {
        fd.append('dog_image', selectedFile);
      }

      // 서버에 전송
      const response = await axiosInstance.post(
        '/api/users/dogs/',
        fd,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('반려견 등록 성공:', response.data);
      alert('반려견이 성공적으로 등록되었습니다!');
      navigate('/mypage/petinfo');
    } catch (error) {
      console.error('반려견 등록 실패:', error);
      alert('반려견 등록에 실패했습니다.');
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <img src={LeftButton} alt="뒤로 가기" />
        </S.BackButton>
        새로운 반려견 추가
        <S.Blank />
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
              onClick={() => setSelectedDog(true)}
              selected={selectedDog === true}
            >
              <img
                src={selectedDog === true ? YesCheck : NoCheck}
                alt="예"
              />{' '}
              예
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setSelectedDog(false)}
              selected={selectedDog === false}
            >
              <img
                src={selectedDog === false ? YesCheck : NoCheck}
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
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            placeholder="나이를 입력해주세요"
          />
        </S.DetailBox>

        {/* 몸무게 */}
        <S.TitleBox>몸무게(kg)</S.TitleBox>
        <S.DetailBox>
          <S.Input
            type="text"
            value={formData.weight}
            onChange={(e) =>
              handleInputChange('weight', e.target.value)
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
                alt="여아"
              />{' '}
              여아
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setGender('male')}
              selected={gender === 'male'}
            >
              <img
                src={gender === 'male' ? YesCheck : NoCheck}
                alt="남아"
              />{' '}
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
                alt="했어요"
              />{' '}
              했어요
            </S.YesCheckBox>
            <S.NoCheckBox
              onClick={() => setNeutered(false)}
              selected={neutered === false}
            >
              <img
                src={neutered === false ? YesCheck : NoCheck}
                alt="안했어요"
              />{' '}
              안했어요
            </S.NoCheckBox>
          </S.CheckBox>
        </S.DetailBox>

        {/* 혈액형 (드롭다운) */}
        <S.TitleBox>혈액형</S.TitleBox>
        <S.DetailBox>
          <S.BloodWrapper onClick={toggleDropdown}>
            <S.BloodSelect hasValue={!!bloodType}>
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

        <S.Save isFilled={isFilled} onClick={handleSave}>
          저장
        </S.Save>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
