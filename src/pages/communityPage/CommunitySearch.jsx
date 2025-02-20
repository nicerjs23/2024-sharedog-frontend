import React, { useState } from "react";
import * as S from "./CommunitySearch.styled";
import Left from "@assets/icons/Left.svg";
import Search from "@assets/icons/Search.svg";
import SearchX from "@assets/icons/SearchX.svg";

export const CommunitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderLeft>
            <img src={Left} alt="백 버튼"/>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.RightContainer>
              <S.SearchIcon>
                <img src={Search} alt="검색 아이콘" />
              </S.SearchIcon>
              <S.SearchInput
                type="text"
                placeholder="검색어를 입력하세요."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <S.ClearButton onClick={handleClearSearch}>
                  <img src={SearchX} alt="검색어 삭제" />
                </S.ClearButton>
              )}
            </S.RightContainer>
          </S.HeaderRight>
        </S.Header>
        <S.MiddleContainer>
          <S.MiddleContent>
            <S.Recent>👍 최근 검색어</S.Recent>
            <S.Delete>전체 삭제</S.Delete>
          </S.MiddleContent>
        </S.MiddleContainer>
      </S.Wrapper>
    </>
  );
};
