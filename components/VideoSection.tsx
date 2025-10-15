
import React from 'react';
import { PlayIcon } from './icons';

const videos = [
  {
    image: 'https://picsum.photos/400/225?random=22',
    title: 'KLive Interviews Bart Millard and Walker Hayes',
    category: 'Performance',
  },
  {
    image: 'https://picsum.photos/400/225?random=23',
    title: 'Exclusive Performance: Breakdown by Andrew Ripp',
    category: 'Performance',
  },
];

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-700/50">
        <h2 className="text-3xl font-bold text-center mb-12">EnCanto </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Video */}
            <div className="relative rounded-lg overflow-hidden group aspect-w-16 aspect-h-9 cursor-pointer">
                <img src="https://picsum.photos/800/450?random=21" alt="Lauren Daigle Interview" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm transform transition-transform group-hover:scale-110">
                        <PlayIcon className="h-12 w-12 text-white" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm font-bold text-amber-400 uppercase tracking-wider">Interview</p>
                    <h3 className="text-2xl font-bold text-white mt-1">10 years of faith and music with Lauren Daigle</h3>
                </div>
            </div>
            {/* Side Content */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-2xl font-bold text-slate-100">A new interview with powerhouse artist Lauren Daigle</h3>
                    <p className="text-slate-300 mt-2">EnCanto On Demand presents a heartwarming and candid new interview, marking 10 years since the release of her debut album, "How Can It Be."</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {videos.map(video => (
                        <div key={video.title} className="relative rounded-lg overflow-hidden group cursor-pointer">
                            <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                                <h4 className="text-white text-sm font-bold">{video.title}</h4>
                            </div>
                             <div className="absolute top-2 right-2 bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 rounded">
                                {video.category}
                             </div>
                        </div>
                    ))}
                </div>
                 <button className="mt-8 w-full bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-transform hover:scale-105">
                    Sign Up Free & Watch
                </button>
            </div>
        </div>
    </section>
  );
};

export default VideoSection;
