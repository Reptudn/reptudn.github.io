import React, {  useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

        const catGeometry = new THREE.ObjectLoader().load('./cat.obj');
        const catMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cat = new THREE.Mesh(catGeometry, catMaterial);
        scene.add(cat);

        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const ringGeometry = new THREE.TorusGeometry(2, 0.25, 10, 30);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        scene.add(ring);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        camera.position.z = 5;

        // on update function
        const update = () => {

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            ring.rotation.x -= 0.01;
            ring.rotation.y -= 0.01;

            controls.update();
            renderer.render(scene, camera);
            animationFrameId.current = window.requestAnimationFrame(update);
        };

        const onKeyPress = (e) => {
            console.log(e);
        }

        const onScroll = () => {
            camera.position.z = window.scrollY * 0.01 + 1.5;
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
        <canvas id="scene" ref={canvasRef}/>
    );
}

export default Scene;