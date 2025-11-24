
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Mission from './components/Mission';
import Effects from './components/Effects';
import Benefits from './components/Benefits';
import Video from './components/Video';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import PastWinners from './components/PastWinners';
import FloatingButton from './components/FloatingButton';

import Press from './components/Press';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-gold selection:text-black">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
      </div>

      {/* Sidebar (LNB) */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 pt-[48px]">
        <Overview />
        <Mission />
        <Benefits />
        <Effects />
        <PastWinners />
        <Video />
        <Press />
        <Process />
        <FAQ />
        <Footer />
      </main>

      <FloatingButton />
    </div>
  );
}

export default App;
