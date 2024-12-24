import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./MainSlider.styled";
import TestSlide from "./TestSlide";
const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 화살표 비활성화
    appendDots: (dots) => <S.CustomDots>{dots}</S.CustomDots>, // Dots를 슬라이더 내부로 이동
    customPaging: () => <S.Dot />, // 개별 Dot 디자인
  };
  return (
    <S.SliderContainer>
      <Slider {...settings}>
        <S.SlideWrapper>
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
