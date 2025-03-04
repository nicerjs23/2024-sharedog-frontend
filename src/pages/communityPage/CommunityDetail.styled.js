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
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  gap: 97px;
`;

export const Back = styled.div`
  .img {
    width: 11px;
    height: 17px;
  }
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

export const Main = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
`;

export const MainHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const HeaderTop = styled.div``;

export const HeaderLeft = styled.div``;

export const Cate = styled.div``;

export const Region = styled.div``;

export const Blood = styled.div``;

export const HeaderRight = styled.div``;

export const Update = styled.div``;

export const Delete = styled.div``;

export const HeaderBottom = styled.div``;

export const Title = styled.div``;

export const Write = styled.div``;

export const MainImg = styled.div``;

export const Content = styled.div``;

export const MainBottom = styled.div``;

export const Like = styled.div``;

export const Icon = styled.div``;

export const IconNum = styled.div``;

export const Cnt = styled.div``;
