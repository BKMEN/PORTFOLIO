import React from 'react';
import './MeasuresSection.css';
import { motion } from 'framer-motion';

const measures = [
  {
    label: {
      es: 'Edad',
      en: 'Age',
    },
    value: '22',
    unit: { es: 'años', en: 'years' },
  },
  {
    label: { es: 'Altura', en: 'Height' },
    value: '1,80',
    unit: { es: 'm', en: 'm' },
  },
  {
    label: { es: 'Pecho', en: 'Chest' },
    value: '90',
    unit: { es: 'cm', en: 'cm' },
  },
  {
    label: { es: 'Cintura', en: 'Waist' },
    value: '70',
    unit: { es: 'cm', en: 'cm' },
  },
  {
    label: { es: 'Cadera', en: 'Hips' },
    value: '80',
    unit: { es: 'cm', en: 'cm' },
  },
  {
    label: { es: 'Cabello', en: 'Hair' },
    value: { es: 'Negro', en: 'Black' },
    unit: null,
  },
  {
    label: { es: 'Ojos', en: 'Eyes' },
    value: { es: 'Negro', en: 'Black' },
    unit: null,
  },
  {
    label: { es: 'Nacionalidad', en: 'Nationality' },
    value: { es: 'Colombiano', en: 'Colombian' },
    unit: null,
  },
  {
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Madrid, España', en: 'Madrid, Spain' },
    unit: null,
  },
  {
    label: { es: 'Tipo de cuerpo', en: 'Body type' },
    value: { es: 'Delgado / Ectomorfo / Atlético', en: 'Slim / Ectomorph / Athletic' },
    unit: null,
  },
];

const MeasuresSection = ({ lang, translations }) => (
  <section className="measures-section" id="measures">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="measures-content"
    >
      <h2>{translations.measures}</h2>
      <ul>
        {measures.map((m, idx) => (
          <li key={idx}>
            <span>{m.label[lang]}:</span> {typeof m.value === 'string' ? m.value : m.value[lang]}{m.unit ? ` ${m.unit[lang]}` : ''}
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default MeasuresSection;
