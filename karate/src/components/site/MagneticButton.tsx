import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "ghost";
  className?: string;
};

/** Physical button: magnetic drift toward cursor, arrow reveal, press impact. */
export function MagneticButton({ children, href, onClick, variant = "gold", className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [d, setD] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setD({
      x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 14,
      y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 10,
    });
  };

  const base = cn(
    "group relative inline-flex items-center gap-4 overflow-hidden px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] transition-[transform,background-color,color,border-color] duration-300 will-change-transform",
    variant === "gold"
      ? "bg-gold text-ink hover:bg-ivory"
      : "border border-gold/40 text-ivory hover:border-gold hover:text-gold",
    className,
  );

  const style = {
    transform: `translate3d(${d.x}px,${d.y}px,0) scale(${pressed ? 0.96 : 1})`,
  };

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current opacity-0 transition-all duration-300 group-hover:opacity-100">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 10 10 2M4 2h6v6" />
        </svg>
      </span>
    </>
  );

  const shared = {
    ref: ref as never,
    className: base,
    style,
    onPointerMove: onMove,
    onPointerLeave: () => {
      setD({ x: 0, y: 0 });
      setPressed(false);
    },
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
  };

  if (href) {
    return (
      <a {...shared} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <button {...shared} type="button" onClick={onClick}>
      {inner}
    </button>
  );
}
