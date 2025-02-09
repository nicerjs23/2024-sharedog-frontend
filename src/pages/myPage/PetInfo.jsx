import * as S from "./PetInfo.styled";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import PetCard from "@components/mypage/PetCard";
import axios from "@apis/axiosInstance";
import LeftButton from "@assets/icons/Left.svg";

export const PetInfo = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔹 state 값 감지를 위해 useLocation 사용
  const [petList, setPetList] = useState([]); // 반려견 목록 상태

  // 뒤로 가기 버튼
  const BackClick = () => {
    navigate(-1);
  };

  // 새로운 반려견 추가 페이지로 이동
  const handleNavigate = () => {
    navigate("/petadd");
  };

  // ✅ API에서 반려견 정보 불러오기
  const fetchPetInfo = async () => {
    try {
      const response = await axios.get("/api/users/dogs/");
      console.log("API 응답 데이터:", response.data);

      if (response.data.length > 0) {
        setPetList(response.data); // API 데이터를 우선적으로 사용
      } else {
        // API에 데이터가 없으면 로컬 스토리지 데이터 사용
        const storedPets = JSON.parse(localStorage.getItem("petList")) || [];
        setPetList(storedPets);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      // API 요청 실패 시, 로컬 스토리지 데이터 로드
      const storedPets = JSON.parse(localStorage.getItem("petList")) || [];
      setPetList(storedPets);
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
                name={pet.dog_name || pet.name}
                age={`${pet.dog_age || pet.age}세`}
                weight={`${pet.weight}`}
                gender={pet.gender === "female" ? "여아" : "남아"}
                neutered={pet.neuter || pet.neutered ? "했어요" : "안했어요"}
                profileImage={pet.dog_image || pet.profileImage}
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
