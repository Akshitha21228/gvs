import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/images";
import { productCategories, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  validateSearch: z.object({ category: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Products — 18 Defence Training Simulators | GVS India" },
      { name: "description", content: "Browse all 18 GVS products: VROP & TIIOE, VR rocket launcher, sniper, bunker defence, ATGM, tank troop, 81mm mortar, LORROS, combat medical, CUAS simulators and more." },
      { property: "og:title", content: "GVS Product Catalogue — 18 Training Simulators" },
      { property: "og:description", content: "Searchable catalogue of GVS defence training simulators and systems." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category: initial } = Route.useSearch();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>(initial ?? "All");

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (!term || [p.name, p.officialName, p.summary, p.category].join(" ").toLowerCase().includes(term)),
    );
  }, [q, cat]);

  return (
    <>
      <PageHero eyebrow="Products" title="Product catalogue" intro={`All ${products.length} products developed by GVS as a Joint Development Partner of the Simulator Development Division.`} image={images.vrop} />
      <section className="bg-mist py-14 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input
                id="product-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-md border border-input bg-background py-2.5 pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {["All", ...productCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={cat === c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                    cat === c ? "border-navy bg-navy text-on-dark" : "bg-background hover:border-olive",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">Showing {list.length} of {products.length} products</p>
          {list.length ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          ) : (
            <p className="mt-10 rounded-xl bg-card p-10 text-center text-muted-foreground">No products match your search.</p>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
