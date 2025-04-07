import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
const Comment = ({
  writer,
  profile,
  content,
  created_at,
  myUserName,
  writerEmail,
}) => {
  const navigate = useNavigate();

  // (1) "채팅하기" 클릭 시 호출되는 함수
  const handleCreateChat = async () => {
    try {
      // (2) 서버에 채팅방 생성 요청 (또는 이미 있으면 반환)
      const response = await axiosInstance.post("/api/chat/rooms", {
        user_email: writerEmail,
      });
      console.log("채팅방 생성/반환 결과:", response.data);

      // (3) 서버가 반환한 채팅방의 id로 채팅 페이지 이동
      //     예: /chat/:id 구조로 라우팅한다고 가정
      navigate(`/chat/${response.data.id}`);
    } catch (error) {
      console.error("채팅방 생성 실패:", error);
      alert("채팅방 생성에 실패했습니다.");
    }
  };
  return (
    <CommentWrapper>
      <CommentLeft>
        <Image>
          <img src={profile} alt="프로필 이미지" />
        </Image>
      </CommentLeft>
      <CommentContainer>
        <CommentMain>
          <CommentContentTop>
            <Writer>{writer}</Writer>
            <Time>{created_at}</Time>
          </CommentContentTop>
          <CommentContentBottom>
            <Text>{content}</Text>
          </CommentContentBottom>
        </CommentMain>
        {writer !== myUserName && (
          <ChatBtn onClick={handleCreateChat}>
            <span>채팅하기</span>
          </ChatBtn>
        )}
      </CommentContainer>
    </CommentWrapper>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  gap: 10px;
`;

const CommentLeft = styled.div`
  display: flex;
  width: 10vw;
  max-width: 37px;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 /1;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    border-radius: 38px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  }
`;

const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 9px 10px;
`;

const CommentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CommentContentTop = styled.div`
  display: flex;
  gap: 6px;
`;

const CommentContentBottom = styled.div`
  width: 100%;
`;

const Writer = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Text = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Time = styled.div`
  color: #adadad;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ChatBtn = styled.div`
  display: flex;
  width: 41px;
  height: 19px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  border-radius: 11px;
  background: #ff6969;

  span {
    color: #fff;
    text-align: center;
    font-family: SUIT;
    font-size: 6.706px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
