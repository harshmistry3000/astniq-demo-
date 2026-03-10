import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { label: 'Projects Delivered', value: 200, suffix: '+', color: '#3b82f6' },
  { label: 'Client Satisfaction', value: 98, suffix: '%', color: '#10b981' },
  { label: 'Team Members', value: 45, suffix: '+', color: '#f59e0b' },
  { label: 'Countries Served', value: 30, suffix: '+', color: '#8b5cf6' },
];

function StatCard({ stat, index, started }) {
  const count = useCountUp(stat.value, 2200, started);
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </span>
      <span className="text-white/60 text-sm font-semibold uppercase tracking-widest text-center">{stat.label}</span>
    </div>
  );
}

function Globe() {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.2, 0.4],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.4, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.07 },
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [28.6139, 77.209], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.06 },
        { location: [1.3521, 103.8198], size: 0.06 },
        { location: [48.8566, 2.3522], size: 0.06 },
        { location: [55.7558, 37.6173], size: 0.05 },
        { location: [-23.5505, -46.6333], size: 0.06 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    canvasRef.current.style.opacity = '1';
    return () => globe.destroy();
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ width: '100%', maxWidth: 520, aspectRatio: '1' }}>
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 100;
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}

export function GlobeStats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 px-4 md:px-8"
      style={{ background: 'linear-gradient(180deg, #060b18 0%, #0d1836 50%, #060b18 100%)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Neobrutalist section label */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 text-xs font-black uppercase tracking-[0.35em]">// Data Driven</span>
        </div>

        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="ubuntu-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[1] mb-4 tracking-tight">
            Global Impact,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Measured in Numbers.
            </span>
          </h2>
          <p className="quicksand-font text-white/50 text-lg max-w-lg mb-16 font-medium leading-relaxed">
            Trusted by enterprises and startups across 30+ countries. Powered by data. Delivered by experts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Globe */}
          <div
            className={`flex-shrink-0 w-full lg:w-auto lg:max-w-[480px] transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <Globe />
          </div>

          {/* Stats */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} started={visible} />
              ))}
            </div>

            {/* Bottom sub-label */}
            <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                All systems operational · Last updated today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
