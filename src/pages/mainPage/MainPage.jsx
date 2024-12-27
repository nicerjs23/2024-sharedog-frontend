import * as S from "./MainPage.styled";
import Medal from "@components/main/Medal";
import MainSlider from "@components/main/MainSlider";
import BellIcon from "@assets/icons/BellIcon.svg";
import NavBtn from "@components/main/NavBtn";
import Nav1 from "@assets/icons/nav1.png";
import Nav2 from "@assets/icons/nav2.png";
import Nav3 from "@assets/icons/nav3.png";
import Fire from "@assets/icons/Fire.png";

import { filter } from "@data/mainData/Posts";
import { post } from "@data/mainData/Posts";
import { useState } from "react";
import Post from "@components/main/Post";
export const MainPage = () => {
  // 🟢 활성화된 필터 상태 관리
  // 🟢 1번 필터를 초기 활성화 상태로 설정
  const [activeFilter, setActiveFilter] = useState(
    filter[0]?.id || null
  );

  const handleFilterClick = (id) => {
    setActiveFilter(id); // 클릭된 버튼 활성화
  };
  // <Medal number={1} />
  {
    /* 🥇 메달 아이콘 추가 */
  }
  return (
    <S.MainWrapper>
      <S.SliderBox>
        <S.Header>
          <S.ProfileBox>
            <S.Profile />
            <S.ProfileText>로그인하기</S.ProfileText>
          </S.ProfileBox>
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
          <NavBtn text="주의사항" icon={Nav2} />
          <NavBtn text="헌혈혜택" icon={Nav3} />
        </S.InfoNavBox>
        <S.Line />
        {/* <S.Line />*/}
        <S.PostsTitle>
          <div>지역별 긴급헌혈 현황 </div>
          <img src={Fire} />
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
              bloodType={content.bloodType}
              region={content.region}
              title={content.title}
              content={content.content}
              img={content.img}
            />
          ))}
        </S.PostsWrapper>
      </S.ContentGapWrapper>
    </S.MainWrapper>
  );
};
