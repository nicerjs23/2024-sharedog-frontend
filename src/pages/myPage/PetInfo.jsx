import * as S from "./PetInfo.styled";
import PetCard from "@components/mypage/PetCard";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 가져오기

export const PetInfo = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleNavigate = (path) => {
    navigate(path); // path에 따라 페이지 이동
  };

  // 반려견 데이터 (예시)
  const pets = [
    {
      id: 1,
      name: "루시",
      age: "2세",
      weight: "5",
      gender: "여아",
      neutered: true,
      bloodType: "DEA -1",
    },
  ];

  return (
    <S.Wrapper>
      <S.Header>반려견 정보</S.Header>
      <S.PetList>
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            name={pet.name}
            age={pet.age}
            weight={pet.weight}
            gender={pet.gender}
            neutered={pet.neutered}
            bloodType={pet.bloodType}
          />
        ))}
      </S.PetList>
      <S.AddPet>새로운 반려견을 추가하고 싶어요</S.AddPet>
    </S.Wrapper>
  );
};
