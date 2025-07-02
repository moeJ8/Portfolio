const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              MJ
            </div>
            <span className="text-xl font-semibold">Mohammad Jada</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 mb-6 md:mb-0">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <a href="https://github.com/moeJ8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
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