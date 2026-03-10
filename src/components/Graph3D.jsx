import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowUpRight } from 'lucide-react';

/* 
  Brand Palette for 'Comic/Neobrutalist' look 
  blue: '#1a56db', black: '#0a0a0f', yellow: '#f59e0b', red: '#ef4444', green: '#10b981', white: '#f8fafc'
*/

const BRAND_COLORS = [0x1a56db, 0xf59e0b, 0xef4444, 0x10b981];

export function Graph3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // Move camera to a comfortable isometric-like angle
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(15, 12, 18);
    camera.lookAt(0, 2, 0);

    // Neobrutalist Lighting (Harsh directional light for hard comic shadows)
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const bars = [];
    const barCount = 7;
    const spacing = 2;

    for (let i = 0; i < barCount; i++) {
        // Random target height for animation
        const targetHeight = 2 + Math.random() * 6;
        const color = BRAND_COLORS[i % BRAND_COLORS.length];

        // The colored bar
        const geometry = new THREE.BoxGeometry(1.2, 1, 1.2);
        // Translate geometry so it scales from the bottom
        geometry.translate(0, 0.5, 0); 
        const material = new THREE.MeshToonMaterial({ color: color });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = (i - barCount / 2 + 0.5) * spacing;
        mesh.position.y = 0;
        mesh.position.z = 0;

        // Add pure black comic outline
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(
            edges, 
            new THREE.LineBasicMaterial({ color: 0x0a0a0f, linewidth: 2 })
        );
        mesh.add(line);

        scene.add(mesh);
        bars.push({ mesh, targetHeight, currentHeight: 0.1 });
    }

    // Add a comic-style thick black ground plane line (axis)
    const axisGeo = new THREE.BoxGeometry(barCount * spacing + 2, 0.2, 1.2);
    const axisMat = new THREE.MeshToonMaterial({ color: 0x0a0a0f });
    const axis = new THREE.Mesh(axisGeo, axisMat);
    axis.position.y = -0.1;
    scene.add(axis);

    let mouse = { x: 0, y: 0 };
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Simple parallax on camera based on mouse
      camera.position.x += (mouse.x * 3 + 15 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 + 12 - camera.position.y) * 0.05;
      camera.lookAt(0, 2, 0);

      // Animate bars growing
      bars.forEach(bar => {
          bar.currentHeight += (bar.targetHeight - bar.currentHeight) * 0.05;
          bar.mesh.scale.y = bar.currentHeight;
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
    <section className="relative w-full overflow-hidden bg-brand-white py-20 border-y-8 border-brand-black neo-shadow-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="relative z-10 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-yellow border-4 border-brand-black neo-shadow-black rounded-lg mb-8 w-fit transform -rotate-2">
            <span className="text-brand-black text-sm font-black uppercase tracking-widest">
              Data Insights
            </span>
          </div>

          <h2 className="ubuntu-bold text-5xl md:text-7xl text-brand-black uppercase tracking-tight leading-tight mb-6" style={{ textShadow: '4px 4px 0 #10b981' }}>
            Visualize <br/>
            <span className="text-brand-white" style={{ WebkitTextStroke: '3px #0a0a0f', textShadow: '6px 6px 0 #1a56db' }}>
              Growth
            </span>
          </h2>
          
          <p className="quicksand-font text-brand-black mt-2 font-bold text-lg md:text-xl max-w-lg mb-10 p-6 bg-brand-white border-4 border-brand-black neo-shadow-red rounded-xl">
            We turn complex metrics into beautiful, easy-to-understand interactive models to help propel your business forward. Watch your metrics grow in real-time.
          </p>

          <button className="w-fit flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-black text-lg border-4 border-brand-black neo-shadow-yellow hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-black transition-all">
            See Our Process <ArrowUpRight size={24} />
          </button>
        </div>

        {/* Right: 3D Graph Container */}
        <div className="relative w-full h-[500px] bg-brand-white border-8 border-brand-black neo-shadow-blue rounded-3xl overflow-hidden">
            {/* Background grid pattern for comic effect */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(#0a0a0f 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
            <div ref={mountRef} className="absolute inset-0" />
            
            {/* Overlay badge */}
            <div className="absolute top-6 right-6 bg-brand-white border-4 border-brand-black px-4 py-2 font-black text-brand-red neo-shadow-black transform rotate-3 z-10">
                LIVE METRICS
            </div>
        </div>
      </div>
    </section>
  );
}
