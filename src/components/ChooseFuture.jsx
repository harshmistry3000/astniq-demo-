import React from 'react';
import { ExpandableGallery } from './ui/ExpandableGallery';

const reasons = [
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    title: "AUTONOMOUS AI AGENTS",
    description: "Deploy self-reasoning AI ecosystems that independently execute complex multi-step enterprise operations."
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    title: "EXASCALE CLOUD INSTANCES",
    description: "Limitless, self-healing cloud microservices designed to handle catastrophic loads without flinching."
  },
  {
    src: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop",
    title: "PREDICTIVE INTELLIGENCE",
    description: "Transform petabytes of raw data into hyper-accurate market and operational foresight."
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    title: "ZERO-TRUST CYBER DEFENSE",
    description: "Impenetrable, cryptographically secured perimeters utilizing continuous biometric and behavioral verification."
  },
  {
    src: "https://images.unsplash.com/photo-1593508512255-86abfe75196b?q=80&w=2000&auto=format&fit=crop",
    title: "SPATIAL COMPUTING & AR",
    description: "Merging physical reality with high-fidelity digital interfaces to revolutionize user interaction."
  }
];

export function ChooseFuture() {
  return (
    <section className="py-32 bg-[#ffffff] relative w-full overflow-hidden" id="why-us">
      {/* Background glowing ambient effects - updated for light theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-100/60 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
           <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 quicksand-font flex items-center gap-2">
             <span className="text-blue-500 font-bold">//</span> THE ADVANTAGE
           </p>
           
           <h2 className="ubuntu-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 uppercase tracking-tight leading-[1] mb-8">
              Choose your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">future with us next.</span>
            </h2>
            
            <p className="quicksand-font text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed">
               Four compelling IT innovations why enterprise leaders trust us to engineer the cutting-edge software of tomorrow, today.
            </p>
        </div>
        
        {/* The Expandable Image Gallery */}
        <ExpandableGallery images={reasons} />

      </div>
    </section>
  )
}
