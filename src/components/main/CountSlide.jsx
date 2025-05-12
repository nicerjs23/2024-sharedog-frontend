import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Medal from '@components/main/Medal';
import arrowIcon from '@assets/icons/ArrowIcon.svg';
import calendar from '@assets/icons/bloodCalendar.svg';
import axiosInstance from '@apis/axiosInstance';

const CountSlide = ({ dogName }) => {
  // 초기값을 0으로 세팅
  const [bloodData, setBloodData] = useState({
    count_blood: 0,
    count_month: 0,
  });

  useEffect(() => {
    // API GET 요청 함수
    const fetchBloodData = async () => {
      try {
        const response = await axiosInstance.get('/api/home/blood');
        //console.log('Fetched blood data:', response.data);
        const { count_blood, count_month } = response.data;
        setBloodData({
          count_blood: count_blood ?? 0,
          count_month: count_month ?? 0,
        });
      } catch (error) {
        //console.error('Error fetching blood data:', error);
      }
    };

    fetchBloodData();
  }, []);

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
            다음 헌혈은&nbsp;
            <span>{bloodData.count_month}</span>개월&nbsp;뒤에
            가능해요
          </BloodText>
        </BloodCount>
        <SlideTitle>
          {dogName}는 총 {bloodData.count_blood}회 헌혈 했어요!
        </SlideTitle>
        {/* <SlideSubTitle>
          지금까지 루피는
          <br />
          소형견 4마리의 생명을 구했어요 :)
        </SlideSubTitle> */}
      </SlideContent>
      <ImgFlexDiv>
        <Medal number={bloodData.count_blood} />
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
  line-height: 100%;
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

const ImgFlexDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 20px;
`;
