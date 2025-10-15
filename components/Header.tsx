// components/Header.tsx
import React from 'react';
import { PlayIcon } from './icons';

const Header: React.FC = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full text-white overflow-hidden">
      <img
        src="https://picsum.photos/1600/900?random=1"
        alt="We Are Messengers live performance"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg max-w-md">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">ASOCIACION</p>
            <h3 className="text-xl font-bold mt-1">Mujer de Vision y Mision</h3>
            <p className="text-slate-300 text-sm mt-1"> Mujeres de primer nivel, con un espiritu inquebrantables. </p>
            <a href="#" className="text-sm text-amber-400 hover:text-amber-300 transition-colors mt-2 inline-block">Más Información &rarr;</a>
        </div>

        {/* CAMBIO 1: Se redujo el ancho máximo del contenedor para ayudar al texto a dividirse */}
        <div className="max-w-3xl">
          <p className="text-amber-400 font-semibold uppercase tracking-wider">Mujer de Vision y Mision</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold my-2 leading-tight tracking-tighter">
            {/* CAMBIO 2: Se añadió un salto de línea con <br /> */}
            Yo soy el camino, la verdad y la vida "Juan 14:6".
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Con Cristo, siempre hay esperanza.... EnCanto.
          </p>
          <button className="mt-6 flex items-center gap-3 bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-transform hover:scale-105">
            <PlayIcon className="h-6 w-6" />
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;