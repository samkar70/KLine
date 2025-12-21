import React, { useState, useEffect, useMemo } from 'react';
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
import { mediaDatabase } from './data/database';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [verse, setVerse] = useState({ text: 'Cargando palabra de vida...', ref: '...' });

  // 1. MOTOR DE IMAGEN DINÁMICA (Con truco anti-caché)
  useEffect(() => {
    const topics = ['nature', 'faith', 'sunset', 'ocean', 'forest'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    // Añadimos sig=${Date.now()} para que cada F5 sea una imagen totalmente nueva
    const imageUrl = `https://images.unsplash.com/photo-1507692879628-2d748303451f?auto=format&fit=crop&w=1920&q=80&sig=${Date.now()}`;
    
    // Si prefieres que Unsplash elija por ti (más variado):
    const dynamicUrl = `https://picsum.photos/1920/1080?random=${Date.now()}`;
    
    setBgImage(dynamicUrl);
  }, []);

  // 2. MOTOR DE BIBLIA ALEATORIA
  useEffect(() => {
    // Lista de versículos poderosos para que siempre salga algo inspirador
    const passages = ['JN.3.16', 'PSA.23.1', 'PHIL.4.13', 'ISA.41.10', 'ROM.8.28', 'JER.29.11'];
    const randomPassage = passages[Math.floor(Math.random() * passages.length)];
    
    fetch(`https://bible-api.com/${randomPassage}?translation=rva`)
      .then(res => res.json())
      .then(data => {
        setVerse({ text: data.text, ref: data.reference });
      })
      .catch(() => {
        setVerse({ text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" });
      });
  }, []);

  const filteredData = useMemo(() => {
    // Seguridad para evitar que el buscador rompa la app si la base de datos está vacía
    const db = mediaDatabase || [];
    return db.filter(item => 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artist?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white relative overflow-x-hidden">
        
        {/* FONDO DINÁMICO CON TRANSICIÓN SUAVE */}
        <div 
          className="fixed inset-0 z-0 transition-all duration-1000"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        ></div>

        <UniversalPlayer />
        
        <main className="relative z-10 pb-40">
          {/* Paracaídas: Si no hay videos, no muestra el Hero y así no se rompe */}
          {mediaDatabase && mediaDatabase.length > 0 && (
            <Hero latestItem={mediaDatabase[0]} />
          )}
          
          <div className="container mx-auto px-4 mt-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="space-y-12">
              <ContentRow title="🎙️ Entrevistas" category="Entrevistas" items={filteredData} />
              <ContentRow title="✨ Momentos" category="Momentos" items={filteredData} />
              <ContentRow title="🎵 Alabanza" category="Musica" items={filteredData} />
              
              {!searchTerm && (
                <div className="space-y-16 py-8">
                  <MeetTheHosts />
                  <PrayerRequestBanner />
                  <VerseOfTheDay verse={verse.text} reference={verse.ref} />
                </div>
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