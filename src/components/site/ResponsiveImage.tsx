import { memo, type ImgHTMLAttributes } from "react";
import { optimizedImage } from "@/data/images";

type Props = ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean };

/** Original artwork, with browser-selected resolution and a stable intrinsic ratio. */
export const ResponsiveImage = memo(function ResponsiveImage({
  src, priority = false, sizes = "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px",
  loading, width, height, ...props
}: Props) {
  const image = optimizedImage(src);
  return <img {...props} src={image?.src ?? src} srcSet={image?.srcSet}
    sizes={image ? sizes : undefined} width={width ?? image?.width} height={height ?? image?.height}
    loading={priority ? "eager" : (loading ?? "lazy")}
    fetchPriority={priority ? "high" : undefined} decoding="async" />;
});
