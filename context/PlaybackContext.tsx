import React, { createContext, useContext, useState } from 'react';
import { MediaItem } from '../types';

type PlaybackMode = 'radio' | 'video';

interface PlaybackContextType {
  activeMode: PlaybackMode;
  currentVideo: MediaItem | null;
  isPlaying: boolean;
  playRadio: () => void;
  playVideo: (video: MediaItem) => void;
  pauseAll: () => void;
}

const PlaybackContext = createContext<PlaybackContextType | undefined>(undefined);

export const PlaybackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeMode, setActiveMode] = useState<PlaybackMode>('radio');
  const [currentVideo, setCurrentVideo] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playRadio = () => { setActiveMode('radio'); setCurrentVideo(null); setIsPlaying(true); };
  const playVideo = (video: MediaItem) => { setActiveMode('video'); setCurrentVideo(video); setIsPlaying(true); };
  const pauseAll = () => setIsPlaying(false);

  return (
    <PlaybackContext.Provider value={{ activeMode, currentVideo, isPlaying, playRadio, playVideo, pauseAll }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => {
  const context = useContext(PlaybackContext);
  if (!context) throw new Error('usePlayback debe usarse dentro de PlaybackProvider');
  return context;
};