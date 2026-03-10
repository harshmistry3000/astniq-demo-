import React from 'react';
import SplitText from './ui/SplitText';

export function Hero() {
  const handleAnimationComplete = () => {
    console.log('Hero title animated!');
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-brand-yellow border-b-8 border-brand-black">
      {/* Comic retro dot background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0a0a0f 3px, transparent 3px)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center mt-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-white text-brand-black text-sm font-black uppercase tracking-widest mb-12 border-4 border-brand-black neo-shadow-black transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
          <span className="w-3 h-3 rounded-full bg-brand-red animate-pulse border-2 border-brand-black"></span>
          Enterprise Software Solutions
        </div>

        <div className="mb-6 flex flex-col items-center space-y-4 md:space-y-6">
          <SplitText
            text="BEYOND"
            className="ubuntu-bold text-6xl md:text-[90px] lg:text-[120px] leading-none tracking-tight text-brand-white z-10"
            style={{ WebkitTextStroke: '4px #0a0a0f', textShadow: '8px 8px 0px #0a0a0f' }}
            delay={40} duration={1.2} ease="power4.out" splitType="chars"
            from={{ opacity: 0, y: 80, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.1} textAlign="center" tag="span"
          />
          <SplitText
            text="THE FLAT"
            className="ubuntu-bold text-6xl md:text-[90px] lg:text-[120px] leading-none tracking-tight text-brand-blue z-10"
            style={{ WebkitTextStroke: '4px #0a0a0f', textShadow: '8px 8px 0px #0a0a0f' }}
            delay={40} duration={1.2} ease="power4.out" splitType="chars"
            from={{ opacity: 0, y: 80, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.1} textAlign="center" tag="span"
          />
          <SplitText
             text="PLANE."
             className="ubuntu-bold text-6xl md:text-[90px] lg:text-[120px] leading-none tracking-tight text-brand-green z-10"
             style={{ WebkitTextStroke: '4px #0a0a0f', textShadow: '8px 8px 0px #0a0a0f' }}
             delay={40} duration={1.2} ease="power4.out" splitType="chars"
             from={{ opacity: 0, y: 80, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }}
             threshold={0.1} textAlign="center" tag="span"
             onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <p className="quicksand-font text-lg md:text-xl text-brand-black max-w-2xl mb-12 font-bold leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_1s_forwards] bg-brand-white p-6 rounded-2xl border-4 border-brand-black neo-shadow-blue transform rotate-1 mt-6">
          Bridging the gap between 2D minimalist perfection and immersive 3D technology. We build the future. We are a full-cycle software development and consulting company crafting end-to-end digital solutions that scale with your ambitions.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards] mt-4">
          <button className="px-10 py-4 bg-brand-blue text-brand-white rounded-xl text-xl ubuntu-bold uppercase tracking-wider transition-transform border-4 border-brand-black neo-shadow-black hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-red active:translate-x-0 active:translate-y-0 active:shadow-none">
            View Work
          </button>
          <button className="px-10 py-4 bg-brand-white text-brand-black rounded-xl text-xl ubuntu-bold uppercase tracking-wider transition-transform border-4 border-brand-black neo-shadow-black hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-blue active:translate-x-0 active:translate-y-0 active:shadow-none">
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
