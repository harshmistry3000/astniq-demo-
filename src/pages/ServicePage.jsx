import { useRef, useState, useEffect } from 'react';
import {
  Bot, Code2, PhoneIncoming, Megaphone, Database, Palette,
  BrainCircuit, Users, Briefcase, Plane, ClipboardCheck,
  Building2, FlaskConical, TrendingUp, HeartPulse,
  ArrowRight, CheckCircle, Phone, Mail, MapPin, Send, Zap
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   BRAND COLORS
═══════════════════════════════════════════════ */
const C = {
  blue:   '#1a56db',
  black:  '#0a0a0f',
  yellow: '#f59e0b',
  red:    '#ef4444',
  green:  '#10b981',
  white:  '#f8fafc',
};

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const serviceCategories = [
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    desc: 'Leverage the power of AI to automate tasks, gain insights, and enhance decision-making.',
    color: C.blue,
    bg: '#e8f0fe',
    path: '/ai',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Custom software and web applications tailored to unique needs, ensuring efficiency and appeal.',
    color: C.green,
    bg: '#d1fae5',
    path: '#',
  },
  {
    icon: PhoneIncoming,
    title: 'Inbound',
    desc: 'Attract, engage, and convert customers with proven inbound marketing strategies.',
    color: C.yellow,
    bg: '#fef3c7',
    path: '#',
  },
  {
    icon: Megaphone,
    title: 'Outbound',
    desc: 'Expand reach and impact with outbound marketing techniques and enhanced brand visibility.',
    color: C.red,
    bg: '#fee2e2',
    path: '#',
  },
  {
    icon: Database,
    title: 'Data',
    desc: 'Unlock potential through data solutions providing valuable insights for informed decisions.',
    color: C.blue,
    bg: '#e8f0fe',
    path: '#',
  },
  {
    icon: Palette,
    title: 'Designing',
    desc: 'Creative design bringing brands to life with captivating visuals — logos, websites and more.',
    color: C.green,
    bg: '#d1fae5',
    path: '#',
  },
  {
    icon: BrainCircuit,
    title: 'Neuro-Inclusion',
    desc: 'Promoting diversity and inclusivity through accessible, neuro-friendly digital environments.',
    color: C.yellow,
    bg: '#fef3c7',
    path: '#',
  },
  {
    icon: Users,
    title: 'Experience Management',
    desc: 'Enhancing customer and employee satisfaction, loyalty, and organizational productivity.',
    color: C.red,
    bg: '#fee2e2',
    path: '#',
  },
  {
    icon: Briefcase,
    title: 'Consulting',
    desc: 'Guiding businesses toward success with strategic planning and execution of IT solutions.',
    color: C.green,
    bg: '#d1fae5',
    path: '#',
  },
];

const industrySolutions = [
  {
    icon: Plane,
    title: 'Travel And Aviation',
    desc: 'Gateway to exquisite journeys and high-flying adventures. AI-powered booking, recommendations, and customer experiences.',
    accent: C.blue,
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Resourcing',
    desc: 'Elevating success with top-notch resources and exceptional results for your business.',
    accent: C.yellow,
  },
  {
    icon: Building2,
    title: 'Business Services',
    desc: 'Enhancing company efficiency and growth potential through comprehensive digital services.',
    accent: C.green,
  },
  {
    icon: FlaskConical,
    title: 'Software And Research',
    desc: 'Innovative solutions at the intersection of software engineering and cutting-edge research.',
    accent: C.red,
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    desc: 'Unlocking financial futures with expert planning, analytics, and intelligent automation.',
    accent: C.blue,
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Services',
    desc: 'Prioritizing well-being and vitality through top-quality AI-powered healthcare solutions.',
    accent: C.green,
  },
];

/* ═══════════════════════════════════════════════
   REVEAL WRAPPER
═══════════════════════════════════════════════ */
function Reveal({ children, delay = 0, from = 'bottom' }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
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
   CONSTELLATION / NETWORK BG
═══════════════════════════════════════════════ */
function NetworkBg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
      {/* Decorative lines */}
      <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="40%" y1="60%" x2="80%" y2="30%" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="80%" y1="30%" x2="60%" y2="80%" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <circle cx="40%" cy="60%" r="4" fill="white" opacity="0.5" />
      <circle cx="80%" cy="30%" r="4" fill="white" opacity="0.5" />
      <circle cx="10%" cy="20%" r="4" fill="white" opacity="0.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   HEX ICON — decorative central graphic
═══════════════════════════════════════════════ */
function HexGraphic() {
  const icons = [Bot, Code2, Database, BrainCircuit, Palette, Users];
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-blue-300/40 animate-spin-slow" style={{ animationDuration: '20s' }} />
      <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.2)' }}>
        <Zap size={56} style={{ color: C.yellow }} />
      </div>
      {icons.map((Icon, i) => {
        const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + 42 * Math.cos(angle);
        const y = 50 + 42 * Math.sin(angle);
        return (
          <div key={i} className="absolute w-10 h-10 rounded-xl flex items-center justify-center" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <Icon size={18} style={{ color: [C.blue, C.green, C.yellow, C.red, C.green, C.blue][i] }} />
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export function ServicePage() {
  const categoriesRef = useRef(null);

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Quicksand', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO — dark blue/black + network pattern
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20 px-4"
        style={{ background: `linear-gradient(135deg, ${C.black} 0%, #0d1b3e 50%, #0a2472 100%)` }}
      >
        <NetworkBg />

        {/* Accent bar top */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ background: C.blue }} />
          <div className="flex-1" style={{ background: C.yellow }} />
          <div className="flex-1" style={{ background: C.red }} />
          <div className="flex-1" style={{ background: C.green }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-black uppercase tracking-[0.3em]" style={{ background: 'rgba(26,86,219,0.3)', border: `1px solid ${C.blue}`, color: '#93c5fd' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.yellow }} />
            Astniq Solution
          </div>

          <h1 className="ubuntu-bold text-5xl md:text-7xl text-white tracking-tight mb-6 leading-tight">
            Our{' '}
            <span style={{ color: C.yellow }}>Services</span>
          </h1>

          <p className="text-blue-100/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Unlock the full potential of your online presence with our comprehensive services. Our team of experts will optimize your website, enhance your visibility, and drive targeted organic traffic, ensuring your business thrives in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 font-black text-base rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{ background: C.blue, color: 'white', boxShadow: `0 8px 30px ${C.blue}60` }}
            >
              View All Services <ArrowRight size={18} />
            </button>
            <a href="#contact" className="flex items-center gap-2 px-8 py-4 font-black text-base rounded-full border-2 text-white transition-all duration-300 hover:-translate-y-1" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={C.white} />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPLORE OUR SERVICES — white bg, hex graphic
      ══════════════════════════════════════════ */}
      <section style={{ background: C.white }} className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — graphic */}
          <Reveal from="left">
            <div
              className="rounded-3xl p-10 flex items-center justify-center min-h-[320px]"
              style={{ background: `linear-gradient(135deg, ${C.black} 0%, #0d1b3e 100%)` }}
            >
              <HexGraphic />
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal from="right" delay={100}>
            <span className="font-black uppercase tracking-[0.3em] text-sm block mb-3" style={{ color: C.blue }}>
              // Explore Our Services
            </span>
            <h2 className="ubuntu-bold text-3xl md:text-4xl text-gray-900 mb-5 leading-tight">
              Transforming Your Business with{' '}
              <span style={{ color: C.blue }}>Cutting-Edge Solutions</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-medium mb-4">
              At Global Solution for IT, we are committed to helping businesses thrive in the digital age. From IT consultancy that shapes your strategic direction to AI solutions that redefine efficiency, our team of experts is here to guide you every step of the way.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-medium mb-6">
              Our services are designed to empower your organization with the latest technologies — whether you're a startup or an established enterprise — delivering measurable results and lasting competitive advantages.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Innovation', 'Scalability', 'Results-Driven', 'Expert Team'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-black border-2" style={{ borderColor: C.blue, color: C.blue, background: '#e8f0fe' }}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR SERVICES CATEGORIES — dark bg, coloured cards
      ══════════════════════════════════════════ */}
      <section ref={categoriesRef} className="py-20 px-4 md:px-8" style={{ background: C.black }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="ubuntu-bold text-3xl md:text-5xl text-white text-center uppercase tracking-tight mb-3">
              Our Services <span style={{ color: C.yellow }}>Categories</span>
            </h2>
            <p className="text-white/50 text-center max-w-2xl mx-auto text-base font-medium mb-14">
              Comprehensive solutions across every dimension of your digital strategy.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((cat, i) => (
              <Reveal key={i} delay={i * 70}>
                <a
                  href={cat.path}
                  className="group block rounded-2xl p-6 h-full border-2 border-transparent transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.boxShadow = `0 0 30px ${cat.color}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300" style={{ background: cat.bg }}>
                    <cat.icon size={22} style={{ color: cat.color }} />
                  </div>
                  <h3 className="ubuntu-bold text-lg text-white mb-2">{cat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-medium mb-4">{cat.desc}</p>
                  <span className="flex items-center gap-1 text-xs font-black uppercase tracking-wider transition-all duration-300 group-hover:gap-2" style={{ color: cat.color }}>
                    Learn More <ArrowRight size={12} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE STRIP — blue bg
      ══════════════════════════════════════════ */}
      <section className="relative py-16 px-4 overflow-hidden" style={{ background: C.blue }}>
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <NetworkBg />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-5xl text-white/20 mb-2 font-serif leading-none">"</div>
          <p className="ubuntu-bold text-2xl md:text-3xl text-white leading-snug">
            Our success is intrinsically tied to our clients' success.{' '}
            <span style={{ color: C.yellow }}>Your achievement is our primary goal.</span>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRY SOLUTIONS — off-white bg
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8" style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="font-black uppercase tracking-[0.3em] text-sm block text-center mb-3" style={{ color: C.blue }}>
              // Industry Solutions
            </span>
            <h2 className="ubuntu-bold text-3xl md:text-4xl text-gray-900 text-center mb-14 leading-tight">
              Serving Clients Across Every Industry
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((sol, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 h-full border-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  style={{ borderColor: `${sol.accent}30`, background: `${sol.accent}08` }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = sol.accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${sol.accent}30`}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${sol.accent}15` }}>
                    <sol.icon size={22} style={{ color: sol.accent }} />
                  </div>
                  <h3 className="ubuntu-bold text-gray-900 text-lg mb-2" style={{ color: sol.accent }}>{sol.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{sol.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GET IN TOUCH — black bg
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden" style={{ background: C.black }}>
        <NetworkBg />

        {/* Colour accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ background: C.blue }} />
          <div className="flex-1" style={{ background: C.yellow }} />
          <div className="flex-1" style={{ background: C.red }} />
          <div className="flex-1" style={{ background: C.green }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <Reveal from="left">
            <h2 className="ubuntu-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Get In <span style={{ color: C.yellow }}>Touch</span>
            </h2>
            <p className="text-white/60 text-base font-medium leading-relaxed mb-8">
              Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone,  label: '99789 71636',                                              href: 'tel:9978971636',          accent: C.blue },
                { icon: Mail,   label: 'info@astniq.com',                                         href: 'mailto:info@astniq.com',  accent: C.green },
                { icon: MapPin, label: '503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat', href: '#',             accent: C.yellow },
              ].map(({ icon: Icon, label, href, accent }) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{ background: `${accent}20`, border: `1.5px solid ${accent}40` }}>
                    <Icon size={20} style={{ color: accent }} />
                  </div>
                  <span className="text-white/70 font-semibold text-sm leading-relaxed mt-2.5 group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { val: '150+', label: 'Projects', color: C.blue },
                { val: '50+',  label: 'Clients',  color: C.yellow },
                { val: '30+',  label: 'Countries', color: C.green },
              ].map(s => (
                <div key={s.label} className="text-center p-4 rounded-xl border" style={{ borderColor: `${s.color}30`, background: `${s.color}10` }}>
                  <div className="ubuntu-bold text-2xl mb-1" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal from="right" delay={150}>
            <div className="rounded-3xl p-8 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none focus:ring-2 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', '--tw-ring-color': C.blue }} />
                <input type="text" placeholder="Last Name"  className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none focus:ring-2 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', '--tw-ring-color': C.blue }} />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email"     className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none focus:ring-2 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)' }} />
                <input type="tel"   placeholder="Phone no." className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none focus:ring-2 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)' }} />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none mb-4 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)' }} />
              <textarea placeholder="Project Description" rows={4} className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none mb-5 resize-none transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)' }} />
              <button
                className="w-full flex items-center justify-center gap-2 px-8 py-4 font-black text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: C.blue, color: 'white', boxShadow: `0 8px 30px ${C.blue}50` }}
              >
                Submit Button <Send size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
