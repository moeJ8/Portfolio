const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">About Me</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
          I'm a passionate Fullstack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) 
          and Unity game development. I create dynamic, user-friendly web applications and engaging interactive 
          gaming experiences with a focus on clean code, scalable architecture, and innovative design.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed transition-colors duration-300">
          My portfolio includes projects like <strong>Glim</strong> and <strong>Rahalatek</strong>, showcasing 
          my expertise in building scalable web applications, while my game development work demonstrates 
          creativity and technical proficiency in interactive design.
        </p>
      </div>
    </section>
  );
};

export default AboutSection; 