import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { images, optimizedImage } from "@/data/images";
import { products } from "@/data/products";

describe("production image loading", () => {
  it("maps every catalogue image to responsive local assets", () => {
    for (const image of [...Object.values(images), ...products.map(p => p.image)]) {
      if (image.src) expect(optimizedImage(image.src)?.srcSet).toContain("w");
    }
  });
  it("prioritizes heroes and reserves their original intrinsic ratio", () => {
    render(<ResponsiveImage src="/hero.png" alt="Hero" priority sizes="100vw" />);
    const img = screen.getByAltText("Hero");
    expect(img).toHaveAttribute("loading", "eager");
    expect(img).toHaveAttribute("fetchpriority", "high");
    expect(img).toHaveAttribute("srcset");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
  });
  it("defers cards and retains caller layout classes", () => {
    render(<ResponsiveImage src="/vrop.png" alt="Product" className="object-cover" />);
    expect(screen.getByAltText("Product")).toHaveAttribute("loading", "lazy");
    expect(screen.getByAltText("Product")).toHaveClass("object-cover");
  });
});
