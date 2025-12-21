// components/TestimonialsSection.tsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "Líder de Jóvenes",
    content: "EnCanto ha sido una bendición para nuestro ministerio. Las entrevistas nos conectan con el corazón de los artistas.",
    avatar: "https://picsum.photos/100/100?random=40"
  },
  {
    id: 2,
    name: "Roberto Gómez",
    role: "Músico Cristiano",
    content: "La calidad del contenido y la profundidad de las charlas son únicas. Es mi fuente diaria de inspiración.",
    avatar: "https://picsum.photos/100/100?random=41"
  },
  {
    id: 3,
    name: "Elena Peña",
    role: "Docente",
    content: "Escuchar los testimonios en la radio mientras trabajo me llena de paz y esperanza. ¡Gracias por este proyecto!",
    avatar: "https://picsum.photos/100/100?random=42"
  },
  {
    id: 4,
    name: "David Ruiz",
    role: "Pastor",
    content: "Una herramienta increíble para la evangelización moderna. El diseño es hermoso y el mensaje es claro.",
    avatar: "https://picsum.photos/100/100?random=43"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-slate-700/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Lo que dice nuestra comunidad</h2>
        <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Contenedor de la Tarjeta con Animación */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.866 6.86599 22 3 22H1V21Z" />
            </svg>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <img 
              src={testimonials[currentIndex].avatar} 
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full border-4 border-amber-400 mb-6 object-cover shadow-xl"
            />
            <p className="text-xl md:text-2xl text-slate-200 italic leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Botones de Navegación */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="p-3 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-amber-400 hover:text-slate-900 transition-all shadow-lg"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-amber-400 hover:text-slate-900 transition-all shadow-lg"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;