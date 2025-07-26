import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
  shapes?: ('cube' | 'sphere' | 'torus')[];
  animate?: boolean;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  className = '', 
  shapes = ['cube', 'sphere'], 
  animate = true 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    meshes?: THREE.Mesh[];
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create meshes
    const meshes: THREE.Mesh[] = [];
    
    shapes.forEach((shape, index) => {
      let geometry: THREE.BufferGeometry;
      
      switch (shape) {
        case 'cube':
          geometry = new THREE.BoxGeometry(1, 1, 1);
          break;
        case 'sphere':
          geometry = new THREE.SphereGeometry(0.7, 32, 32);
          break;
        case 'torus':
          geometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
          break;
        default:
          geometry = new THREE.BoxGeometry(1, 1, 1);
      }
      
      const material = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position meshes
      mesh.position.x = (index - shapes.length / 2 + 0.5) * 2;
      mesh.position.y = Math.sin(index) * 0.5;
      mesh.position.z = Math.cos(index) * 0.5;
      
      scene.add(mesh);
      meshes.push(mesh);
    });

    camera.position.z = 5;

    // Store references
    sceneRef.current = { scene, renderer, camera, meshes };

    // Animation loop
    const animateScene = () => {
      if (!animate) return;
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animateScene);
    };

    if (animate) {
      animateScene();
    } else {
      renderer.render(scene, camera);
    }

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
      
      // Dispose of geometries and materials
      sceneRef.current.meshes?.forEach(mesh => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(material => material.dispose());
        } else {
          mesh.material.dispose();
        }
      });
    };
  }, [shapes, animate]);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};

export default ThreeScene;