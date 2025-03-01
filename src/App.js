import React from 'react';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="App">
      <SEO />
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
