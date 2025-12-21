import React from 'react';

interface VerseProps {
  verse?: string;
  reference?: string;
}

const VerseOfTheDay: React.FC<VerseProps> = ({ verse = "", reference = "" }) => {
  // SEGURIDAD: Si verse es undefined o nulo, usamos un texto por defecto
  const safeVerse = verse || "Cargando palabra de vida...";
  const cleanVerse = safeVerse.trim();

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 max-w-2xl mx-auto my-12">
      <h3 className="text-blue-400 font-semibold mb-4 tracking-widest uppercase text-sm">Versículo del Día</h3>
      <p className="text-2xl font-light italic leading-relaxed mb-6">"{cleanVerse}"</p>
      <p className="text-blue-500 font-medium">— {reference || "Juan 3:16"}</p>
    </div>
  );
};

export default VerseOfTheDay;