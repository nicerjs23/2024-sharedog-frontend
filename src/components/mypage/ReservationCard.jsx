import * as S from './ReservationCard.styled';
import defaultProfile from '@assets/images/defaultDogImg.png';

export const ReservationCard = ({
  promiseDay,
  profile,
  name,
  created,
  time,
  place,
}) => {
  // "2025-03-08T15:42:53.669904" -> "2025-03-08"
  const dateOnly = created.split('T')[0];
  // "2025-03-08" -> "2025.03.08"
  const formattedDate = dateOnly.replaceAll('-', '.');

  // 예약 날짜와 시간을 합쳐 Date 객체 생성 (예약 시간이 promiseDay와 time에 맞게 포맷되어 있어야 함)
  const promiseDateTime = new Date(`${promiseDay}T${time}`);
  // 현재 날짜와 비교
  const isPast = new Date() > promiseDateTime;

  return (
    <S.Wrapper>
      <S.DateSection>{formattedDate}</S.DateSection>
      <S.CardSection>
        <S.NameBox>
          <S.NameContainer>
            <S.ImgBox>
              <img
                src={profile || defaultProfile}
                alt="프로필 사진"
                style={{ width: '52px', height: '52px' }}
              />
            </S.ImgBox>
            <S.NameText>{name}</S.NameText>
          </S.NameContainer>
          <S.Progress $isPast={isPast}>
            {isPast ? '헌혈완료' : '헌혈 진행 전'}
          </S.Progress>
        </S.NameBox>
        <S.Line></S.Line>
        <S.DetailBox>
          <S.Detail>날짜</S.Detail>
          {promiseDay}
        </S.DetailBox>
        <S.DetailBox>
          <S.Detail>시간</S.Detail>
          {time}
        </S.DetailBox>
        <S.DetailBox>
          <S.Detail>장소</S.Detail>
          {place}
        </S.DetailBox>
      </S.CardSection>
    </S.Wrapper>
  );
};

export default ReservationCard; // default로 내보내기
