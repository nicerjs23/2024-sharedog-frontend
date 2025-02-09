import React from "react";
import ReservationCard from "@components/mypage/ReservationCard";
import * as S from "./Reservation.styled";
import { useNavigate } from "react-router-dom";
import LeftButton from "@assets/icons/Left.svg";

export const Reservation = () => {
  const navigate = useNavigate();
  const BackClick = () => {
    navigate(-1);
  };

  // 반려견 데이터 (예시)
  const reservations = [
    {
      date1: "2024.12.31",
      date2: "12월 31일 수요일",
      time: "오후 1:00",
      place: "아임도그너",
      progress: "헌혈 진행 전",
    },
    {
      date1: "2024.12.25",
      date2: "12월 25일 수요일",
      time: "오후 3:00",
      place: "펫카페",
      progress: "예약 완료",
    },
    // 더 많은 예약 항목을 추가하여 스크롤 테스트 가능
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton>
          <img src={LeftButton} alt="백 버튼" onClick={BackClick} />
        </S.BackButton>
        예약 내역
        <S.Blank></S.Blank>
      </S.Header>
      <S.ScrollableContent>
        <S.ReservationList>
          {reservations.map((reservation, index) => (
            <ReservationCard
              key={index}
              date1={reservation.date1}
              date2={reservation.date2}
              time={reservation.time}
              place={reservation.place}
              progress={reservation.progress}
            />
          ))}
        </S.ReservationList>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
