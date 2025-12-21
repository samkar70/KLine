import React from 'react';
import { usePlayback } from '../context/PlaybackContext';

const UniversalPlayer: React.FC = () => {
  const { currentVideo, activeMode, playRadio } = usePlayback();
  if (activeMode !== 'video' || !currentVideo) return null;

  const getYTId = (url: string) => {
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col">
      <div className="p-4 bg-slate-900 flex justify-between items-center border-b border-white/10">
        <p className="text-white font-bold">{currentVideo.title}</p>
        <button onClick={playRadio} className="bg-amber-400 text-black px-6 py-2 rounded-full font-bold">VOLVER A RADIO</button>
      </div>
      <div className="flex-grow">
        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${getYTId(currentVideo.url)}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
  );
};
export default UniversalPlayer;