import styled from 'styled-components';
import Medal from '@components/main/Medal';
import arrowIcon from '@assets/icons/ArrowIcon.svg';
import calendar from '@assets/icons/bloodCalendar.svg';
const CountSlide = () => {
  return (
    <Wrapper>
      <SlideContent>
        <BloodCount>
          <img
            src={calendar}
            alt="달력아이콘"
            style={{ width: '10px', height: '11px' }}
          />
          <BloodText>
            다음 헌혈은&nbsp; <span> 4개월 </span> &nbsp;뒤에 가능해요
          </BloodText>
        </BloodCount>
        <SlideTitle>루피는 총2회 헌혈 했어요!</SlideTitle>
        {/* <SlideSubTitle>
          지금까지 루피는
          <br />
          소형견 4마리의 생명을 구했어요 :)
        </SlideSubTitle> */}
      </SlideContent>
      <ImgFlexDiv>
        <Medal number={2} />
      </ImgFlexDiv>
    </Wrapper>
  );
};

export default CountSlide;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 87.73%;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
`;
//텍스트랑 테스트버튼 감싸는 div
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  gap: 13px;
`;
const BloodCount = styled.div`
  display: flex;
  width: 131px;
  align-items: center;
  line-height: 100%; /* 8px */
  padding: 2.609px 5.217px;
  gap: 6.522px;
  border-radius: 19px;
  background: rgba(255, 255, 255, 0.8);
`;
const BloodText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.5rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};

  span {
    font-family: ${({ theme }) =>
      theme.fonts.SUITExtraBold['font-family']};
  }
`;
const SlideTitle = styled.div`
  display: flex;
  font-size: 1rem;
  color: #fff;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
  line-height: 25px;
`;
const SlideSubTitle = styled.div`
  display: flex;
  font-size: 0.75rem;
  color: #fff;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  line-height: 15px;
`;

//이미지 하단정렬용 div
const ImgFlexDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 20px;
`;
