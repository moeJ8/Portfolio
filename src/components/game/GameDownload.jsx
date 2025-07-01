import CustomButton from '../CustomButton';

const GameDownload = ({ 
  title, 
  file,
  instructions = [],
  onDownloadClick
}) => {

  const defaultInstructions = [
    "Click the Download button to get the Windows build (a ZIP file).",
    "Extract the ZIP folder.",
    "Open the extracted folder and open the RollerBawler.exe file to launch the game.",
    "Start rolling and have fun! 🎉"
  ];

  const displayInstructions = instructions.length > 0 ? instructions : defaultInstructions;

  return (
    <section id="download-section" className="mb-16">
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-8 shadow-xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Download {title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Ready to roll? Download the game and start your platforming adventure today!
          </p>
          
          {/* Download Info */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{file.size}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">File Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Windows</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Platform</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Free</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Price</div>
              </div>
            </div>
          </div>
          
          {/* Installation Instructions */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">How to Install & Play</h4>
            <ol className="space-y-3 text-slate-600 dark:text-slate-300">
              {displayInstructions.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="flex justify-center">
            <CustomButton
              onClick={onDownloadClick}
              variant="purpleAnimated"
              size="lg"
              className="shadow-xl hover:shadow-2xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Now
            </CustomButton>
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
            Compatible with Windows 10/11 • No installation required
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameDownload; 