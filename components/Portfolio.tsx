import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Freshman Camp",
    category: "Event Planning",
    description: "Organized and executed a 3-day camp for 100+ students.",
    imageUrl: "https://picsum.photos/600/600?random=1"
  },
  {
    id: 2,
    title: "Ad Festival Campaign",
    category: "Advertising",
    description: "Finalist entry focusing on sustainable fashion awareness.",
    imageUrl: "https://picsum.photos/600/600?random=2"
  },
  {
    id: 3,
    title: "Social Media Rebrand",
    category: "Branding",
    description: "Complete visual overhaul for a local cafe brand.",
    imageUrl: "https://picsum.photos/600/600?random=3"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full border-b border-aster-black bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <span className="text-xs font-bold uppercase tracking-widest text-aster-pink mb-2 block">Selected Works</span>
             <h2 className="font-serif text-4xl md:text-6xl">
                Featured <span className="italic">Projects</span>
             </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 max-w-sm text-right">
                A collection of my journey through advertising, event planning, and creative direction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden border border-aster-black aspect-[4/5] mb-6">
                 <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-aster-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute bottom-4 right-4 bg-white border border-aster-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                 </div>
              </div>
              <div className="flex justify-between items-start border-b border-gray-200 pb-4 group-hover:border-aster-black transition-colors">
                <div>
                   <h3 className="text-xl font-serif font-bold mb-1">{project.title}</h3>
                   <p className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</p>
                </div>
                <span className="text-xs font-bold border border-aster-black rounded px-2 py-1">2023</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;