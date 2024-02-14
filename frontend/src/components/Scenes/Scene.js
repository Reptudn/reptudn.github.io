import React, {  useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function startExperience() {

    console.log("startExperience");

    if (window.started) return;
    window.started = true;

    const spaceShipGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const spaceShipMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const spaceShip = new THREE.Mesh(spaceShipGeometry, spaceShipMaterial);
    spaceShip.position.z = 100;
    window.spaceShip = spaceShip;
    window.scene.add(spaceShip);
}

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

        window.scene = scene;
        window.THREE = THREE;
        window.camera = camera;
        window.renderer = renderer;
        window.started = false;

        // const sphereGeometry = new THREE.BoxGeometry(1, 1, 1);
        // const sphereMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/Reptudn/reptudn.github.io/main/frontend/assets/tudn.jpg') });
        // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // scene.add(sphere);

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
            
            if (window.started === true)
            {
                if (window.spaceShip) {
                    let cameraOffset = new THREE.Vector3(window.spaceShip.position.x, window.spaceShip.position.y, window.spaceShip.position.z - 1.5);
                    camera.position.lerp(cameraOffset, 0.025);
                    camera.lookAt(window.spaceShip.position);
                }
            }
            if (window.started === false)
            {
                const speed = 0.01;
                const radius = 2;
                const angle = speed * performance.now() * speed;
    
                camera.position.x = Math.sin(angle) * radius;
                camera.position.z = Math.cos(angle) * radius;
                camera.lookAt(scene.position);
            }

            animationFrameId.current = window.requestAnimationFrame(update);
            renderer.render(scene, camera);
        };

        const onKeyPress = (e) => {
            if (window.started === false && e.key === "Enter") startExperience();
            else {
                //if (e.key === "a") window.spaceShip.rotation.z += 0.1;
                //if (e.key === "d") window.spaceShip.rotation.z -= 0.1;
            }
        }

        const onScroll = (e) => {
            if (!window.started) return;
            //camera.position.z += -(window.scrollY * 0.1 + 1.5);
        }

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        update();

        window.startExperience = startExperience;
        window.addEventListener('keypress', onKeyPress);
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        animationFrameId.current = window.requestAnimationFrame(update);
        return () => {
            window.startExperience = null;
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('keypress', onKeyPress);
            window.cancelAnimationFrame(animationFrameId.current);
        }
    }, []);

    return (
        <canvas id="scene" ref={canvasRef} style={{position: "fixed", zIndex: -1, height: "100vh", width: "100vw"}}/>
    );
}

export default Scene;