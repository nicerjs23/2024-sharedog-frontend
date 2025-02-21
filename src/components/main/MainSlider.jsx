import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./MainSlider.styled";
import TestSlide from "@components/main/TestSlide";
import PetSlide from "@components/main/PetSlide";
import CountSlide from "@components/main/CountSlide";
const MainSlider = ({ isTest }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 화살표 비활성화
    focusOnSelect: true, // 슬라이드를 클릭해야 포커스가 이동
    appendDots: (dots) => <S.CustomDots>{dots}</S.CustomDots>, // Dots를 슬라이더 내부로 이동
    customPaging: () => <S.Dot />, // 개별 Dot 디자인
  };
  // ✅ isTest 값에 따라 슬라이드 순서 변경
  const slides = isTest
    ? [<PetSlide />, <CountSlide />, <TestSlide />] // isTest가 true이면 TestSlide를 뒤로
    : [<TestSlide />, <PetSlide />, <CountSlide />]; // 기본 순서

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <S.SlideWrapper key={index}>{slide}</S.SlideWrapper>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};
export default MainSlider;
