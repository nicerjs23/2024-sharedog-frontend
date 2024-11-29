const fontGenerator = (
  fontFamily,
  fontSize = "1rem", //기본폰트크기
  fontWeight = "400", //기본두께
  lineHeight = "1.5", // 행간140% 원래기본은 1.5
  letterSpacing = "-0.025em" //자간-2.5% 원래기본은 normal
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    //나중에 필요시 추가하기

    bg: "#999999", //배경색
    default: "#000000", // 기본 검정색
    white: "#FFFFFF",
  },

  fonts: {
    //기본 설정해둠 프리텐다드로
    default: fontGenerator(
      "Pretendard-SemiBold",
      "1rem",
      "400",
      "1.5",
      "-0.025em"
    ),

    // Pretendard 폰트 설정
    PretendardThin: fontGenerator("Pretendard-Thin"),
    PretendardLight: fontGenerator("Pretendard-Light"),
    PretendardRegular: fontGenerator("Pretendard-Regular"),
    PretendardMedium: fontGenerator("Pretendard-Medium"),
    PretendardSemiBold: fontGenerator("Pretendard-SemiBold"),
    PretendardBold: fontGenerator("Pretendard-Bold"),
    PretendardExtraBold: fontGenerator("Pretendard-ExtraBold"),
    PretendardBlack: fontGenerator("Pretendard-Black"),
  },
};
