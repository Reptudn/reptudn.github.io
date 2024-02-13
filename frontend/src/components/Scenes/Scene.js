import React, {  useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function Scene() {
    
    const canvasRef = useRef(null);  
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let stars = [];

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const sphereGeometry = new THREE.BoxGeometry(1, 1, 1);
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/Reptudn/reptudn.github.io/main/frontend/assets/tudn.jpg') });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        camera.position.z = 1.55;

        const addStars = () => {

            let geometry = new THREE.SphereGeometry(0.25, 24, 24);
            let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            let star = new THREE.Mesh(geometry, material);

            let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150));
            star.position.set(x, y, z);
            scene.add(star);
        }

        stars = Array(250).fill().forEach(addStars);

        // on update function
        const update = () => {

            // const speed = 0.02;
            // const angle = speed * performance.now() * speed;
            // const radius = 30;

            // camera.position.x = Math.sin(angle) * radius;
            // camera.position.z = Math.cos(angle) * radius;
            // camera.lookAt(sphere.position);

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;

            // controls.update();
            renderer.render(scene, camera);
            animationFrameId.current = window.requestAnimationFrame(update);
        };

        const onKeyPress = (e) => {

        }

        const onScroll = (e) => {
            // camera.position.z += -(window.scrollY * 0.01 + 1.5);
        }

        update();

        window.addEventListener('scroll', onScroll);
        window.addEventListener('keypress', onKeyPress);
        animationFrameId.current = window.requestAnimationFrame(update);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.cancelAnimationFrame(animationFrameId.current);
        }
    }, []);

    return (
        <canvas id="scene" ref={canvasRef} style={{position: "fixed", zIndex: -1, height: "100vh", width: "100vw"}}/>
    );
}

export default Scene;