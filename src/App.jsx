import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import StayOnTop from './components/StayOnTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
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
            <Route path="/article" element={<Article />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
