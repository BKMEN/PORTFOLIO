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
        alt="Modelo principal"
        className="hero-photo"
      />
      <div className="hero-text">
        <h1>Tu Nombre</h1>
        <p>Modelo profesional | Fashion | Editorial | Comercial</p>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
