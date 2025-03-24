import styled from 'styled-components';
import slide1Png from '@assets/images/slide1.png';
import arrowIcon from '@assets/icons/ArrowIcon.svg';

import { useCustomNavigate } from '@hooks/useCustomNavigate';
const TestSlide = () => {
  //페이지이동 커스텀훅
  const { goTo } = useCustomNavigate();
  return (
    <Wrapper>
      <SlideContent>
        <SlideTitle>
          우리집 강아지는 <br />
          헌혈견이 될 수 있을까?
        </SlideTitle>
        <SlideBtn>
          <BtnText onClick={() => goTo('/testStart')}>
            테스트 바로 가기
          </BtnText>
          <img src={arrowIcon} alt="화살표아이콘" />
        </SlideBtn>
      </SlideContent>
      <ImgFlexDiv>
        <SlideImg>
          <img
            src={slide1Png}
            style={{
              width: 'auto',
              height: '133px',
              display: 'block',
            }}
          />
        </SlideImg>
      </ImgFlexDiv>
    </Wrapper>
  );
};

export default TestSlide;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
  align-items: flex-end;
`;
const SlideImg = styled.div`
  display: flex;
  height: 133px;
`;
