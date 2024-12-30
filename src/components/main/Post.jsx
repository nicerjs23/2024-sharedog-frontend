import styled from "styled-components";
const Post = ({ bloodType, region, title, content, img }) => {
  return (
    <PostWrapper>
      <PostContentBox>
        <PostContent>
          <TagWrapper>
            <BloodTag>{bloodType}</BloodTag>
            <ReginTag>{region}</ReginTag>
          </TagWrapper>
          <PostTitle>{title}</PostTitle>
          <PostContents>{content}</PostContents>
        </PostContent>
        {/* 이미지가 있을 때만 ImgWrapper 표시 */}
        {img && (
          <ImgWrapper>
            <Img src={img} alt={title} />
          </ImgWrapper>
        )}
      </PostContentBox>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
  display: flex;
  padding: 12px 13px;
  box-sizing: border-box;
  width: 98.5%; //이미 마진값 걸려있는데 거기의 98.5%

  height: 90px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #eaeaea;

  background: #fff;
`;

const PostContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 7px;
`;
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  width: calc(
    100% - 85px - 7px
  ); /* 이미지랑 갭빼고 남은 영역만 차지 */
`;
const TagWrapper = styled.div`
  display: flex;
  gap: 3.45px;
`;
const BloodTag = styled.div`
  display: flex;
  width: 28px;
  height: 13px;

  justify-content: center;
  align-items: center;
  border-radius: 8.213px;
  color: #ffffff;

  font-size: 0.345rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
const ReginTag = styled.div`
  display: flex;
  width: 28px;
  height: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 8.213px;
  border: 0.274px solid ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.345rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  background-color: #ffffff;
`;

const PostTitle = styled.div`
  margin-top: 3px;
  display: block; /* flex 대신 block으로 변경 */
  width: 95%; /* 부모의 남은 영역을 차지 */
  color: #3a3a3c;
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};

  /* 텍스트 줄바꿈 방지 및 말줄임표 적용 */
  white-space: nowrap; /* 텍스트가 한 줄로 유지 */
  overflow: hidden; /* 넘치는 내용 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 ...으로 표시 */
  flex-shrink: 0; /* 줄어들지 않도록 설정 */
`;

const PostContents = styled.div`
  margin-top: 5px;
  display: -webkit-box; /* 여러 줄 말줄임 지원 */
  width: 100%; /* 부모의 남은 영역을 차지 */
  color: #3a3a3c;
  font-size: 0.625rem;
  line-height: 1.2;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};

  -webkit-line-clamp: 2; /* 최대 두 줄로 제한 */
  -webkit-box-orient: vertical; /* 텍스트 방향 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 ...으로 표시 */
`;

const ImgWrapper = styled.div`
  width: 85px; /* 가로 고정 */
  height: 100%; /* 부모 높이 100% 채우기 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 고정 */
  border-radius: 6px;
  overflow: hidden; /* 이미지가 넘칠 경우 숨김 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하면서 꽉 채우기 */
  object-position: center; /* 중앙 정렬 */
`;
