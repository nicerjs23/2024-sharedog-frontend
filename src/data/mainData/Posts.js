import PostImg1 from "@assets/images/postImg1.jpg";
import PostImg2 from "@assets/images/postImg2.png";
import PostImg3 from "@assets/images/postImg3.jpg";

// 필터 지역정보
export const filter = [
  { id: 1, name: "전체" },
  { id: 2, name: "서울" },
  { id: 3, name: "인천" },
  { id: 4, name: "경기" },
  { id: 5, name: "강원" },
  { id: 6, name: "경상" },
  { id: 7, name: "충청" },
  { id: 8, name: "전라" },
  { id: 9, name: "제주" },
];
// 게시글티비
export const post = [
  {
    id: 1,
    bloodType: "DEA 1-",
    region: "서울",
    title: "DEA 1- 혈액형 긴급 헌혈이 절실합니다!",
    content:
      "10살 마티즈믹스 루피가 식욕 부진과 기력 저하로 병원에 내원하였고, 긴급 헌혈이 필요합니다.",
    img: PostImg1,
  },
  {
    id: 2,
    bloodType: "DEA 1.1",
    region: "인천",
    title: "DEA 1.1 비상비상 이멀전씨 비상비상",
    content: "짧은 내용 테스트 ",
    img: null,
  },
  {
    id: 3,
    bloodType: "DEA 3",
    region: "경기",
    title: "짧은제목 테스트",
    content:
      "7살 시바견 코코가 응급 수혈이 필요합니다. 많은 관심 부탁드립니다.",
    img: PostImg2,
  },
  {
    id: 4,
    bloodType: "DEA 5",
    region: "강원",
    title:
      "DEA 4- 희귀 혈액형 수혈 필요! 긴제목 긴제목긴제목긴제목 긴제목 긴제목1긴제목2긴제목3 ",
    content:
      "2살 포메라니안 루루가 희귀 혈액형으로 긴급 수혈이 필요합니다.필요필요 필요핑2살 포메라니안 루루가 희귀 혈액형으로 긴급 수혈이 필요합니다.필요필요 필요핑 2살 포메라니안 루루가 희귀 혈액형으로 긴급 수혈이 필요합니다.필요필요 필요핑",
    img: PostImg3,
  },
];
