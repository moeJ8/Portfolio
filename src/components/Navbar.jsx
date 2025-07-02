import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import CustomButton from './CustomButton';
import PlatformIcon from './PlatformIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleConnectClick = () => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.getElementById('social-media');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('social-media');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="font-bold text-xl text-blue-700 dark:text-blue-200">
                MJ
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                <span className="lg:hidden">Mohammad</span>
                <span className="hidden lg:inline">Mohammad Jada</span>
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">Fullstack Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/"
              className={`relative px-2 lg:px-4 py-2 font-medium transition-all duration-300 group ${
                location.pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            
            <Link
              to="/projects"
              className={`relative px-2 lg:px-4 py-2 font-medium transition-all duration-300 group ${
                location.pathname === '/projects' || location.pathname.startsWith('/projects/') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                location.pathname === '/projects' || location.pathname.startsWith('/projects/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            
            <Link
              to="/contact"
              className={`relative px-2 lg:px-4 py-2 font-medium transition-all duration-300 group ${
                location.pathname === '/contact' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            
            <Link
              to="/about"
              className={`relative px-2 lg:px-4 py-2 font-medium transition-all duration-300 group ${
                location.pathname === '/about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* CTA Button */}
            <CustomButton
              onClick={handleConnectClick}
              variant="blueAnimated"
              size="md"
              className="shadow-lg hover:shadow-xl backdrop-blur-lg rounded-full"
            >
              <span className="hidden xl:inline">Connect With Me</span>
              <span className="xl:hidden">Connect</span>
            </CustomButton>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div 
            ref={menuRef}
            className="px-2 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
          >
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              🏠 Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/projects' || location.pathname.startsWith('/projects/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              🚀 Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              📞 Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              👨‍💻 About
            </Link>
            <CustomButton
              onClick={() => {
                setIsMenuOpen(false);
                handleConnectClick();
              }}
              variant="blueAnimated"
              size="md"
              className="shadow-lg hover:shadow-xl backdrop-blur-lg rounded-full w-full mt-4"
            >
              Connect With Me
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 