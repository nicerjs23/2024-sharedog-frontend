import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // PWA 플러그인 설정
      registerType: "autoUpdate", // 서비스 워커 자동 업데이트 설정
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "/icons/maskable_icon_x128.png",
        "/icons/maskable_icon_x192.png",
        "/icons/maskable_icon_x512.png",
        "/icons/maskable_icon_x512_maskable.png",
      ], // 추가적으로 참조할 파일 경로
      manifest: {
        name: "나눠주개",
        short_name: "나눠주개",
        description: "반려견 헌혈 및 수혈까지 편리하게!",
        start_url: "/", // PWA가 시작되는 URL
        scope: "/", // PWA가 적용될 URL 범위
        display: "standalone", // 브라우저 요소를 제거하고 앱처럼 보이게 설정
        background_color: "#ffffff", // 배경 색상 (스플래시 화면)
        theme_color: "#000000", // 툴바와 같은 UI 요소의 테마 색상
        icons: [
          {
            src: "icons/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/maskable_icon_x512_maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable", // 마스킹이 가능한 아이콘
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // 기본 페이지
        test: "public/test.html", // 테스트 페이지 추가
      },
    },
  },
  resolve: {
    alias: {
      //경로 별칭(Alias)으로 경로 관리하기
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
});
