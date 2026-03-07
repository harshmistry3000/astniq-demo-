import React, { useState } from 'react';

export function CardSpotlight({
  children,
  className = '',
  slotClass = '',
  gradientSize = 200,
  gradientColor = '#C9C9C9',
  gradientOpacity = 0.8,
  ...props
}) {
  const [mouseX, setMouseX] = useState(-gradientSize * 10);
  const [mouseY, setMouseY] = useState(-gradientSize * 10);

  function handleMouseMove(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    setMouseX(-gradientSize * 10);
    setMouseY(-gradientSize * 10);
  }

  return (
    <div
      className={`group relative flex overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={`relative z-10 w-full ${slotClass}`.trim()}>
        {children}
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${gradientColor} 0%, rgba(0, 0, 0, 0) 70%)`,
          opacity: gradientOpacity,
        }}
      />
    </div>
  );
}
