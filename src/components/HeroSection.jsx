import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home">
      {/* Animated background elements */}
      <div className="animated-background">
        <motion.div 
          className="animated-circle circle-1"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 0.9, 0.6],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="animated-circle circle-2"
          initial={{ scale: 0.6, opacity: 0.4 }}
          animate={{ 
            scale: [0.6, 1, 0.6],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="animated-circle circle-3"
          initial={{ scale: 0.5, opacity: 0.3 }}
          animate={{ 
            scale: [0.5, 0.9, 0.5],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Centered content */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.welcome')}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.tagline')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.button 
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-calendar-plus"></i> {t('hero.bookButton')}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection; 