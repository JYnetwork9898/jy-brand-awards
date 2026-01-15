import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AwardPage from './pages/AwardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 랜딩 페이지 (히트브랜드 내용을 메인에 표시, URL 유지) */}
        <Route path="/" element={<AwardPage />} />

        {/* Short URL redirects */}
        <Route path="/thba" element={<Navigate to="/awards/THBA" replace />} />
        <Route path="/cseb" element={<Navigate to="/awards/CSEB" replace />} />
        <Route path="/csba" element={<Navigate to="/awards/CSBA" replace />} />
        <Route path="/teba" element={<Navigate to="/awards/TEBA" replace />} />

        {/* Home 경로 접속 시 메인으로 리다이렉트 (Canonical) */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* 각 어워드별 상세 페이지 (slug 파라미터로 구분) */}
        <Route path="/awards/:slug" element={<AwardPage />} />


      </Routes>
    </Router>
  );
}

export default App;
