import * as S from "./CommunityNew.styled";
import search from "@assets/icons/Search.svg";
import bloodIcon from "@assets/icons/bloodIcon.png";
import QnaIcon from "@assets/icons/QnaIcon.png";
import talkIcon from "@assets/icons/talkIcon.png";
import goodIcon from "@assets/icons/goodIcon.png";
import CommunityPost from "@components/community/CommunityPost";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DropDown from "@components/community/DropDown";
import axiosInstance from "@apis/axiosInstance";

import usePreventZoom from "@hooks/usePreventZoom"; //확대방지api

export const CommunityNew = () => {
  usePreventZoom(); // 확대 방지 적용!

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // 📌 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // 아래로 스크롤하면 숨김
        setShowButton(false);
      } else {
        // 위로 스크롤하면 다시 표시
        setShowButton(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [selectedNav, setSelectedNav] = useState("blood");
  const navItems = [
    { id: "blood", icon: bloodIcon, text: "긴급헌혈" },
    { id: "qna", icon: QnaIcon, text: "궁금해요" },
    { id: "good", icon: goodIcon, text: "후기에요" },
    { id: "talk", icon: talkIcon, text: "얘기해요" },
  ];

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  const regions = [
    "지역",
    "서울",
    "인천",
    "경기",
    "강원",
    "경상",
    "충청",
    "전라",
    "제주",
  ];
  const bloodTypes = [
    "혈액형",
    "DEA 1-",
    "DEA 1.1",
    "DEA 1.2",
    "DEA 3",
    "DEA 4",
    "DEA 5",
    "DEA 7",
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      sessionStorage.setItem("search_initial", "true");
      navigate("/community/search", { state: { query: searchTerm } });
    }
  };

  // 📌 1. 게시글 데이터 상태
  const [posts, setPosts] = useState([]);

  // 📌 4. API에서 게시글 불러오는 함수
  const fetchPosts = async () => {
    try {
      const params = new URLSearchParams();

      // 기본적으로 "category"는 네비게이션 선택 값
      const selectedCategory =
        navItems.find((item) => item.id === selectedNav)?.text || "긴급헌혈";
      params.append("category", selectedCategory);

      // 지역 필터 추가
      if (selectedRegion) params.append("region", selectedRegion);

      // 혈액형 필터 추가
      if (selectedBloodType) params.append("blood", selectedBloodType);

     // console.log(
      //  "📌 API 요청 URL:",
      //  `/api/community/home?${params.toString()}`
      //); // 디버깅용

      // API 요청
      const response = await axiosInstance.get(
        `/api/community/home?${params.toString()}`
      );
      //console.log("📌 API 응답 데이터:", response.data);

      if (!Array.isArray(response.data)) {
        throw new Error("API 응답이 배열이 아닙니다.");
      }

      setPosts(response.data);
    } catch (error) {
      //console.error("❌ 게시글 불러오기 실패:", error);
    }
  };

  const handlePostClick = (id) => {
    navigate(`/community/${id}`);
  };

  // 📌 5. 필터 변경될 때마다 API 호출
  useEffect(() => {
    fetchPosts();
  }, [selectedNav, selectedRegion, selectedBloodType]);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>커뮤니티</S.Title>
        <S.TopContentsContainer>
          <S.Notice onClick={() => navigate("/community/policy")}>
            NOTICE <S.NoticeText>나눠주개 커뮤니티 운영정책</S.NoticeText>
          </S.Notice>

          <S.Search>
            <S.SearchIcon src={search} alt="돋보기아이콘" />
            <S.SearchInput
              type="text"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch} // 엔터 키 이벤트 추가
            />
          </S.Search>

          <S.NavContainer>
            {navItems.map((item) => (
              <S.Nav
                key={item.id}
                onClick={() => {
                  setSelectedNav(item.id);
                  setSelectedRegion(null);
                  setSelectedBloodType(null);
                }}
              >
                <S.NavIcon $isSelected={selectedNav === item.id}>
                  <img src={item.icon} alt={item.text} />
                </S.NavIcon>
                <S.NavText $isSelected={selectedNav === item.id}>
                  {item.text}
                </S.NavText>
              </S.Nav>
            ))}
          </S.NavContainer>
        </S.TopContentsContainer>
        <S.Line />
        <S.DropDownContainer>
          <DropDown
            options={regions}
            selected={selectedRegion}
            setSelected={setSelectedRegion}
            label="지역"
          />

          {/* 혈액형 선택 드롭다운 */}
          <DropDown
            options={bloodTypes}
            selected={selectedBloodType}
            setSelected={setSelectedBloodType}
            label="혈액형"
          />
        </S.DropDownContainer>
        {/* 📌 4. API로 받아온 게시글 리스트를 map으로 렌더링 */}
        {posts.length > 0 ? (
          posts.map((post) => (
            <CommunityPost
              key={post.id}
              category={post.category}
              region={post.region}
              bloodType={post.blood === "전체" ? "혈액형 모름" : post.blood}
              created_at={post.created_at}
              isLiked={post.is_liked}
              title={post.title}
              writer={post.writer}
              content={post.content}
              img={post.image_1} // 이미지 URL
              like_cnt={post.like_cnt}
              comment_cnt={post.comments_cnt}
              onClick={() => handlePostClick(post.id)}
            />
          ))
        ) : (
          <div>게시글이 없습니다.</div>
        )}
      </S.Contents>
      <S.Write
        onClick={() => navigate("/community/write")}
        $isVisible={showButton}
      />
    </S.Wrapper>
  );
};
