import { ImageOff } from "lucide-react";
import type { SiteImage as SiteImageT } from "@/data/images";
import { cn } from "@/lib/utils";

type Props = {
  image: SiteImageT;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  label?: boolean;
  labelPosition?: "top" | "bottom";
};

/** Renders a mapped site image with an honest "Illustrative image" label, or a placeholder. */
export function SiteImage({ image, className, imgClassName, priority, label = true, labelPosition = "top" }: Props) {
  if (!image.src) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={cn(
          "flex flex-col items-center justify-center gap-3 bg-navy grid-lines p-6 text-center text-on-dark-muted",
          className,
        )}
      >
        <ImageOff className="size-8 text-olive" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark">Placeholder</span>
        <span className="max-w-[16rem] text-xs">Approved GVS photograph awaited</span>
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        width={1280}
        height={896}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {label && image.illustrative && (
        <span
          className={cn(
            "absolute left-3 z-10 rounded-sm bg-charcoal/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-dark backdrop-blur",
            labelPosition === "top" ? "top-3" : "bottom-3",
          )}
        >
          Illustrative image
        </span>
      )}
    </div>
  );
}
