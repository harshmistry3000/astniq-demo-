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
    <section className="py-32 bg-brand-yellow relative w-full overflow-hidden border-y-8 border-brand-black" id="why-us">
      {/* Background glowing ambient effects - updated for comic theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 3px, transparent 3px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Section Header */}
        <div className="mb-20 lg:w-1/3">
           <div className="inline-block bg-brand-white px-4 py-2 border-4 border-brand-black neo-shadow-black transform rotate-2 mb-8">
             <p className="text-brand-black font-black tracking-widest uppercase text-sm flex items-center gap-2">
               <span className="text-brand-blue font-bold text-xl">//</span> THE ADVANTAGE
             </p>
           </div>
           
           <h2 className="ubuntu-bold text-5xl md:text-6xl text-brand-black uppercase tracking-tight leading-[1] mb-8" style={{ textShadow: '4px 4px 0 #ef4444' }}>
              Choose your <br />
              <span className="text-brand-white" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #1a56db' }}>future with us next.</span>
            </h2>
            
            <p className="quicksand-font text-xl md:text-2xl text-brand-black bg-brand-white p-6 border-4 border-brand-black neo-shadow-blue font-bold leading-relaxed transform -rotate-1">
               Four compelling IT innovations why enterprise leaders trust us to engineer the cutting-edge software of tomorrow, today.
            </p>
        </div>
        
        {/* The Expandable Image Gallery */}
        <div className="lg:w-2/3 w-full">
           <ExpandableGallery images={reasons} />
        </div>

      </div>
    </section>
  )
}
