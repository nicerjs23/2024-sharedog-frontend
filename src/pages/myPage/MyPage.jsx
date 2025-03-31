import * as S from './MyPage.styled';
import defaultImg from '@assets/images/defaultDogImg.png';
import myBackIcon from '@assets/icons/Next.svg';
import profileEditIcon from '@assets/icons/profileEditIcon.svg';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect } from 'react';

import MyNextBtn from '@components/mypage/MyNextBtn';
import MyPageAccount from '@assets/icons/myPage/MyPageAccount.svg';
import dogAccount from '@assets/icons/myPage/dogAccount.svg';
import MypageWrite from '@assets/icons/myPage/MypageWrite.svg';
import MyPageHeart from '@assets/icons/myPage/MypageHeart2.svg';
import MyPageInquiry from '@assets/icons/myPage/MyPageInquiry.svg';
import MyPageNote from '@assets/icons/myPage/MyPageNote.svg';

export const MyPage = () => {
  const navigate = useNavigate();

  // 사용자 데이터 상태
  const [userData, setUserData] = useState(null);

  // API 호출하여 사용자 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/accounts/user-check'
        );
        console.log('받아온 데이터:', response.data);

        // 만약 response.data가 배열이 아니라 객체로 변경되었다면 아래처럼 직접 할당
        setUserData(response.data);
      } catch (error) {
        if (error.response) {
          console.error('에러 상태 코드:', error.response.status);
          console.error('에러 응답 데이터:', error.response.data);

          if (error.response.status === 401) {
            console.error('JWT 토큰 만료 또는 유효하지 않음.');
          } else {
            console.error(
              '사용자 정보 가져오기 실패:',
              error.response.data
            );
          }
        } else {
          console.error(
            '네트워크 에러 또는 서버에 응답이 없습니다:',
            error
          );
        }
      }
    };

    fetchUserData();
  }, []);

  // 유저 데이터가 없을 경우 기본값 설정
  const userName = userData?.user_name || '이름 없음';
  const profileImage = userData?.profile_image || defaultImg;

  return (
    <S.Wrapper>
      <S.Header>마이페이지</S.Header>

      <S.Contents>
        <S.ProfileCard>
          {/* 프로필 이미지 */}
          <S.ProfileImg src={profileImage} alt="프로필 사진" />
          <S.ProfileInfo>
            {/* 유저 이름 */}
            <S.ProfileName>{userName}</S.ProfileName>
          </S.ProfileInfo>
        </S.ProfileCard>

        {/* 나의 정보 */}
        <S.MyPageCard>
          <S.CardTitle>나의 정보</S.CardTitle>
          <S.CardNav
            onClick={() => navigate('/mypage/accountmanagement')}
          >
            <S.CardNavContents>
              <img
                src={MyPageAccount}
                alt="톱니바퀴아이콘"
                className="Icon"
              />
              <S.CardNavText>계정 관리</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>

          <S.CardNav onClick={() => navigate('/mypage/petInfo')}>
            <S.CardNavContents>
              <img
                src={dogAccount}
                alt="반려견 정보관리 아이콘"
                className="Icon"
              />
              <S.CardNavText>반려견 정보 관리</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>

          <S.CardNav onClick={() => navigate('/mypage/mywrite')}>
            <S.CardNavContents>
              <img
                src={MypageWrite}
                alt="내가쓴글 아이콘"
                className="Icon"
              />
              <S.CardNavText>내가 쓴 글</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>
        </S.MyPageCard>

        {/* 나의 약속 */}
        <S.MyPageCard>
          <S.CardTitle>나의 약속</S.CardTitle>
          <S.CardNav onClick={() => navigate('/mypage/reservation')}>
            <S.CardNavContents>
              <img
                src={MyPageHeart}
                alt="나의 긴급헌혈 약속 아이콘"
                className="Icon"
              />
              <S.CardNavText>나의 긴급헌혈 약속</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>
        </S.MyPageCard>

        {/* 고객 지원 */}
        <S.MyPageCard>
          <S.CardTitle>고객 지원</S.CardTitle>
          <S.CardNav
            onClick={() =>
              window.open(
                'https://www.instagram.com/sharedog.official',
                '_blank'
              )
            }
          >
            <S.CardNavContents>
              <img
                src={MyPageInquiry}
                alt="1:1 문의하기 아이콘"
                className="Icon"
              />
              <S.CardNavText>1:1 문의하기</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>

          <S.CardNav onClick={() => navigate('/mypage/terms')}>
            <S.CardNavContents>
              <img
                src={MyPageNote}
                alt="이용약관 아이콘"
                className="Icon"
              />
              <S.CardNavText>이용약관</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>
          <S.CardNav onClick={() => navigate('/mypage/privacy')}>
            <S.CardNavContents>
              <img
                src={MyPageNote}
                alt="개인정보 처리방침"
                className="Icon"
              />
              <S.CardNavText>개인정보 처리방침</S.CardNavText>
            </S.CardNavContents>
            <MyNextBtn />
          </S.CardNav>
        </S.MyPageCard>
      </S.Contents>
    </S.Wrapper>
  );
};
