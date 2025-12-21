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
import SearchBar from './components/SearchBar';
import { MediaItem } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<MediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [loading, setLoading] = useState(true);

  // FILTRO: Este es el cerebro que busca en el contenido construido
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

  // EL PROGRAMA LECTOR: Convierte CSV -> Objetos TS
  useEffect(() => {
    const loadDatabase = async () => {
      try {
        const response = await fetch(`/db.csv?v=${Date.now()}`); // Forzamos a Vercel a leer el archivo nuevo
        if (!response.ok) throw new Error("Archivo no encontrado");
        
        const text = await response.text();
        const rows = text.split(/\r?\n/).filter(line => line.trim().length > 0);
        
        // El "Constructor" de objetos
        const builtData: MediaItem[] = rows.slice(1).map((row, index) => {
          // Separador inteligente para manejar comas dentro de textos
          const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          return {
            id: cols[0]?.trim() || `id-${index}`,
            title: cols[1]?.trim() || "Sin título",
            type: (cols[2]?.trim() as any) || "video",
            category: cols[3]?.trim() || "General",
            url: cols[4]?.trim() || "",
            thumbnail: cols[5]?.trim() || "",
            artist: cols[7]?.trim() || "EnCanto",
            description: cols[8]?.trim() || ""
          };
        }).filter(item => item.url.startsWith('http')); // Solo videos válidos

        setData(builtData);
        setLoading(false);
      } catch (error) {
        console.error("Error en el Motor de Datos:", error);
        setLoading(false);
      }
    };

    loadDatabase();
    changeBackground();
  }, [changeBackground]);

  if (loading) return <div className="bg-slate-950 h-screen flex items-center justify-center text-white">Cargando EnCanto...</div>;

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white relative overflow-x-hidden">
        <div onClick={changeBackground} className="fixed inset-0 z-0 opacity-20 cursor-pointer" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}></div>
        
        <UniversalPlayer />
        
        <main className="relative z-10 pb-40">
          {data.length > 0 && <Hero latestItem={data[0]} />}
          
          <div className="container mx-auto px-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="space-y-8">
              {/* Estos componentes leen los datos que el programa construyó */}
              <ContentRow title="Entrevistas Exclusivas" category="Entrevistas" items={filteredData} />
              <ContentRow title="Momentos Especiales" category="Momentos" items={filteredData} />
              <ContentRow title="Alabanza & Música" category="Musica" items={filteredData} />
              
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