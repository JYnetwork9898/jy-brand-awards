import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AwardPage from './pages/AwardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 접속 시 히트브랜드 페이지로 리다이렉트(임시 설정) */}
        <Route path="/" element={<Navigate to="/awards/THBA" replace />} />

        {/* 메인 랜딩 페이지 */}
        <Route path="/home" element={<Home />} />

        {/* 각 어워드별 상세 페이지 (slug 파라미터로 구분) */}
        <Route path="/awards/:slug" element={<AwardPage />} />


      </Routes>
    </Router>
  );
}

export default App;
