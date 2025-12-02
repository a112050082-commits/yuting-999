import React from 'react';
import { Skill } from '../types';
import Button from './ui/Button';

const skills: Skill[] = [
  {
    title: "Content Creation",
    description: "Developing engaging content for social media platforms, focusing on visual storytelling and brand consistency."
  },
  {
    title: "Event Planning",
    description: "Experience in organizing large-scale student events, managing logistics, and team coordination (e.g., Freshman Camp)."
  },
  {
    title: "Advertising Strategy",
    description: "Creating comprehensive advertising campaigns from ideation to execution. Finalist in Ad Festival."
  },
  {
    title: "Social Media Management",
    description: "Curating and managing online communities to foster engagement and brand loyalty."
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full border-b border-aster-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Sticky Image */}
        <div className="hidden md:block relative border-r border-aster-black">
          <div className="sticky top-20 h-[calc(100vh-80px)] w-full">
            <img 
              src="https://picsum.photos/800/1201" 
              alt="Workspace aesthetic" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-10 left-10 text-white">
                <h2 className="font-serif text-5xl italic mb-2">My Expertise</h2>
                <p className="text-white/80 max-w-xs">Building brands with creativity and precision.</p>
            </div>
          </div>
        </div>

        {/* Right: Skills List */}
        <div className="bg-aster-cream">
            <div className="md:hidden p-8 border-b border-aster-black bg-aster-black text-white">
                 <h2 className="font-serif text-4xl italic">My Expertise</h2>
            </div>

            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group border-b border-aster-black last:border-b-0 p-8 md:p-12 hover:bg-white transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl italic group-hover:text-aster-pink transition-colors">
                    {skill.title}—
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {skill.description}
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <Button variant="outline" className="text-xs py-2 px-4">See Details</Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;