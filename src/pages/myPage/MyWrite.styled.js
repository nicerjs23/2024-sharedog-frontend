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

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88%;
  gap: 18px;
  margin: 48px 0 21px 0;
`;

export const HeaderLeft = styled.div`
  .img {
    width: 11px;
    height: 17px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 187.5% */
`;

export const Empty = styled.div`
  display: flex;
  width: 11px;
`

export const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 0 0 35px 0;
`;

export const MiddleContent = styled.div`
  display: flex;
  width: 88%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  min-width: 330px;
  height: 160.964px;
  flex-shrink: 0;
  border-radius: 10.06px;
  border: 1.006px solid #EAEAEA;
  background: #FFF;
  box-sizing: border-box;
`;

export const ContainerMiddle = styled.div`
  padding: 12px 13px 8px 13px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 19.114px;
  justify-content: space-between;
  align-items: center;
`;

export const ResultCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 31px;
  height: 19px;
  padding: 0 6.5px;
  border-radius: 12px;
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const ResultCreate = styled.div`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.gray01};
`;

export const ContainerTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0px 12px 0px 0px;
  margin: 9px 0 14px 0;
`;

export const ResultTitle = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray03};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ResultWriter = styled.div`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.gray02};
  white-space: nowrap;
`;

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0px 12px 0px 0px;
`;

export const ResultImage = styled.img`
  width: 84px;
  height: 52px;
  border-radius: 6px;
  object-fit: cover;
`;

export const ResultContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px;
  line-height: 15px;
  margin-right: 5px;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.default};
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 27px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(255, 105, 105, 0.08);
  padding: 0 19px;
  box-sizing: border-box;
  gap: 9px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Icon = styled.img`
  height: 11px;
  width: auto;
`;

export const IconNum = styled.div`
  color: #9c9ca1;
  font-size: 0.5rem;
`;

export const NoPostMessage = styled.div`

`;