import React from 'react';
import './GallerySection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const works = [
  { src: '/assets/work1.jpg', title: 'Editorial 2024' },
  { src: '/assets/work2.jpg', title: 'Fashion Week' },
  { src: '/assets/work3.jpg', title: 'Comercial Beauty' },
  // Agrega más trabajos aquí
];

const GallerySection = ({ lang, translations }) => (
  <section className="gallery-section" id="gallery">
    <h2>{translations.featuredWorks}</h2>
    <div className="gallery-grid">
      {works.map((work, idx) => (
        <motion.div
          className="gallery-item"
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <img src={work.src} alt={work.title} />
          <span>{work.title}</span>
        </motion.div>
      ))}
    </div>
    <div className="gallery-more-btn-wrap">
      <Link to="/gallery" className="gallery-more-btn">
        {lang === 'es' ? 'MÁS IMÁGENES' : 'MORE PHOTOS'}
      </Link>
    </div>
  </section>
);

export default GallerySection;
