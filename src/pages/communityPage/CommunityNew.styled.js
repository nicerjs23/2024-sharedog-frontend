import styled from 'styled-components';
import WriteIcon from '@assets/icons/writeIcon.svg?react';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19px;
  width: 88%;
  min-width: 330px;

  gap: 20px;
  margin-bottom: 98px;
`;

export const Title = styled.div`
  width: 100%;
  color: #000000;
  font-size: 1.375rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
`;

export const TopContentsContainer = styled.div`
  display: flex;
  width: 97%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background: #fff7f7;
  user-select: none;
  padding: 0 13px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold['font-family']};
`;
export const NoticeText = styled.div`
  margin-left: 10px;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 34px;
  padding: 0 18px;
  box-sizing: border-box;
  border-radius: 30px;
  background: #ffe7e7;
  gap: 11px;
`;
export const SearchIcon = styled.img`
  display: flex;
  height: 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;

  background: transparent; /* 배경색 제거 */
  box-shadow: none; /* 일부 브라우저에서 자동 추가되는 그림자 제거 */
  appearance: none; /* 기본 스타일 제거 */
  -webkit-appearance: none; /* iOS 기본 스타일 제거 */
  -moz-appearance: none; /* Firefox 기본 스타일 제거 */

  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  color: #636366;
  &::placeholder {
    color: #ffa1a1;
    opacity: 1;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 330px;
  margin-top: 4px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 49px;
  height: 49px;
  border-radius: 49px;
  background: #ffecec;
  img {
    display: flex;
    height: 20px;
    width: auto;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border: 1px solid #ff6969;

  `}
`;

export const NavText = styled.div`
  display: flex;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
  color: #dadada;

  ${({ $isSelected }) =>
    $isSelected &&
    `
      color: #ff6969;

  `}
`;

export const Line = styled.div`
  width: 100%;
  background-color: #eee;
  height: 1px;
`;

export const DropDownContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

export const Write = styled(WriteIcon)`
  position: fixed; /* 화면 고정 */
  width: 55px;
  height: 55px;
  bottom: 108px;
  right: calc((50% - 540px / 2) + 20px); /* 부모 요소 안에서 정렬 */

  cursor: pointer;
  z-index: 100;

  @media (max-width: 540px) {
    right: 20px; /* 화면이 작아지면 버튼 위치 조정 */
  }

  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
`;
