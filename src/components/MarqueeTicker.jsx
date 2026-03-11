import { useRef, useEffect } from 'react';

const ITEMS = [
  'Web Development', 'Mobile Apps', 'AI Agents', 'Cloud Native',
  'UI/UX Design', 'Data Ops', 'Cyber Defense', 'Blockchain',
  'IoT Systems', 'Bold Branding', 'SEO Hyper', 'Next-Gen Code',
];

const DOT = (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

function MarqueeRow({ items, direction = 1, speed = 40, accent = '#3b82f6' }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const lastTRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = (t) => {
      if (lastTRef.current === null) lastTRef.current = t;
      const dt = t - lastTRef.current;
      lastTRef.current = t;
      posRef.current += (speed * direction * dt) / 1000;
      const half = el.scrollWidth / 2;
      if (direction > 0 && posRef.current >= half) posRef.current -= half;
      if (direction < 0 && posRef.current <= -half) posRef.current += half;
      el.style.transform = `translateX(${-posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed]);

  const doubled = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-3">
      <div ref={trackRef} className="flex items-center gap-10 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <span style={{ color: accent }}>
              {DOT}
            </span>
            <span className="ubuntu-bold text-[13px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors cursor-default select-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeTicker() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060b18, #09112b)' }}
    >
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #060b18, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #060b18, transparent)' }} />

      {/* Top thin separator */}
      <div className="w-full h-px bg-white/10" />
      
      <MarqueeRow items={ITEMS} direction={1} speed={50} accent="#3b82f6" />
      
      <div className="w-full h-px bg-white/5" />
      
      <MarqueeRow items={ITEMS} direction={-1} speed={40} accent="#f59e0b" />
      
      {/* Bottom separator */}
      <div className="w-full h-px bg-white/10" />
    </div>
  );
}
