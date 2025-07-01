const GameDescription = ({ 
  title, 
  overview, 
  features, 
  additionalDescription 
}) => {
  return (
    <section className="mb-16">
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About {title}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Game Overview</h3>
            {overview.map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {additionalDescription && (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {additionalDescription}
              </p>
            )}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescription; 