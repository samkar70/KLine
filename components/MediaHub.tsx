// components/MediaHub.tsx
import React, { useState } from 'react';
import { mediaData } from '../data/media';
import { MediaItem } from '../types';
import MediaItemCard from './MediaItemCard';

const MediaHub: React.FC = () => {
  const [currentMedia, setCurrentMedia] = useState<MediaItem | null>(mediaData[1]);

  const handleSelectMedia = (media: MediaItem) => {
    setCurrentMedia(media);
  };

  return (
    // CAMBIO: Se elimina el margen superior (de "my-12" a "mb-12")
    <section className="mb-12"> 
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sección del Video Principal (ocupa 2/3 del espacio) */}
        <div className="lg:w-2/3">
          <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden">
            {currentMedia ? (
              // Proporción de cine estándar (16:9)
              <div className="aspect-video">
                {currentMedia.type === 'video' ? (
                  <video
                    key={currentMedia.id}
                    src={currentMedia.url}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  >
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-4 bg-black">
                    <img src={currentMedia.thumbnail} alt={currentMedia.title} className="w-48 h-auto rounded-lg mb-4" />
                    <audio
                      key={currentMedia.id}
                      src={currentMedia.url}
                      controls
                      autoPlay
                      className="w-full max-w-lg"
                    >
                      Tu navegador no soporta la etiqueta de audio.
                    </audio>
                    <p className="text-xl mt-4">{currentMedia.title}</p>
                    {currentMedia.artist && <p className="text-gray-400">{currentMedia.artist}</p>}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-gray-700 text-gray-300">
                Selecciona un elemento para reproducir
              </div>
            )}
          </div>
        </div>

        {/* Sección "Up Next" (ocupa 1/3 del espacio) */}
        <aside className="lg:w-1/3 bg-slate-800 rounded-lg shadow-xl p-4 flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-white flex-shrink-0">Up Next</h3>
          <div className="space-y-3 overflow-y-auto">
            {mediaData.map((item) => (
              <MediaItemCard
                key={item.id}
                item={item}
                onSelect={handleSelectMedia}
                isSelected={currentMedia?.id === item.id}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MediaHub;