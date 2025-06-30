import { useState } from 'react';
import CustomButton from './CustomButton';
import DownloadModal from './DownloadModal';

const GameProjectsSection = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDownloadGame = (gameData) => {
    setSelectedFile(gameData);
    setIsDownloadModalOpen(true);
  };

  const games = [
    {
      id: 'roller-bowler',
      title: 'Roller Bowler',
      description: 'A 3D rolling ball platformer combining physics-based movement with creative level design. Features level-based progression, coin collection with persistent tracking, unlockable skins, and dynamic day-night skybox.',
      technologies: ['Unity', 'C#', '3D Physics', 'Game Design'],
      platform: 'Windows',
      filename: 'roller-bawler.zip',
      gradient: 'from-blue-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      variant: 'purpleAnimated',
      downloadData: {
        name: "Roller Bowler",
        filename: "roller-bawler.zip",
        size: "45.2 MB",
        type: "Windows Game",
        url: "/games/roller-bawler.zip",
        description: "A 3D platformer game featuring ball physics and challenging levels. Built with Unity and C#."
      }
    },
    {
      id: 'void-strike',
      title: 'Void Strike',
      description: 'A fast-paced 2D space shooter where you pilot a starfighter through waves of enemies and environmental hazards. Features responsive controls, dynamic enemy spawning, power-ups, and optimized object pooling.',
      technologies: ['Unity', 'C#', '2D Graphics', 'Performance Optimization'],
      platform: 'Windows',
      filename: 'void-strike.zip',
      gradient: 'from-green-500 to-teal-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      variant: 'tealAnimated',
      downloadData: {
        name: "Void Strike",
        filename: "void-strike.zip",
        size: "32.8 MB",
        type: "Windows Game",
        url: "/games/void-strike.zip",
        description: "A 2D space shooter game with intense action and progressive difficulty. Features smooth controls and retro-style graphics."
      }
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Game Development Portfolio</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {games.map((game) => (
          <div 
            key={game.id}
            className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${game.gradient} rounded-xl flex items-center justify-center`}>
                {game.icon}
              </div>
              <div className="flex flex-wrap gap-2">
                {game.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300 text-xs font-medium rounded-full border border-gray-200 dark:border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              {game.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300 text-sm leading-relaxed">
              {game.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>Platform: {game.platform}</span>
              </div>
              <CustomButton
                onClick={() => handleDownloadGame(game.downloadData)}
                variant={game.variant}
                size="sm"
                className="shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </CustomButton>
            </div>
          </div>
        ))}
      </div>

      {/* Itch.io Portfolio Link */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3v18l3-3h12l3 3V3H3zm15 14H6.83L5 18.83V5h13v12z"/>
                <path d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">More Games on Itch.io</h3>
              <p className="text-white/80">Explore my complete game portfolio</p>
            </div>
          </div>
          <a href="https://moe2.itch.io" target="_blank" rel="noopener noreferrer" 
             className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center hover:scale-105">
            <span className="mr-2">Visit Portfolio</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        file={selectedFile}
      />
    </div>
  );
};

export default GameProjectsSection; 