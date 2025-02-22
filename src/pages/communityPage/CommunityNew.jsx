import * as S from "./CommunityNew.styled";
import search from "@assets/icons/Search.svg";
import bloodIcon from "@assets/icons/bloodIcon.png";
import filterIcon from "@assets/icons/filterIcon.svg";
import QnaIcon from "@assets/icons/QnaIcon.png";
import talkIcon from "@assets/icons/talkIcon.png";
import goodIcon from "@assets/icons/goodIcon.png";
import CommunityPost from "@components/community/CommunityPost";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const CommunityNew = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate("/community/search", { state: { query: searchTerm } });
    }
  };
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>커뮤니티</S.Title>
        <S.NavContainer>
          <S.Notice>
            NOTICE{" "}
            <S.NoticeText>
              공지사항 어쩌구 저쩌구 저쩌구 어쩌구 길게공지사항 어쩌구
              저쩌구 저쩌구 어쩌구 길게
            </S.NoticeText>
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
        </S.NavContainer>
        <CommunityPost
          category="긴급헌혈"
          region="싸울"
          bloodType="DEA+7"
          created_at="3일뒤"
          title="안녕...하시렵니까?"
          writer="무빙건"
          content="침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다"
          img={null}
          like_cnt="12"
          comment_cnt="3"
        />
        <CommunityPost
          category="긴급헌혈"
          region="싸울"
          bloodType="DEA+7"
          created_at="3일뒤"
          title="안녕...하시렵니까?"
          writer="무빙건"
          content="침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다침하하하 게시글 내용입니다. 복붙좀 하겠읍니다"
          img={null}
          like_cnt="12"
          comment_cnt="3"
        />
      </S.Contents>
    </S.Wrapper>
  );
};
