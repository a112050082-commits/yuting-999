import React from 'react';
import { Star } from 'lucide-react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="w-full bg-aster-pink border-y border-aster-black py-3 overflow-hidden whitespace-nowrap flex relative">
      <div className="animate-marquee flex items-center">
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-sm md:text-base font-medium tracking-wide mx-4 uppercase text-aster-black">
              {text}
            </span>
            <Star className="w-4 h-4 text-aster-black fill-current" />
          </React.Fragment>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div className="animate-marquee flex items-center absolute top-3 left-[100%]">
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={`dup-${i}`}>
             <span className="text-sm md:text-base font-medium tracking-wide mx-4 uppercase text-aster-black">
              {text}
            </span>
            <Star className="w-4 h-4 text-aster-black fill-current" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;