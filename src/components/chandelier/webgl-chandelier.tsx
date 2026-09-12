import { useEffect, useRef } from "react";
import * as THREE from "three";

type WebGLChandelierProps = {
  lightsOn: boolean;
};

function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,238,190,1)");
  gradient.addColorStop(0.16, "rgba(255,220,140,.85)");
  gradient.addColorStop(0.42, "rgba(255,194,90,.25)");
  gradient.addColorStop(1, "rgba(255,160,40,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function makeMetal(materialColor = 0x9c8060) {
  return new THREE.MeshPhysicalMaterial({
    color: materialColor,
    metalness: 0.92,
    roughness: 0.2,
    clearcoat: 0.65,
    clearcoatRoughness: 0.14,
  });
}

export function WebGLChandelier({ lightsOn }: WebGLChandelierProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const lightsRef = useRef<THREE.PointLight[]>([]);
  const glowRef = useRef<THREE.Sprite[]>([]);
  const targetLight = useRef(lightsOn ? 1 : 0);

  useEffect(() => {
    targetLight.current = lightsOn ? 1 : 0;
  }, [lightsOn]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070706);
    scene.fog = new THREE.FogExp2(0x070706, 0.055);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.15, 10.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.y = 0.15;
    scene.add(root);

    scene.add(new THREE.AmbientLight(0x665c50, 0.18));
    const rim = new THREE.DirectionalLight(0xd8c3a0, 1.3);
    rim.position.set(-4, 5, 5);
    scene.add(rim);

    const gold = makeMetal(0xa78655);
    const darkGold = makeMetal(0x6c5233);
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xffead0,
      emissive: 0xffb84d,
      emissiveIntensity: 1.6,
      metalness: 0.05,
      roughness: 0.08,
      transmission: 0.35,
      transparent: true,
      opacity: 0.94,
    });

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 3.5, 20), darkGold);
    stem.position.y = 1.9;
    root.add(stem);

    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.74, 0.18, 48), gold);
    canopy.position.y = 3.55;
    root.add(canopy);

    const glowTexture = createGlowTexture();
    const bulbs: THREE.Object3D[] = [];
    const pointLights: THREE.PointLight[] = [];
    const glows: THREE.Sprite[] = [];

    const addBulb = (x: number, y: number, z: number, scale = 1) => {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.105 * scale, 20, 20), glass);
      bulb.position.set(x, y, z);
      bulb.scale.y = 1.35;
      root.add(bulb);
      bulbs.push(bulb);

      const light = new THREE.PointLight(0xffd28a, 0, 2.5, 1.65);
      light.position.copy(bulb.position);
      root.add(light);
      pointLights.push(light);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        color: 0xffd98b,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(bulb.position);
      sprite.scale.setScalar(0.72 * scale);
      root.add(sprite);
      glows.push(sprite);
    };

    const tier = (radius: number, y: number, count: number, armLength: number, bulbY: number, phase: number) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.055, 12, 72), gold);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      root.add(ring);

      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2 + phase;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.052, armLength, 12), gold);
        arm.position.set(x * 0.52, y - 0.04, z * 0.52);
        arm.rotation.z = Math.PI / 2;
        arm.rotation.y = angle;
        arm.scale.y = 1.15;
        root.add(arm);
        addBulb(x * 1.02, bulbY, z * 1.02, radius > 2 ? 1 : 0.82);

        const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 1), glass);
        crystal.position.set(x * 1.03, bulbY - 0.33, z * 1.03);
        crystal.scale.set(0.65, 1.8, 0.65);
        root.add(crystal);
      }
    };

    tier(1.25, 2.65, 10, 1.3, 2.28, Math.PI / 10);
    tier(1.95, 1.72, 14, 1.9, 1.36, 0);
    tier(2.7, 0.72, 18, 2.6, 0.34, Math.PI / 18);

    const centerCrystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 2), glass);
    centerCrystal.position.y = -0.15;
    centerCrystal.scale.set(0.9, 2.5, 0.9);
    root.add(centerCrystal);
    addBulb(0, -0.08, 0, 1.35);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(4.8, 96),
      new THREE.MeshBasicMaterial({ color: 0x0e0d0b, transparent: true, opacity: 0.72 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.22;
    floor.position.z = -0.2;
    scene.add(floor);

    lightsRef.current = pointLights;
    glowRef.current = glows;

    const pointer = new THREE.Vector2(0, 0);
    const targetRotation = new THREE.Vector2(0, 0);
    let raf = 0;
    let elapsed = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      elapsed += 0.008;
      targetRotation.x = pointer.y * 0.16;
      targetRotation.y = pointer.x * 0.32;
      root.rotation.x += (targetRotation.x - root.rotation.x) * 0.035;
      root.rotation.y += (targetRotation.y - root.rotation.y) * 0.035;
      root.rotation.y += 0.0017;
      root.position.x += (pointer.x * 0.16 - root.position.x) * 0.02;
      root.position.z = Math.sin(elapsed * 0.45) * 0.06;

      const intensityTarget = targetLight.current;
      pointLights.forEach((light, index) => {
        const pulse = 0.92 + Math.sin(elapsed * 1.8 + index * 0.42) * 0.08;
        light.intensity += (intensityTarget * 2.25 * pulse - light.intensity) * 0.075;
      });
      glows.forEach((sprite, index) => {
        const pulse = 0.9 + Math.sin(elapsed * 1.8 + index * 0.42) * 0.1;
        const material = sprite.material as THREE.SpriteMaterial;
        material.opacity += (intensityTarget * 0.92 * pulse - material.opacity) * 0.09;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      glowTexture.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      mount.removeChild(renderer.domElement);
      lightsRef.current = [];
      glowRef.current = [];
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-label="Interactive 3D chandelier" role="img" />;
}
