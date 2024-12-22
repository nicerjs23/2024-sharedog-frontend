import styled from "styled-components";

export const Wrapper = styled.section`
  /* border: 1px solid green; */
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: 78px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -6px 14px 0px rgba(47, 47, 47, 0.04);
`;

export const Icons = styled.div`
  display: flex;
  width: 85.07%;
  justify-content: space-between;
`;

export const IconBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 26px;
  height: 26px;
`;

export const IconText = styled.div`
  font-size: 10px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.mainColor : "rgba(156, 156, 161, 0.7)"};
  font-family: ${({ theme }) =>
    theme.fonts.SUITRegular["font-family"]};
`;
