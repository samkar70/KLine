import React from 'react';
import { usePlayback } from '../context/PlaybackContext';

const UniversalPlayer: React.FC = () => {
  const { currentVideo, activeMode, playRadio } = usePlayback();
  
  if (activeMode !== 'video' || !currentVideo) return null;

  // Función de rescate: Por si el ID no vino limpio desde el generador
  const getYTId = (input: string) => {
    if (input.length === 11) return input; // Ya es un ID limpio
    const match = input.match(/(?:v=|\/|embed\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})(?:[?&]|$)/);
    return match ? match[1] : input;
  };

  const videoId = getYTId(currentVideo.url);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col">
      <div className="p-4 bg-slate-900 flex justify-between items-center border-b border-white/10">
        <div>
          <p className="text-blue-400 text-xs uppercase tracking-widest font-bold">Reproduciendo Video</p>
          <p className="text-white font-bold text-lg">{currentVideo.title}</p>
        </div>
        <button 
          onClick={playRadio} 
          className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-full font-bold transition-colors"
        >
          VOLVER A RADIO
        </button>
      </div>
      <div className="flex-grow bg-black">
        <iframe 
          className="w-full h-full" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default UniversalPlayer;