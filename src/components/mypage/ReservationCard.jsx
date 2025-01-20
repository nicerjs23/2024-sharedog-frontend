import * as S from "./ReservationCard.styled";
import Profile from "@assets/images/profileimg.png";

export const ReservationCard = ({ date1, date2, time, place, progress }) => {
  return (
    <S.Wrapper>
      <S.DateSection>{date1}</S.DateSection>
      <S.CardSection>
        <S.NameBox>
          <S.NameContainer>
            <S.ImgBox>
              <img
                src={Profile}
                alt="프로필 사진"
                style={{ width: "52px", height: "52px" }}
              />
            </S.ImgBox>
            <S.NameText>미뇽이</S.NameText>
          </S.NameContainer>
          <S.Progress>헌혈 진행 전</S.Progress>
        </S.NameBox>
        <S.Line></S.Line>
        <S.DetailBox>
          <S.Detail>날짜</S.Detail>12월 31일 수요일
        </S.DetailBox>
        <S.DetailBox>
          <S.Detail>시간</S.Detail>오후 1:00
        </S.DetailBox>
        <S.DetailBox>
          <S.Detail>장소</S.Detail>아임도그너
        </S.DetailBox>
      </S.CardSection>
    </S.Wrapper>
  );
};

export default ReservationCard; // default로 내보내기
