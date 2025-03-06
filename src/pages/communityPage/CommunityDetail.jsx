import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./CommunityDetail.styled";
import axiosInstance from "@apis/axiosInstance";
import Left from "@assets/icons/Left.svg";
import Delete from "@assets/icons/Delete.svg";
import Like from "@assets/icons/good.svg";
import Comment from "@assets/icons/comment.svg";

export const CommunityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/api/community/home/${id}`);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.error("❌ 게시글 불러오기 실패:", error);
        if (error.response) {
          console.error("서버 응답 오류:", error.response.data);
        }
        alert("게시글을 불러오는 데 실패했습니다.");
        navigate("/community");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, navigate]);

  if (!post) {
    return <S.Wrapper>로딩 중...</S.Wrapper>;
  }

  const deletePost = async () => {
    try {
      await axiosInstance.delete(`/api/community/home/${id}`);
      alert("게시글이 삭제되었습니다.");
      navigate("/community");
    } catch(error) {
      console.error("게시글 삭제 실패", error);
      alert("게시글 삭제에 실패했습니다");
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Back>
            <img src={Left} onClick={() => navigate("/community")} alt="뒤로가기 버튼" />
          </S.Back>
          <S.HeaderTitle>
            <span>긴급헌혈</span>
          </S.HeaderTitle>
          <S.Empty></S.Empty>
        </S.Header>
        <S.Main>
          <S.MainHeader>
            <S.HeaderTop>
              <S.HeaderLeft>
                <S.Cate>{post.category}</S.Cate>
                <S.Region>{post.region}</S.Region>
                <S.Blood>{post.blood}</S.Blood>
              </S.HeaderLeft>
              <S.HeaderRight>
                <S.Create>{post.created_at}</S.Create>
                <S.Delete onClick={deletePost}>
                  <img src={Delete} alt="삭제 버튼" />
                </S.Delete>
              </S.HeaderRight>
            </S.HeaderTop>
            <S.HeaderBottom>
              <S.Title>{post.title}</S.Title>
              <S.Write>| {post.writer}</S.Write>
            </S.HeaderBottom>
          </S.MainHeader>
          <S.MainImg>
            {post.image_1 && <img src={post.image_1} alt="게시물 이미지 1" />}
            {post.image_2 && <img src={post.image_2} alt="게시물 이미지 2" />}
            {post.image_3 && <img src={post.image_3} alt="게시물 이미지 3" />}
          </S.MainImg>
          <S.Content>{post.content}</S.Content>
        </S.Main>
        <S.MainBottom>
          <S.Like>
            <S.Icon><img src={Like} /></S.Icon>
            <S.IconNum>{post.like_cnt}</S.IconNum>
          </S.Like>
          <S.Cnt>
            <S.Icon><img src={Comment} /></S.Icon>
            <S.IconNum>{post.comments_cnt}</S.IconNum>
          </S.Cnt>
        </S.MainBottom>
        <S.Line></S.Line>
      </S.Container>
    </S.Wrapper>
  );
};
