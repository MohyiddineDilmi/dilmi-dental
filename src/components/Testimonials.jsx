import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonialData = [
    {
      id: 1,
      name: t('testimonials.testimonial1.name'),
      text: t('testimonials.testimonial1.text'),
      rating: 5,
    },
    {
      id: 2,
      name: t('testimonials.testimonial2.name'),
      text: t('testimonials.testimonial2.text'),
      rating: 5,
    },
    {
      id: 3,
      name: t('testimonials.testimonial3.name'),
      text: t('testimonials.testimonial3.text'),
      rating: 5,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={i <= rating ? "fas fa-star" : "far fa-star"}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>{t('testimonials.title')}</h2>
      <motion.div 
        className="testimonials-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonialData.map((testimonial) => (
          <motion.div 
            className="testimonial-card" 
            key={testimonial.id}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="testimonial-stars">
              {renderStars(testimonial.rating)}
            </div>
            <p><i className="fas fa-quote-left"></i> {testimonial.text}</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials; 