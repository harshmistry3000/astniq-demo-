import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function FloatingCubes() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 12;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dir = new THREE.DirectionalLight(0x4488ff, 1.5);
    dir.position.set(5, 10, 7);
    scene.add(dir);
    const pt = new THREE.PointLight(0xa855f7, 2, 30);
    pt.position.set(-5, -5, 5);
    scene.add(pt);

    const CUBE_COLORS = [0x3b82f6, 0xf59e0b, 0x10b981, 0xa855f7, 0x06b6d4, 0xf43f5e];
    const cubes = [];

    for (let i = 0; i < 18; i++) {
      const size = 0.4 + Math.random() * 0.8;
      const isWire = Math.random() < 0.4;
      const geo = new THREE.BoxGeometry(size, size, size);
      const color = CUBE_COLORS[Math.floor(Math.random() * CUBE_COLORS.length)];

      let mat;
      if (isWire) {
        mat = new THREE.MeshBasicMaterial({ color, wireframe: true, opacity: 0.6, transparent: true });
      } else {
        mat = new THREE.MeshPhongMaterial({ color, shininess: 120, transparent: true, opacity: 0.85 });
      }

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      const speed = {
        rx: (Math.random() - 0.5) * 0.012,
        ry: (Math.random() - 0.5) * 0.015,
        fy: (Math.random() - 0.5) * 0.004,
        initY: mesh.position.y,
        phase: Math.random() * Math.PI * 2,
      };
      cubes.push({ mesh, speed });
      scene.add(mesh);
    }

    let mouse = { x: 0, y: 0 };
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    let t = 0;
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.016;

      // Camera parallax
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 1.0 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      cubes.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed.rx;
        mesh.rotation.y += speed.ry;
        mesh.position.y = speed.initY + Math.sin(t + speed.phase) * 0.5;
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#060b18', height: 420 }}>
      <div ref={mountRef} className="absolute inset-0" />
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs font-black uppercase tracking-[0.3em]">// Interactive 3D Environment</span>
        </div>
        <h2 className="ubuntu-bold text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          Digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Dimensions
          </span>
        </h2>
        <p className="quicksand-font text-white/50 mt-4 font-medium text-base md:text-lg max-w-lg">
          Move your mouse to interact with the 3D space. Built with Three.js.
        </p>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #060b18)' }} />
    </section>
  );
}
