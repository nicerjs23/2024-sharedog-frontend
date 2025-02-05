import * as S from "./PetInfo.styled";
import { useState, useEffect } from "react";
import PetCard from "@components/mypage/PetCard";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 가져오기
import axios from "@apis/axiosInstance"; // axiosInstance 가져오기
import LeftButton from "@assets/icons/Left.svg";

export const PetInfo = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화
  const BackClick = () => {
    navigate(-1);
  };
  const handleNavigate = (path) => {
    navigate(path); // path에 따라 페이지 이동
  };

  const [id, setId] = useState("");
  const [user, setUser] = useState("");
  const [dog_name, setDogName] = useState("");
  const [dog_age, setDogAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [neuter, setNeuter] = useState("");
  const [blood, setBlood] = useState("");
  const [dog_image, setDogImage] = useState("");
  const [represent, setRepresent] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [updated_at, setUpdatedAt] = useState("");

  //   const fetchPetInfo = async () => {
  //     try {
  //       const response = await axios.get("/api/users/dogs/"); // API 호출
  //       console.log("API 응답 전체 데이터:", response.data); // 전체 응답 데이터를 콘솔에 출력
  //       const { id } = response.data[0];
  //       setId(id);
  //       const { user } = response.data[1];
  //       setUser(user);
  //       const { dog_name } = response.data[2];
  //       setDogName(dog_name);
  //       const { dog_age } = response.data[3];
  //       setDogAge(dog_age);
  //       const { weight } = response.data[4];
  //       setWeight(weight);
  //       const { gender } = response.data[5];
  //       setGender(gender);
  //       const { neuter } = response.data[6];
  //       setNeuter(neuter);
  //       const { blood } = response.data[7];
  //       setBlood(blood);
  //       const { dog_image } = response.data[8];
  //       setDogImage(dog_image);
  //       const { represent } = response.data[9];
  //       setRepresent(represent);
  //       const { created_at } = response.data[10];
  //       setCreatedAt(created_at);
  //       const { updated_at } = response.data[11];
  //       setUpdatedAt(updated_at);
  //     } catch (error) {
  //       console.error("사용자 정보 가져오기 실패:", error);
  //     }
  //   };

  const fetchPetInfo = async () => {
    try {
      const response = await axios.get("/api/users/dogs/");
      console.log("API 응답 데이터:", response.data);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  useEffect(() => {
    fetchPetInfo();
  }, []);

  //   const pets = [
  //     {
  //       id: 1,
  //       name: "루시",
  //       age: "2세",
  //       weight: "5",
  //       gender: "여아",
  //       neutered: true,
  //       bloodType: "DEA -1",
  //     },
  //   ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton>
          <img src={LeftButton} alt="백 버튼" onClick={BackClick} />
        </S.BackButton>
        <div>반려견 정보</div>
        <S.Blank></S.Blank>
      </S.Header>
      <S.PetList>
        <PetCard>
          {id && `${id}`}
          {user && `${user}`}
          {dog_name && `${dog_name}`}
          {dog_age && `${dog_age}`}
          {weight && `${weight}`}
          {gender && `${gender}`}
          {neuter && `${neuter}`}
          {blood && `${blood}`}
          {dog_image && `${dog_image}`}
          {represent && `${represent}`}
          {created_at && `${created_at}`}
          {updated_at && `${updated_at}`}
        </PetCard>
        {/* {pets.map((pet) => (
          <PetCard
            key={pet.id}
            name={pet.name}
            age={pet.age}
            weight={pet.weight}
            gender={pet.gender}
            neutered={pet.neutered}
            bloodType={pet.bloodType}
          />
        ))} */}
      </S.PetList>
      <S.AddPet onClick={() => handleNavigate("/petadd")}>
        새로운 반려견을 추가하고 싶어요
      </S.AddPet>
    </S.Wrapper>
  );
};
