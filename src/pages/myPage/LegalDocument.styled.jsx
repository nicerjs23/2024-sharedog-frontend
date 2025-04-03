import styled from 'styled-components';
import x from '@assets/icons/X.svg';
import { useCustomNavigate } from '@hooks/useCustomNavigate';

export const Header = ({ text }) => {
  const { goTo, goBack } = useCustomNavigate();

  return (
    <HeaderWrapper>
      <div style={{ width: '30px', height: '30px' }} />
      {text}
      <img src={x} alt="xicon" onClick={() => goTo('/mypage')} />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  width: 100%;
  max-width: 540px;
  height: 50px;

  color: #000;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  font-size: 1rem;

  padding: 0 17px;
  box-sizing: border-box;
`;

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
  margin-top: 50px;
`;

export const ContentsWrapper = styled.div`
  /* border: 1px solid red; */
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px 25px 60px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.SUITBold['font-family']};
  .termsTitle {
    display: flex;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;
export const ArticleTitle = styled.div`
  font-size: 0.875rem;
`;
export const ArticleBody = styled.div`
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  font-size: 0.625rem;

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
`;
