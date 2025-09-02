import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

const ScrollAnimation = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  ...props 
}) => {

  if (prefersReducedMotion()) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0, 
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0, 
      scale: direction === 'scale' ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: '-50px', 
        amount: 0.1, 
      }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInUp = ({ children, delay = 0, className = '', ...props }) => (
  <ScrollAnimation direction="up" delay={delay} className={className} {...props}>
    {children}
  </ScrollAnimation>
);

export const FadeInDown = ({ children, delay = 0, className = '', ...props }) => (
  <ScrollAnimation direction="down" delay={delay} className={className} {...props}>
    {children}
  </ScrollAnimation>
);

export const FadeInLeft = ({ children, delay = 0, className = '', ...props }) => (
  <ScrollAnimation direction="left" delay={delay} className={className} {...props}>
    {children}
  </ScrollAnimation>
);

export const FadeInRight = ({ children, delay = 0, className = '', ...props }) => (
  <ScrollAnimation direction="right" delay={delay} className={className} {...props}>
    {children}
  </ScrollAnimation>
);

export const ScaleIn = ({ children, delay = 0, className = '', ...props }) => (
  <ScrollAnimation direction="scale" delay={delay} className={className} {...props}>
    {children}
  </ScrollAnimation>
);

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.05 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: '-30px',
        amount: 0.1
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
