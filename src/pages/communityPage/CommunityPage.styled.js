import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 🔹 화면 전체 높이 차지 */
  overflow: hidden; /* 🔹 내부에서만 스크롤 가능하도록 설정 */
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
  border: ${({ selected }) =>
    selected
      ? "1px solid #FF6969"
      : "1px solid transparent"}; // 선택된 항목에 빨간색 border 적용
`;

export const CategoryIcon = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffecec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  border: ${({ selected }) =>
    selected ? "1px solid #FF6969" : "1px solid transparent"};
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
  position: relative; /* 부모 컨테이너를 기준으로 위치 조정 */
  display: flex;
  flex-direction: row;
  align-self: stretch;
  margin-left: 25px;
  margin-right: 25px;
`;

export const Filter = styled.div`
  position: relative; /* 드롭다운 위치 조정을 위한 기준 */
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
  cursor: pointer;
`;

export const PostWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 80px; /* 🔹 마지막 게시물이 가려지지 않도록 하단 여백 추가 */
`;

export const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  width: 100%;
  max-width: 100%;
`;

export const BloodPostCardWrapper = styled.div`
  flex: 1 1 calc(50% - 20px); /* 🔹 2개씩 배치 */
  max-width: 100%;
  min-width: 150px;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex: 1 1 100%; /* 🔹 모바일에서는 1개씩 배치 */
  }
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

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px); /* 필터 바로 아래에 드롭다운 배치 */
  left: 0;
  width: 60px; /* 필터 너비와 동일하게 설정 */
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  max-height: 200px; /* 최대 높이 설정 */
  overflow-y: auto; /* 스크롤 추가 */
`;

export const Dropdown2 = styled.div`
  position: absolute;
  top: calc(100% + 5px); /* 필터 바로 아래에 드롭다운 배치 */
  left: 0;
  width: 66px; /* 필터 너비와 동일하게 설정 */
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  max-height: 200px; /* 최대 높이 설정 */
  overflow-y: auto; /* 스크롤 추가 */

  transform: translateX(67px); // 오른쪽으로 30px 이동
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#ffecec" : "transparent")};
  color: ${({ selected }) => (selected ? "#ff6969" : "inherit")};

  &:hover {
    background-color: #ffecec;
    color: #ff6969;
  }
`;
