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
  justify-content: center;
  gap: 18px;
  align-self: stretch;
  margin: 13px 0 35px 0;
`;

export const HeaderLeft = styled.img`
  width: 11px;
  height: 17px;
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 297px;
  height: 34px;
  padding: 6px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 30px;
  background: #FFE7E7;
`;

export const RightContainer = styled.div`
  display: flex;
  height: 22px;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const SearchIcon = styled.img`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: #FFA1A1;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 0 24px 30px 24px;
`;

export const Recent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Delete = styled.div`
  color: rgba(156, 156, 161, 0.50);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

