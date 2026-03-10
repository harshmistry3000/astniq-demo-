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
    <div className="w-full overflow-hidden py-4 border-b-4 border-brand-black">
      <div ref={trackRef} className="flex items-center gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 flex-shrink-0">
            <span style={{ color: accent }}>
              {DOT}
            </span>
            <span className="ubuntu-bold text-2xl uppercase tracking-[0.1em] text-brand-black hover:text-white transition-colors cursor-default select-none" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
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
      className="w-full relative overflow-hidden bg-brand-yellow border-y-8 border-brand-black"
    >
      <MarqueeRow items={ITEMS} direction={1} speed={60} accent="#ef4444" />
      <MarqueeRow items={ITEMS} direction={-1} speed={50} accent="#1a56db" />
    </div>
  );
}
