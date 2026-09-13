import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Slide = {
  name: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  accent: string;
};

const slides: Slide[] = [
  {
    name: "Calacatta Gold",
    eyebrow: "Featured collection",
    title: "Calacatta Gold\nMarble",
    copy: "A masterpiece of nature, where golden veins meet timeless elegance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=94",
    accent: "#d4af37",
  },
  {
    name: "Nero Marquina",
    eyebrow: "Featured collection",
    title: "Nero Marquina\nMarble",
    copy: "Deep black stone crossed by dramatic white movement. Bold, architectural and rare.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=94",
    accent: "#d8c6a0",
  },
  {
    name: "Verde Alpi",
    eyebrow: "Featured collection",
    title: "Verde Alpi\nMarble",
    copy: "Mineral green depth that brings the quiet drama of nature into contemporary spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=94",
    accent: "#91b6a3",
  },
  {
    name: "Taj Mahal",
    eyebrow: "Featured collection",
    title: "Taj Mahal\nQuartzite",
    copy: "Warm translucency and restrained movement for spaces built around natural light.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=94",
    accent: "#e0c59b",
  },
];

const collections = [
  ["White Marbles", "Pure elegance", slides[0].image],
  ["Black Marbles", "Bold sophistication", slides[1].image],
  ["Colored Marbles", "Vibrant expression", slides[2].image],
  ["Granites", "Enduring strength", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"],
];

function slabGeometry(width = 4.15, height = 5.65, depth = 0.24) {
  const shape = new THREE.Shape();
  const r = 0.13;
  shape.moveTo(-width / 2 + r, -height / 2);
  shape.lineTo(width / 2 - r, -height / 2);
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + r);
  shape.lineTo(width / 2, height / 2 - r);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - r, height / 2);
  shape.lineTo(-width / 2 + r, height / 2);
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - r);
  shape.lineTo(-width / 2, -height / 2 + r);
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + r, -height / 2);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.045,
    bevelThickness: 0.045,
  });
  geometry.center();
  return geometry;
}

export function MarbleHomeSlider() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const pointer = useRef(new THREE.Vector2());
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
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 0.1, 13.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xfff8e9, 0x111111, 2.2);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffe6bd, 5.5);
    sun.position.set(6, 7, 8);
    scene.add(sun);
    const gold = new THREE.PointLight(0xd4af37, 55, 17, 2);
    gold.position.set(-2.5, 1.2, 4);
    scene.add(gold);
    const warm = new THREE.PointLight(0xffb45d, 25, 14, 2);
    warm.position.set(6, -1, 3);
    scene.add(warm);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 34),
      new THREE.MeshStandardMaterial({ color: 0x090b0b, roughness: 0.22, metalness: 0.58 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3.25;
    scene.add(floor);

    const group = new THREE.Group();
    group.position.set(0.65, 0.15, 0);
    scene.add(group);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    const baseGeometry = slabGeometry();
    const meshes: THREE.Mesh[] = [];

    slides.forEach((slide, index) => {
      const texture = loader.load(slide.image);
      texture.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.23,
        metalness: 0.03,
        clearcoat: 0.7,
        clearcoatRoughness: 0.12,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(baseGeometry.clone(), material);
      const activeSlide = index === 0;
      mesh.scale.setScalar(activeSlide ? 1.02 : 0.48);
      mesh.position.set(activeSlide ? 1.3 : index % 2 ? -4.2 : 4.8, activeSlide ? 0.25 : -0.5 + (index % 3) * 0.65, activeSlide ? 0.3 : -1.5);
      mesh.rotation.set(index * 0.04, activeSlide ? -0.12 : index % 2 ? 0.45 : -0.38, activeSlide ? 0.025 : -0.08);
      mesh.userData.baseY = mesh.position.y;
      mesh.userData.index = index;
      group.add(mesh);
      meshes.push(mesh);
    });

    const dustPositions = new Float32Array(850 * 3);
    for (let i = 0; i < 850; i += 1) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 18;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 8.5;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xd4af37, size: 0.014, transparent: true, opacity: 0.42 }));
    scene.add(dust);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const onMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      if (drag.current.down) drag.current.rotation += (event.clientX - drag.current.x) * 0.006;
      drag.current.x = event.clientX;
    };
    const onDown = (event: PointerEvent) => {
      drag.current.down = true;
      drag.current.x = event.clientX;
      mount.setPointerCapture(event.pointerId);
    };
    const onUp = () => { drag.current.down = false; };
    mount.addEventListener("pointermove", onMove);
    mount.addEventListener("pointerdown", onDown);
    mount.addEventListener("pointerup", onUp);
    mount.addEventListener("pointercancel", onUp);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const px = pointer.current.x;
      const py = pointer.current.y;
      group.rotation.y += ((px * 0.18 + drag.current.rotation) - group.rotation.y) * 0.035;
      group.rotation.x += ((-py * 0.11) - group.rotation.x) * 0.035;
      gold.position.x = -2 + px * 3;
      gold.position.y = 1.1 + py * 1.5;
      dust.rotation.y = t * 0.006;

      meshes.forEach((mesh) => {
        const index = mesh.userData.index as number;
        const selected = index === activeRef.current;
        const targetScale = selected ? 1.02 : 0.48;
        const targetX = selected ? 1.3 : index % 2 ? -4.2 : 4.8;
        const targetY = selected ? 0.25 : -0.5 + (index % 3) * 0.65;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.045);
        mesh.position.x += (targetX - mesh.position.x) * 0.045;
        mesh.position.y = (mesh.userData.baseY as number) + Math.sin(t * 0.58 + index * 1.7) * (selected ? 0.12 : 0.22);
        mesh.rotation.y += (((selected ? -0.12 : index % 2 ? 0.45 : -0.38) + px * 0.07) - mesh.rotation.y) * 0.025;
        mesh.rotation.z += Math.sin(t * 0.32 + index) * 0.0007;
        const material = mesh.material as THREE.MeshPhysicalMaterial;
        material.emissiveIntensity = selected ? 0.025 : 0;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onMove);
      mount.removeEventListener("pointerdown", onDown);
      mount.removeEventListener("pointerup", onUp);
      mount.removeEventListener("pointercancel", onUp);
      meshes.forEach((mesh) => {
        (mesh.material as THREE.Material).dispose();
        mesh.geometry.dispose();
      });
      baseGeometry.dispose();
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      dustGeometry.dispose();
      (dust.material as THREE.Material).dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
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
    <section id="top" className="relative -mt-[76px] min-h-[850px] overflow-hidden bg-[#070b0d] pt-[76px] text-white md:min-h-[920px]" aria-label="Featured marble collection">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=88')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(239,184,104,.34),transparent_25%),linear-gradient(90deg,#03090d_0%,rgba(3,9,13,.9)_28%,rgba(3,9,13,.18)_68%,rgba(3,9,13,.48)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.05)_30%,rgba(0,0,0,.08)_62%,rgba(0,0,0,.9)_100%)]" />
      <div ref={mountRef} className="absolute inset-0 z-[2] cursor-grab touch-none active:cursor-grabbing" aria-hidden="true" />

      <div className="absolute left-0 right-0 top-0 z-30 h-[76px] border-b border-white/10 bg-black/20 backdrop-blur-[10px]">
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#top" className="min-w-[180px]">
            <span className="stone-cinzel block text-[19px] tracking-[.38em] text-white">MARBLES</span>
            <span className="stone-body mt-1 block text-[7px] uppercase tracking-[.28em] text-white/55">Natural stone. Timeless beauty.</span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {[['Home','#top'],['Collections','#collections'],['Spaces','#spaces'],['Process','#craft'],['Journal','#journal'],['About','#consult']].map(([label, href], index) => (
              <a key={label} href={href} className={`stone-body relative py-7 text-xs text-white/70 transition hover:text-white ${index === 0 ? 'text-white after:absolute after:bottom-3 after:left-0 after:right-0 after:h-px after:bg-[#d4af37]' : ''}`}>{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <button type="button" aria-label="Search" className="hidden h-9 w-9 items-center justify-center text-white/75 md:flex"><span className="h-4 w-4 rounded-full border border-white/80 after:ml-3 after:mt-3 after:block after:h-2 after:w-px after:rotate-[-45deg] after:bg-white/80" /></button>
            <button type="button" aria-label="Toggle light" className="hidden text-xl text-white/80 md:block">☼</button>
            <a href="#consult" className="rounded-full border border-[#d4af37]/55 px-5 py-2.5 stone-body text-xs text-white/90 transition hover:bg-[#d4af37] hover:text-black">Get Quote</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[850px] max-w-[1500px] items-center px-5 pb-32 pt-24 md:min-h-[920px] md:px-10 lg:px-16">
        <div className="w-full md:max-w-[48%] lg:max-w-[45%]">
          <div className="mb-7 flex items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/70"><span className="h-px w-12 bg-[#d4af37]" />{slide.eyebrow}</div>
          <h1 key={slide.title} className="stone-serif whitespace-pre-line text-[55px] font-medium leading-[.91] tracking-[-.045em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,.6)] sm:text-[68px] md:text-[74px] lg:text-[86px]">{slide.title}</h1>
          <p key={`${slide.title}-copy`} className="stone-body mt-7 max-w-[430px] text-sm leading-6 text-white/75 md:text-[15px]">{slide.copy}</p>
          <a href="#collections" className="mt-8 inline-flex items-center gap-6 bg-[#c99342] px-7 py-4 stone-body text-[11px] text-white shadow-[0_12px_35px_rgba(0,0,0,.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#d4af37]">Explore Collection <span className="text-base">→</span></a>
        </div>
      </div>

      <button type="button" aria-label="Previous marble" onClick={() => goTo(active - 1)} className="absolute left-6 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-white/40 bg-black/10 text-2xl text-white transition hover:border-[#d4af37] hover:text-[#d4af37] md:block">←</button>
      <button type="button" aria-label="Next marble" onClick={() => goTo(active + 1)} className="absolute right-6 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-white/40 bg-black/10 text-2xl text-white transition hover:border-[#d4af37] hover:text-[#d4af37] md:block">→</button>

      <div className="absolute bottom-[176px] left-5 right-5 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-16 lg:right-16">
        <div className="flex items-center gap-3"><span className="text-xs tracking-[.12em] text-white">0{active + 1}</span><span className="text-[10px] text-white/35">/ 04</span><span className="ml-2 h-px w-32 bg-white/25"><span className="block h-px bg-[#d4af37] transition-all duration-700" style={{ width: `${((active + 1) / slides.length) * 100}%` }} /></span></div>
        <div className="hidden items-center gap-3 stone-body text-[10px] text-white/65 md:flex"><span className="grid h-7 w-7 place-items-center rounded-full border border-white/30">✥</span> Drag to rotate</div>
        <div className="flex items-center gap-2">{slides.map((item, index) => <button key={item.name} type="button" aria-label={`Show ${item.name}`} onClick={() => goTo(index)} className={`h-2 rounded-full transition-all duration-500 ${index === active ? 'w-8 bg-[#f0c76b]' : 'w-2 bg-white/35 hover:bg-white/70'}`} />)}</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#05090b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-stretch px-5 md:px-10 lg:px-16">
          <div className="hidden w-[155px] shrink-0 border-r border-[#d4af37]/60 py-7 pr-7 md:block"><p className="stone-body text-[9px] uppercase tracking-[.2em] text-white/70">Our<br />Collections</p><span className="mt-5 block h-px w-10 bg-[#d4af37]" /><p className="mt-7 stone-body text-[9px] leading-5 text-white/35">Move your cursor<br />to interact with the stone</p></div>
          <div className="grid flex-1 grid-cols-2 gap-3 py-4 md:grid-cols-4 md:gap-4 md:pl-5">
            {collections.map(([name, tagline, image], index) => <button key={name} type="button" onClick={() => goTo(index)} className={`group relative min-h-[88px] overflow-hidden text-left ${active === index ? 'ring-1 ring-[#d4af37]/60' : ''}`}><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" /><span className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" /><span className="absolute inset-x-4 bottom-3 z-10"><strong className="stone-body block text-sm font-normal text-white">{name}</strong><em className="stone-body text-[10px] not-italic text-white/65">{tagline}</em></span></button>)}
          </div>
          <a href="#collections" aria-label="View collections" className="hidden w-16 shrink-0 items-center justify-center text-2xl text-[#d4af37] transition hover:bg-white/5 md:flex">→</a>
        </div>
      </div>
    </section>
  );
}
