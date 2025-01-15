import React, { useState } from "react";
import * as S from "./CommunityPage.styled";
import Search from "@assets/icons/Search.svg";
import Filter from "@assets/icons/Filter.svg";
import BloodPostCard from "@components/post/BloodPostCard";

import { filter, filter2, post as posts } from "@data/mainData/Posts"; // 더미 데이터 가져오기

export const CommunityPage = () => {
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("지역"); // 선택된 지역 상태

  const [isBloodTypeOpen, setIsBloodTypeOpen] = useState(false); // 혈액형 드롭다운 상태
  const [selectedBloodType, setSelectedBloodType] = useState("혈액형"); // 선택된 혈액형 상태

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 상태

  const toggleRegionDropdown = () => {
    setIsRegionOpen(!isRegionOpen);
  };

  const handleRegionSelect = (regionName) => {
    setSelectedRegion(regionName);
    setIsRegionOpen(false);
  };

  const toggleBloodTypeDropdown = () => {
    setIsBloodTypeOpen(!isBloodTypeOpen);
  };

  const handleBloodTypeSelect = (bloodType) => {
    setSelectedBloodType(bloodType);
    setIsBloodTypeOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <S.Wrapper>
      <S.Header>커뮤니티</S.Header>
      <S.NoticeBox>
        <S.NoticeText>Notice</S.NoticeText>공지사항 어쩌구 저쩌구
      </S.NoticeBox>
      <S.SearchBox>
        <S.SearchBar>
          <S.SearchIcon>
            <img src={Search} alt="검색 아이콘" />
          </S.SearchIcon>
          검색어를 입력하세요.
        </S.SearchBar>
      </S.SearchBox>
      <S.CategoryBox>
        <S.Category>
          <S.CategorySection>
            <S.CategoryIcon
              onClick={() => handleCategorySelect("긴급헌혈")}
              selected={selectedCategory === "긴급헌혈"}
            >
              🩸
            </S.CategoryIcon>
            <S.CategoryText>긴급헌혈</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon
              onClick={() => handleCategorySelect("궁금해요")}
              selected={selectedCategory === "궁금해요"}
            >
              🤔
            </S.CategoryIcon>
            <S.CategoryText>궁금해요</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon
              onClick={() => handleCategorySelect("후기에요")}
              selected={selectedCategory === "후기에요"}
            >
              👍
            </S.CategoryIcon>
            <S.CategoryText>후기에요</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon
              onClick={() => handleCategorySelect("얘기해요")}
              selected={selectedCategory === "얘기해요"}
            >
              👋
            </S.CategoryIcon>
            <S.CategoryText>얘기해요</S.CategoryText>
          </S.CategorySection>
        </S.Category>
      </S.CategoryBox>
      <S.Line />
      <S.FilterBox>
        {/* 지역 필터 */}
        <S.Filter onClick={toggleRegionDropdown}>
          {selectedRegion}
          <img
            src={Filter}
            alt="필터 아이콘"
            style={{ width: "12px", height: "12px" }}
          />
        </S.Filter>
        {isRegionOpen && (
          <S.Dropdown>
            {filter.map((item) => (
              <S.DropdownItem
                key={item.id}
                onClick={() => handleRegionSelect(item.name)}
                selected={item.name === selectedRegion} // 선택된 항목과 비교
              >
                {item.name}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}

        {/* 혈액형 필터 */}
        <S.Filter onClick={toggleBloodTypeDropdown}>
          {selectedBloodType}
          <img
            src={Filter}
            alt="필터 아이콘"
            style={{ width: "12px", height: "12px" }}
          />
        </S.Filter>
        {isBloodTypeOpen && (
          <S.Dropdown2>
            {filter2.map((type) => (
              <S.DropdownItem
                key={type.id}
                onClick={() => handleBloodTypeSelect(type.bloodType)}
                selected={type.bloodType === selectedBloodType} // 선택된 항목과 비교
              >
                {type.bloodType}
              </S.DropdownItem>
            ))}
          </S.Dropdown2>
        )}
      </S.FilterBox>
      <S.PostWrapper>
        <S.PostBox>
          {posts &&
            posts.map((post) => (
              <BloodPostCard
                key={post.id}
                id={post.id}
                image={post.img}
                title={post.title}
                content={post.content}
                date={post.date}
                commentsCount={post.commentsCount}
                likes={post.likes}
                bloodType={post.bloodType}
                region={post.region}
                writer={post.writer}
                type={post.type}
              />
            ))}
        </S.PostBox>
      </S.PostWrapper>
    </S.Wrapper>
  );
};
