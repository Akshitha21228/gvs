import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { optimizedImage } from "@/data/images";

/** Defer video transfer and decoding until near view; suspend offscreen work. */
export function ViewportVideo({ src, poster, ...props }: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let visible = false;
    const update = () => {
      if (visible && !document.hidden) {
        setReady(true);
        void video.play().catch(() => { /* Autoplay may be restricted. */ });
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      update();
    }, { rootMargin: "200px" });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); video.pause(); };
  }, []);
  return <video {...props} ref={ref} src={ready ? src : undefined}
    poster={optimizedImage(poster)?.src ?? poster} preload="none" autoPlay={ready} />;
}
