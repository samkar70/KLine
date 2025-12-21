// components/PrayerRequestBanner.tsx
import React from 'react';

const PrayerRequestBanner: React.FC = () => {
  // Asegúrate de que este número sea el mismo que en WhatsAppButton.tsx
  const whatsappUrl = "https://wa.me/123456789";

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Imagen de fondo oscurecida */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507692879628-2d748303451f?auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-full object-cover opacity-20 grayscale" 
          alt="Oración" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <span className="inline-block bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full mb-6">
          Comunidad de Oración
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none">
          ¿Necesitas Oración? No estás solo.
        </h2>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Envíanos tu petición. Nuestro equipo estará intercediendo por ti y tu familia.
          Creemos en un Dios que escucha y responde.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black py-4 px-10 rounded-full hover:bg-white hover:text-[#25D366] transition-all transform hover:scale-105 shadow-xl"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771z"/></svg>
          ENVIAR PETICIÓN POR WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default PrayerRequestBanner;