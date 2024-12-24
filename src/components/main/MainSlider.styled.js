import styled from "styled-components";

/* 슬라이더 컨테이너 */
export const SliderContainer = styled.div`
  position: relative; /* Dots를 내부에 배치하기 위해 */
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  /* flex-grow: 1; */
  height: 162px;
  /* border: 1px solid blue; */
`;

export const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;

/* 커스텀 Dots 전체 컨테이너 */
export const CustomDots = styled.ul`
  position: absolute;
  bottom: 8px; /* 슬라이더 내부 하단에 배치 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
  li {
    width: auto; /* Dot 크기에 맞게 조절 */
    height: auto; /* Dot 크기에 맞게 조절 */
    margin: 0; /* Dot의 외부 여백 제거 */
    display: flex;
    align-items: center; /* Dot을 세로로 정렬 */
    justify-content: center;
  }

  /* Dot 버튼 제거 (React Slick 기본 스타일 방지) */
  li button {
    display: none;
  }
`;

/* 개별 Dot 스타일 */
export const Dot = styled.div`
  width: 3.55px;
  height: 4.41px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transition: all 0.3s ease;
  margin: 0 2px; /* 기본 간격 */
  /* 활성화된 Dot */
  .slick-active & {
    width: 16px;
    border-radius: 20px;
    background-color: #fff;
    margin: 0 2px; /* 활성화된 Dot 간격도 동일하게 유지 */
  }
`;
