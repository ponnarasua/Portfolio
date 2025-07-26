import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    globe?: THREE.Mesh;
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create globe
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create wireframe material
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add glowing atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add dots for cities/locations
    const dotGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
    
    // Add some random dots on the globe surface
    for (let i = 0; i < 50; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      
      // Random position on sphere surface
      const phi = Math.acos(-1 + (2 * i) / 50);
      const theta = Math.sqrt(50 * Math.PI) * phi;
      
      dot.position.setFromSphericalCoords(2.01, phi, theta);
      globe.add(dot);
    }

    camera.position.z = 5;

    // Store references
    sceneRef.current = { scene, renderer, camera, globe };

    // Animation loop
    const animate = () => {
      if (globe) {
        globe.rotation.y += 0.005;
        globe.rotation.x += 0.001;
      }

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      
      if (sceneRef.current.renderer && mountRef.current) {
        mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        sceneRef.current.renderer.dispose();
      }
      
      // Cleanup
      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};

export default Globe;