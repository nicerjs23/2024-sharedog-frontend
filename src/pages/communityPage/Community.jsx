import * as S from "./CommunityPage.styled";
import Search from "@assets/icons/Search.svg";
import Filter from "@assets/icons/Filter.svg";

export const CommunityPage = () => {
  return (
    <S.Wrapper>
      <S.Header>커뮤니티</S.Header>
      <S.NoticeBox>
        <S.NoticeText>Notice</S.NoticeText>공지사항 어쩌구 저쩌구
      </S.NoticeBox>
      <S.SearchBox>
        <S.SearchBar>
          <S.SearchIcon>
            <img src={Search} />
          </S.SearchIcon>
          검색어를 입력하세요.
        </S.SearchBar>
      </S.SearchBox>
      <S.CategoryBox>
        <S.Category>
          <S.CategorySection>
            <S.CategoryIcon>🩸</S.CategoryIcon>
            <S.CategoryText>긴급헌혈</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon>🤔</S.CategoryIcon>
            <S.CategoryText>궁금해요</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon>👍</S.CategoryIcon>
            <S.CategoryText>후기에요</S.CategoryText>
          </S.CategorySection>
          <S.CategorySection>
            <S.CategoryIcon>👋</S.CategoryIcon>
            <S.CategoryText>얘기해요</S.CategoryText>
          </S.CategorySection>
        </S.Category>
      </S.CategoryBox>
      <S.Line />
      <S.FilterBox>
        <S.Filter>
          지역
          <img src={Filter} style={{ width: "12px", height: "12px" }} />
        </S.Filter>
        <S.Filter>
          혈액형
          <img src={Filter} style={{ width: "12px", height: "12px" }} />
        </S.Filter>
      </S.FilterBox>
      <S.PostBox>
        <S.PostTop></S.PostTop>
        <S.PostBottom></S.PostBottom>
      </S.PostBox>
    </S.Wrapper>
  );
};
