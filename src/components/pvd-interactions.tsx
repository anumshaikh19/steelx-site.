import { useEffect } from "react";

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
      el.style.setProperty("--pvd-delay", `${Math.min((i % 5) * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveal.forEach(el => observer.observe(el));

    const cards = Array.from(root.querySelectorAll<HTMLElement>(
      ".pvd-colour-card, .pvd-application-grid article, .pvd-feature, .pvd-texture"
    ));
    const move = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      root.style.setProperty("--pvd-mouse-x", `${x}px`);
      root.style.setProperty("--pvd-mouse-y", `${y}px`);
      root.style.setProperty("--pvd-pointer-x", `${(x / window.innerWidth) * 100}%`);
      root.style.setProperty("--pvd-pointer-y", `${(y / window.innerHeight) * 100}%`);
    };
    window.addEventListener("pointermove", move, { passive: true });

    const enter = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      el.classList.add("pvd-hovering");
    };
    const leave = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      el.classList.remove("pvd-hovering");
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
    };
    const tilt = (event: PointerEvent) => {
      const el = event.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      el.style.setProperty("--tilt-y", `${(px - 0.5) * 7}deg`);
      el.style.setProperty("--tilt-x", `${(0.5 - py) * 7}deg`);
      el.style.setProperty("--spot-x", `${px * 100}%`);
      el.style.setProperty("--spot-y", `${py * 100}%`);
    };
    cards.forEach(el => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      el.addEventListener("pointermove", tilt);
    });

    const sections = Array.from(root.querySelectorAll<HTMLElement>("section[id]"));
    const nav = Array.from(document.querySelectorAll<HTMLElement>("a[href^='#']"));
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          root.setAttribute("data-active-section", (entry.target as HTMLElement).id);
          nav.forEach(a => a.classList.toggle("pvd-nav-active", a.getAttribute("href") === `#${(entry.target as HTMLElement).id}`));
        }
      });
    }, { threshold: 0, rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointermove", move);
      cards.forEach(el => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
        el.removeEventListener("pointermove", tilt);
      });
    };
  }, []);

  return null;
}
