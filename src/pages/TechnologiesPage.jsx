import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import createGlobe from 'cobe';

/* ═══════════════════════════════════════════════
   BRAND COLORS
═══════════════════════════════════════════════ */
const C = {
  blue:   '#1a56db',
  blueLight: '#3b82f6',
  dark:   '#0f172a',
  orange: '#f97316',
  red:    '#ef4444',
  bgGrid: '#f8fafc',
};

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const technologies = {
  "Web Development": [
    { name: "React Js", logo: "https://cdn.simpleicons.org/react" },
    { name: "Node Js",  logo: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Angular",  logo: "https://cdn.simpleicons.org/angular" },
    { name: "Vue Js",   logo: "https://cdn.simpleicons.org/vuedotjs" },
    { name: "Laravel",  logo: "https://cdn.simpleicons.org/laravel" },
    { name: "PHP",      logo: "https://cdn.simpleicons.org/php" },
  ],
  "App Development": [
    { name: "Flutter",  logo: "https://cdn.simpleicons.org/flutter" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react" },
    { name: "Android",  logo: "https://cdn.simpleicons.org/android" },
    { name: "iOS",      logo: "https://cdn.simpleicons.org/apple" },
  ],
  "CMS Development": [
    { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress" },
    { name: "Shopify",   logo: "https://cdn.simpleicons.org/shopify" },
    { name: "Magento",   logo: "https://cdn.simpleicons.org/magento" },
    { name: "Webflow",   logo: "https://cdn.simpleicons.org/webflow" },
  ]
};

const workSteps = [
  {
    num: '01',
    title: 'Request gathering',
    desc: 'Requirement gathering & understanding of project goal & scope.',
    color: C.blue,
    align: 'right'
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Brainstorming, project architecture, platform & architecture design.',
    color: C.orange,
    align: 'left'
  },
  {
    num: '03',
    title: 'Design & Architecture',
    desc: 'Creating wireframes, interactive prototypes, and system blueprints.',
    color: C.blueLight,
    align: 'right'
  },
  {
    num: '04',
    title: 'Content & Functionality',
    desc: 'UI/UX design, frontend & backend architecture, database integration.',
    color: C.blue,
    align: 'left'
  },
  {
    num: '05',
    title: 'Testing & Launching',
    desc: 'Quality assurance, user acceptance testing, and final deployment.',
    color: C.orange,
    align: 'right'
  }
];

/* ═══════════════════════════════════════════════
   REVEAL WRAPPER
═══════════════════════════════════════════════ */
function Reveal({ children, delay = 0, from = 'bottom' }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const transforms = {
    bottom: v ? 'translateY(0)' : 'translateY(32px)',
    left:   v ? 'translateX(0)' : 'translateX(-32px)',
    right:  v ? 'translateX(0)' : 'translateX(32px)',
  };
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: transforms[from], transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STARRY NETWORK BG
═══════════════════════════════════════════════ */
function StarryNetworkBg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.8" />
          <circle cx="40" cy="40" r="1" fill="white" opacity="0.4" />
          <circle cx="70" cy="20" r="2" fill="white" opacity="0.6" />
          <circle cx="80" cy="80" r="1.5" fill="white" opacity="0.5" />
          <circle cx="20" cy="70" r="1" fill="white" opacity="0.3" />
        </pattern>
        <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#stars)" />
      {/* Network lines over stars */}
      <path d="M0,20 L100,80 M50,0 L50,100 M100,20 L0,80" stroke="url(#grid-fade)" strokeWidth="1" opacity="0.5" />
      <path d="M0,40 L100,60 M0,60 L100,40" stroke="url(#grid-fade)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   DOTTED BG
═══════════════════════════════════════════════ */
function DottedBg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#000" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   SIMPLE GLOBE
═══════════════════════════════════════════════ */
function StaticGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    
    // Create a very blue, digital-looking globe
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0.1,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.05, 0.2, 0.4], // Dark blue ocean
      markerColor: [0.2, 0.8, 1],
      glowColor: [0.1, 0.5, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="w-full max-w-[400px] aspect-square relative flex items-center justify-center mx-auto">
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <canvas
        ref={canvasRef}
        style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <div className="w-full overflow-x-hidden font-sans">

      {/* ══════════════════════════════════════════
          HERO — Dark blue tech pattern
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20 px-4"
        style={{ background: `linear-gradient(135deg, #091a45 0%, #173880 50%, #091a45 100%)` }}
      >
        <StarryNetworkBg />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Our Technologies
          </h1>

          <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Our skilled team harnesses these innovative technologies to craft robust, scalable, and immersive software solutions that drive businesses forward.
          </p>
        </div>

        {/* Decorative light beam at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 shadow-[0_0_20px_#93c5fd]" />
      </section>

      {/* ══════════════════════════════════════════
          NEXT GEN TECHNOLOGY
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Globe */}
          <Reveal from="left">
            <StaticGlobe />
          </Reveal>

          {/* Right Text */}
          <Reveal from="right" delay={150}>
            <div className="max-w-lg">
              <h3 className="text-xl md:text-2xl font-black text-[#00b8c4] mb-3">
                Next Generation Technology
              </h3>
              <p className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight text-balance">
                Innovative and comprehensive solutions developed with the most modern and diverse technologies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGY WE USE (TABS)
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-center text-3xl md:text-4xl font-black text-[#1a56db] mb-12">
              Technology we use
            </h2>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 mb-16">
              {Object.keys(technologies).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'text-[#ef4444] border-b-2 border-[#ef4444] pb-1' 
                      : 'text-[#ef4444]/60 hover:text-[#ef4444]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Logos Grid */}
          <Reveal delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
              {technologies[activeTab].map((tech, i) => (
                <div 
                  key={tech.name} 
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white w-full h-32 group"
                  style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s forwards`, opacity: 0 }}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                  <span className="text-sm font-bold text-slate-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}} />
      </section>

      {/* ══════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <Reveal>
            <div className="text-center mb-24 relative inline-block left-1/2 -translate-x-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-[#1a56db] pb-2 border-b-4 border-[#1a56db] inline-block">
                How we work
              </h2>
            </div>
          </Reveal>

          {/* Timeline Center Line */}
          <div className="absolute top-40 bottom-10 left-12 md:left-1/2 w-1 bg-slate-100 rounded-full md:-translate-x-1/2 z-0" />

          {/* Staggered Vertical Steps */}
          <div className="space-y-12 md:space-y-24 relative z-10 pl-24 md:pl-0">
            {workSteps.map((step, i) => {
              const isLeft = step.align === 'left';
              return (
                <div key={step.num} className={`flex flex-col md:flex-row items-center justify-start ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative`}>
                  
                  {/* Circle Number (absolute positioned for mobile to left border, center for desktop) */}
                  <div 
                    className="absolute left-[-80px] md:left-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg border-4 bg-white z-20 md:-translate-x-1/2"
                    style={{ borderColor: `${step.color}30` }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: step.color }}>
                      {step.num}
                    </div>
                  </div>

                  {/* Content Box */}
                  <Reveal delay={i * 100} from={isLeft ? 'left' : 'right'}>
                    <div 
                      className="bg-white p-8 rounded-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-shadow w-full md:w-[400px] xl:w-[450px]"
                    >
                      <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GET IN TOUCH
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#f9f9eb' }}>
        <DottedBg />
        
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Info */}
          <Reveal from="left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-600 font-bold mb-10 leading-relaxed max-w-md">
              Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, text: "99789 71636" },
                { icon: Mail, text: "info@astniq.com" },
                { icon: MapPin, text: "503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-slate-600" />
                  </div>
                  <span className="text-slate-700 font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Form */}
          <Reveal from="right" delay={150}>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold focus:ring-2 focus:ring-blue-500 transition-all" />
                <input type="text" placeholder="Last Name"  className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email"     className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold focus:ring-2 focus:ring-blue-500 transition-all" />
                <input type="tel"   placeholder="Phone no." className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold mb-4 focus:ring-2 focus:ring-blue-500 transition-all" />
              <textarea placeholder="Project Description" rows={4} className="w-full px-5 py-4 bg-[#f4ede4] rounded-xl outline-none text-slate-800 placeholder:text-slate-500 font-semibold mb-6 resize-none focus:ring-2 focus:ring-blue-500 transition-all" />
              
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1a56db] hover:bg-blue-700 text-white font-black rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 w-[200px]">
                Submit Button
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
