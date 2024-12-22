import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
