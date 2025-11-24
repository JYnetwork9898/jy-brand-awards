import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AwardPage from './pages/AwardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awards/:slug" element={<AwardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
