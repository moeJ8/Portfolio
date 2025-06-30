import CustomButton from './CustomButton';

const WebProjectsSection = () => {
  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Web Development Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Full-stack applications and digital solutions</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Glim Project Card */}
        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Card Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                React
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                Node.js
              </span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs rounded-full border border-emerald-200 dark:border-emerald-700">
                MongoDB
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
            Glim
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
            A modern blogging platform built with React and advanced CMS features. Showcases responsive design, user authentication, and content management.
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span>Platform: Web • Blogging Platform</span>
            </div>
            <CustomButton
              onClick={() => window.open('https://glim.blog', '_blank')}
              variant="purpleAnimated"
              size="sm"
              className="shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </CustomButton>
          </div>
        </div>

        {/* Rahalatek Project Card */}
        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Card Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                React
              </span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded-full border border-orange-200 dark:border-orange-700">
                Express
              </span>
              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs rounded-full border border-red-200 dark:border-red-700">
                Real-time
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
            Rahalatek
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
            Enterprise-level web application with real-time features, advanced state management, and responsive design principles for modern business solutions.
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span>Platform: Web • Enterprise App</span>
            </div>
            <CustomButton
              onClick={() => window.open('https://app.Rahalatek.com', '_blank')}
              variant="blueAnimated"
              size="sm"
              className="shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit App
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjectsSection; 