import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  top: 50%;
  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
  margin-bottom: 60px;
`;

export const Container = styled.div`
  display: flex;
  width: 88%;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  padding: 16px 30px 15px 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 540px;
  position: fixed;
  z-index: 1;
  background: #FAFAFC;
`;

export const Back = styled.div`
`;

export const HeaderTitle = styled.div`
  span{
    color: #000;
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 187.5% */
  }
`;

export const Empty = styled.div`
  display: flex;
  width: 31px;
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px 16px 1px 16px;
  border-radius: 10px 10px 0 0;
  border: 1px solid #EAEAEA;
  background: #FFF;
  gap: 17px;
  margin-top: 72px;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 13px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 6px;
`;

export const Cate = styled.div`
  display: flex;
  height: 19px;
  padding: 4.364px 12.694px;
  justify-content: center;
  align-items: center;
  gap: 3.174px;
  flex-shrink: 0;
  border-radius: 11.901px;
  background: #FF6969;

  color: #FFF;
  text-align: center;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Region = styled.div`
  display: flex;
  height: 19px;
  padding: 4.364px 12.694px;
  justify-content: center;
  align-items: center;
  gap: 3.174px;
  flex-shrink: 0;
  border-radius: 11.901px;
  border: 0.27px solid #FF6969;
  background: #FFF;

  color: var(--Red-Red04, #FF6969);
  text-align: center;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Blood = styled.div`
  display: flex;
  height: 19px;
  padding: 4.364px 12.694px;
  justify-content: center;
  align-items: center;
  gap: 3.174px;
  flex-shrink: 0;
  border-radius: 11.901px;
  border: 0.27px solid #FF6969;
  background: #FFF;

  color: var(--Red-Red04, #FF6969);
  text-align: center;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 4px;
`;

export const Create = styled.div`
  color: var(--Gray-Gray01, #9C9CA1);
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Delete = styled.div`
  cursor: pointer;
`;

export const HeaderBottom = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const Title = styled.div`
  color: var(--Gray-Gray03, #3A3A3C);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Write = styled.div`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.gray02};
  white-space: nowrap;
`;

export const MainImg = styled.div`
  display: flex;
  width: 100%;
  max-width: 181px; 
  margin: 0 auto;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-snap-type: x mandatory; // 가로 방향 스크롤에서 무조건 특정 요소에서 멈추도록 설정

  img {
    width: 181px;
    height: 111px;
    flex-shrink: 0;
    border-radius: 6px;
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  margin-bottom: 16px;
`;

export const MainBottom = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  padding: 9px 16px;
  align-items: center;
  gap: 9px;
  border-radius: 0px 0px 10px 10px;
  background: rgba(255, 105, 105, 0.08);
`;

export const Like = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 13px;
    height: 11px;
  }
`;

export const IconNum = styled.div`
  display: flex;
  color: var(--Gray-Gray01, #9C9CA1);
  text-align: center;
  font-family: SUIT;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Cnt = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1.018px;
  background: #EEE;
  margin-top: 20px;
  margin-bottom: 23px;
`

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  padding: 15px 18px 10px 18px;
  background: #FFF;
  z-index: 1;
  box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04);
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7px 13px;
  border-radius: 19.129px;
  background: #FFF3F3;
`;

export const CommentLeft = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  gap: 8px;
`;


export const Circle = styled.img`
  width: 23px;
  height: 23px;
`;

export const ProfileImage = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 383px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 1.55px 3.11px 0px rgba(0, 0, 0, 0.15);
`;

export const CommentText = styled.input`
  width: 100%;
  background: #FFF3F3;

  &::placeholder {
    color: var(--Gray-Gray02, #9C9CA1);
    font-family: SUIT;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }
`;

export const CommentSub = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CommentList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 18px;
  padding-bottom: 35px;
`;