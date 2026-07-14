"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Three.js "AI Core" — wireframe icosahedron with an orbiting data-particle field.
 * Ported from the original design's three.js scene, hardened for React lifecycle,
 * device-pixel-ratio caps, visibility pausing and reduced-motion.
 *
 * `variant="background"` pulls the camera back and widens the particle field so
 * the same scene reads well as a calm full-viewport backdrop.
 */
export default function AICore({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "background";
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isBg = variant === "background";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = isBg ? 6 : 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshPhongMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
        emissive: 0x00f5ff,
        emissiveIntensity: 0.5,
      })
    );
    group.add(core);

    const outer = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.MeshPhongMaterial({
        color: 0x00ffb3,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
    );
    group.add(outer);

    const pointsGeom = new THREE.BufferGeometry();
    const pointsCount = isBg ? 420 : 220;
    const spread = isBg ? 11 : 6;
    const coords = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount * 3; i++) coords[i] = (Math.random() - 0.5) * spread;
    pointsGeom.setAttribute("position", new THREE.BufferAttribute(coords, 3));
    const points = new THREE.Points(
      pointsGeom,
      new THREE.PointsMaterial({ color: 0x00f5ff, size: 0.03, transparent: true, opacity: 0.6 })
    );
    group.add(points);

    const light = new THREE.PointLight(0x00f5ff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    let raf = 0;
    let visible = true;

    const render = (t: number) => {
      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      points.rotation.y -= 0.0006;
      const s = 1 + Math.sin(t * 0.001) * 0.05;
      core.scale.set(s, s, s);
      renderer.render(scene, camera);
    };

    const loop = (t: number) => {
      render(t);
      if (visible && !reduceMotion) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduceMotion) loop(performance.now());
      },
      { threshold: 0 }
    );
    io.observe(container);

    const onResize = () => {
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    if (reduceMotion) render(0);
    else loop(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      outer.geometry.dispose();
      (outer.material as THREE.Material).dispose();
      pointsGeom.dispose();
      (points.material as THREE.Material).dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div ref={mountRef} aria-hidden="true" className={className} style={{ width: "100%", height: "100%" }} />;
}
