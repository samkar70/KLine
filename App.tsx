// App.tsx - Motor de Datos CSV-to-TS Optimizado para Vercel
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
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  // FILTRO: Procesa los datos construidos por el motor
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

  // EL MOTOR: Lee el CSV y construye los objetos para la Radio
  useEffect(() => {
    const loadDatabase = async () => {
      try {
        // Probamos con ruta relativa para máxima compatibilidad en Vercel
        const response = await fetch(`./db.csv?v=${Date.now()}`); 
        
        if (!response.ok) {
          console.error("No se encontró el archivo db.csv");
          setStatus('error');
          return;
        }
        
        const text = await response.text();
        const rows = text.split(/\r?\n/).filter(line => line.trim().length > 0);
        
        // Constructor de MediaItems desde las columnas del CSV
        const builtData: MediaItem[] = rows.slice(1).map((row, index) => {
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
        }).filter(item => item.url && item.url.includes('http'));

        setData(builtData);
        setStatus('success');
      } catch (error) {
        console.error("Error en el Motor de Datos:", error);
        setStatus('error');
      }
    };

    loadDatabase();
    changeBackground();
  }, [changeBackground]);

  // Pantalla de carga mientras el motor trabaja
  if (status === 'loading') {
    return (
      <div className="bg-slate-950 h-screen flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-xl font-light">Iniciando EnCanto Radio...</p>
      </div>
    );
  }

  // Pantalla en caso de que el CSV no sea accesible
  if (status === 'error') {
    return (
      <div className="bg-slate-950 h-screen flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Error en el motor de datos</h1>
          <p className="text-slate-400">No pudimos conectar con la base de datos db.csv</p>
          <button onClick={() => window.location.reload()} className="mt-4 bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white relative overflow-x-hidden">
        {/* Fondo Interactivo */}
        <div 
          onClick={changeBackground} 
          className="fixed inset-0 z-0 opacity-20 cursor-pointer transition-all duration-1000" 
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
        <UniversalPlayer />
        
        <main className="relative z-10 pb-40">
          {/* Mostramos el Hero solo si hay datos */}
          {data.length > 0 && <Hero latestItem={data[0]} />}
          
          <div className="container mx-auto px-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="space-y-8">
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