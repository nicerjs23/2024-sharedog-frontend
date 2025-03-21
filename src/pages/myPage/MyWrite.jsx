import React, { useState, useEffect } from "react";
import * as S from "./MyWrite.styled";
import Left from "@assets/icons/Left.svg";
import axiosInstance from "@apis/axiosInstance";
import Wlike from "@assets/icons/Wlike.svg";
import Comment from "@assets/icons/comment.svg";
import { useNavigate } from "react-router-dom";

export const MyWrite = () => {
  const navigate = useNavigate();
  const [myUserName, setMyUserName] = useState('');
  const [writeResult, setWriteResult] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  const handlePostClick = (id) => {
    navigate(`/community/${id}`);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`/api/home`);
        setMyUserName(response.data.user_name);
      } catch (error) {
        console.log('유저 정보 받아오기 실패', error);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axiosInstance.get(`/api/community/home`);
        const myPosts = response.data.filter(post => post.writer === myUserName);
        setWriteResult(myPosts);
    } catch (error) {
        console.log('글 목록 받아오기 실패', error);
        }
    };
        fetchMyPosts();
    }, [myUserName]); 

    return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderLeft>
          <img src={Left} onClick={handleBack} alt="뒤로가기 버튼" />
        </S.HeaderLeft>
        <S.HeaderRight>내가 쓴 글</S.HeaderRight>
        <S.Empty></S.Empty>
      </S.Header>
      <S.MiddleContainer>
        {writeResult.length > 0 ? (
          writeResult.map((result, index) => (
            <S.ResultContainer key={index} onClick={() => handlePostClick(result.id)}>
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
                  <S.Icon src={Wlike} />
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
          <S.NoPostMessage>작성한 글이 없습니다.</S.NoPostMessage>
        )}
      </S.MiddleContainer>
    </S.Wrapper>
  );
};
