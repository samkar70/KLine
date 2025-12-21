import React, { useRef, useEffect, useState } from 'react';
import { usePlayback } from '../context/PlaybackContext';

const NowPlayingBar: React.FC = () => {
  const { activeMode, isPlaying, playRadio, pauseAll } = usePlayback();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (activeMode === 'radio' && isPlaying) {
        audioRef.current.play().catch(() => pauseAll());
      } else {
        audioRef.current.pause();
      }
    }
  }, [activeMode, isPlaying, pauseAll]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-slate-900/95 backdrop-blur-md z-[100] border-t border-white/10 flex items-center justify-between px-8 shadow-2xl">
      <audio ref={audioRef} src="https://stream.zeno.fm/akg9jodmss3uv" onTimeUpdate={() => setTime(audioRef.current?.currentTime || 0)} playsInline />
      <div className="flex items-center gap-4">
        <div className={`w-3 h-3 rounded-full ${isPlaying && activeMode === 'radio' ? 'bg-red-500 animate-pulse' : 'bg-slate-700'}`}></div>
        <p className="font-black text-xs tracking-tighter uppercase">Radio en Vivo</p>
      </div>
      <button onClick={() => (activeMode === 'radio' && isPlaying ? pauseAll() : playRadio())} className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
        {activeMode === 'radio' && isPlaying ? "||" : ">"}
      </button>
      <p className="text-[10px] font-mono text-amber-400">{Math.floor(time / 60)}:{(time % 60).toFixed(0).padStart(2, '0')}</p>
    </footer>
  );
};
export default NowPlayingBar;