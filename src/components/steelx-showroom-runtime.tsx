import { useEffect, useRef } from "react";

export function SteelXShowroomRuntime() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const page = document.querySelector(".sx-page");
    if (!page) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let raf = 0;

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--sx-scroll-progress", max > 0 ? `${window.scrollY / max}` : "0");
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    const images = page.querySelectorAll<HTMLImageElement>("img");
    images.forEach((img, index) => {
      img.decoding = "async";
      if (index > 0) img.loading = "lazy";
    });

    const cursor = cursorRef.current;
    const canUseCursor = cursor && finePointer.matches && !reduced.matches;
    const moveCursor = (event: PointerEvent) => {
      if (!cursor || !canUseCursor) return;
      const x = event.clientX;
      const y = event.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    const setCursorState = (event: Event) => {
      if (!cursor || !canUseCursor) return;
      const target = event.target as HTMLElement | null;
      cursor.classList.toggle("is-link", !!target?.closest("a,button"));
    };

    if (canUseCursor) {
      window.addEventListener("pointermove", moveCursor, { passive: true });
      document.addEventListener("pointerover", setCursorState, { passive: true });
      document.addEventListener("pointerout", setCursorState, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", setCursorState);
      document.removeEventListener("pointerout", setCursorState);
      cancelAnimationFrame(raf);
      root.style.removeProperty("--sx-scroll-progress");
    };
  }, []);

  return <div ref={cursorRef} className="sx-cursor" aria-hidden="true" />;
}
