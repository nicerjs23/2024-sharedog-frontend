import styled from 'styled-components';
import x from '@assets/icons/X.svg';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const Wrapper = styled.section`
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
  margin-bottom: 98px;
`;

export const Header = ({ text }) => {
  const { goTo, goBack } = useCustomNavigate();

  return (
    <HeaderWrapper>
      <div style={{ width: '30px', height: '30px' }} />
      {text}
      <img src={x} alt="xicon" onClick={() => goTo('/myPage')} />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: #000;
  /* position: fixed; */
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 1rem;

  padding: 0 17px;
  box-sizing: border-box;
`;
