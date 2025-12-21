// components/ContentRow.tsx
import React from 'react';
import { mediaDatabase } from '../data/database';
import { usePlayback } from '../context/PlaybackContext';

interface Props {
  title: string;
  category: string;
}

const ContentRow: React.FC<Props> = ({ title, category }) => {
  const { playVideo, currentVideo } = usePlayback();
  
  // Filtramos los videos según la categoría definida en la base de datos
  const items = mediaDatabase.filter(item => item.category === category);

  if (items.length === 0) return null;

  return (
    <div className="py-8">
      {/* Título de la fila con estilo moderno */}
      <h3 className="text-2xl font-black mb-6 text-white px-6 uppercase italic tracking-tighter border-l-4 border-amber-400 ml-6">
        {title}
      </h3>
      
      {/* Contenedor con scroll horizontal oculto */}
      <div className="flex gap-6 overflow-x-auto px-6 no-scrollbar pb-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => playVideo(item)}
            className="flex-shrink-0 w-72 group cursor-pointer"
          >
            {/* Contenedor de la imagen con efecto Zoom */}
            <div className={`relative aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-lg ${
              currentVideo?.id === item.id 
                ? 'border-amber-400 shadow-amber-400/20 scale-95' 
                : 'border-white/5 group-hover:border-white/30 group-hover:shadow-black/50'
            }`}>
              <img 
                src={item.thumbnail} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                alt={item.title} 
              />
              
              {/* Capa de oscurecimiento sutil que desaparece al hacer hover */}
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Icono de Play central que aparece en hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-amber-400 text-slate-950 p-3 rounded-full shadow-xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Textos del video */}
            <h4 className="text-white font-bold mt-4 text-sm truncate group-hover:text-amber-400 transition-colors">
              {item.title}
            </h4>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">
              {item.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;