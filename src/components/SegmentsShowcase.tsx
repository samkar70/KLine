// components/SegmentsShowcase.tsx
import React from 'react';

const segments = [
  {
    title: "Alabanza que Conecta",
    description: "Lo mejor de la música cristiana contemporánea para elevar tu espíritu.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Historias de Fe",
    description: "Testimonios impactantes y conversaciones que transforman vidas.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Momentos de Clamor",
    description: "Un tiempo dedicado para interceder juntos por tus necesidades.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
  }
];

const SegmentsShowcase: React.FC = () => {
  return (
    <section className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl font-black text-white mb-12 text-center uppercase italic tracking-tighter">
        Nuestros Segmentos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {segments.map((segment, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border-2 border-white/5 group-hover:border-amber-400 transition-all duration-500">
              <img 
                src={segment.image} 
                alt={segment.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
              {segment.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {segment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SegmentsShowcase;