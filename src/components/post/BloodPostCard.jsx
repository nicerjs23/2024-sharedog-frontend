import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./BloodPostCard.styled";

import Like from "@assets/icons/good.svg";
import Comment from "@assets/icons/comment.svg";

const HeartIcon = ({ icon, onClick }) => {
  return <S.HeartBtn onClick={onClick}></S.HeartBtn>;
};

const CommentIcon = ({ icon, onClick }) => {
  return <S.CommentBtn onClick={onClick}></S.CommentBtn>;
};

const BloodPostCard = ({
  id,
  image,
  title,
  content,
  date,
  commentsCount,
  likes,
  bloodType,
  region,
  writer,
  type,
  is_liked,
}) => {
  return (
    <S.Wrapper>
      <NavLink
        to={`/bloodPost/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.ContentWrapper>
          <S.Header>
            <S.TagWrapper>
              <S.Badge>{type}</S.Badge>
              <S.Tag>{region}</S.Tag>
              <S.Badge>{bloodType}</S.Badge>
            </S.TagWrapper>
            <S.DateText>{date}</S.DateText>
          </S.Header>
          <S.Title>
            {title} <S.Writer>| {writer}</S.Writer>
          </S.Title>
          <S.Body $hasImage={!!image}>
            {image && (
              <S.ImageWrapper>
                <img src={image} alt={title} />
              </S.ImageWrapper>
            )}
            <S.Content $hasImage={!!image}>{content}</S.Content>
          </S.Body>
        </S.ContentWrapper>
      </NavLink>
      <S.Footer>
        <S.FooterIcon>
          <S.LikeCount>
            <img src={Like} />
            {likes}
          </S.LikeCount>
          <S.CommentCount>
            <img src={Comment} />
            {commentsCount}
          </S.CommentCount>
        </S.FooterIcon>
      </S.Footer>
    </S.Wrapper>
  );
};

export default BloodPostCard;
