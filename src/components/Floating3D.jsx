import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Floating3D = ({ shapeType, color, className, rotateSpeed = [0.01, 0.01] }) => {
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
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 5;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 5, 5);
    scene.add(dir);

    // Parse color string to Hex
    const threeColor = new THREE.Color(color || 0xffffff);

    let geo;
    if (shapeType === 'icosahedron') {
      geo = new THREE.IcosahedronGeometry(1.5, 0);
    } else if (shapeType === 'torus') {
      geo = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
    } else {
      // Default to box
      geo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    }

    // Comic style material
    const mat = new THREE.MeshToonMaterial({ 
      color: threeColor, 
      transparent: true, 
      opacity: 0.9 
    });

    const mesh = new THREE.Mesh(geo, mat);
    
    // Add comic outline
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(
      edges, 
      new THREE.LineBasicMaterial({ color: 0x0a0a0f, linewidth: 2 })
    );
    mesh.add(line);

    scene.add(mesh);

    let t = 0;
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.016;

      mesh.rotation.x += rotateSpeed[0] || 0.01;
      mesh.rotation.y += rotateSpeed[1] || 0.01;
      mesh.position.y = Math.sin(t * 2) * 0.2; // Bob up and down

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mountRef.current) return;
      const nW = mountRef.current.clientWidth;
      const nH = mountRef.current.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [shapeType, color, rotateSpeed]);

  return <div ref={mountRef} className={`pointer-events-none ${className}`} style={{ zIndex: 0 }} />;
};

export default Floating3D;
