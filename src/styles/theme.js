const fontGenerator = (
  fontFamily,
  fontSize = "1rem", //기본폰트크기
  fontWeight = "400", //기본두께
  lineHeight = "1.5", // 행간140% 원래기본은 1.5
  letterSpacing = "normal" //자간-2.5% 원래기본은 normal
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
    mainColor: "#FF6969", //메인컬러
    pageBgColor: "#FAFAFC", //페이지 기본 회색 배경색
    default: "#000000", // 기본 검정색
    white: "#FFFFFF",
  },

  fonts: {
    //기본 설정해둠 프리텐다드로
    default: fontGenerator(
      "SUIT-Regular",
      "1rem",
      "400",
      "1.5",
      "normal"
    ),

    // SUIT 폰트 설정
    SUITBold: fontGenerator("SUIT-Bold"),
    SUITExtraBold: fontGenerator("SUIT-ExtraBold"),
    SUITExtraLight: fontGenerator("SUIT-ExtraLight"),
    SUITHeavy: fontGenerator("SUIT-Heavy"),
    SUITLight: fontGenerator("SUIT-Light"),
    SUITMedium: fontGenerator("SUIT-Medium"),
    SUITRegular: fontGenerator("SUIT-Regular"),
    SUITSemiBold: fontGenerator("SUIT-SemiBold"),
    SUITThin: fontGenerator("SUIT-Thin"),
  },
};
