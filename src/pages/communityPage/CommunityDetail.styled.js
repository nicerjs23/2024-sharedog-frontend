import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 11px;
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
  width: 31px;
`

export const Main = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 16px 16px 1px 16px;
  border-radius: 10px 10px 0 0;
  border: 1px solid #EAEAEA;
  background: #FFF;
  gap: 17px;
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

export const Delete = styled.div``;

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
  justify-content: center;
  img {
    width: 181px;
    height: 111px;
    flex-shrink: 0;
    border-radius: 6px;
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
  width: 80%;
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
`;

export const Icon = styled.div`
  display: flex;
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
`;

export const Line = styled.div`
  display: flex;
  width: 80%;
  height: 1.018px;
  background: #EEE;
  margin-top: 20px;
`