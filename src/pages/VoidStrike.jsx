import { useState } from 'react';
import GameHero from '../components/game/GameHero';
import GameDescription from '../components/game/GameDescription';
import GameScreenshots from '../components/game/GameScreenshots';
import GameDownload from '../components/game/GameDownload';
import CustomButton from '../components/CustomButton';
import DownloadModal from '../components/DownloadModal';
import { useNavigate } from 'react-router-dom';

const VoidStrike = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const gameData = {
    title: "Void Strike",
    subtitle: "2D Space Shooter Game",
    description: "A fast-paced 2D space shooter where you pilot a starfighter through waves of enemies and environmental hazards. Features responsive controls, dynamic enemy spawning, power-ups, and optimized object pooling.",
    technologies: ["Unity", "C#", "2D Graphics", "Performance Optimization"],
    backgroundVideo: "/2DGameBackgroundVideo.mp4",
    iconImage: "/void-strike-icon.png",
    overview: [
      "Void Strike is an intense 2D space shooter that puts you in the cockpit of a starfighter defending against endless waves of alien invaders.",
      "The game features smooth, responsive controls that make piloting your ship feel natural and precise. Navigate through asteroid fields, dodge enemy fire, and unleash devastating attacks.",
      "With progressively challenging waves and strategic power-up management, every playthrough offers a unique and thrilling experience."
    ],
    features: [
      "Fast-paced 2D space combat with smooth controls",
      "Dynamic enemy spawning with increasing difficulty",
      "Power-up system with temporary weapon upgrades",
      "Optimized object pooling for smooth performance",
      "Retro-style graphics with modern visual effects",
      "Environmental hazards and obstacles",
      "Progressive wave-based gameplay",
      "High score tracking"
    ],
    file: {
      name: "Void Strike",
      filename: "void-strike.zip",
      size: "32.8 MB",
      type: "Windows Game",
      url: "/games/void-strike.zip",
      description: "A 2D space shooter game with intense action and progressive difficulty. Features smooth controls and retro-style graphics."
    },
    instructions: [
      "Download the game file from the button below",
      "Extract the ZIP file to your desired location", 
      "Run 'Void Strike.exe' to start the game",
      "Use WASD or arrow keys to move, Space to shoot, and defend the galaxy!"
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
            backgroundVideo={gameData.backgroundVideo}
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
              screenshotCount={6}
              screenshotBasePath="/screenshotsVoidStrike"
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

export default VoidStrike; 