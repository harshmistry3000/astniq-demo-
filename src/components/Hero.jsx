import React from 'react';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { LineShadowText } from '@/components/ui/line-shadow-text';
import { Icons } from './ui/Icons';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* Subtle modern background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(241,245,249,0.5),transparent_60%)] pointer-events-none z-0" />
      
      <GravityStarsBackground className="absolute inset-0 w-full h-full opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 shadow-sm quicksand-font ring-1 ring-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Enterprise Software Solutions
          </div>

          <div className="mb-6 flex flex-col items-start w-full opacity-0 animate-[fade-in_1s_ease-out_forwards]">
            <h1 className="ubuntu-bold text-7xl md:text-[90px] lg:text-[110px] leading-[0.9] tracking-tight text-slate-900 block">
              Ship<br />
              <LineShadowText className="italic" shadowColor="#1e293b">
                Fast
              </LineShadowText>
            </h1>
          </div>

          <p className="quicksand-font text-lg md:text-xl text-slate-500 max-w-lg mb-10 font-medium leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
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

        {/* RIGHT COLUMN: Orbiting Circles */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden lg:h-[600px] opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
          <OrbitingCircles iconSize={40}>
            <Icons.whatsapp />
            <Icons.notion />
            <Icons.openai />
            <Icons.googleDrive />
            <Icons.gitHub />
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={120} reverse speed={2}>
            <Icons.whatsapp />
            <Icons.notion />
            <Icons.openai />
            <Icons.googleDrive />
          </OrbitingCircles>
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
