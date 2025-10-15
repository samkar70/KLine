// components/MediaItemCard.tsx
import React from 'react';
import { MediaItem } from '../types';

interface MediaItemCardProps {
  item: MediaItem;
  onSelect: (item: MediaItem) => void;
  isSelected: boolean;
}

const MediaItemCard: React.FC<MediaItemCardProps> = ({ item, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(item);
  };

  return (
    // 2. Estética y proporciones mejoradas
    <div
      className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer transition-all duration-300 border border-transparent
        ${isSelected
          ? 'bg-indigo-600 shadow-lg'
          : 'hover:bg-slate-700 hover:border-slate-600'
        }`}
      onClick={handleClick}
    >
      {/* Miniatura más ancha para una proporción tipo 3:1 */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-14 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-grow overflow-hidden">
        <h3 className="text-white text-base font-semibold truncate">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.type === 'video' ? 'Video' : item.artist}</p>
      </div>
      <span className="text-gray-400 text-sm font-mono flex-shrink-0">{item.duration}</span>
    </div>
  );
};

export default MediaItemCard;