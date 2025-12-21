// components/EventsSection.tsx
import React, { useState } from 'react';
import { LocationIcon } from './icons';
import EventModal from './EventModal';

const nextEvents = [
  { 
    month: 'Oct', 
    day: '10', 
    name: 'CAIN: Live and in Color', 
    location: 'Houston, TX',
    description: 'Una gira vibrante llena de armonía y color. Disfruta de los éxitos de CAIN en una noche inolvidable en el corazón de Houston.',
    time: '8:00 PM'
  },
  { 
    month: 'Oct', 
    day: '10', 
    name: 'Tim Hawkins Live', 
    location: 'Universal City, TX',
    description: 'Risas aseguradas con el humor cristiano de Tim Hawkins. Un evento para toda la familia que no te querrás perder.',
    time: '7:30 PM'
  },
  { 
    month: 'Oct', 
    day: '11', 
    name: 'CAIN: Live and in Color', 
    location: 'Carrollton, TX',
    description: 'La gira continúa en Carrollton. Ven a ser parte de esta atmósfera de fe y alegría.',
    time: '7:00 PM'
  },
];

const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof nextEvents[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event: typeof nextEvents[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="pt-16 sm:pt-24 border-t border-slate-700/50">
      <div>
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Next Events</h2>
            <a href="#" className="font-semibold text-amber-400 hover:text-amber-300 transition-colors">View All &rarr;</a>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <ul>
            {nextEvents.map((event, index) => (
              <li key={index} className="flex items-center p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/50 rounded-md transition-colors">
                <div className="flex flex-col items-center justify-center bg-slate-700 rounded-md p-2 w-16 h-16 text-center text-amber-400">
                  <span className="text-xs font-bold uppercase">{event.month}</span>
                  <span className="text-2xl font-extrabold">{event.day}</span>
                </div>
                <div className="ml-4 flex-grow cursor-pointer" onClick={() => handleOpenModal(event)}>
                  <h4 className="font-bold text-slate-100">{event.name}</h4>
                  <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
                    <LocationIcon className="w-4 h-4" />
                    {event.location}
                  </p>
                </div>
                <button 
                  onClick={() => handleOpenModal(event)}
                  className="ml-4 bg-slate-700 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-amber-400 hover:text-slate-900 transition-colors hidden sm:block"
                >
                  Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Renderizado del Modal */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default EventsSection;