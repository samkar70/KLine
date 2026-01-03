import React from 'react';
import { Play, Radio, Smartphone } from 'lucide-react';
import { MediaItem } from '../types';
import { usePlayback } from '../context/PlaybackContext';

interface VideoCardProps {
  video: MediaItem;
  isVertical?: boolean; 
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, isVertical = false }) => {
  const { playVideo, currentVideo, activeMode, isPlaying } = usePlayback();
  
  const isCurrentlyPlaying = 
    activeMode === 'video' && 
    currentVideo?.id === video.id && 
    isPlaying;

  // Si es vertical usamos proporción 2:3 (estilo Short), si no, proporción video normal
  const aspectRatioClass = isVertical ? 'aspect-[2/3]' : 'aspect-video';

  return (
    <div 
      className="group cursor-pointer bg-slate-800/40 rounded-xl overflow-hidden hover:bg-slate-800 transition-all duration-300 ring-1 ring-white/10 hover:ring-amber-400/50 shadow-md hover:-translate-y-1"
      onClick={() => playVideo(video)}
    >
      <div className={`relative ${aspectRatioClass} w-full overflow-hidden bg-slate-900`}>
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Etiqueta de Short Vertical */}
        {isVertical && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-red-600/90 rounded-md text-[10px] text-white font-bold flex items-center gap-1 z-10 shadow-lg">
            <Smartphone className="w-3 h-3" /> SHORT
          </div>
        )}

        {/* Botón de reproducción dinámico */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${isCurrentlyPlaying ? 'bg-amber-400/20 opacity-100' : 'bg-black/20 opacity-0 group-hover:opacity-100'}`}>
          <div className={`${isCurrentlyPlaying ? 'bg-amber-400 text-black' : 'bg-white/20 text-white backdrop-blur-md'} p-4 rounded-full`}>
            {isCurrentlyPlaying ? <Radio className="w-6 h-6 animate-pulse" /> : <Play className="w-6 h-6 pl-1" fill="currentColor" />}
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className={`font-bold text-white line-clamp-2 ${isVertical ? 'text-xs uppercase text-center tracking-tight' : 'text-base'}`}>
          {video.title}
        </h3>
        <p className="text-slate-400 text-[10px] mt-1 text-center italic truncate">{video.artist}</p>
      </div>
    </div>
  );
};