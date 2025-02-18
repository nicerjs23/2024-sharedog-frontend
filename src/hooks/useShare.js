import { useCallback } from "react";

const useShare = ({ url }) => {
  const handleShare = useCallback(() => {
    if (navigator.share) {
      // 모바일 환경에서 Web Share API 사용
      navigator
        .share({ url }) // title과 text는 제외하고 url만 전달
        .then(() => console.log("공유 성공"))
        .catch((error) => console.error("공유 실패", error));
    } else {
      // PC 환경에서 URL 복사
      navigator.clipboard
        .writeText(url)
        .then(() => alert("URL이 복사되었습니다!"))
        .catch((error) => console.error("URL 복사 실패", error));
    }
  }, [url]);
  return { handleShare };
};

export default useShare;
