// App.tsx
import React, { useState } from 'react';
import { PlaybackProvider } from './context/PlaybackContext';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import UniversalPlayer from './components/UniversalPlayer';
import NowPlayingBar from './components/NowPlayingBar';
import CategoryBar from './components/CategoryBar';
import { Footer, WhatsAppButton } from './components/Footer';

// Importamos las 4 opciones de presentación
import SegmentsShowcase from './components/SegmentsShowcase';
import MeetTheHosts from './components/MeetTheHosts';
import PrayerRequestBanner from './components/PrayerRequestBanner';
import VerseOfTheDay from './components/VerseOfTheDay';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  return (
    <PlaybackProvider>
      <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-amber-400 selection:text-black">
        <UniversalPlayer />
        
        <main className="pb-10">
          <Hero />
          <div className="container mx-auto relative z-30 mt-[-40px] mb-20">
            <CategoryBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <div className="space-y-6">
              {(activeCategory === 'Todos' || activeCategory === 'Entrevistas') && <ContentRow title="Entrevistas Exclusivas" category="Entrevistas" />}
              {(activeCategory === 'Todos' || activeCategory === 'Momentos') && <ContentRow title="Momentos Especiales" category="Momentos" />}
            </div>
          </div>

          {/* --- ÁREA DE PRESENTACIÓN DE OPCIONES --- */}
          <div className="bg-slate-900/50 py-10">
            <div className="container mx-auto text-center mb-10"><h2 className="text-amber-400 font-black text-2xl uppercase">--- Opción 1: Nuestros Segmentos ---</h2></div>
            <SegmentsShowcase />
            
            <div className="container mx-auto text-center my-10"><h2 className="text-amber-400 font-black text-2xl uppercase">--- Opción 2: Conoce a tus Locutores ---</h2></div>
            <MeetTheHosts />
            
            <div className="container mx-auto text-center my-10"><h2 className="text-amber-400 font-black text-2xl uppercase">--- Opción 3: Peticiones de Oración ---</h2></div>
            <PrayerRequestBanner />
            
            <div className="container mx-auto text-center my-10"><h2 className="text-amber-400 font-black text-2xl uppercase">--- Opción 4: Versículo del Día ---</h2></div>
            <VerseOfTheDay />
          </div>
          {/* --- FIN DEL ÁREA DE PRESENTACIÓN --- */}

        </main>

        <Footer />
        <WhatsAppButton />
        <NowPlayingBar />
      </div>
    </PlaybackProvider>
  );
};

export default App;