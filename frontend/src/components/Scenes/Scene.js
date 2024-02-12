import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

function Scene() {
    
    const animationFrameId = useRef(null);
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector('#scene')
    });

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );

    var ballGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    var ballMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00, wireframe: true});
    var ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ball);

    var light = new THREE.AmbientLight(0xffffff, 1, 100);
    light.position.set(0, 0, 0);
    scene.add(light);

    camera.position.z = 5;
    renderer.render(scene, camera);
    
    const update = useCallback(() => {
        ball.rotation.x += 0.01;
        ball.rotation.y += 0.01;
        renderer.render(scene, camera);
        animationFrameId.current = window.requestAnimationFrame(update);
    }, []);   

    useEffect(() => {
        animationFrameId.current = window.requestAnimationFrame(update);
        return () => window.cancelAnimationFrame(animationFrameId.current);
    }, [update]);

    return (
        <canvas id="scene" onClick={renderer.render(scene, camera)}/>
    );
}

export default Scene;