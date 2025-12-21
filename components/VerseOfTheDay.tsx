// components/VerseOfTheDay.tsx
import React from 'react';

interface Props { verse: string; reference: string; }

const VerseOfTheDay: React.FC<Props> = ({ verse, reference }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 shadow-2xl">
        <div className="w-12 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
        <h4 className="text-amber-400 font-black uppercase text-xs tracking-[0.3em] mb-8">La Palabra de Hoy</h4>
        <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-8 leading-tight">
          "{verse.trim()}"
        </blockquote>
        <cite className="text-slate-400 font-bold not-italic text-lg">— {reference}</cite>
      </div>
    </section>
  );
};
export default VerseOfTheDay;