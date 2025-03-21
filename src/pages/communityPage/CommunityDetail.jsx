import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './CommunityDetail.styled';
import axiosInstance from '@apis/axiosInstance';
import Left from '@assets/icons/Left.svg';
import Delete from '@assets/icons/Delete.svg';
import Like from '@assets/icons/good.svg';
import Wlike from '@assets/icons/Wlike.svg';
import Comment from '@assets/icons/comment.svg';
import Default from '@assets/icons/ProImage.svg';
import Send from '@assets/icons/Send.svg';
import CommentComponent from '@components/community/Comment';

import usePreventZoom from '@hooks/usePreventZoom'; //확대방지api

export const CommunityDetail = () => {
  usePreventZoom(); // 확대 방지 적용!

  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState(null);
  const [liked, setLiked] = useState(false);
  const [myUserName, setMyUserName] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/api/community/home/${id}`
        );
        console.log(response.data);
        setPost(response.data);
        setComments(response.data.comments);
        console.log(response.data.comments);
        if (response.data.is_liked) {
          setLiked(response.data.is_liked);
        }
      } catch (error) {
        console.error('❌ 게시글 불러오기 실패:', error);
        if (error.response) {
          console.error('서버 응답 오류:', error.response.data);
        }
        alert('게시글을 불러오는 데 실패했습니다.');
        navigate('/community');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, navigate]);

  useEffect(() => {
    const Profile = async () => {
      try {
        const response = await axiosInstance.get(`/api/home`);
        console.log(response.data);
        setProfile(response.data.profile_image);
        setMyUserName(response.data.user_name);
      } catch (error) {
        console.log('유저 정보 받아오기 실패', error);
      }
    };
    Profile();
  }, []); //의존성 배열 추가해서 한 번만 렌더링 되도록 설정

  if (!post) {
    return <S.Wrapper>로딩 중...</S.Wrapper>;
  }

  const deletePost = async () => {
    try {
      await axiosInstance.delete(`/api/community/home/${id}`);
      alert('게시글이 삭제되었습니다.');
      navigate('/community');
    } catch (error) {
      console.error('게시글 삭제 실패', error);
      alert('게시글 삭제에 실패했습니다');
    }
  };

  const commentPost = async () => {
    if (isPosting) return;
    if (!comment.trim()) {
      alert('댓글을 입력하세요.');
      return;
    }

    setIsPosting(true);

    try {
      const response = await axiosInstance.post(
        `/api/community/home/${id}/comments`,
        { content: comment }
      );
      console.log(response.data);
      setComments((prev) => [...prev, response.data]);
      setComment('');
    } catch (error) {
      console.log('댓글 등록 실패', error);
    } finally {
      setIsPosting(false);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axiosInstance.post(
        `/api/community/home/${id}/likes`
      );
      console.log(response.data);

      if (response.data.success === '좋아요 성공') {
        setLiked(true);
      } else if (response.data.success === '좋아요 취소 성공') {
        setLiked(false);
      } else if (
        response.data.error ===
        '본인이 작성한 글에는 좋아요를 누를 수 없습니다.'
      ) {
        alert('본인이 작성한 글에는 좋아요를 누를 수 없습니다.');
      }
    } catch (error) {
      console.log('좋아요 실패', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      commentPost();
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Back>
            <img
              src={Left}
              onClick={() => navigate(-1)}
              alt="뒤로가기 버튼"
            />
          </S.Back>
          <S.HeaderTitle>
            <span>긴급헌혈</span>
          </S.HeaderTitle>
          <S.Empty />
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
                {post.is_writer && (
                  <S.Delete onClick={deletePost}>
                    <img src={Delete} alt="삭제 버튼" />
                  </S.Delete>
                )}
              </S.HeaderRight>
            </S.HeaderTop>
            <S.HeaderBottom>
              <S.Title>{post.title}</S.Title>
              <S.Write>| {post.writer}</S.Write>
            </S.HeaderBottom>
          </S.MainHeader>
          <S.MainImg>
            {post.image_1 && (
              <img src={post.image_1} alt="게시물 이미지 1" />
            )}
            {post.image_2 && (
              <img src={post.image_2} alt="게시물 이미지 2" />
            )}
            {post.image_3 && (
              <img src={post.image_3} alt="게시물 이미지 3" />
            )}
          </S.MainImg>
          <S.Content>{post.content}</S.Content>
        </S.Main>
        <S.MainBottom>
          <S.Like>
            <S.Icon onClick={handleLike}>
              <img src={liked ? Like : Wlike} />
            </S.Icon>
            <S.IconNum>{post.like_cnt}</S.IconNum>
          </S.Like>
          <S.Cnt>
            <S.Icon>
              <img src={Comment} />
            </S.Icon>
            <S.IconNum>{post.comments_cnt}</S.IconNum>
          </S.Cnt>
        </S.MainBottom>
        <S.Line></S.Line>
      </S.Container>
      <S.CommentList>
        {comments.length > 0 &&
          comments.map((cmt) => (
            <CommentComponent
              key={cmt.id}
              writer={cmt.writer}
              profile={cmt.profile_image || Default}
              content={cmt.content}
              created_at={cmt.created_at}
              myUserName={myUserName}
              writerEmail={cmt.user_email}
            />
          ))}
      </S.CommentList>
      <S.CommentWrapper>
        <S.CommentContainer>
          <S.CommentLeft>
            {profile ? (
              <S.ProfileImage src={profile} alt="프로필 이미지" />
            ) : (
              <S.Circle src={Default} alt="기본 이미지" />
            )}
            <S.CommentText
              type="text"
              placeholder="댓글을 입력하세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.CommentLeft>
          <S.CommentSub>
            <img src={Send} onClick={commentPost} alt="전송 버튼" />
          </S.CommentSub>
        </S.CommentContainer>
      </S.CommentWrapper>
    </S.Wrapper>
  );
};
