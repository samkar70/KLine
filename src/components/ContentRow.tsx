import React from 'react';
import { VideoCard } from './VideoCard';
import { MediaItem } from '../types';

interface ContentRowProps {
  title: string;
  category: string;
  items: MediaItem[];
  isVertical?: boolean;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, category, items, isVertical = false }) => {
  // Filtramos por la categoría asignada en el CSV
  const categoryItems = items.filter(item => item.category === category);
  
  if (categoryItems.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        {title}
        <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
          {categoryItems.length}
        </span>
      </h2>

      {/* Grid inteligente: 6 columnas para Shorts, 4 para Videos normales */}
      <div className={`grid gap-5 ${
        isVertical 
          ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }`}>
        {categoryItems.map((item) => (
          <VideoCard 
            key={item.id} 
            video={item} 
            isVertical={isVertical} 
          />
        ))}
      </div>
    </section>
  );
};

export default ContentRow;