import React, { useState, useEffect } from 'react';
import ReservationCard from '@components/mypage/ReservationCard';
import * as S from './Reservation.styled';
import { useNavigate } from 'react-router-dom';
import LeftButton from '@assets/icons/Left.svg';
import axiosInstance from '@apis/axiosInstance'; // ✅ axiosInstance 임포트
export const Reservation = () => {
  const navigate = useNavigate();
  const BackClick = () => {
    navigate(-1);
  };

  // ✅ 예약 정보 상태
  const [reservations, setReservations] = useState([]);

  // ✅ 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // /api/users/mypromise 엔드포인트로 GET 요청
        const response = await axiosInstance.get(
          '/api/users/mypromise/'
        );
        //console.log('예약 데이터:', response.data);

        // 서버에서 받은 데이터 형태에 맞춰 상태에 저장
        setReservations(response.data);
      } catch (error) {
        console.error('예약 데이터 불러오기 실패:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton>
          <img src={LeftButton} alt="백 버튼" onClick={BackClick} />
        </S.BackButton>
        나의 긴급헌혈 약속
        <S.Blank></S.Blank>
      </S.Header>
      <S.ScrollableContent>
        <S.ReservationList>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <ReservationCard
                key={reservation.id}
                // 서버에서 받은 필드명에 맞춰 props로 전달
                promiseDay={reservation.day} // 예: "2025-03-21"
                profile={reservation.other_user_image}
                name={reservation.other_user}
                created={reservation.created_at} //약속만든날
                date2={reservation.created_at} // 예: "2025-03-08T15:42:53.669904"
                time={reservation.time} // 예: "15:44:00"
                place={reservation.place} // 예: "너네집"
                // progress 필드가 서버 응답에 없다면 임의로 지정하거나 제거
              />
            ))
          ) : (
            <p>예약 내역이 없습니다.</p>
          )}
        </S.ReservationList>
      </S.ScrollableContent>
    </S.Wrapper>
  );
};
