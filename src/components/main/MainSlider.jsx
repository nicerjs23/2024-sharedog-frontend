import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./MainSlider.styled";
import TestSlide from "./TestSlide";
const MainSlider = () => {
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
  return (
    <S.SliderContainer>
      <Slider {...settings}>
        <S.SlideWrapper>
          {/* 슬라이더 내부는 컴포넌트로 구현 */}
          <TestSlide />
        </S.SlideWrapper>
        <S.SlideWrapper>
          <S.SlideContent>2</S.SlideContent>
        </S.SlideWrapper>
        <S.SlideWrapper>
          <S.SlideContent>3</S.SlideContent>
        </S.SlideWrapper>
      </Slider>
    </S.SliderContainer>
  );
};
export default MainSlider;
