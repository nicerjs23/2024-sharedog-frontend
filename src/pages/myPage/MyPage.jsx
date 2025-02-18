import * as S from "./MyPage.styled";
import Profile from "@assets/images/profileimg.png";
import Next from "@assets/icons/Next.svg";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 가져오기

export const MyPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleNavigate = (path) => {
    navigate(path); // path에 따라 페이지 이동
  };

  return (
    <S.Wrapper>
      <S.Header>마이페이지</S.Header>
      <S.NameBox>
        <S.ImgBox>
          <img
            src={Profile}
            alt="프로필 사진"
            style={{ width: "52px", height: "52px" }}
          />
        </S.ImgBox>
        <S.NameText>황민영</S.NameText>
      </S.NameBox>
      <S.InfoBox>
        <S.CategoryText>내 정보</S.CategoryText>
        <S.CategoryDetail onClick={() => handleNavigate("/accountmanagement")}>
          계정 관리{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryDetail onClick={() => handleNavigate("/petinfo")}>
          반려견 정보 관리{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryText>긴급헌혈 예약 내역</S.CategoryText>
        <S.CategoryDetail onClick={() => handleNavigate("/reservation")}>
          예약 내역{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
      </S.InfoBox>
    </S.Wrapper>
  );
};
