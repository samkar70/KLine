
import React from 'react';
import { ShareIcon } from './icons';

const faithContent = [
    {
        image: 'https://picsum.photos/400/300?random=18',
        category: 'New Episode',
        title: 'Max Lucado Encouraging Word Podcast',
        description: 'Wisdom on what to do when lust lures you.',
        cta: 'Listen Now',
    },
    {
        image: 'https://picsum.photos/400/300?random=19',
        category: 'New Episode',
        title: "Lisa Harper's Back Porch Theology",
        description: 'What happiness and holiness have in common.',
        cta: 'Listen Now',
    },
    {
        image: 'https://picsum.photos/400/300?random=20',
        category: 'New Content',
        title: 'Verse of the Day Video Devotionals',
        description: 'Wake up with Verse of the Day video devotionals.',
        cta: 'Watch Now',
    },
]

const FaithSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 border-t border-slate-700/50">
            <h2 className="text-3xl font-bold text-center mb-12">Fe</h2>
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-lg">
                <p className="text-sm font-bold text-amber-400 uppercase tracking-wider">Versículo del día</p>
                <blockquote className="text-2xl md:text-4xl font-light italic my-6 text-slate-100 max-w-4xl mx-auto">
                    “Por eso debemos escuchar con mucha atención la verdad que hemos oído, o podemos alejarnos de ella”.
                </blockquote>
                <p className="font-semibold text-slate-300">Hebreos  2:1 (NLT)</p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button className="bg-amber-400 text-slate-900 font-bold py-2 px-5 rounded-full hover:bg-amber-300 transition-colors text-sm">Regístrate para recibir correos electrónicos</button>
                    <button className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors">
                        <ShareIcon className="h-5 w-5"/>
                    </button>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold text-sm">Más versos</a>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                 {faithContent.map((item, index) => (
                    <div key={index} className="bg-slate-800 rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                         <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                         <div className="p-5">
                             <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">{item.category}</p>
                             <h3 className="text-lg font-bold mt-1 text-slate-100">{item.title}</h3>
                             <p className="text-sm text-slate-300 mt-2 h-10">{item.description}</p>
                             <a href="#" className="inline-block mt-4 text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors">
                                 {item.cta} &rarr;
                             </a>
                         </div>
                     </div>
                 ))}
            </div>
        </section>
    );
};

export default FaithSection;
