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

import axiosInstance from "@apis/axiosInstance";

export const MainPage = () => {
  // 🟢 활성화된 필터 상태 관리
  // 🟢 1번 필터를 초기 활성화 상태로 설정
  const [activeFilter, setActiveFilter] = useState(
    filter[0]?.id || null
  );

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ API 호출 (로그인 여부에 따라 데이터 가져오기)
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("access"); // 로그인 토큰 확인

      if (!token) {
        setIsLoading(false);
        return;
      }

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

  const handleFilterClick = (id) => {
    setActiveFilter(id); // 클릭된 버튼 활성화
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;

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
          {post.map((content) => (
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
          ))}
        </S.PostsWrapper>
      </S.ContentGapWrapper>
    </S.MainWrapper>
  );
};
