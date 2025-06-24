import React from 'react';
import './MeasuresSection.css';
import { motion } from 'framer-motion';

const measures = [
  { label: 'Altura', value: '1.75 m' },
  { label: 'Busto', value: '85 cm' },
  { label: 'Cintura', value: '60 cm' },
  { label: 'Cadera', value: '90 cm' },
  { label: 'Zapato', value: '38 EU' },
  // Agrega más medidas si lo deseas
];

const MeasuresSection = () => (
  <section className="measures-section">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="measures-content"
    >
      <h2>Medidas</h2>
      <ul>
        {measures.map((m, idx) => (
          <li key={idx}><span>{m.label}:</span> {m.value}</li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default MeasuresSection;
