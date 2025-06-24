import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './HeroBackground.css';

export default function HeroBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        color: 0xdddddd, // gris claro
        backgroundColor: 0x00000000, // transparente
        points: 12,
        maxDistance: 22,
        spacing: 26,
        showDots: false,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} id="vanta-bg" className="hero-vanta-bg" />;
}
