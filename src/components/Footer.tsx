// components/Footer.tsx
import React from 'react';

export const WhatsAppButton: React.FC = () => (
  <a 
    href="https://wa.me/123456789" 
    className="fixed bottom-28 right-6 z-[60] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    title="Contáctanos"
  >
    <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771z"/>
    </svg>
  </a>
);

export const Footer: React.FC = () => (
  <footer className="bg-slate-900 border-t border-white/5 pt-20 pb-40 px-6 mt-20">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      {/* Columna 1: Marca */}
      <div>
        <h2 className="text-4xl font-black text-white mb-4 italic tracking-tighter">EnCanto</h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
          "Con Cristo, siempre hay esperanza". Llevando un mensaje de fe y transformación a cada rincón del mundo.
        </p>
      </div>

      {/* Columna 2: Navegación */}
      <div>
        <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6">Contenido</h4>
        <ul className="text-slate-300 space-y-3 text-sm">
          <li className="hover:text-white cursor-pointer transition-colors">Entrevistas Exclusivas</li>
          <li className="hover:text-white cursor-pointer transition-colors">Momentos de Fe</li>
          <li className="hover:text-white cursor-pointer transition-colors">Alabanza & Música</li>
          <li className="hover:text-white cursor-pointer transition-colors">Testimonios Reales</li>
        </ul>
      </div>

      {/* Columna 3: Redes Sociales */}
      <div>
        <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6">Síguenos</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">FB</div>
          <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">IG</div>
          <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">YT</div>
        </div>
        <p className="mt-6 text-slate-500 text-[10px] uppercase tracking-widest">
          © 2025 EnCanto - Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
);