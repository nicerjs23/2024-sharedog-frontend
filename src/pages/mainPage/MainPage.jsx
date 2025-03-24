import * as S from './MainPage.styled';

import MainSlider from '@components/main/MainSlider';
import BellIcon from '@assets/icons/BellIcon.svg';
import NavBtn from '@components/main/NavBtn';
import Nav1 from '@assets/icons/nav1.png';
import Nav2 from '@assets/icons/nav2.png';
import Nav3 from '@assets/icons/nav3.png';
import Fire from '@assets/icons/fire4X.png';
import defaultDogImg from '@assets/images/defaultDogImg.png';
import { filter } from '@data/mainData/Posts';
import { post } from '@data/mainData/Posts';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '@components/main/Post';
import LoginRequiredBox from '@components/main/LoginRequiredBox';
import axiosInstance from '@apis/axiosInstance';
import LoginRequiredModal from '@components/main/LoginRequiredModal';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const MainPage = () => {
  // 🟢 활성화된 필터 상태 관리
  // 🟢 1번 필터를 초기 활성화 상태로 설정
  const [activeFilter, setActiveFilter] = useState('전체');
  const { goTo, goBack } = useCustomNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // ✅ 초기값 false로 변경
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ 모달 상태 추가
  const navigate = useNavigate();

  const token = localStorage.getItem('access'); // 로그인 토큰 확인
  const isLoggedIn = !!token; // true면 로그인, false면 비로그인
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setUserData(null);
        setIsModalOpen(true);
        return;
      }

      setIsLoading(true);
      try {
        // ✅ 전체 게시글은 "/api/home", 특정 지역은 "/api/home?region=지역명"
        const apiUrl =
          activeFilter === '전체'
            ? '/api/home'
            : `/api/home?region=${activeFilter}`;

        const response = await axiosInstance.get(apiUrl);
        setUserData(response.data);
        console.log(`API 요청 (${activeFilter}):`, response.data);
      } catch (err) {
        console.error('API 요청 실패:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token, activeFilter]); // ✅ 지역 선택 시 API 요청 변경

  const handleFilterClick = (regionName) => {
    setActiveFilter(regionName); // ✅ 클릭한 지역을 상태에 저장
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // ✅ X 버튼 클릭 시 모달 닫기
  };
  const handleLogin = () => {
    goTo('/');
    console.log('로그인 페이지로 이동');
  };

  const handlePostClick = (id) => {
    navigate(`/community/${id}`);
  };

  const isTest = userData?.is_test || false; // isTest 값 가져오기 (없으면 기본값 false)
  const profile = userData?.profile_image;
  return (
    <S.MainWrapper>
      <S.SliderBox>
        <S.Header>
          {userData ? (
            <S.ProfileBox onClick={() => goTo('/mypage')}>
              <S.Profile
                src={userData.profile_image || defaultDogImg}
                alt="프로필 이미지"
              />
              <S.ProfileText>{userData.user_name}</S.ProfileText>
            </S.ProfileBox>
          ) : (
            <S.ProfileBox onClick={handleLogin}>
              <S.Profile
                src={defaultDogImg}
                alt="기본 프로필 이미지"
              />
              <S.ProfileText>로그인하기</S.ProfileText>
            </S.ProfileBox>
          )}
          <S.AlarmBox>
            {/*알람 일단 주석처리리 <img src={BellIcon} /> */}
          </S.AlarmBox>
        </S.Header>
        {/* 슬라이더부분 컴포넌트로 구현 */}
        <MainSlider
          isTest={isTest}
          profile={profile}
          isLoggedIn={isLoggedIn}
        />
      </S.SliderBox>

      <S.ContentGapWrapper>
        {/* 헌혈정보 네비버튼 */}
        <S.InfoNavBox>
          <NavBtn text="헌혈기준" icon={Nav1} to="/bloodRule" />
          {/* 아이콘 가운데정렬안돼서 동적으로 패딩 적용 */}
          <NavBtn
            text="주의사항"
            icon={Nav2}
            $paddingLeft="2px"
            to="/bloodCaution"
          />
          <NavBtn text="헌혈혜택" icon={Nav3} to="/bloodBenefit" />
        </S.InfoNavBox>
        <S.Line />
        {/* <S.Line />*/}

        <S.PostsTitle>
          <div>지역별 긴급헌혈 현황</div>
          <img src={Fire} style={{ width: '16px', height: '16px' }} />
        </S.PostsTitle>

        <S.FilterBox>
          {filter.map((region) => (
            <S.Filter
              disabled={!token}
              key={region.id}
              $isActive={activeFilter === region.name}
              onClick={() => handleFilterClick(region.name)}
            >
              {region.name}
            </S.Filter>
          ))}
        </S.FilterBox>
        {/* 게시글 map으로 더미데이터에서 출력 */}
        <S.PostsWrapper>
          {isLoading ? (
            <p>로딩 중...</p>
          ) : !token ? ( // ✅ 토큰 없으면 로그인 필요 UI 표시
            <LoginRequiredBox />
          ) : userData?.posts?.length > 0 ? (
            userData.posts
              .filter(
                (content) =>
                  activeFilter === '전체' ||
                  content.region === activeFilter
              )
              .map((content) => (
                <Post
                  key={content.id}
                  category={content.category}
                  bloodType={
                    content.blood === '전체'
                      ? '혈액형'
                      : content.blood
                  }
                  region={content.region}
                  created_at={content.created_at}
                  title={content.title}
                  writer={userData.user_name}
                  content={content.content}
                  img={content.image_1}
                  onClick={() => handlePostClick(content.id)}
                  isLiked={content.is_liked}
                />
              ))
          ) : (
            <S.ErrorText>
              해당 지역의 긴급 헌혈 게시글이 없습니다.
            </S.ErrorText>
          )}
        </S.PostsWrapper>
      </S.ContentGapWrapper>
      {/* ✅ 로그인 필요 모달 적용 */}
      <LoginRequiredModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLogin}
      />
    </S.MainWrapper>
  );
};
