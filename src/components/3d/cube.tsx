import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // Adiciona um cubo à cena
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Configuração da câmera
    camera.position.z = 5;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação do cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Renderiza a cena
      renderer.render(scene, camera);
    };

    // Inicia a animação
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeJSComponent;