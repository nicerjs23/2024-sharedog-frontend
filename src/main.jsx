import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register';

// ✅ 새 버전이 감지되면 자동 새로고침
const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true); // 새 버전 즉시 업데이트 + 페이지 리프레시
  },
  onOfflineReady() {
    console.log('오프라인 모드 사용 준비 완료!');
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
