export const testQuestions = [
  {
    id: 1,
    question: "반려견의 견종을 알려주세요",
    options: [
      { id: 1, redText: "소형견", text: "이에요!", score: 0 },
      { id: 2, redText: "대형견", text: "이에요!", score: 1 },
    ],
  },
  {
    id: 2,
    question: "반려견의 나이를 알려주세요",
    options: [
      { id: 1, redText: "18개월 미만", text: "이에요!", score: 0 },
      {
        id: 2,
        redText: "18개월 이상 8세 이하",
        text: "에요!",
        score: 1,
      },
      { id: 3, redText: "9세 이상", text: "이에요!", score: 0 },
    ],
  },
  {
    id: 3,
    question: "반려견의 몸무게를 알려주세요",
    options: [
      { id: 1, redText: "20kg 이하", text: "에요!", score: 0 },
      { id: 2, redText: "20kg 이상", text: "이에요!", score: 1 },
    ],
  },
  {
    id: 4,
    question:
      "심장사상충,바베시아,혈액 및<br/> 바이러스 질병 이력이 있나요?",
    options: [
      {
        id: 1,
        redText: "네",
        text: ", 앓았던 적이 있어요!",
        score: 0,
      },
      {
        id: 2,
        redText: "아니요",
        text: ", 앓았던 적이 없어요!",
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question:
      "매월 심장사상충 예방약 복용 및<br/>백신 접종을 하고 있나요?",
    options: [
      {
        id: 1,
        redText: "네",
        text: ", 매월 챙기고 있어요!",
        score: 1,
      },
      {
        id: 2,
        redText: "아니요",
        text: ", 매월 챙기지 못하고 있어요!",
        score: 0,
      },
    ],
  },
];
