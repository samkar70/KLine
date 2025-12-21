// components/Hero.tsx
import React from 'react';
import { mediaDatabase } from '../data/database';
import { usePlayback } from '../context/PlaybackContext';

const Hero: React.FC = () => {
  const { playVideo } = usePlayback();
  
  // Seguridad: si no hay videos, no procesamos el Hero
  if (!mediaDatabase || mediaDatabase.length === 0) {
    return <div className="h-40 bg-slate-900 flex items-center justify-center text-white">Cargando...</div>;
  }

  const latest = [...mediaDatabase].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <section className="relative h-[70vh] w-full flex items-center bg-black overflow-hidden">
      <img src={latest.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <div className="relative container mx-auto px-6 z-10">
        <h1 className="text-5xl font-black text-white mb-6 uppercase italic">{latest.title}</h1>
        <button onClick={() => playVideo(latest)} className="bg-white text-black font-black py-4 px-12 rounded-full hover:bg-amber-400 transition-all">
          VER AHORA
        </button>
      </div>
    </section>
  );
};
export default Hero;