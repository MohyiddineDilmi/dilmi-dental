import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';
import logo from '../assets/dilmi_dental.svg';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" dir="ltr">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="Dilmi Dental Logo" />
            </a>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`nav-links ${isMobile ? (menuOpen ? 'show' : 'hide') : ''}`}>
          <a href="#home" onClick={() => isMobile && setMenuOpen(false)}>{t('navbar.home')}</a>
          <a href="#services" onClick={() => isMobile && setMenuOpen(false)}>{t('navbar.services')}</a>
          <a href="#testimonials" onClick={() => isMobile && setMenuOpen(false)}>{t('navbar.testimonials')}</a>
          <a href="#contact" onClick={() => isMobile && setMenuOpen(false)}>{t('navbar.contact')}</a>
        </div>
        
        <div className="navbar-right">
          <LanguageSwitcher />
          <button className="appointment-btn neo-button">
            <i className="fas fa-calendar-check"></i> {t('navbar.bookAppointment')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 