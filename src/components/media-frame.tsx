import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export type MediaSource = {
  /** Poster / still. Always required so nothing ever renders broken. */
  poster: string;
  alt: string;
  /** Optional real video file. Leave undefined until footage exists. */
  videoSrc?: string;
  /** Optional embed (YouTube/Vimeo) URL. */
  embedSrc?: string;
  label?: string;
};

/**
 * Reusable media surface. Renders a still until a real video/embed source is
 * supplied — never an empty <video> element.
 */
export function MediaFrame({
  media,
  className,
  autoLoop = true,
  eager = false,
}: {
  media: MediaSource;
  className?: string | undefined;
  autoLoop?: boolean;
  eager?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(autoLoop);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure
      className={cn("group relative overflow-hidden border border-border metal-grain", className)}
      data-cursor={media.videoSrc || media.embedSrc ? "Play" : "Explore"}
    >
      {media.embedSrc ? (
        <iframe
          src={media.embedSrc}
          title={media.alt}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : media.videoSrc ? (
        <>
          <video
            ref={videoRef}
            poster={media.poster}
            src={media.videoSrc}
            muted
            playsInline
            loop
            autoPlay={autoLoop}
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/60 bg-background/60 text-champagne opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </>
      ) : (
        <img
          src={media.poster}
          alt={media.alt}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      )}

      {media.label ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 text-[0.62rem] uppercase tracking-[0.3em] text-champagne">
          {media.label}
        </figcaption>
      ) : null}
    </figure>
  );
}
