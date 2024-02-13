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
        const renderer = new THREE.WebGLRenderer({ canvas,  });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0ff00 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const ringGeometry = new THREE.TorusGeometry(2, 0.25, 10, 30);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        scene.add(ring);

        const ringGeometry2 = new THREE.TorusGeometry(10, 2, 10, 30);
        const ringMaterial2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
        scene.add(ring2);

        // var loader = new FontLoader();
        // loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

        //     var geometry = new TextGeometry( 'LoL', {
        //         font: font,
        //         size: 10,
        //         height: 5,
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 1,
        //         bevelSize: 8,
        //         bevelOffset: 0,
        //         bevelSegments: 5
        //     } );
            
        //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff0f } );
        //     var text = new THREE.Mesh( geometry, material );
        //     scene.add( text );

        // }, undefined, function ( error ) {
        //     console.error( 'An error happened.' );
        //     console.error( error );
        // } );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI;
        controls.maxDistance = 100;

        camera.position.z = 30;

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

            ring.rotation.x -= 0.01;
            ring.rotation.y -= 0.01;
            ring2.rotation.x += 0.01;
            ring2.rotation.y += 0.01;

            // const speed = 0.02;
            // const angle = speed * performance.now() * speed;
            // const radius = 30;

            // camera.position.x = Math.sin(angle) * radius;
            // camera.position.z = Math.cos(angle) * radius;
            // camera.lookAt(sphere.position);

            controls.update();
            renderer.render(scene, camera);
            animationFrameId.current = window.requestAnimationFrame(update);
        };

        const onKeyPress = (e) => {

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
        <canvas id="scene" ref={canvasRef} style={{ zIndex: -1}}/>
    );
}

export default Scene;