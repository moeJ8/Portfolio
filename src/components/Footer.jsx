const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="https://github.com/Mohammad-Jada" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-700 mt-6">
          <span className="text-gray-400">© 2025 Mohammad Jada. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 