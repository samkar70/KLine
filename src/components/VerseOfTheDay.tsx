import React from 'react';

// 1. ESTA ES LA DEFINICIÓN QUE FALTA (La que quita el error 2304)
interface VerseProps {
  verse?: string;     // El '?' permite que el dato esté ausente sin romper la web
  reference?: string;
}

// 2. Ahora TypeScript ya reconoce 'VerseProps'
const VerseOfTheDay: React.FC<VerseProps> = ({ verse = "", reference = "" }) => {
  
  // Parche de seguridad para el error de 'trim' que vimos en tus fotos
  const safeVerse = verse || "Todo lo puedo en Cristo que me fortalece.";
  const cleanVerse = safeVerse.trim();

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 max-w-2xl mx-auto my-12">
      <h3 className="text-blue-400 font-semibold mb-4 tracking-widest uppercase text-sm tracking-tighter">
        Versículo del Día
      </h3>
      <p className="text-2xl font-light italic leading-relaxed mb-6">
        "{cleanVerse}"
      </p>
      <p className="text-blue-500 font-medium">
        — {reference || "Filipenses 4:13"}
      </p>
    </div>
  );
};

export default VerseOfTheDay;