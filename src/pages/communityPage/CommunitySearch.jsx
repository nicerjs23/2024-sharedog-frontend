import React, { useState, useEffect } from "react";
import * as S from "./CommunitySearch.styled";
import Left from "@assets/icons/Left.svg";
import Search from "@assets/icons/Search.svg";
import SearchX from "@assets/icons/SearchX.svg";
import axiosInstance from "@apis/axiosInstance";
import Like from "@assets/icons/good.svg";
import Comment from "@assets/icons/comment.svg";

import { useLocation, useNavigate } from "react-router-dom";
export const CommunitySearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (location.state?.query) {
      setSearchTerm(location.state.query);
    }
  }, [location.state]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await axiosInstance.get("/api/community/home", {
        params: { search: searchTerm },
      });
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("검색 실패:", error);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderLeft>
            <img src={Left} alt="백 버튼" />
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
                onKeyDown={handleKeyDown}
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
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <S.ResultContainer key={index}>
                <S.ContainerMiddle>
                  <S.ContainerHeader>
                    <S.ResultCategory>{result.category}</S.ResultCategory>
                    <S.ResultCreate>{result.created_at}</S.ResultCreate>
                  </S.ContainerHeader>
                  <S.ContainerTitle>
                    <S.ResultTitle>{result.title}</S.ResultTitle>
                    <S.ResultWriter>| {result.writer}</S.ResultWriter>
                  </S.ContainerTitle>
                  <S.ContainerMain>
                    {result.image_1 && <S.ResultImage src={result.image_1} alt="게시물 이미지" />}
                    <S.ResultContent>{result.content}</S.ResultContent>
                  </S.ContainerMain>
                </S.ContainerMiddle>
                <S.ContainerBottom>
                  <S.IconContainer>
                    <S.Icon src={Like} />
                    <S.IconNum>{result.like_cnt}</S.IconNum>
                  </S.IconContainer>
                  <S.IconContainer>
                    <S.Icon src={Comment} />
                    <S.IconNum>{result.comments_cnt}</S.IconNum>
                  </S.IconContainer>
                </S.ContainerBottom>
              </S.ResultContainer>
            ))
          ) : (
            <S.MiddleContent>
              <S.Recent>👍 최근 검색어</S.Recent>
              <S.Delete>전체 삭제</S.Delete>
            </S.MiddleContent>
          )}
        </S.MiddleContainer>

      </S.Wrapper>
    </>
  );
};
