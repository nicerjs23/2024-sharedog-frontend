import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const TestLayout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.testBgColor};
  min-height: calc(var(--vh, 1vh) * 100);
`;
