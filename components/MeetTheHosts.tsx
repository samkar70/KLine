// components/MeetTheHosts.tsx
import React from 'react';

const MeetTheHosts: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen de los locutores */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl mx-auto max-w-md">
            {/* Reemplaza este link con una foto de ustedes */}
            <img 
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80" 
              alt="Familia EnCanto"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
        
        {/* Texto de presentación */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Conoce a tus anfitriones</span>
          <h2 className="text-4xl font-black text-white mt-4 mb-6 leading-tight">
            Somos la Familia <span className="text-amber-400 italic">EnCanto</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            "Nuestra misión es llevar un mensaje de esperanza y amor a través de las ondas radiales. 
            Creemos en el poder de la fe para transformar vidas y queremos acompañarte en tu caminar diario."
          </p>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
            - Tus amigos en la fe
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheHosts;