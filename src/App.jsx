import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import StayOnTop from './components/StayOnTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import RollerBowler from './pages/RollerBowler';
import VoidStrike from './pages/VoidStrike';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <StayOnTop />
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/roller-bowler" element={<RollerBowler />} />
            <Route path="/projects/void-strike" element={<VoidStrike />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
