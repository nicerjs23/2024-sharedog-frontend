import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  /* position: fixed; */
`;

export const Contents = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19px;
  width: 88%;
  min-width: 330px;

  gap: 20px;
`;

export const Title = styled.div`
  width: 100%;
  color: #000000;
  font-size: 1.375rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;

export const NavContainer = styled.div`
  display: flex;
  width: 97%;
  flex-direction: column;
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

  padding: 0 13px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
export const NoticeText = styled.div`
  margin-left: 10px;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};

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
    theme.fonts.SUITMedium["font-family"]};
  color: #636366;
  &::placeholder {
    color: #ffa1a1;
    opacity: 1;
  }
`;
