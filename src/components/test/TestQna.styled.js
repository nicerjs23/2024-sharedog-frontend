import styled from "styled-components";

// ✅ 스타일 정의
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; //질문은 display flex쓰면 안돼서
  margin-top: 67px;
`;

export const QuestionText = styled.div`
  margin-bottom: 50px;
  color: #000000;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
`;
export const AnswerOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 17px;
`;
export const AnswerOption = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 13px;
  width: 81.07%;
  height: 60px;
  border: ${(props) =>
    props.selected ? "1px solid #FF6969" : "1px solid #FFE0E0"};
  box-shadow: ${(props) =>
    props.selected
      ? "0px 0px 5px 0px rgba(251, 107, 107, 0.50);"
      : "none"};

  border-radius: 10px;

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
  font-size: 1rem;
`;
