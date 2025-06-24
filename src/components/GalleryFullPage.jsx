import React from 'react';
import './GalleryFullPage.css';

const allWorks = [
  { src: '/assets/work1.jpg', title: 'Editorial 2024' },
  { src: '/assets/work2.jpg', title: 'Fashion Week' },
  { src: '/assets/work3.jpg', title: 'Comercial Beauty' },
  // Agrega aquí todas tus fotos...
];

const GalleryFullPage = ({ lang, translations }) => (
  <div className="gallery-fullpage">
    <h1>{lang === 'es' ? 'Todas las fotos' : 'All Photos'}</h1>
    <div className="gallery-grid">
      {allWorks.map((work, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={work.src} alt={work.title} />
          <span>{work.title}</span>
        </div>
      ))}
    </div>
    <a href="/" className="back-btn">{lang === 'es' ? 'Volver al inicio' : 'Back to Home'}</a>
  </div>
);

export default GalleryFullPage;
