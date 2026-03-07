import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export function Globe({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0,
      dark: 0, // 0 for light, 1 for dark
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.4, 1], // primary blue
      glowColor: [0.9, 0.9, 0.95],
      markers: [
        // some sample marker coordinates
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5072, -0.1276], size: 0.08 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={className} style={{ width: '100%', maxWidth: 800, aspectRatio: 1 }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', opacity: 1, contain: 'layout paint size' }}
      />
    </div>
  );
}
