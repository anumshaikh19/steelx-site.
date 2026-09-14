import { useEffect } from "react";

/** Live interaction layer for the public PVD material showroom. */
export function PvdInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".pvd-category");
    if (!root) return;
    root.classList.add("pvd-motion-ready");

    const reveal = Array.from(root.querySelectorAll<HTMLElement>(
      ".pvd-seo-section > *, .pvd-feature, .pvd-texture, .pvd-colour-card, .pvd-application-grid article, .pvd-process > *, .pvd-project-card"
    ));
    reveal.forEach((el, i) => {
      el.classList.add("pvd-reveal");
      el.style.setProperty("--pvd-delay", `${Math.min((i % 6) * 70, 350)}ms`);
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(el => observer.observe(el));

    const cards = Array.from(root.querySelectorAll<HTMLElement>(
      ".pvd-colour-card, .pvd-application-grid article, .pvd-feature, .pvd-texture, .pvd-project-card, .pvd-hero-media"
    ));
    const move = (event: PointerEvent) => {
      root.style.setProperty("--pvd-mouse-x", `${event.clientX}px`);
      root.style.setProperty("--pvd-mouse-y", `${event.clientY}px`);
      root.style.setProperty("--pvd-pointer-x", `${(event.clientX / window.innerWidth) * 100}%`);
      root.style.setProperty("--pvd-pointer-y", `${(event.clientY / window.innerHeight) * 100}%`);
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        ".pvd-colour-card, .pvd-application-grid article, .pvd-feature, .pvd-texture, .pvd-project-card, .pvd-hero-media"
      );
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const py = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      el.style.setProperty("--tilt-y", `${(px - .5) * 7}deg`);
      el.style.setProperty("--tilt-x", `${(.5 - py) * 7}deg`);
      el.style.setProperty("--spot-x", `${px * 100}%`);
      el.style.setProperty("--spot-y", `${py * 100}%`);
    };
    const leave = (event: PointerEvent) => {
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        ".pvd-colour-card, .pvd-application-grid article, .pvd-feature, .pvd-texture, .pvd-project-card, .pvd-hero-media"
      );
      if (el) { el.style.setProperty("--tilt-x", "0deg"); el.style.setProperty("--tilt-y", "0deg"); }
    };
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerout", leave, { passive: true });

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const hero = root.querySelector<HTMLElement>(".pvd-hero-media");
        if (hero) {
          const r = hero.getBoundingClientRect();
          const offset = Math.max(-38, Math.min(38, (window.innerHeight * .48 - (r.top + r.height * .5)) * .055));
          hero.style.setProperty("--scroll-y", `${offset}px`);
        }
        root.querySelectorAll<HTMLElement>(".pvd-eyebrow").forEach((el, i) => {
          const r = el.getBoundingClientRect();
          if (r.bottom > -80 && r.top < window.innerHeight + 80) {
            const drift = Math.max(-10, Math.min(10, (window.innerHeight * .5 - r.top) * .012));
            el.style.setProperty("--scroll-drift", `${drift * (i % 2 ? -1 : 1)}px`);
          }
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sections = Array.from(root.querySelectorAll<HTMLElement>("section[id]"));
    const nav = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href^='#']"));
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).id;
        root.setAttribute("data-active-section", id);
        nav.forEach(a => a.classList.toggle("pvd-nav-active", a.getAttribute("href") === `#${id}`));
      }
    }), { threshold: 0, rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect(); sectionObserver.disconnect();
      root.removeEventListener("pointermove", move); root.removeEventListener("pointerout", leave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
