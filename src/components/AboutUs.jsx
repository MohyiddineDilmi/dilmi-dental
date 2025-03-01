import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Dilmi Dental</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            At Dilmi Dental, we are dedicated to providing the highest quality dental care in a comfortable, 
            state-of-the-art environment. Our team of experienced professionals uses the latest technology 
            and techniques to ensure you receive the best treatment possible.
          </p>
          <p>
            With a focus on preventive care and patient education, we strive to help you maintain 
            optimal oral health and a beautiful smile for life.
          </p>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-user-md"></i>
              <span>Experienced Doctors</span>
            </div>
            <div className="feature">
              <i className="fas fa-calendar-alt"></i>
              <span>Flexible Scheduling</span>
            </div>
            <div className="feature">
              <i className="fas fa-comments"></i>
              <span>Free Consultation</span>
            </div>
            <div className="feature">
              <i className="fas fa-heartbeat"></i>
              <span>Patient-Centered Care</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          {/* Placeholder for clinic image */}
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 