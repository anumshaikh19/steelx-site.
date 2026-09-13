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

    page.querySelectorAll<HTMLImageElement>("img").forEach((img, index) => {
      img.decoding = "async";
      if (index > 0) img.loading = "lazy";
    });

    const addProfileLink = (nav: Element) => {
      if (nav.querySelector('[data-sx-profile-link]')) return;
      const link = document.createElement("a");
      link.href = "/stainless-steel-decorative-profiles";
      link.textContent = "Profiles";
      link.dataset.sxProfileLink = "true";
      nav.insertBefore(link, nav.children[1] ?? null);
    };
    const desktopNav = page.querySelector(".sx-nav-links");
    if (desktopNav) addProfileLink(desktopNav);
    const observer = new MutationObserver(() => {
      const mobileNav = page.querySelector(".sx-mobile-menu");
      if (mobileNav) addProfileLink(mobileNav);
    });
    observer.observe(page, { childList: true, subtree: true });

    page.querySelectorAll(".sx-tech-row").forEach((row) => row.remove());
    const technicalCopy = page.querySelector(".sx-technical> .sx-container>div:first-child>p");
    if (technicalCopy) technicalCopy.textContent = "Technical information is confirmed against the project brief, selected finish and fabrication requirement. Request the current material data for your specification.";
    const techList = page.querySelector(".sx-tech-list");
    if (techList && !techList.querySelector(".sx-production-note")) {
      const note = document.createElement("div");
      note.className = "sx-production-note sx-tech-row";
      note.innerHTML = '<span>DATA</span><strong>Current technical information available on request</strong>';
      techList.insertBefore(note, techList.firstChild);
    }
    page.querySelectorAll(".sx-profile-item small").forEach((el) => {
      el.textContent = "Section and dimensions confirmed per project";
    });
    page.querySelectorAll(".sx-profile-caption span:nth-child(2)").forEach((el) => {
      el.textContent = "Project dependent";
    });
    page.querySelectorAll(".sx-spec-line").forEach((row) => {
      const label = row.querySelector("span")?.textContent?.trim().toUpperCase();
      if (label === "GRADE") row.remove();
    });
    page.querySelectorAll(".sx-selector-caption span:nth-child(2)").forEach((el) => {
      el.textContent = "Project specification";
    });

    const cursor = cursorRef.current;
    const canUseCursor = !!cursor && finePointer.matches && !reduced.matches;
    const moveCursor = (event: PointerEvent) => {
      if (!cursor || !canUseCursor) return;
      cancelAnimationFrame(raf);
      const x = event.clientX;
      const y = event.clientY;
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
      observer.disconnect();
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
