// App.tsx
import React from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import MediaHub from './components/MediaHub';
import EventsSection from './components/EventsSection';
import NowPlayingBar from './components/NowPlayingBar';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <main className="pb-24">
        {/* El Header vuelve a ser un componente independiente */}
        <Header />
        
        {/* El contenido principal ahora empieza con MediaHub */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* MediaHub ahora está aquí, fuera del Header */}
          <MediaHub />
          <VideoSection />
          <EventsSection />
        </div>
      </main>
      <NowPlayingBar />
    </div>
  );
};

export default App;