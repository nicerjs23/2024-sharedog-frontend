import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 98px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBgColor};
  /* position: fixed; */

  top: 50%;

  font-family: ${({ theme }) => theme.fonts.SUITSemiBold["font-family"]};
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
export const PetList = styled.section`
  margin-top: 35px;
  width: 100%;
  justify-content: center;
`;

export const AddPet = styled.section`
  display: flex;
  width: 60%;
  height: 36px;
  padding: 8px 13px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 25px;

  border-radius: 25px;
  background: #ffe8e8;

  color: #ff6969;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 19.2px */
`;
