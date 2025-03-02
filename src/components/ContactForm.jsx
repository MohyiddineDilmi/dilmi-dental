import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container contact-only">
        <div className="contact-info">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <div className="detail-content">
                <strong>{t('contact.address')}</strong>
                <p>
                  {t('contact.addressLine1')}<br />
                  {t('contact.addressLine2')}<br />
                  {t('contact.addressLine3')}
                </p>
              </div>
            </div>
            
            <div className="detail-item">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <div className="detail-content">
                <strong>{t('contact.phone')}</strong>
                <p dir="ltr" className="phone-number">+213 668 99 51 05</p>
              </div>
            </div>
            
            <div className="detail-item">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <div className="detail-content">
                <strong>{t('contact.email')}</strong>
                <p dir="ltr">info@dilmidental.com</p>
              </div>
            </div>
            
            <div className="detail-item">
              <i className="fas fa-clock" aria-hidden="true"></i>
              <div className="detail-content">
                <strong>{t('contact.hours')}</strong>
                <p>{t('footer.saturday_thursday')} {t('footer.saturday_thursday_hours')}<br />{t('footer.friday')} {t('footer.friday_hours')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 