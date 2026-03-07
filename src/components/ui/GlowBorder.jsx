import React from 'react';

export function GlowBorder({
  className = '',
  borderRadius = 10,
  color = '#FFF',
  borderWidth = 2,
  duration = 10,
  ...props
}) {
  const styles = {
    '--border-radius': `${borderRadius}px`,
    '--border-width': `${borderWidth}px`,
    '--duration': `${duration}s`,
    backgroundImage: `radial-gradient(transparent,transparent, ${
      Array.isArray(color) ? color.join(',') : color
    },transparent,transparent)`,
    backgroundSize: "300% 300%",
    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    padding: "var(--border-width)",
    borderRadius: "var(--border-radius)",
  };

  return (
    <div
      style={styles}
      className={`pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] will-change-[background-position] animate-[glow_var(--duration)_linear_infinite] ${className}`}
      {...props}
    />
  );
}
