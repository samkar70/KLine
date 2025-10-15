// components/NowPlayingBar.tsx
import React, { useState, useRef, useEffect } from 'react';

const streamUrl = 'https://stream.zeno.fm/akg9jodmss3uv';

const NowPlayingBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay fue bloqueado:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1e293b] text-white z-50 border-t border-slate-700">
      <audio ref={audioRef} src={streamUrl} autoPlay playsInline />

      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* Izquierda: Texto "EnCanto" */}
        <div className="flex-1 flex items-center">
          <p className="font-bold text-2xl">EnCanto</p>
        </div>

        {/* Centro: Botón de Play/Pause */}
        <div className="flex-shrink-0">
            <button
              onClick={togglePlayPause}
              className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow-300 transition-colors"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 21.5V2.5h3v19h-3zm-6 0V2.5h3v19H4z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2.5v19l12-9.5L8 2.5z"/></svg>
              )}
            </button>
        </div>

        {/* Derecha: Botón "Karla Perdomo " */}
        <div className="flex-1 flex items-center justify-end">
            <div className="border border-gray-600 rounded-full px-4 py-2 text-center hover:bg-slate-700 cursor-pointer">
                <p className="font-bold text-sm text-white leading-tight">Karla Perdomo</p>
                <p className="text-xs text-gray-400 leading-tight"></p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default NowPlayingBar;