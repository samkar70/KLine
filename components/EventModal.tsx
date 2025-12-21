// components/EventModal.tsx
import React from 'react';
import { CalendarIcon, LocationIcon } from './icons';

interface Event {
  month: string;
  day: string;
  name: string;
  location: string;
  description?: string;
  time?: string;
}

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo oscurecido (Overlay) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Contenido de la ventana */}
      <div className="relative bg-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-700 transform transition-all">
        
        {/* Encabezado con imagen o color */}
        <div className="h-32 bg-gradient-to-r from-amber-500 to-yellow-400 p-6 flex items-end">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-900 hover:bg-black/10 rounded-full p-1 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <h2 className="text-2xl font-bold text-slate-900 leading-tight">{event.name}</h2>
        </div>

        <div className="p-6">
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-amber-400">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-slate-200 font-medium">{event.month} {event.day}, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <LocationIcon className="w-5 h-5" />
              <span className="text-slate-200 font-medium">{event.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Sobre este evento</h4>
            <p className="text-slate-400 leading-relaxed">
              {event.description || "Únete a nosotros en una noche especial de alabanza y comunión. EnCanto presenta una experiencia única donde la música y la fe se encuentran para inspirar tu corazón."}
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
              <p className="text-sm text-slate-300">
                <span className="font-bold text-amber-400">Horario:</span> {event.time || "7:00 PM - Puertas abren 6:00 PM"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Cerrar
            </button>
            <button className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-3 px-6 rounded-xl transition-transform active:scale-95">
              Comprar Boletos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;