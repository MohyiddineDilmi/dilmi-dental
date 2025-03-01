import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <div className="language-switcher">
      <div className="language-toggle">
        <button 
          className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`} 
          onClick={() => changeLanguage('en')}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button 
          className={`language-option ${currentLanguage === 'ar' ? 'active' : ''}`} 
          onClick={() => changeLanguage('ar')}
          aria-label="Switch to Arabic"
        >
          ع
        </button>
        <div 
          className="slider"
          style={{ 
            transform: currentLanguage === 'ar' ? 'translateX(100%)' : 'translateX(0)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 