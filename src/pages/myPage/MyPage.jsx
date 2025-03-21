import * as S from './MyPage.styled';
import defaultImg from '@assets/images/profileimg.png';
import myBackIcon from '@assets/icons/Next.svg';
import profileEditIcon from '@assets/icons/profileEditIcon.svg';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 가져오기

import axiosInstance from '@apis/axiosInstance';
import { useState, useEffect } from 'react';

import MyNextBtn from '@components/mypage/MyNextBtn';
import MyPageAccount from '@assets/icons/myPage/MyPageAccount.svg';
import dogAccount from '@assets/icons/myPage/dogAccount.svg';
import MypageWrite from '@assets/icons/myPage/MypageWrite.svg';
import MyPageHeart from '@assets/icons/myPage/MypageHeart.svg';
import MyPageInquiry from '@assets/icons/myPage/MyPageInquiry.svg';
import MyPageNote from '@assets/icons/myPage/MyPageNote.svg';
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

      <S.Contents>
        <S.ProfileCard>
          <S.ProfileImg
            src={profileImage || defaultImg}
            alt="프로필 사진"
          />
          <S.ProfileInfo>
            <S.ProfileName>{userName}</S.ProfileName>
            <S.ProfileEditBtn>
              <img src={profileEditIcon} alt="글쓰기아이콘" />
              <p>프로필 수정</p>
            </S.ProfileEditBtn>
          </S.ProfileInfo>
        </S.ProfileCard>
        {/* 나의정보 */}
        <S.MyPageCard>
          <S.CardTitle>나의 정보</S.CardTitle>
          <S.CardNav
            onClick={() => handleNavigate('/accountmanagement')}
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

          <S.CardNav onClick={() => handleNavigate('/petInfo')}>
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

          <S.CardNav onClick={() => handleNavigate('/mywrite')}>
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
        {/* 나의약속 */}
        <S.MyPageCard>
          <S.CardTitle>나의 약속</S.CardTitle>
          <S.CardNav onClick={() => handleNavigate('/reservation')}>
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
        {/* 고객정보 */}
        <S.MyPageCard>
          <S.CardTitle>고객 지원</S.CardTitle>
          <S.CardNav onClick={() => navigate('/petInfo')}>
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

          <S.CardNav onClick={() => navigate('/terms')}>
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
          <S.CardNav onClick={() => navigate('/privacy')}>
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
