import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="hero-section">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <img
        src="/assets/model-placeholder.jpg"
        alt="Yován Castro"
        className="hero-photo"
      />
      <div className="hero-text">
        <h1>Yován Castro</h1>
        <p>Modelo profesional | Madrid, España | Colombiano</p>
        <p className="hero-sub">Delgado / Ectomorfo / Atlético</p>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
