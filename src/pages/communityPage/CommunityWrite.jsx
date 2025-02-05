import React from "react";
import * as S from "./CommunityWrite.styled";
import ImageUpload from "@assets/icons/ImageUpload.svg";
import Circle from "@assets/icons/Circle.svg";

const categories = ["긴급헌혈", "궁금해요", "얘기해요", "후기에요"];
const regions = ["서울", "인천", "경기", "강원", "경상", "충청", "전라", "제주"];
const bloodTypes = ["전체", "DEA 1-", "DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"];

export const CommunityWrite = () => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Cancel>취소</S.Cancel>
          <S.Write>글쓰기</S.Write>
          <S.Upload>등록</S.Upload>
        </S.Header>
        <S.Category>
          <S.Title>카테고리</S.Title>
          <S.CateBox>
            {categories.map((category) => (
              <S.CateBtn key={category}>{category}</S.CateBtn>
            ))}
          </S.CateBox>
          <S.Line />
        </S.Category>
        <S.Region>
          <S.Title>지역</S.Title>
          <S.RegionBox>
            {regions.map((region) => (
              <S.RegionBtn key={region}>{region}</S.RegionBtn>
            ))}
          </S.RegionBox>
          <S.Line />
        </S.Region>
        <S.Blood>
          <S.Title>혈액형</S.Title>
          <S.BloodBox>
            {bloodTypes.map((type) => (
              <S.BloodBtn key={type}>{type}</S.BloodBtn>
            ))}
          </S.BloodBox>
          <S.Line />
        </S.Blood>
        <S.Caution>
            {/* <img src={Circle} alt="경고 메시지" /> */}
            <span>욕설, 광고 등 운영정책 위반 시 제재를 받을 수 있어요.</span>
        </S.Caution>
        <S.WriteTitle>
          <S.Title>제목</S.Title>
          <S.TitlePlace placeholder="제목을 입력해주세요." />
        </S.WriteTitle>
        <S.WriteMain>
          <S.Title>내용</S.Title>
          <S.MainPlace placeholder="내용을 입력해주세요." />
        </S.WriteMain>
        <S.ImageContainer>
          <S.Title>이미지</S.Title>
          <S.Explain>이미지 파일 (JPG, PNG, GIF)을 최대 3개를 첨부할 수 있어요.</S.Explain>
          <S.Image>
            {/* <img src={ImageUpload} alt="이미지 업로드" /> */}
          </S.Image>
        </S.ImageContainer>
      </S.Wrapper>
    </>
  )
};