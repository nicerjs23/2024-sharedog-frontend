import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 540px;
`;

export const GapDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 88.43%;
  margin: 0 auto;
`;
export const TestLogo = styled.div`
  display: flex;

  img {
    width: 144px;
    height: auto;
  }
`;
export const NextBtn = styled.button`
  display: flex;
  margin-bottom: 63px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 1550px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  background-color: ${(props) =>
    props.$isActive ? "#FF6969" : "#ECECEC"};
  color: ${(props) => (props.$isActive ? "#FFFFFF" : "#BDBDBD")};
`;
