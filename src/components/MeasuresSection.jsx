import React from 'react';
import './MeasuresSection.css';
import { motion } from 'framer-motion';

const measures = [
  { label: 'Edad', value: '22 años' },
  { label: 'Altura', value: '1,80 m' },
  { label: 'Pecho', value: '90 cm' },
  { label: 'Cintura', value: '70 cm' },
  { label: 'Cadera', value: '80 cm' },
  { label: 'Cabello', value: 'Negro' },
  { label: 'Ojos', value: 'Negro' },
  { label: 'Nacionalidad', value: 'Colombiano' },
  { label: 'Ubicación', value: 'Madrid, España' },
  { label: 'Tipo de cuerpo', value: 'Delgado / Ectomorfo / Atlético' },
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
