// components/ContentRow.tsx
import React from 'react';
import { usePlayback } from '../context/PlaybackContext';
import { MediaItem } from '../dist/src/data/types';

interface Props { title: string; category: string; items: MediaItem[]; }

const ContentRow: React.FC<Props> = ({ title, category, items = [] }) => {
  const { playVideo, currentVideo } = usePlayback();
  
  // Verificación de seguridad para evitar errores si items es undefined
  const filtered = Array.isArray(items) 
    ? items.filter(item => item.category?.trim() === category)
    : [];

  if (filtered.length === 0) return null;

  return (
    <div className="py-8">
      <h3 className="text-xl font-black mb-6 text-white px-6 uppercase italic border-l-4 border-amber-400 ml-6 tracking-tighter">
        {title}
      </h3>
      <div className="flex gap-6 overflow-x-auto px-6 no-scrollbar pb-4">
        {filtered.map(item => (
          <div key={item.id} onClick={() => playVideo(item)} className="flex-shrink-0 w-64 group cursor-pointer">
            <div className={`aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-500 ${currentVideo?.id === item.id ? 'border-amber-400 shadow-lg' : 'border-white/5 group-hover:border-white/20'}`}>
              <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
            </div>
            <h4 className="text-white font-bold mt-3 text-[11px] truncate uppercase italic group-hover:text-amber-400 transition-colors">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentRow;