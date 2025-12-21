// components/CategoryBar.tsx
import React from 'react';

const categories = ['Todos', 'Entrevistas', 'Momentos', 'Musica', 'Testimonios'];

interface Props {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const CategoryBar: React.FC<Props> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex gap-3 overflow-x-auto py-6 no-scrollbar sticky top-0 bg-slate-950/80 backdrop-blur-md z-[40] px-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap border ${
            activeCategory === cat
              ? 'bg-white text-black border-white'
              : 'bg-transparent text-white border-white/20 hover:border-white'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;