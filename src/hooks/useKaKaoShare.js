import { useEffect, useCallback } from "react";

const useKakaoShare = () => {
  const baseUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:5173"
      : "https://2024-sharedog-frontend.vercel.app";

  useEffect(() => {
    if (!window.Kakao) {
      //console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    // ✅ Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY); // .env에서 키 가져오기
      //console.log("✅ Kakao SDK Initialized");
    }
  }, []);

  const shareKakao = useCallback(
    ({
      title = "우리집 강아지는 헌혈견이 될 수 있을까?",
      description = "테스트를 통해 확인해보세요!",
      imageUrl = "https://2024-sharedog-frontend.vercel.app/testThumbnail.png",
      pageUrl = `${baseUrl}/testStart`,
    } = {}) => {
      // 빈 객체를 기본값으로 설정
      if (!window.Kakao) {
        console.error("Kakao SDK가 로드되지 않았습니다.");
        return;
      }

      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: pageUrl,
              webUrl: pageUrl,
            },
          },
        ],
      });
    },
    [baseUrl]
  );

  return { shareKakao };
};

export default useKakaoShare;
