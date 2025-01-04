import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;

  /* position: fixed; */

  top: 50%;

  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  margin: 25px;
  flex-direction: column;
  font-size: 22px;
  font-style: normal;
`;

export const NoticeBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  margin-left: 25px;
  margin-right: 25px;
  padding: 9px 46px 9px 13px;

  font-size: 12px;
  font-weight: 600;
  font-style: normal;

  border-radius: 10px;
  border: 1px solid #fff7f7;
  background: #fff7f7;
`;

export const NoticeText = styled.div`
  color: var(--Main, #ff6969);
  margin-right: 10px;
`;

export const SearchBox = styled.div`
  align-self: stretch;

  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 18px;

  border-radius: 30px;
  background: #ffe7e7;

  color: #ffa1a1;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
`;

export const SearchIcon = styled.div`
  margin-right: 11px;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-self: stretch;

  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffecec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const CategoryText = styled.div`
  color: #ff6969;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  border: 0.5px solid #eee;
  margin: 27px 0;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: row;

  align-self: stretch;

  margin-left: 25px;
  margin-right: 25px;
`;

export const Filter = styled.div`
  display: flex;

  padding: 7px 7px 7px 9px;
  gap: 10px;
  align-items: center;
  margin-right: 12px;

  border-radius: 30px;
  border: 1px solid #dadada;
  background: #fff;

  color: var(--Gray-Gray01, #9c9ca1);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
`;

export const PostBox = styled.div`
  width: 328px;
  height: 160px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid #eaeaea;
  background: #fff;

  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const PostTop = styled.div`
  width: 328px;
  height: 133px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid #eaeaea;
  background: #fff;
`;

export const PostBottom = styled.div`
  width: 328px;
  height: 27px;
  flex-shrink: 0;

  border-radius: 0px 0px 8px 8px;
  background: rgba(255, 105, 105, 0.08);
`;

export const PostFilterSection = styled.div`
  display: flex;
  align-items: center;
`;
