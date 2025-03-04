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
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/api/community/home/${id}`);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.error("❌ 게시글 불러오기 실패:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
        navigate("/community");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, navigate]);

  const goBack = () => {
    navigate("/community");
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Back>
              <img src={Left} onClick={goBack} alt="백 버튼" />
            </S.Back>
            <S.HeaderTitle>
              <span>긴급헌혈</span>
            </S.HeaderTitle>
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
                  <S.Update>{post.updated_at}</S.Update>
                  <S.Delete>
                    <img src={Delete} alt="삭제 버튼" />
                  </S.Delete>
                </S.HeaderRight>
              </S.HeaderTop>
              <S.HeaderBottom>
                <S.Header.Title>{post.title}</S.Header.Title>
                <S.Header.Write>{post.write}</S.Header.Write>
              </S.HeaderBottom>
            </S.MainHeader>
            <S.MainImg>
              {post.image_1 && <img src={post.image_1} alt="게시물 이미지 1" />}
              {post.image_2 && <img src={post.image_2} alt="게시물 이미지 2" />}
              {post.image_3 && <img src={post.image_3} alt="게시물 이미지 3" />}
            </S.MainImg>
            <S.Content>{post.content}</S.Content>
            <S.MainBottom>
              <S.Like>
                <S.Icon src={Like} />
                <S.IconNum>{post.like_cnt}</S.IconNum>
              </S.Like>
              <S.Cnt>
                <S.Icon src={Comment} />
                <S.IconNum>{post.comment_cnt}</S.IconNum>
              </S.Cnt>
            </S.MainBottom>
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
