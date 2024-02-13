import React, {  useEffect, useRef } from "react";
import * as THREE from "three";

function Scene() {
    
    const canvasRef = useRef(null);  
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const Cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        scene.add(Cube);

        camera.position.z = 5;

        // on update function
        const update = () => {

            Cube.rotation.x += 0.01;
            Cube.rotation.y += 0.01;

            renderer.render(scene, camera);
            animationFrameId.current = window.requestAnimationFrame(update);
        };

        update();

        animationFrameId.current = window.requestAnimationFrame(update);
        return () => window.cancelAnimationFrame(animationFrameId.current);
    }, []);

    return (
        <canvas id="scene" ref={canvasRef}/>
    );
}

export default Scene;