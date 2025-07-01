const GameScreenshots = ({ 
  title, 
  screenshotCount, 
  screenshotBasePath, 
  screenshotFileName = 'screenshot' 
}) => {
  const screenshots = Array.from({ length: screenshotCount }, (_, i) => i + 1);

  return (
    <section className="mb-16">
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Game Screenshots</h2>
        </div>
        
        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((num) => (
            <div key={num} className="relative group">
              <div 
                className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => window.open(`${screenshotBasePath}/${screenshotFileName}${num}.png`, '_blank')}
              >
                <img 
                  src={`${screenshotBasePath}/${screenshotFileName}${num}.png`}
                  alt={`${title} Screenshot ${num}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default GameScreenshots; 