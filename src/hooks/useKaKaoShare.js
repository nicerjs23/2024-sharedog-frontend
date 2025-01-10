import { useEffect, useCallback } from "react";

const useKakaoShare = () => {
  const baseUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:5173"
      : "https://2024-sharedog-frontend.vercel.app";

  useEffect(() => {
    if (!window.Kakao) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    // ✅ Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY); // .env에서 키 가져오기
      console.log("✅ Kakao SDK Initialized");
    }
  }, []);

  const shareKakao = useCallback(
    ({ title, description, imageUrl, pageUrl }) => {
      if (!window.Kakao) {
        console.error("Kakao SDK가 로드되지 않았습니다.");
        return;
      }

      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title || "공유 제목",
          description: description || "공유 설명",
          imageUrl: imageUrl || `${baseUrl}/defaultThumbnail.png`,
          link: {
            mobileWebUrl: pageUrl || `${baseUrl}/testStart`,
            webUrl: pageUrl || `${baseUrl}/testStart`,
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: pageUrl || `${baseUrl}/testStart`,
              webUrl: pageUrl || `${baseUrl}/testStart`,
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
