import * as S from './MyPage.styled';
import Profile from '@assets/images/profileimg.png';
import myBackIcon from '@assets/icons/Next.svg';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 가져오기

import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect } from 'react';
export const MyPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleNavigate = (path) => {
    navigate(path); // path에 따라 페이지 이동
  };
  // 사용자 데이터 상태
  const [userData, setUserData] = useState(null);

  // API 호출하여 사용자 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/api/users/mypage'); // GET 요청
        console.log('받아온 데이터:', response.data); // 콘솔 로그로 확인

        setUserData(response.data[0]); // 첫 번째 유저 데이터 저장
      } catch (error) {
        console.error('사용자 정보 가져오기 실패:', error);
      }
    };

    fetchUserData();
  }, []);
  // 유저 데이터가 없을 경우 기본값 설정
  const userName = userData?.user_name || '이름 없음';
  const profileImage = userData?.dogs?.[0]?.dog_image || null; // 반려견 이미지가 없으면 기본 이미지 사용

  return (
    <S.Wrapper>
      <S.Header>마이페이지</S.Header>
      <S.NameBox>
        <S.ImgBox>
          {/* 이미지가 있을 때만 렌더링 */}
          {profileImage && (
            <img
              src={profileImage}
              alt="프로필 사진"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
              }}
            />
          )}
        </S.ImgBox>
        <S.NameText>{userName}</S.NameText>
      </S.NameBox>
      <S.InfoBox>
        <S.CategoryText>내 정보</S.CategoryText>
        <S.CategoryDetail
          onClick={() => handleNavigate('/accountmanagement')}
        >
          계정 관리{' '}
          <S.NextIcon>
            <img src={myBackIcon} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryDetail onClick={() => handleNavigate('/petinfo')}>
          반려견 정보 관리{' '}
          <S.NextIcon>
            <img src={myBackIcon} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
        <S.CategoryText>긴급헌혈 예약 내역</S.CategoryText>
        <S.CategoryDetail
          onClick={() => handleNavigate('/reservation')}
        >
          예약 내역{' '}
          <S.NextIcon>
            <img src={myBackIcon} alt="다음 아이콘" />
          </S.NextIcon>
        </S.CategoryDetail>
      </S.InfoBox>
      <S.Contents>
        <S.ProfileCard></S.ProfileCard>
      </S.Contents>
    </S.Wrapper>
  );
};
