import { useState } from 'react';
import CustomButton from './CustomButton';
import DownloadModal from './DownloadModal';
import ProjectCard from './ProjectCard';
import { IoGameController } from 'react-icons/io5';
import { SiItchdotio } from 'react-icons/si';

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
      icon: (
        <img 
          src="/roller-bawler-icon.png" 
          alt="Roller Bowler" 
          className="w-16 h-16 object-cover rounded-xl"
        />
      ),
      gradients: ['from-transparent', 'to-transparent'],
      badges: [
        { text: 'Unity', bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
        { text: 'C#', bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
        { text: '3D Physics', bgColor: 'bg-blue-100 dark:bg-blue-900/50', textColor: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-200 dark:border-blue-700' },
        { text: 'Game Design', bgColor: 'bg-orange-100 dark:bg-orange-900/50', textColor: 'text-orange-700 dark:text-orange-300', borderColor: 'border-orange-200 dark:border-orange-700' }
      ],
      footer: 'Platform: Windows',
      buttonVariant: 'purpleAnimated',
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
      icon: (
        <img 
          src="/void-strike-icon.png" 
          alt="Void Strike" 
          className="w-16 h-16 object-cover rounded-xl"
        />
      ),
      gradients: ['from-transparent', 'to-transparent'],
      badges: [
        { text: 'Unity', bgColor: 'bg-slate-100 dark:bg-slate-900/50', textColor: 'text-slate-700 dark:text-slate-300', borderColor: 'border-slate-200 dark:border-slate-700' },
        { text: 'C#', bgColor: 'bg-purple-100 dark:bg-purple-900/50', textColor: 'text-purple-700 dark:text-purple-300', borderColor: 'border-purple-200 dark:border-purple-700' },
        { text: '2D Graphics', bgColor: 'bg-green-100 dark:bg-green-900/50', textColor: 'text-green-700 dark:text-green-300', borderColor: 'border-green-200 dark:border-green-700' },
        { text: 'Performance Optimization', bgColor: 'bg-red-100 dark:bg-red-900/50', textColor: 'text-red-700 dark:text-red-300', borderColor: 'border-red-200 dark:border-red-700' }
      ],
      footer: 'Platform: Windows',
      buttonVariant: 'tealAnimated',
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
        <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-600">
          <IoGameController className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Game Development Portfolio</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Interactive games and entertainment applications</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {games.map((game) => (
          <ProjectCard
            key={game.id}
            title={game.title}
            description={game.description}
            icon={game.icon}
            gradients={game.gradients}
            badges={game.badges}
            footer={game.footer}
            buttonVariant={game.buttonVariant}
            buttonText="Download"
            buttonIcon={
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            onButtonClick={() => handleDownloadGame(game.downloadData)}
          />
        ))}
      </div>

      {/* Itch.io Portfolio Link */}
      <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-slate-600/40 rounded-2xl p-6 shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-300 dark:hover:border-red-600">
              <SiItchdotio className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">More Games on Itch.io</h3>
              <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Explore my complete game portfolio</p>
            </div>
          </div>
          <CustomButton
            onClick={() => window.open('https://moe2.itch.io', '_blank')}
            variant="redAnimated"
            size="lg"
            className="shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visit Portfolio
          </CustomButton>
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