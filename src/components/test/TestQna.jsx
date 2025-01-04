import * as S from "./TestQna.styled";
const TestQna = ({ question, options, selectedOption, onSelect }) => {
  const questionLines = question.split("<br/>");

  return (
    <S.QuestionWrapper>
      {/* ✅ 줄바꿈 처리 */}
      <S.QuestionText>
        {questionLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </S.QuestionText>

      {/* ✅ 선택지 렌더링 */}
      <S.AnswerOptionBox>
        {options.map((option) => (
          <S.AnswerOption
            key={option.id}
            selected={selectedOption === option.id}
            onClick={() => onSelect(option.id)}
          >
            <strong style={{ color: "#FF6969" }}>
              {option.redText}
            </strong>
            {option.text}
          </S.AnswerOption>
        ))}
      </S.AnswerOptionBox>
    </S.QuestionWrapper>
  );
};

export default TestQna;
