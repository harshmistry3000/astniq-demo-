import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const colors = {
    blue: 'bg-[#2D5BFF]',
    dark: 'bg-[#1A1A1A]',
  };

  return (
    <footer className={`${colors.dark} text-white py-24 px-6 border-t-[16px] border-black relative z-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 ${colors.blue} border-4 border-white flex items-center justify-center`}>
                <span className="font-black text-2xl italic underline decoration-yellow-400">A</span>
              </div>
              <span className="font-black text-4xl uppercase italic tracking-tighter">Astniq</span>
            </div>
            <p className="max-w-md font-bold text-xl text-slate-400 leading-relaxed uppercase">
              We craft digital artifacts that stand the test of time. 2D simplicity. 3D power. 100% Impact.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-4 border-4 border-white hover:bg-yellow-400 hover:text-black hover:border-black transition-all shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] relative z-30">
                  <Icon size={24} strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 relative z-30">
            <h4 className="font-black uppercase text-2xl text-yellow-400 italic">Navigation</h4>
            <ul className="space-y-4 font-black uppercase text-slate-400">
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Exploration</a></li>
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Documentation</a></li>
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black uppercase text-2xl text-red-500 italic">Studio</h4>
            <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">
              Based Globally.<br/>
              Operated Remotely.<br/>
              Think Individually.
            </p>
          </div>
        </div>
        
        <div className="pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between gap-8 text-sm font-black uppercase text-slate-600 tracking-widest relative z-30">
          <span>© 2024 ASTNIQ DIGITAL ARTIFACTS.</span>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
