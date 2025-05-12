import * as S from './PetInfo.styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가
import PetCard from '@components/mypage/PetCard';
import axios from '@apis/axiosInstance';
import LeftButton from '@assets/icons/backIconNew.svg';

export const PetInfo = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔹 state 값 감지를 위해 useLocation 사용
  const [petList, setPetList] = useState([]); // 반려견 목록 상태

  // 뒤로 가기 버튼
  const BackClick = () => {
    navigate('/mypage');
  };

  // 새로운 반려견 추가 페이지로 이동
  const handleNavigate = () => {
    navigate('/mypage/petadd');
  };

  // ✅ API에서 반려견 정보 불러오기
  const fetchPetInfo = async () => {
    try {
      const response = await axios.get('/api/users/dogs/');
      //console.log('API 응답 데이터:', response.data);

      let pets = [];
      if (response.data.length > 0) {
        pets = response.data;
      } else {
        pets = []; // localStorage 사용 X
      }

      // (★) represent === true인 항목을 위로 정렬
      // boolean을 숫자로 변환해 정렬하면 true(1)이 false(0)보다 앞에 오도록 할 수 있습니다.
      // 또는 if-else 로직을 써도 됩니다.
      pets.sort((a, b) => Number(b.represent) - Number(a.represent));

      setPetList(pets);
    } catch (error) {
      console.error('API 요청 실패:', error);
      // API 요청 실패 시, 로컬 스토리지 데이터 로드
    }
  };

  // ✅ 페이지 로드 & 반려견 추가 후 상태 변경 감지
  useEffect(() => {
    fetchPetInfo();
  }, [location.state]); // 🔹 반려견 추가 후 location.state 감지하여 실행

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton onClick={BackClick}>
          <img src={LeftButton} alt="뒤로 가기" />
        </S.BackButton>
        <div>반려견 정보</div>
        <S.Blank />
      </S.Header>

      <S.ScrollableContent>
        <S.PetList>
          {petList.length > 0 ? (
            petList.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                represent={pet.represent}
                name={pet.dog_name || pet.name}
                age={`${pet.dog_age || pet.age}세`}
                weight={`${pet.weight}`}
                gender={pet.gender === 'female' ? '여아' : '남아'}
                neutered={pet.neuter}
                profileImage={pet.dog_image || pet.profileImage}
                bloodType={pet.blood}
              />
            ))
          ) : (
            <p>등록된 반려견이 없습니다.</p>
          )}
        </S.PetList>

        <S.AddPet onClick={handleNavigate}>
          새로운 반려견을 추가하고 싶어요
        </S.AddPet>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
