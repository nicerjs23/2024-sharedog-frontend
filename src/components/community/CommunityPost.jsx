import Like from '@assets/icons/good.svg';
import Comment from '@assets/icons/comment.svg';
import NotLike from '@assets/icons/myPage/MypageHeart.svg';
import styled from 'styled-components';
const CommunityPost = ({
  category,
  region,
  bloodType,
  created_at,
  title,
  writer,
  content,
  img,
  like_cnt,
  comment_cnt,
  onClick,
  isLiked,
}) => {
  return (
    <PostWrapper onClick={onClick}>
      <PostContents>
        <TagDayWrapper>
          <TagWrapper>
            <Tag>{category}</Tag>
            <Tag tag2>{region}</Tag>
            <Tag tag2>{bloodType}</Tag>
          </TagWrapper>
          <Day>{created_at}</Day>
        </TagDayWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <Writer> | {writer}</Writer>
        </TitleWrapper>
        <BodyWrapper>
          {img && <PostImg src={img} alt="게시글이미지" />}
          <Body>{content}</Body>
        </BodyWrapper>
      </PostContents>
      <Bottom>
        <IconContainer>
          <Icon
            src={isLiked ? Like : NotLike}
            alt={isLiked ? '채워진 하트' : '빈하트'}
          />
          <IconNum>{like_cnt}</IconNum>
        </IconContainer>
        <IconContainer>
          <Icon src={Comment} />
          <IconNum>{comment_cnt}</IconNum>
        </IconContainer>
      </Bottom>
    </PostWrapper>
  );
};

export default CommunityPost;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-width: 330px;
  /* height: 160px; */

  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: #ffffff;
`;

const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  justify-content: center;
  flex-shrink: 0;
  gap: 9px;
  padding: 0 19px;
  box-sizing: border-box;
`;
const TagDayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 31px;
  height: 19px;
  padding: 0 6.5px;

  background-color: ${({ theme, tag2 }) =>
    tag2 ? theme.colors.white : theme.colors.mainColor};

  border: ${({ theme, tag2 }) =>
    tag2 ? `0.27px solid ${theme.colors.mainColor}` : 'none'};
  border-radius: 12px;

  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.5rem;
  color: ${({ theme, tag2 }) =>
    tag2 ? theme.colors.mainColor : theme.colors.white};
  line-height: 17px;
`;

const Day = styled.div`
  display: flex;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.gray01};
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray03};

  white-space: nowrap; /* 한 줄로 유지 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 "..."으로 표시 */
  max-width: 100%; /* 부모 요소 크기만큼 확장 */
`;

const Writer = styled.div`
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.gray02};

  white-space: nowrap;
`;

const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 11px;
  /* margin-top: 5px; 없는게 더 이쁜듯*/
`;
const PostImg = styled.img`
  display: flex;
  width: 84px;
  height: 52px;
  border-radius: 6px;
`;

const Body = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 최대 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px; /* 최대 높이 제한 */
  line-height: 15px; /* 줄 간격 */

  margin-right: 5px;

  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.625rem;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.default};
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 27px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(255, 105, 105, 0.08);
  padding: 0 19px;
  box-sizing: border-box;
  gap: 9px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const Icon = styled.img`
  display: flex;
  height: 11px;
  width: auto;
`;
const IconNum = styled.div`
  display: flex;
  color: #9c9ca1;
  font-size: 0.5rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
`;
