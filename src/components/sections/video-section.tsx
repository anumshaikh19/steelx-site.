import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal, useInView } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/product";

export function VideoSection({ video }: { video: Product["video"] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = videoRef.current;
    if (!el) return;
    void el.play();
    setPlaying(true);
  };

  return (
    <section aria-label="Product film" className="relative w-full overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "relative h-[52vh] w-full motion-safe:transition-all motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-[62vh] lg:h-[72vh]",
          inView ? "scale-100 opacity-100" : "scale-[0.97] opacity-0",
        )}
      >
        {video.src ? (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            playsInline
            loop
            muted
            preload="none"
            controls={playing}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={video.poster}
            alt={video.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}

        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-background/55 transition-opacity duration-700",
            playing && "opacity-0",
          )}
        />

        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-opacity duration-700",
            playing && "pointer-events-none opacity-0",
          )}
        >
          <Reveal variant="text" as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {video.eyebrow}
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-gold-gradient sm:text-4xl lg:text-5xl">
              {video.title}
            </h2>
          </Reveal>
          {video.src ? (
            <button
              type="button"
              onClick={play}
              aria-label="Play product film"
              className="mt-2 grid h-16 w-16 place-items-center rounded-full border border-gold text-gold shadow-gold-glow transition-transform hover:scale-110 sm:h-20 sm:w-20"
            >
              <Play className="h-6 w-6 translate-x-0.5 fill-current" />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
