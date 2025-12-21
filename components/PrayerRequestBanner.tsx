// components/PrayerRequestBanner.tsx
import React from 'react';

const PrayerRequestBanner: React.FC = () => {
  const phone = "123456789"; // Tu número de WhatsApp

  const communicationOptions = [
    { text: "Pedir Oración", message: "Hola EnCanto, me gustaría pedir oración por..." },
    { text: "Hacer una Pregunta", message: "Hola, tengo una duda sobre la radio..." },
    { text: "Enviar Testimonio", message: "Hola, quiero compartir lo que Dios ha hecho..." }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden rounded-[40px] mx-6 border border-white/5 shadow-2xl">
      {/* Fondo interno sutil */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md z-0"></div>

      <div className="container mx-auto relative z-10 text-center">
        <span className="text-amber-400 font-black text-xs tracking-widest uppercase mb-6 block">Centro de Comunicación</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none italic uppercase">
          Estamos aquí <span className="text-amber-400">para ti</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          ¿Tienes dudas, necesitas apoyo o quieres compartir una bendición? Elige una opción y escríbenos directamente.
        </p>

        {/* Botones de Comunicación */}
        <div className="flex flex-wrap justify-center gap-4">
          {communicationOptions.map((opt, i) => (
            <a 
              key={i}
              href={`https://wa.me/${phone}?text=${encodeURIComponent(opt.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-amber-400 hover:text-slate-900 border border-white/10 px-8 py-4 rounded-2xl font-black text-sm transition-all transform hover:scale-105"
            >
              {opt.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrayerRequestBanner;