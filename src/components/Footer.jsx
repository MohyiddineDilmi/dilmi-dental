import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';
import logoWhite from '../assets/dilmi_dental_white.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  // Animation variants for the floating bubble elements
  const bubbleVariants = {
    animate: (i) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        delay: i * 0.2,
        ease: 'easeInOut'
      }
    })
  };

  // Animation variants for the wave pattern
  const waveVariants = {
    animate: {
      x: [0, -100],
      transition: {
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear'
      }
    }
  };

  // Generate random bubble positions
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 70 + 10}%`,
    size: `${Math.random() * 40 + 20}px`,
    delay: i * 0.2
  }));

  return (
    <footer className="footer">
      {/* Animated background elements */}
      <div className="footer-bg-animation">
        {/* Wave pattern */}
        <motion.div 
          className="footer-wave"
          variants={waveVariants}
          animate="animate"
        />
        
        {/* Floating bubbles */}
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="footer-bubble"
            custom={index}
            variants={bubbleVariants}
            animate="animate"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.size,
              height: bubble.size
            }}
          />
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={logoWhite} alt="Dilmi Dental Logo" />
          </div>
          <p>{t('footer.tagline')}</p>
          <div className="social-links">
            <a href="https://www.facebook.com/p/Dilmi-Dental-61556071674319/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-links-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul className="footer-links">
            <li><a href="#home">{t('navbar.home')}</a></li>
            <li><a href="#services">{t('navbar.services')}</a></li>
            <li><a href="#testimonials">{t('navbar.testimonials')}</a></li>
            <li><a href="#contact">{t('navbar.contact')}</a></li>
          </ul>
        </div>
        
        <div className="footer-hours-section">
          <h3>{t('footer.openingHours')}</h3>
          <ul className="hours-list">
            <li><span>{t('footer.saturday_thursday')}</span> <span>{t('footer.saturday_thursday_hours')}</span></li>
            <li><span>{t('footer.friday')}</span> <span>{t('footer.friday_hours')}</span></li>
          </ul>
        </div>
        
        <div className="footer-contact-section">
          <h3>{t('footer.contactInfo')}</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> {t('footer.address')}</li>
            <li><i className="fas fa-phone-alt"></i> <span dir="ltr" className="phone-number">+213 668 99 51 05</span></li>
            <li><i className="fas fa-envelope"></i> <span dir="ltr">info@dilmidental.com</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dilmi Dental. {t('footer.allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer; 