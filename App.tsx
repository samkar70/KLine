// App.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PlaybackProvider } from './context/PlaybackContext';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import UniversalPlayer from './components/UniversalPlayer';
import NowPlayingBar from './components/NowPlayingBar';
import { Footer, WhatsAppButton } from './components/Footer';
import MeetTheHosts from './components/MeetTheHosts';
import PrayerRequestBanner from './components/PrayerRequestBanner';
import VerseOfTheDay from './components/VerseOfTheDay';
import SearchBar from './components/SearchBar'; // Importamos el buscador
import { MediaItem } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<MediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda
  const [bgImage, setBgImage] = useState('');
  const [isReady, setIsReady] = useState(false);

  // FILTRO INTELIGENTE: Filtra por título, artista o categoría
  const filteredData = useMemo(() => {
    return data.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const changeBackground = useCallback(() => {
    const images = ['photo-1507692879628-2d748303451f', 'photo-1438232992991-995b7058bbb3', 'photo-1510915361894-db8b60106cb1'];
    const randomId = images[Math.floor(Math.random() * images.length)];
    setBgImage(`https://images.unsplash.com/${randomId}?auto=format&fit=crop&w=1920&q=80`);
  }, []);

  useEffect(() => {
    fetch('/DBEnCanto - Sheet1.csv')
      .then(res => res.text())
      .then(text => {
        const rows = text.split(/\r?\n/).filter(l => l.trim().length > 5);
        const parsed = rows.slice(1).map((row, idx) => {
          const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          return {
            id: cols[0]?.trim() || `id-${idx}`,
            title: cols[1]?.trim() || "Sin título",
            type: cols[2]?.trim() || "video",
            category: cols[3]?.trim() || "General",
            url: cols[4]?.trim() || "",
            thumbnail: cols[5]?.trim() || "",
            artist: cols[7]?.trim() || "EnCanto",
            description: cols[8]?.trim() || ""
          } as MediaItem;
        }).filter(item => item.url.includes('http'));
        setData(parsed);
        setIsReady(true);
      }).catch(() => setIsReady(true));
    changeBackground();
  }, [changeBackground]);

  if (!isReady) return <div className="bg-slate-950 h-screen"></div>;

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white relative overflow-x-hidden">
        {/* Fondo interactivo */}
        <div onClick={changeBackground} className="fixed inset-0 z-0 opacity-20 cursor-pointer transition-all duration-1000" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        <UniversalPlayer />
        
        <main className="relative z-10 pb-40">
          <Hero latestItem={data[0]} />
          
          <div className="container mx-auto px-4">
            {/* INSERTAMOS EL BUSCADOR AQUÍ */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="space-y-8">
              <ContentRow title="Entrevistas Exclusivas" category="Entrevistas" items={filteredData} />
              <ContentRow title="Momentos Especiales" category="Momentos" items={filteredData} />
              <ContentRow title="Alabanza & Música" category="Musica" items={filteredData} />
              
              {/* Ocultamos estas secciones cuando el usuario está buscando algo específico */}
              {!searchTerm && (
                <>
                  <MeetTheHosts />
                  <PrayerRequestBanner />
                  <VerseOfTheDay verse="Todo lo puedo en Cristo que me fortalece" reference="Filipenses 4:13" />
                </>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
        <WhatsAppButton />
        <NowPlayingBar />
      </div>
    </PlaybackProvider>
  );
};

export default App;