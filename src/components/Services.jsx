import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 1,
      icon: 'tooth',
      title: t('services.general.title'),
      description: t('services.general.description'),
    },
    {
      id: 2,
      icon: 'teeth',
      title: t('services.cosmetic.title'),
      description: t('services.cosmetic.description'),
    },
    {
      id: 3,
      icon: 'crown',
      title: t('services.orthodontics.title'),
      description: t('services.orthodontics.description'),
    },
    {
      id: 4,
      icon: 'teeth-open',
      title: t('services.endodontics.title'),
      description: t('services.endodontics.description'),
    },
    {
      id: 5,
      icon: 'x-ray',
      title: t('services.pediatric.title'),
      description: t('services.pediatric.description'),
    },
    {
      id: 6,
      icon: 'hand-sparkles',
      title: t('services.preventive.title'),
      description: t('services.preventive.description'),
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2>{t('services.title')}</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              <i className={`fas fa-${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 