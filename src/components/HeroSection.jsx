import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';

const getProfileImgSrc = () => {
  // Vite expone import.meta.env.MODE
  return import.meta.env.MODE === 'production'
    ? '/PORTFOLIO/PERFIL.JPEG'
    : '/PERFIL.JPEG';
};

const HeroSection = ({ lang, translations }) => (
  <section className="hero-section" id="about">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <img
        src={getProfileImgSrc()}
        alt="Yován Castro"
        className="hero-photo"
        onError={e => {
          e.target.onerror = null;
          e.target.style.display = 'none';
          e.target.parentNode.insertAdjacentHTML(
            'beforeend',
            `<div class='hero-photo-fallback'>Yován Castro</div>`
          );
        }}
      />
      <div className="hero-text">
        <h1>Yován Castro</h1>
        <p>
          {translations.model} | {translations.location} |{' '}
          {translations.nationality}
        </p>
        <p className="hero-sub">{translations.bodyType}</p>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
