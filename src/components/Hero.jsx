import React from 'react';
import SplitText from './ui/SplitText';

export function Hero() {
  const handleAnimationComplete = () => {
    console.log('Hero title animated!');
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* Subtle modern background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(241,245,249,0.5),transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-12 shadow-sm quicksand-font ring-1 ring-blue-100">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Enterprise Software Solutions
        </div>

        {/* Scaled solid color typography using SplitText component */}
        <div className="mb-6 flex flex-col items-center">
          <SplitText
             text="Beyond"
             className="ubuntu-bold text-6xl md:text-[90px] lg:text-[110px] leading-[0.9] tracking-tight text-slate-900 block"
             delay={40}
             duration={1.2}
             ease="power4.out"
             splitType="chars"
             from={{ opacity: 0, y: 80, rotateX: 45 }}
             to={{ opacity: 1, y: 0, rotateX: 0 }}
             threshold={0.1}
             textAlign="center"
             tag="span"
          />
          <SplitText
             text="The Flat"
             className="ubuntu-bold text-6xl md:text-[90px] lg:text-[110px] leading-[0.9] tracking-tight text-slate-900 block my-1 md:my-3"
             delay={40}
             duration={1.2}
             ease="power4.out"
             splitType="chars"
             from={{ opacity: 0, y: 80, rotateX: 45 }}
             to={{ opacity: 1, y: 0, rotateX: 0 }}
             threshold={0.1}
             textAlign="center"
             tag="span"
          />
          <SplitText
             text="Plane."
             className="ubuntu-bold text-6xl md:text-[90px] lg:text-[110px] leading-[0.9] tracking-tight text-slate-900 block"
             delay={40}
             duration={1.2}
             ease="power4.out"
             splitType="chars"
             from={{ opacity: 0, y: 80, rotateX: 45 }}
             to={{ opacity: 1, y: 0, rotateX: 0 }}
             threshold={0.1}
             textAlign="center"
             tag="span"
             onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <p className="quicksand-font text-lg md:text-xl text-slate-500 max-w-3xl mb-12 font-medium leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
          Bridging the gap between 2D minimalist perfection and immersive 3D technology. We build the future. We are a full-cycle software development and consulting company crafting end-to-end digital solutions that scale with your ambitions.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg quicksand-font font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1">
            View Work
          </button>
          <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-lg quicksand-font font-bold transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1">
            Our Services
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
