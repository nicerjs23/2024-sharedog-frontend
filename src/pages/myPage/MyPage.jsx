import * as S from "./MyPage.styled";
import Profile from "@assets/images/profileimg.png";
import Next from "@assets/icons/Next.svg";

export const MyPage = () => {
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
        <S.CategoryDetail>
          계정 관리{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryDetail>
          반려견 정보 관리{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryText>긴급헌혈 예약 내역</S.CategoryText>
        <S.CategoryDetail>
          예약 내역{" "}
          <S.NextIcon>
            <img src={Next} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
      </S.InfoBox>
    </S.Wrapper>
  );
};
