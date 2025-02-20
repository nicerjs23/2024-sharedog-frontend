import * as S from "./MainPage.styled";

import MainSlider from "@components/main/MainSlider";
import BellIcon from "@assets/icons/BellIcon.svg";
import NavBtn from "@components/main/NavBtn";
import Nav1 from "@assets/icons/nav1.png";
import Nav2 from "@assets/icons/nav2.png";
import Nav3 from "@assets/icons/nav3.png";
import Fire from "@assets/icons/fire4X.png";

import { filter } from "@data/mainData/Posts";
import { post } from "@data/mainData/Posts";
import { useState, useEffect } from "react";
import Post from "@components/main/Post";
import LoginRequiredBox from "@components/main/LoginRequiredBox";
import axiosInstance from "@apis/axiosInstance";
import LoginRequiredModal from "@components/main/LoginRequiredModal";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const MainPage = () => {
  // 🟢 활성화된 필터 상태 관리
  // 🟢 1번 필터를 초기 활성화 상태로 설정
  const [activeFilter, setActiveFilter] = useState(
    filter[0]?.id || null
  );
  const { goTo, goBack } = useCustomNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // ✅ 초기값 false로 변경
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ 모달 상태 추가

  // ✅ API 호출 (로그인 여부에 따라 데이터 가져오기)
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("access"); // 로그인 토큰 확인

      if (!token) {
        setUserData(null); // 로그인하지 않은 상태에서도 UI 렌더링 가능
        setIsModalOpen(true); // ✅ 로그인 안 되어 있으면 모달 자동 띄우기
        return;
      }
      setIsLoading(true); // ✅ API 호출 시점에서만 로딩 상태 적용
      try {
        const response = await axiosInstance.get("/api/home");
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  // ✅ userData가 변경될 때마다 실행 (로그인 여부 반영)
  useEffect(() => {
    if (userData === null) {
      setIsModalOpen(true);
      console.log("userData가 없어서 모달을 띄웁니다.");
    }
  }, [userData]);

  const handleFilterClick = (id) => {
    setActiveFilter(id); // 클릭된 버튼 활성화
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // ✅ X 버튼 클릭 시 모달 닫기
  };
  const handleLogin = () => {
    goTo("/login");
    console.log("로그인 페이지로 이동");
  };

  return (
    <S.MainWrapper>
      <S.SliderBox>
        <S.Header>
          {userData ? (
            <S.ProfileBox>
              <S.Profile
                src={userData.profile_image}
                alt="프로필 이미지"
              />
              <S.ProfileText>{userData.user_name}</S.ProfileText>
            </S.ProfileBox>
          ) : (
            <S.ProfileBox>
              <S.Profile />
              <S.ProfileText>로그인하기</S.ProfileText>
            </S.ProfileBox>
          )}
          <S.AlarmBox>
            <img src={BellIcon} />
          </S.AlarmBox>
        </S.Header>
        {/* 슬라이더부분 컴포넌트로 구현 */}
        <MainSlider />
      </S.SliderBox>

      <S.ContentGapWrapper>
        {/* 헌혈정보 네비버튼 */}
        <S.InfoNavBox>
          <NavBtn text="헌혈기준" icon={Nav1} />
          {/* 아이콘 가운데정렬안돼서 동적으로 패딩 적용 */}
          <NavBtn text="주의사항" icon={Nav2} $paddingLeft="2px" />
          <NavBtn text="헌혈혜택" icon={Nav3} />
        </S.InfoNavBox>
        <S.Line />
        {/* <S.Line />*/}
        <S.PostsTitle>
          <div>지역별 긴급헌혈 현황</div>
          <img src={Fire} style={{ width: "16px", height: "16px" }} />
        </S.PostsTitle>

        <S.FilterBox>
          {filter.map((region) => (
            <S.Filter
              key={region.id}
              $isActive={activeFilter === region.id}
              onClick={() => handleFilterClick(region.id)}
            >
              {region.name}
            </S.Filter>
          ))}
        </S.FilterBox>
        {/* 게시글 map으로 더미데이터에서 출력 */}
        <S.PostsWrapper>
          {isLoading ? (
            <p>로딩 중...</p> // ✅ 로딩 중 표시
          ) : !userData ? (
            <LoginRequiredBox /> // ✅ 로그인하지 않은 경우 로그인 유도 UI
          ) : (
            post.map((content) => (
              <Post
                key={content.id}
                category={content.category}
                bloodType={content.bloodType}
                region={content.region}
                created_at={content.created_at}
                title={content.title}
                writer={content.writer}
                content={content.content}
                img={content.img}
              />
            ))
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
