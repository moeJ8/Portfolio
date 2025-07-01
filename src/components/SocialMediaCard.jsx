import ProjectCard from './ProjectCard';

const SocialMediaCard = ({ 
  platform, 
  url, 
  icon,
  description, 
  hashtags, 
  footer,
  buttonVariant = 'blueAnimated'
}) => {
  const handleVisit = () => {
    window.open(url, '_blank');
  };

  return (
    <ProjectCard
      title={platform}
      description={description}
      icon={icon}
      badges={hashtags}
      footer={footer}
      buttonText="Visit"
      buttonVariant={buttonVariant}
      buttonIcon="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      onButtonClick={handleVisit}
    />
  );
};

export default SocialMediaCard; 