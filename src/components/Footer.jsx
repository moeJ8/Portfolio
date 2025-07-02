import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="font-bold text-xl text-blue-700 dark:text-blue-200">
                MJ
              </span>
            </div>
            <span className="text-xl font-semibold">Mohammad Jada</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-2 mb-6 md:mb-0">
            <button 
              onClick={() => navigate('/')} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group bg-transparent border-none cursor-pointer"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/projects')} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group bg-transparent border-none cursor-pointer"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group bg-transparent border-none cursor-pointer"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group bg-transparent border-none cursor-pointer"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <a 
              href="https://github.com/moeJ8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <span className="relative z-10">GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-slate-700 mt-6 transition-colors duration-300">
          <span className="text-gray-600 dark:text-slate-400 transition-colors duration-300">© 2025 Mohammad Jada.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 