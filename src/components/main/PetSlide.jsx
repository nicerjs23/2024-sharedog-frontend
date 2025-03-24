import styled from 'styled-components';
import slide2Png from '@assets/images/petImg.png';
import arrowIcon from '@assets/icons/ArrowIcon.svg';
import PostImg3 from '@assets/images/postImg3.jpg';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

const PetSlide = ({ profile, isLoggedIn }) => {
  const { goTo, goBack } = useCustomNavigate();
  const handleClick = () => {
    if (!isLoggedIn) return; // 로그인 안 된 경우 아무 동작도 하지 않음
    goTo('/mypage/petInfo');
  };
  return (
    <Wrapper>
      <SlideContent>
        <SlideTitle>
          반려견 정보를 <br />
          추가로 등록할 수 있어요!
        </SlideTitle>
        <SlideBtn>
          <BtnText
            onClick={handleClick}
            style={{ cursor: isLoggedIn ? 'pointer' : 'not-allowed' }}
          >
            반려견 정보 등록하기
          </BtnText>

          <img src={arrowIcon} alt="화살표아이콘" />
        </SlideBtn>
      </SlideContent>
      <ImgFlexDiv>
        <SlideImgBox>
          <SlideImg src={profile || slide2Png} alt="반려견이미지" />
        </SlideImgBox>
      </ImgFlexDiv>
    </Wrapper>
  );
};

export default PetSlide;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 87.73%;
  margin: 0 auto;
  height: 100%;
`;
//텍스트랑 테스트버튼 감싸는 div
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 27px;
  padding-bottom: 5px;
`;
const SlideTitle = styled.div`
  display: flex;
  font-size: 1rem;
  color: #fff;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
  line-height: 25px;
`;
const SlideBtn = styled.button`
  display: flex;
  align-items: center;
  /* width: 95px; */
  width: fit-content;
  padding: 4px 8px;
  box-sizing: border-box;
  gap: 5px;
  border-radius: 8.512px;
  background: #fff;
`;
const BtnText = styled.div`
  display: flex;
  color: #7c7f91;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;

//이미지 하단정렬용 div
const ImgFlexDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 20px;
`;
const SlideImgBox = styled.div`
  display: flex;

  overflow: hidden; /* 이미지가 넘칠 경우 숨김 */
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: #fff;
`;
const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하면서 꽉 채우기 */
  object-position: center; /* 중앙 정렬 */
`;
