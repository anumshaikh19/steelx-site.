import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Slide = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  accent: string;
};

const slides: Slide[] = [
  {
    eyebrow: "01 / CALACATTA ORO",
    title: "Light, carved into luxury.",
    copy: "Calacatta Oro brings warm gold movement across a luminous white field—made for kitchens, foyers and spaces designed to be remembered.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=92",
    accent: "#d4af37",
  },
  {
    eyebrow: "02 / NERO MARQUINA",
    title: "Darkness with a signature.",
    copy: "A deep black marble cut by expressive white veins. Dramatic, architectural and unapologetically refined.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=92",
    accent: "#c6b79b",
  },
  {
    eyebrow: "03 / VERDE ALPI",
    title: "A piece of the wild.",
    copy: "Emerald depth and mineral movement create a stone that feels less like a surface and more like a landscape.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=92",
    accent: "#8fb6a3",
  },
  {
    eyebrow: "04 / TAJ MAHAL",
    title: "Soft power in stone.",
    copy: "Warm quartzite, subtle translucency and restrained movement—an elevated foundation for contemporary interiors.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=92",
    accent: "#e0c59b",
  },
];

function createSlabGeometry(width = 3.8, height = 5.7, depth = 0.16) {
  const shape = new THREE.Shape();
  const r = 0.11;
  shape.moveTo(-width / 2 + r, -height / 2);
  shape.lineTo(width / 2 - r, -height / 2);
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + r);
  shape.lineTo(width / 2, height / 2 - r);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - r, height / 2);
  shape.lineTo(-width / 2 + r, height / 2);
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - r);
  shape.lineTo(-width / 2, -height / 2 + r);
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + r, -height / 2);
  const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.035, bevelThickness: 0.035 });
  geometry.center();
  return geometry;
}

export function MarbleHomeSlider() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const pointer = useRef(new THREE.Vector2(0, 0));
  const drag = useRef({ down: false, x: 0, rotation: 0 });

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    activeRef.current = next;
    setActive(next);
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090b0c, 0.035);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.15, 12.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x080808, 1.8);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xfff1d1, 5.2);
    key.position.set(5, 6, 8);
    scene.add(key);
    const rim = new THREE.PointLight(0xd4af37, 35, 16, 2);
    rim.position.set(-4, 1, 4);
    scene.add(rim);
    const fill = new THREE.PointLight(0x9fb8ff, 18, 14, 2);
    fill.position.set(5, -3, 2);
    scene.add(fill);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.MeshStandardMaterial({ color: 0x0d0e0e, roughness: 0.3, metalness: 0.5, transparent: true, opacity: 0.8 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3.15;
    scene.add(floor);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");
    const slabGroup = new THREE.Group();
    scene.add(slabGroup);

    const slabs: Array<{ mesh: THREE.Mesh; target: number }> = [];
    const geometry = createSlabGeometry();

    slides.forEach((slide, index) => {
      const texture = textureLoader.load(slide.image);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.27,
        metalness: 0.06,
        clearcoat: 0.55,
        clearcoatRoughness: 0.18,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geometry.clone(), material);
      mesh.position.set(index === 0 ? 1.55 : index % 2 ? -4.9 : 4.9, index === 0 ? 0.15 : (index % 3) * 0.45 - 1, index === 0 ? 0.2 : -1.4);
      mesh.rotation.set(index === 0 ? 0.02 : index * 0.08, index === 0 ? -0.08 : index % 2 ? 0.35 : -0.28, index === 0 ? 0.05 : -0.08);
      mesh.scale.setScalar(index === 0 ? 1 : 0.52);
      mesh.userData.baseY = mesh.position.y;
      mesh.userData.index = index;
      slabGroup.add(mesh);
      slabs.push({ mesh, target: index === 0 ? 1 : 0 });
    });

    const dust = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({ color: 0xd4af37, size: 0.018, transparent: true, opacity: 0.42 })
    );
    const dustCount = 700;
    const positions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    dust.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    scene.add(dust);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const pointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      if (drag.current.down) drag.current.rotation += (event.clientX - drag.current.x) * 0.008;
      drag.current.x = event.clientX;
    };
    const pointerDown = (event: PointerEvent) => { drag.current.down = true; drag.current.x = event.clientX; mount.setPointerCapture(event.pointerId); };
    const pointerUp = () => { drag.current.down = false; };
    mount.addEventListener("pointermove", pointerMove);
    mount.addEventListener("pointerdown", pointerDown);
    mount.addEventListener("pointerup", pointerUp);
    mount.addEventListener("pointercancel", pointerUp);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const targetX = pointer.current.x * 0.26;
      const targetY = pointer.current.y * 0.16;
      slabGroup.rotation.y += ((targetX + drag.current.rotation) - slabGroup.rotation.y) * 0.035;
      slabGroup.rotation.x += (-targetY - slabGroup.rotation.x) * 0.035;
      rim.position.x = -4 + pointer.current.x * 2.5;
      rim.position.y = 1 + pointer.current.y * 1.4;
      dust.rotation.y = t * 0.008;

      slabs.forEach(({ mesh }) => {
        const index = mesh.userData.index as number;
        const isActive = index === activeRef.current;
        const targetScale = isActive ? 1 : 0.52;
        const targetXPos = isActive ? 1.55 : index % 2 ? -4.9 : 4.9;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.045);
        mesh.position.x += (targetXPos - mesh.position.x) * 0.045;
        mesh.position.y = (mesh.userData.baseY as number) + Math.sin(t * 0.65 + index * 1.7) * (isActive ? 0.13 : 0.22);
        mesh.rotation.y += ((isActive ? -0.08 + pointer.current.x * 0.1 : index % 2 ? 0.35 : -0.28) - mesh.rotation.y) * 0.025;
        mesh.rotation.z += Math.sin(t * 0.32 + index) * 0.0008;
        const material = mesh.material as THREE.MeshPhysicalMaterial;
        material.emissive.set(isActive ? slides[index].accent : "#000000");
        material.emissiveIntensity = isActive ? 0.035 : 0;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener("pointermove", pointerMove);
      mount.removeEventListener("pointerdown", pointerDown);
      mount.removeEventListener("pointerup", pointerUp);
      mount.removeEventListener("pointercancel", pointerUp);
      geometry.dispose();
      slabs.forEach(({ mesh }) => { (mesh.material as THREE.Material).dispose(); mesh.geometry.dispose(); });
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      dust.geometry.dispose();
      (dust.material as THREE.Material).dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => goTo(activeRef.current + 1), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(activeRef.current + 1);
      if (event.key === "ArrowLeft") goTo(activeRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[780px] overflow-hidden bg-[#080b0c] text-white md:min-h-[900px]" aria-label="Featured marble collections">
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_48%,rgba(212,175,55,.12),transparent_25%),linear-gradient(90deg,rgba(3,6,7,.94)_0%,rgba(3,6,7,.7)_32%,rgba(3,6,7,.05)_70%,rgba(3,6,7,.4)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55),transparent_28%,transparent_70%,rgba(0,0,0,.75))]" />

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-end px-5 pb-28 md:min-h-[900px] md:px-10 md:pb-28 lg:px-16">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4 text-[10px] uppercase tracking-[.36em] text-[#d4af37]"><span className="h-px w-12 bg-[#d4af37]" />{slide.eyebrow}</div>
          <h2 key={slide.title} className="stone-serif text-6xl leading-[.9] tracking-[-.05em] drop-shadow-2xl md:text-8xl">{slide.title}</h2>
          <p key={`${slide.title}-copy`} className="mt-7 max-w-lg text-sm leading-7 text-white/65 md:text-base">{slide.copy}</p>
          <a href="#collections" className="pointer-events-auto mt-9 inline-flex items-center gap-5 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[.22em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#d4af37]">Explore Collection <span>↗</span></a>
        </div>
      </div>

      <button type="button" aria-label="Previous marble" onClick={() => goTo(active - 1)} className="absolute left-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-white/25 text-2xl transition hover:border-[#d4af37] hover:text-[#d4af37] md:block">←</button>
      <button type="button" aria-label="Next marble" onClick={() => goTo(active + 1)} className="absolute right-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-white/25 text-2xl transition hover:border-[#d4af37] hover:text-[#d4af37] md:block">→</button>

      <div className="absolute bottom-8 left-5 right-5 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-16 lg:right-16">
        <div className="flex items-center gap-4"><span className="text-xs tracking-[.18em] text-white/80">0{active + 1}</span><span className="h-px w-28 bg-white/20"><span className="block h-px bg-[#d4af37] transition-all duration-700" style={{ width: `${((active + 1) / slides.length) * 100}%` }} /></span><span className="text-[10px] tracking-[.18em] text-white/35">0{slides.length}</span></div>
        <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/40 md:flex"><span className="inline-block h-7 w-7 rounded-full border border-white/20 text-center leading-7">✥</span> Move cursor · drag to rotate</div>
        <div className="flex gap-2">{slides.map((item, index) => <button key={item.eyebrow} type="button" aria-label={`Go to ${item.title}`} onClick={() => goTo(index)} className={`h-2 rounded-full transition-all duration-500 ${index === active ? "w-9 bg-[#d4af37]" : "w-2 bg-white/35 hover:bg-white/70"}`} />)}</div>
      </div>
    </section>
  );
}
