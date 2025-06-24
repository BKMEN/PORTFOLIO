import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';
import perfilImg from '../media/PERFIL.JPEG';

const HeroSection = ({ translations }) => (
  <section className="hero-section" id="about">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <img
        src={perfilImg}
        alt="Yován Castro"
        className="hero-photo"
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
