// components/VerseOfTheDay.tsx
import React from 'react';

const VerseOfTheDay: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 flex justify-center items-center border-y border-white/5">
      <div className="max-w-4xl text-center relative p-12 border-2 border-amber-400/20 rounded-3xl bg-slate-950/50 shadow-2xl">
        {/* Icono decorativo de comillas */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.570 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-8">Versículo del Día</h3>
        <blockquote className="text-3xl md:text-4xl font-serif font-bold text-white leading-relaxed mb-8">
          "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis."
        </blockquote>
        <cite className="text-slate-400 text-lg font-bold not-italic tracking-wider">
          — Jeremías 29:11
        </cite>
      </div>
    </section>
  );
};

export default VerseOfTheDay;