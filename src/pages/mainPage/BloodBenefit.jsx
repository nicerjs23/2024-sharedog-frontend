import styled from 'styled-components';
import { useCustomNavigate } from '@hooks/useCustomNavigate';
import backIconNew from '@assets/icons/backIconNew.svg';
import bloodBenefitImg from '@assets/images/nav3Img.png';
export const BloodBenefit = () => {
  return (
    <>
      <Header text="헌혈 혜택" />
      <Wrapper>
        {' '}
        <img src={bloodBenefitImg} alt="헌혈혜택" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  /* position: fixed; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 18px 34px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Header = ({ text }) => {
  const { goTo, goBack } = useCustomNavigate();

  return (
    <HeaderWrapper>
      <img
        src={backIconNew}
        alt="backicon"
        onClick={() => goTo('/main')}
      />
      {text}
      <div style={{ width: '30px', height: '30px' }} />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  width: 100%;
  max-width: 540px;
  height: 50px;

  color: #000;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  padding: 0 17px;
  box-sizing: border-box;
`;
