import styled from "styled-components";

export const MainWrapper = styled.section`
  //푸터네브바에 안가려지게  78px+여유공간20px띄워둠
  /* margin-bottom: 98px; */ //게시글만 스크롤되게하면서 postWrapper로 이동
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};

  height: calc(var(--vh, 1vh) * 100);
`;

export const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 207px;
  /* height: calc(var(--vh, 1vh) * 100); */
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87.73%;
  height: 34px;
  margin: 0 auto;
  margin-top: 30px;
  /* padding: 0 23px; */
  /* border: 1px solid green; */
`;
export const ProfileBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Profile = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 60px;
  background-color: #fff;
`;
export const ProfileText = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const AlarmBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
`;

//슬라이더밑에 부분들
//좌우 띄워두는 갭 설정하는 섹션태그
export const ContentGapWrapper = styled.section`
  /* border: solid blue 1px; */
  display: flex;
  flex-direction: column;
  width: 87.73%;
  margin: 0 auto;
  margin-top: 30px;
  flex: 1; /* 남은 공간을 모두 차지 */
  min-height: 0; /* flex 속성 사용 시 필수 */
`;
export const InfoNavBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  width: 100%;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  border: 0.5px solid #eee;
  margin: 27px 0;
`;

export const PostsTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  color: #373737;
  gap: 5px;
  margin-bottom: 15px;
`;

export const FilterBox = styled.section`
  display: flex;
  gap: 11px;
  margin-right: -20px; /* 우측 여백 제거 */
  /* padding: 0 20px; 스크롤 가능 영역 확보 */
  padding-bottom: 5px;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 요소가 줄 바꿈되지 않도록 설정 */

  -ms-overflow-style: none; /* IE, Edge 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari 스크롤바 숨기기 */
  }

  //노트북 540px이상부터는 갭 비율조정 ㅎㅎ
  @media (min-width: 540px) {
    display: flex;
    justify-content: space-between;
    margin-right: 0;
    padding-bottom: 0; /* 노트북 이상에서는 여유 공간 제거 */
    gap: 0;
  }
`;

export const Filter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 22px;
  border-radius: 44px;
  border: 0.88px solid #d9d9d9;
  gap: 8.8px;
  flex-shrink: 0;

  color: #9c9ca1;
  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITRegular["font-family"]};

  /* 🖱️ Hover 상태 */
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    border: 0.88px solid ${({ theme }) => theme.colors.mainColor};
    background: rgba(255, 105, 105, 0.2);
  }

  /* 🟢 isActive 상태 */
  ${({ $isActive }) =>
    $isActive &&
    `
    color: #ff6969;
    border: 0.88px solid  #ff6969;
    background: rgba(255, 105, 105, 0.2);
    `}
`;

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 98px; //푸터에 안가려지게 78+공간조금 20px
  flex: 1; /* 남은 높이를 자동으로 차지 */
  min-height: 0; /* flex 사용 시 내부 스크롤이 가능하도록 설정 */
  overflow-y: auto; /* 내부 스크롤 활성화 */

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
