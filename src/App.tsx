import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AwardPage from './pages/AwardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 임시 조치: 메인 페이지 대신 소비자만족브랜드 페이지로 리디렉션 */}
        <Route path="/" element={<Navigate to="/awards/consumer" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/awards/:slug" element={<AwardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
