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

  useEffect(() => {
    const dynamicUrl = `https://picsum.photos/1920/1080?random=${Date.now()}`;
    setBgImage(dynamicUrl);
  }, []);

  useEffect(() => {
    const passages = ['JN.3.16', 'PSA.23.1', 'PHIL.4.13', 'ISA.41.10'];
    const randomPassage = passages[Math.floor(Math.random() * passages.length)];
    
    fetch(`https://bible-api.com/${randomPassage}?translation=rva`)
      .then(res => res.json())
      .then(data => setVerse({ text: data.text, ref: data.reference }))
      .catch(() => setVerse({ text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" }));
  }, []);

  const filteredData = useMemo(() => {
    const db = mediaDatabase || [];
    return db.filter(item => 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artist?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white relative overflow-x-hidden">
        <div 
          className="fixed inset-0 z-0 opacity-40 pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <UniversalPlayer />
        
        <main className="relative z-10 pb-40">
          {mediaDatabase?.length > 0 && <Hero latestItem={mediaDatabase[0]} />}
          
          <div className="container mx-auto px-4 mt-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="space-y-12">
              <ContentRow title="🎙️ Entrevistas" category="Entrevistas" items={filteredData} />
              
              {/* SECCIÓN ACTUALIZADA: Usamos la categoría 'Short' con diseño vertical */}
              <ContentRow 
                title="📱 Shorts" 
                category="Short" 
                items={filteredData} 
                isVertical={true} 
              />
              
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