import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#18181a] w-full text-white pt-24 pb-12 px-8 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-24">
          
          {/* Left Column - Brand & Info */}
          <div className="flex flex-col items-start max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2563EB] border-2 border-white flex flex-col items-center justify-center relative">
                <span className="text-white font-black text-xl italic leading-none translate-y-[2px]">A</span>
                <div className="w-4 h-[3px] bg-[#EAB308] mt-1"></div>
              </div>
              <span className="text-white font-black text-3xl italic tracking-widest">ASTNIQ</span>
            </div>
            
            {/* Description */}
            <p className="text-[#8E9BBA] font-bold text-sm leading-relaxed mb-10 uppercase tracking-widest pr-4">
              We craft digital artifacts that stand the test of time. 2D simplicity. 3D power. 100% impact.
            </p>
            
            {/* Socials */}
            <div className="flex gap-4 cursor-pointer">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <div key={i} className="w-11 h-11 border-2 border-white flex items-center justify-center hover:-translate-y-1 transition-transform bg-transparent shadow-[4px_4px_0px_#4a4a4a]">
                  <Icon size={18} color="white" strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="flex flex-col items-start pt-2">
            <h3 className="text-[#EAB308] font-black italic text-xl mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-4 font-bold text-[#D1D5DB] text-sm tracking-widest uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Exploration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right Column - Studio */}
          <div className="flex flex-col items-start pt-2 pr-0 md:pr-12">
            <h3 className="text-[#EF4444] font-black italic text-xl mb-6 uppercase tracking-wider">Studio</h3>
            <p className="text-[#8E9BBA] font-bold text-[11px] leading-[1.8] uppercase tracking-[0.2em] max-w-[220px]">
              Based globally.<br/>
              Operated remotely.<br/>
              Think individually.
            </p>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-[#6B7280] tracking-widest uppercase">
          <p>© 2024 ASTNIQ DIGITAL ARTIFACTS.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#8E9BBA] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8E9BBA] transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
