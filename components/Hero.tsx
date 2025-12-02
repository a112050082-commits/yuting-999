import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full border-b border-aster-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* Left Column: Image */}
        <div className="relative border-b md:border-b-0 md:border-r border-aster-black overflow-hidden group">
          <img 
            src="https://picsum.photos/800/1200" 
            alt="Yuting Peng Portrait" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute top-8 left-8">
             <div className="bg-aster-cream border border-aster-black px-4 py-1 rounded-full text-xs uppercase tracking-widest inline-block">
                Since 2022
             </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 relative bg-aster-cream">
           {/* Decorative Badge */}
          <div className="absolute -top-6 right-8 md:top-12 md:-left-12 z-10 animate-bounce delay-1000">
             <div className="bg-aster-pink border border-aster-black text-aster-black w-24 h-16 md:w-32 md:h-20 rounded-[50%] flex items-center justify-center transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-serif italic text-lg md:text-xl font-bold">Hey You!</span>
             </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 animate-fade-in-up">
            It's Time to <br/>
            <span className="italic font-light">Stop Playing</span> <br/>
            Small...
          </h1>
          
          <p className="font-sans text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            "因為有選擇障礙所以想擁有世界的人" <br/>
            <span className="text-base mt-2 block text-gray-500">
              Because I have trouble choosing, I want to own the world.
            </span>
          </p>

          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
            <Button variant="outline" icon={false} onClick={() => window.open('https://instagram.com/yutin._._', '_blank')}>
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;