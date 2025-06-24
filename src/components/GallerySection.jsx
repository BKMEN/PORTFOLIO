import React from 'react';
import './GallerySection.css';
import { motion } from 'framer-motion';

const works = [
  { src: '/assets/work1.jpg', title: 'Editorial 2024' },
  { src: '/assets/work2.jpg', title: 'Fashion Week' },
  { src: '/assets/work3.jpg', title: 'Comercial Beauty' },
  // Agrega más trabajos aquí
];

const GallerySection = () => (
  <section className="gallery-section">
    <h2>Trabajos Destacados</h2>
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
  </section>
);

export default GallerySection;
