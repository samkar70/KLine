// components/Hero.tsx
import React from 'react';
import { usePlayback } from '../context/PlaybackContext';
import { MediaItem } from '../dist/src/data/types';

interface Props { latestItem?: MediaItem; }

const Hero: React.FC<Props> = ({ latestItem }) => {
  const { playVideo } = usePlayback();

  // ESCUDO: Si no hay datos, mostramos un fondo oscuro elegante
  if (!latestItem) {
    return (
      <section className="h-[60vh] flex items-center justify-center bg-slate-900/50">
        <p className="text-slate-500 italic">No hay contenido destacado disponible.</p>
      </section>
    );
  }

  return (
    <section className="relative h-[85vh] w-full flex items-center bg-black overflow-hidden group">
      <img 
        src={latestItem.thumbnail || "https://picsum.photos/1600/900"} 
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
        alt="Hero" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      
      <div className="relative container mx-auto px-8 z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white mt-8 mb-6 uppercase italic">
          {latestItem.title}
        </h1>
        <button 
          onClick={() => playVideo(latestItem)}
          className="bg-white text-slate-950 font-black py-4 px-12 rounded-full hover:bg-amber-400 transition-all"
        >
          VER AHORA
        </button>
      </div>
    </section>
  );
};
export default Hero;