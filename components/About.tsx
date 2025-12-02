import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full border-b border-aster-black bg-aster-cream">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        
        {/* Title Area */}
        <div className="col-span-1 md:col-span-5 border-b md:border-b-0 md:border-r border-aster-black p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Helping Your <br/>
            <span className="italic text-gray-500">Ideas Get Closer</span> <br/>
            to Your <span className="underline decoration-aster-pink decoration-4 underline-offset-4">Goals</span>—
          </h2>
          <div className="w-16 h-1 bg-black mt-4 mb-8"></div>
        </div>

        {/* Content Area */}
        <div className="col-span-1 md:col-span-7 grid grid-rows-2">
            {/* Upper Image/Gradient */}
            <div className="row-span-1 border-b border-aster-black bg-gradient-to-r from-[#ffe4e1] to-[#f0f8ff] flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                 <p className="relative z-10 font-serif italic text-3xl text-aster-black/50 p-8 text-center">
                    "Creating with passion & purpose."
                 </p>
            </div>

            {/* Bottom Text */}
            <div className="row-span-1 p-8 md:p-16 flex flex-col justify-center bg-white">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4">About Me</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    就讀世新大學公廣系的廣告人，目標是擁有一份熱愛一輩子的工作。
                    在繁忙的學業與創意發想之間，我是個空閒時就喜歡打麻將、游泳的女生。
                    對我來說，生活不僅僅是工作，更是在每一個選擇中找到平衡與熱情。
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 border border-gray-300 rounded-full text-xs">#Advertising</span>
                   <span className="px-3 py-1 border border-gray-300 rounded-full text-xs">#Creative</span>
                   <span className="px-3 py-1 border border-gray-300 rounded-full text-xs">#MahjongLover</span>
                   <span className="px-3 py-1 border border-gray-300 rounded-full text-xs">#Swimmer</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;