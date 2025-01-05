import styled from "styled-components";

const TestStartPgBtn = ({ $bgColor, $textColor, text, onClick }) => {
  return (
    <Wrapper
      $bgColor={$bgColor}
      $textColor={$textColor}
      onClick={onClick}
    >
      {text}
    </Wrapper>
  );
};

export default TestStartPgBtn;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 1550px;
  background-color: ${({ $bgColor }) =>
    $bgColor || "#FF6969"}; /* 기본값 설정 */
  color: ${({ $textColor }) =>
    $textColor || "#FFFFFF"}; /* 기본값 설정 */

  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
`;
