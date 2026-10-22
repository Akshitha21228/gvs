import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { SiteImage } from "./SiteImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
      <Link to="/products/$slug" params={{ slug: product.slug }} tabIndex={-1} aria-hidden className="block">
        <SiteImage image={product.image} className="aspect-[4/3]" imgClassName="transition-transform duration-500 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow">{product.category}</span>
          <span className="font-display text-xs text-muted-foreground">{String(product.number).padStart(2, "0")}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">
          <Link to="/products/$slug" params={{ slug: product.slug }} className="hover:text-olive">{product.name}</Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-olive"
          aria-label={`View product: ${product.name}`}
        >
          View Product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
