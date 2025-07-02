import { useState } from 'react';
import GameHero from '../components/game/GameHero';
import GameDescription from '../components/game/GameDescription';
import GameScreenshots from '../components/game/GameScreenshots';
import GameDownload from '../components/game/GameDownload';
import CustomButton from '../components/CustomButton';
import DownloadModal from '../components/DownloadModal';
import { useNavigate } from 'react-router-dom';
import { getFileInfo } from '../utils/downloadManager';

const RollerBowler = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Get file info from centralized configuration
  const fileInfo = getFileInfo('roller-bawler');

  const gameData = {
    title: "Roller Bawler",
    subtitle: "3D Unity Platformer Game",
    description: "A 3D rolling ball platformer combining physics-based movement with creative level design. Features level-based progression, coin collection with persistent tracking, unlockable skins, and dynamic day-night skybox.",
    technologies: ["Unity", "C#", "3D Physics", "Game Design"],
    backgroundImage: "/roller-bawler-bg.png",
    iconImage: "/roller-bawler-icon.png",
    overview: [
      "Roller Bawler is an engaging 3D platformer where you control a rolling ball through challenging levels filled with obstacles, collectibles, and physics-based puzzles.",
      "The game features smooth physics-based movement mechanics that make controlling the ball feel natural and responsive. Each level presents unique challenges that test your precision and timing.",
      "Progress through increasingly difficult levels while collecting coins that unlock new ball skins and customization options."
    ],
    features: [
      "Physics-based ball movement with realistic momentum",
      "Multiple themed levels with increasing difficulty",
      "Coin collection system with persistent tracking",
      "Unlockable ball skins and customization options",
      "Dynamic day-night skybox that changes over time",
      "Checkpoint system for challenging sections",
      "Smooth camera follow system",
      "Optimized performance for smooth gameplay"
    ],
    file: fileInfo, // Use centralized file configuration
    instructions: [
      "Download the game file from the button below",
      "Extract the ZIP file to your desired location",
      "Run 'Roller Bawler.exe' to start the game",
      "Use WASD or arrow keys to control the ball and enjoy!"
    ]
  };

  const navigate = useNavigate();

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          {/* Hero Section */}
          <GameHero
            title={gameData.title}
            subtitle={gameData.subtitle}
            description={gameData.description}
            technologies={gameData.technologies}
            backgroundImage={gameData.backgroundImage}
            iconImage={gameData.iconImage}
          />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Game Description */}
            <GameDescription
              title={gameData.title}
              overview={gameData.overview}
              features={gameData.features}
            />

            {/* Screenshots */}
            <GameScreenshots
              title={gameData.title}
              screenshotCount={5}
              screenshotBasePath="/screenshotsRollerBawler"
              screenshotFileName="screenshot"
            />

            {/* Download Section */}
            <GameDownload
              title={gameData.title}
              file={gameData.file}
              instructions={gameData.instructions}
              onDownloadClick={handleDownloadClick}
            />

            {/* Back to Projects */}
            <section className="text-center">
              <CustomButton
                onClick={() => navigate('/projects')}
                variant="blueAnimated"
                size="lg"
                className="shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </CustomButton>
            </section>
          </div>

        {/* Download Modal */}
        <DownloadModal
          isOpen={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
          file={gameData.file}
        />
       </div>
   );
};

export default RollerBowler; 