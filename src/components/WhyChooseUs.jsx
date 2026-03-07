/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useId } from 'react';
import { Zap, Shield, Globe2, Layers, Cpu, CloudLightning } from 'lucide-react';

/* ─────────── GlassSurface hook + component (self-contained) ─────────── */
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const h = e => setIsDark(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);
  return isDark;
};

function GlassPanel({
  children,
  borderRadius = 24,
  brightness = 55,
  opacity = 0.9,
  blur = 12,
  distortionScale = -160,
  className = '',
  style = {},
}) {
  const uid = useId().replace(/:/g, '-');
  const filterId = `gp-filter-${uid}`;
  const rg = `rg-${uid}`;
  const bg = `bg-${uid}`;

  const [svgOk, setSvgOk] = useState(false);
  const containerRef = useRef(null);
  const feImg = useRef(null);
  const redRef = useRef(null);
  const greenRef = useRef(null);
  const blueRef = useRef(null);
  const blurRef = useRef(null);
  const isDark = useDarkMode();

  const buildMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const w = rect?.width || 400;
    const h = rect?.height || 300;
    const edge = Math.min(w, h) * 0.035;
    const svg = `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${rg}" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="red"/>
        </linearGradient>
        <linearGradient id="${bg}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="blue"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${w}" height="${h}" fill="black"/>
      <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${rg})"/>
      <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${bg})" style="mix-blend-mode:difference"/>
      <rect x="${edge}" y="${edge}" width="${w - edge * 2}" height="${h - edge * 2}" rx="${borderRadius}"
            fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)"/>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const update = () => { feImg.current?.setAttribute('href', buildMap()); };

  useEffect(() => {
    update();
    [[redRef, 0], [greenRef, 10], [blueRef, 20]].forEach(([ref, off]) => {
      if (ref.current) {
        ref.current.setAttribute('scale', String(distortionScale + off));
        ref.current.setAttribute('xChannelSelector', 'R');
        ref.current.setAttribute('yChannelSelector', 'G');
      }
    });
    blurRef.current?.setAttribute('stdDeviation', '0.7');
  }, [borderRadius, brightness, opacity, blur, distortionScale]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => setTimeout(update, 0));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => { setSvgOk(checkSvg()); }, []);

  const checkSvg = () => {
    if (typeof window === 'undefined') return false;
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) return false;
    if (/Firefox/.test(navigator.userAgent)) return false;
    const d = document.createElement('div');
    d.style.backdropFilter = `url(#${filterId})`;
    return d.style.backdropFilter !== '';
  };

  const supportsBdf = () => typeof window !== 'undefined' && CSS.supports('backdrop-filter', 'blur(10px)');

  const getStyle = () => {
    const base = { ...style, borderRadius: `${borderRadius}px` };
    if (svgOk) return { ...base, backdropFilter: `url(#${filterId}) saturate(1.4)`,
      background: isDark ? 'hsl(0 0% 0% / 0.05)' : 'hsl(0 0% 100% / 0.05)',
      boxShadow: '0 0 0 1px rgba(255,255,255,0.15) inset, 0 20px 60px rgba(0,0,0,0.15)' };
    const bdf = supportsBdf();
    return {
      ...base,
      background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.2)',
      backdropFilter: bdf ? 'blur(16px) saturate(1.8)' : undefined,
      WebkitBackdropFilter: bdf ? 'blur(16px) saturate(1.8)' : undefined,
      border: '1px solid rgba(255,255,255,0.25)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)',
    };
  };

  return (
    <div ref={containerRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={getStyle()}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImg} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map"/>
            <feDisplacementMap ref={redRef} in="SourceGraphic" in2="map" result="dR"/>
            <feColorMatrix in="dR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red"/>
            <feDisplacementMap ref={greenRef} in="SourceGraphic" in2="map" result="dG"/>
            <feColorMatrix in="dG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green"/>
            <feDisplacementMap ref={blueRef} in="SourceGraphic" in2="map" result="dB"/>
            <feColorMatrix in="dB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue"/>
            <feBlend in="red" in2="green" mode="screen" result="rg"/>
            <feBlend in="rg" in2="blue" mode="screen" result="out"/>
            <feGaussianBlur ref={blurRef} in="out" stdDeviation="0.7"/>
          </filter>
        </defs>
      </svg>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
/* ─────────────────────────────────────────────────── */

const features = [
  { icon: Zap,            title: 'Lightning Fast',         desc: 'Blazing performance with optimized pipelines and zero-latency delivery on any device.',         color: 'from-yellow-400 to-orange-400' },
  { icon: Shield,         title: 'Enterprise Security',    desc: 'Bank-grade encryption, SOC 2 compliance, and proactive threat monitoring built in.',             color: 'from-emerald-400 to-teal-400' },
  { icon: Globe2,         title: 'Global Scale',           desc: 'Deployed across 30+ regions with CDN acceleration — your users always get the best experience.', color: 'from-blue-400 to-cyan-400'    },
  { icon: Layers,         title: 'Modular Architecture',   desc: 'Clean, decoupled services you can extend independently without touching the core.',               color: 'from-violet-400 to-purple-400' },
  { icon: Cpu,            title: 'AI-Ready Stack',         desc: 'Native integrations for LLMs, vector databases, and intelligent automation workflows.',          color: 'from-rose-400 to-pink-400'    },
  { icon: CloudLightning, title: 'Cloud-Native CI/CD',     desc: 'One-click deployments, rollbacks, and blue-green environments right out of the box.',            color: 'from-sky-400 to-indigo-400'   },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <GlassPanel className="p-6 h-full hover:scale-[1.02] transition-transform duration-300 cursor-default">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
          <feature.icon size={24} />
        </div>
        <h3 className="text-white font-bold text-lg mb-2 leading-snug">{feature.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
      </GlassPanel>
    </div>
  );
}

export function WhyChooseUs() {
  const headerRef = useRef(null);
  const [hv, setHv] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHv(true); }, { threshold: 0.3 });
    if (headerRef.current) io.observe(headerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-28 px-4 md:px-8"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 45%, #24243e 100%)' }}>
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"/>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-500/15 rounded-full blur-[80px] pointer-events-none"/>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header in a large GlassPanel */}
        <div ref={headerRef}
          className={`transition-all duration-700 ease-out mb-16 ${hv ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GlassPanel borderRadius={32} className="w-full max-w-3xl mx-auto px-10 py-12 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-4 border border-white/20 px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Built for the Future,<br className="hidden md:block"/> Delivered Today
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              We combine cutting-edge technology with deep engineering expertise to ship products that scale, perform, and impress — every single time.
            </p>
          </GlassPanel>
        </div>

        {/* 6 glass feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
        </div>

        {/* Bottom CTA glass strip */}
        <div className="mt-14">
          <GlassPanel borderRadius={20} className="px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white font-semibold text-xl md:text-2xl leading-snug text-center md:text-left">
              Ready to build something extraordinary?
            </p>
            <button className="shrink-0 bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
              Start a Project →
            </button>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
