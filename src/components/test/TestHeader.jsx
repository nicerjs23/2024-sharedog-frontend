import styled from "styled-components";
import xIcon from "@assets/icons/X.svg";
import backIcon from "@assets/icons/Back.svg";
const TestHeader = ({
  currentIndex,
  totalQuestions,
  onBack,
  onExit,
}) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  return (
    <Wrapper>
      <Header $isFirst={currentIndex === 0}>
        {/* 첫화면에서는 뒤로가기버튼 없음 +justify contents flex-end로변경*/}
        {currentIndex > 0 && (
          <Btn onClick={onBack}>
            <img src={backIcon} alt="뒤로가기버튼" />
          </Btn>
        )}
        {/* x버튼 홈화면으로 이동시키고 replace:true걸어야될듯 */}
        <Btn onClick={onExit}>
          <img src={xIcon} alt="x버튼" />
        </Btn>
      </Header>
      <ProgressBar>
        <Progress $progress={progress} />
      </ProgressBar>
    </Wrapper>
  );
};

export default TestHeader;

const Wrapper = styled.section`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$isFirst ? "flex-end" : "space-between"};
  width: 100%;
  height: 46px;
  padding: 10px;
`;

const Btn = styled.button`
  display: flex;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #eff1f3;
`;

const Progress = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.mainColor};
  width: ${(props) => props.$progress}%;
  transition: width 0.3s ease-in-out;
`;
