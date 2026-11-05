// import { createFileRoute } from "@tanstack/react-router";
// import { Search } from "lucide-react";
// import { useMemo, useState } from "react";
// import { z } from "zod";
// import { PageHero } from "@/components/site/PageHero";
// import { ProductCard } from "@/components/site/ProductCard";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { productCategories, products } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/products/")({
//   validateSearch: z.object({ category: z.string().optional() }),
//   head: () => ({
//     meta: [
//       { title: "Products — 18 Defence Training Simulators | GVS India" },
//       { name: "description", content: "Browse all 18 GVS products: VROP & TIIOE, VR rocket launcher, sniper, bunker defence, ATGM, tank troop, 81mm mortar, LORROS, combat medical, CUAS simulators and more." },
//       { property: "og:title", content: "GVS Product Catalogue — 18 Training Simulators" },
//       { property: "og:description", content: "Searchable catalogue of GVS defence training simulators and systems." },
//     ],
//   }),
//   component: ProductsPage,
// });

// function ProductsPage() {
//   const { category: initial } = Route.useSearch();
//   const [q, setQ] = useState("");
//   const [cat, setCat] = useState<string>(initial ?? "All");

//   const list = useMemo(() => {
//     const term = q.trim().toLowerCase();
//     return products.filter((p) =>
//       (cat === "All" || p.category === cat) &&
//       (!term || [p.name, p.officialName, p.summary, p.category].join(" ").toLowerCase().includes(term)),
//     );
//   }, [q, cat]);

//   return (
//     <>
//       <PageHero eyebrow="Products" title="Product catalogue" intro={`All ${products.length} products developed by GVS as a Joint Development Partner of the Simulator Development Division.`} image={images.vrop} />
//       <section className="bg-mist py-14 md:py-20">
//         <div className="container-x">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-sm">
//               <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
//               <label htmlFor="product-search" className="sr-only">Search products</label>
//               <input
//                 id="product-search"
//                 type="search"
//                 value={q}
//                 onChange={(e) => setQ(e.target.value)}
//                 placeholder="Search products…"
//                 className="w-full rounded-md border border-input bg-background py-2.5 pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               />
//             </div>
//             <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
//               {["All", ...productCategories].map((c) => (
//                 <button
//                   key={c}
//                   type="button"
//                   aria-pressed={cat === c}
//                   onClick={() => setCat(c)}
//                   className={cn(
//                     "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
//                     cat === c ? "border-navy bg-navy text-on-dark" : "bg-background hover:border-olive",
//                   )}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">Showing {list.length} of {products.length} products</p>
//           {list.length ? (
//             <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {list.map((p) => <ProductCard key={p.slug} product={p} />)}
//             </div>
//           ) : (
//             <p className="mt-10 rounded-xl bg-card p-10 text-center text-muted-foreground">No products match your search.</p>
//           )}
//         </div>
//       </section>
//       <FinalCta />
//     </>
//   );
// }

// import { useState } from "react";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Search, ArrowRight } from "lucide-react";
// import { products, productCategories, type ProductCategory } from "@/data/products";
// import { SiteImage } from "@/components/site/SiteImage";

// export const Route = createFileRoute("/products/")({
//   head: () => ({
//     meta: [
//       { title: "Defence Training Products & Simulators | GVS India" },
//       { name: "description", content: "Explore the GVS portfolio of defence training simulators, VR systems, and simulation equipment." },
//     ],
//   }),
//   component: ProductsPage,
// });

// function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = products.filter((p) => {
//     const matchesCategory = activeCategory === "All" || p.category === activeCategory;
//     const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           p.summary.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     /* Outer wrapper set to the exact background color to prevent white gaps */
//     <div className="min-h-screen" style={{ backgroundColor: "#EAF0F6" }}>
      
//       {/* 1. HERO SECTION */}
//       <section className="bg-[#0B1F35] text-white overflow-hidden">
//         <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-10 lg:grid-cols-2 lg:items-center py-16 md:py-24 min-h-[380px] md:min-h-[440px]">
            
//             <div className="animate-fade-up">
//               <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
//                 Defence Simulation Portfolio
//               </p>
//               <h1 className="text-4xl md:text-[48px] lg:text-[54px] font-bold leading-[1.1] mb-6">
//                 Defence Training Products & Simulation Systems
//               </h1>
//               <p className="text-[17px] text-slate-300 leading-relaxed mb-8 max-w-xl">
//                 GVS offers a portfolio of defence training and simulation products developed to support specialized instruction, equipment familiarization, tactical training and immersive scenario-based learning.
//               </p>
              
//               <div className="flex flex-wrap gap-2">
//                 {["Weapon Training", "VR & Immersive", "Tactical Systems", "Engineering"].map((tag) => (
//                   <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90 backdrop-blur-sm border border-white/10">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="hidden lg:block relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
//                <img 
//                  src="/hero.png" 
//                  alt="GVS Defence Simulator" 
//                  className="absolute inset-0 w-full h-full object-cover opacity-90"
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35] to-transparent opacity-60" />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 2. PRODUCT CATALOG SECTION WITH EXACT BACKGROUND */}
//       <section 
//         className="py-16 md:py-20 relative overflow-hidden"
//         style={{
//           backgroundColor: "#EAF0F6",
//           backgroundImage: `
//             radial-gradient(circle at top center, rgba(22, 118, 185, 0.08) 0%, transparent 50%),
//             linear-gradient(rgba(11, 31, 53, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(11, 31, 53, 0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: "100% 100%, 40px 40px, 40px 40px"
//         }}
//       >
//         <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           {/* Header Row */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
//             <div>
//               <h2 className="text-3xl font-bold text-[#0B1F35]">Explore Our Products</h2>
//               <p className="text-[#526174] mt-2">Browse our range of simulation systems designed to meet specific training requirements.</p>
//             </div>
//             <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 shadow-sm shrink-0">
//               <span className="text-[#1676B9] font-bold">{filteredProducts.length}</span>
//               Products
//             </div>
//           </div>

//           {/* Controls Container (Pure White) */}
//           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10 space-y-6">
//             {/* Search */}
//             <div className="relative w-full">
//               <Search className="absolute left-4 top-3.5 size-5 text-slate-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search products by name or capability..." 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#1676B9] focus:bg-white transition-colors text-[#0B1F35]"
//               />
//             </div>

//             {/* Filters */}
//             <div>
//               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Filter by Category</p>
//               <div className="flex flex-wrap gap-2.5">
//                 <button 
//                   onClick={() => setActiveCategory("All")}
//                   className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
//                     activeCategory === "All" 
//                       ? 'bg-[#0B1F35] text-white border-[#0B1F35] shadow-sm' 
//                       : 'bg-white text-slate-600 border-slate-200 hover:border-[#1676B9] hover:text-[#1676B9]'
//                   }`}
//                 >
//                   All Products
//                 </button>
//                 {productCategories.map((cat) => (
//                   <button 
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
//                       activeCategory === cat 
//                         ? 'bg-[#0B1F35] text-white border-[#0B1F35] shadow-sm' 
//                         : 'bg-white text-slate-600 border-slate-200 hover:border-[#1676B9] hover:text-[#1676B9]'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* 3. PRODUCT GRID (Cards pure white) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product, index) => (
//               <Link 
//                 key={product.slug} 
//                 to="/products/$slug" 
//                 params={{ slug: product.slug }}
//                 className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1676B9]/40 hover:-translate-y-1"
//               >
//                 {/* Image Frame */}
//                 <div className="relative w-full overflow-hidden bg-[#0B1F35] p-1 h-[220px] md:h-[240px] lg:h-[280px]">
//                   <div className="relative w-full h-full rounded-lg overflow-hidden">
//                     <SiteImage 
//                       image={product.image as any} 
//                       className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
//                     />
//                   </div>
                  
//                   {/* Product Index Label */}
//                   <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white/90 tracking-wider">
//                     {String(index + 1).padStart(2, '0')} / {filteredProducts.length}
//                   </div>

//                   {/* Conceptual Label */}
//                   {product.note && (
//                     <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white/90">
//                       Conceptual Illustration
//                     </div>
//                   )}
//                 </div>

//                 {/* Card Content */}
//                 <div className="flex flex-col flex-grow p-6">
//                   <p className="text-[11px] font-bold tracking-wider text-[#1676B9] uppercase mb-2">
//                     {product.category}
//                   </p>
                  
//                   <h3 className="text-[21px] font-semibold text-[#0B1F35] leading-snug mb-2.5 group-hover:text-[#1676B9] transition-colors">
//                     {product.name}
//                   </h3>
                  
//                   <p className="text-[14px] text-[#526174] leading-relaxed line-clamp-3 mb-5 flex-grow">
//                     {product.summary}
//                   </p>

//                   {/* Divider & CTA */}
//                   <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
//                     <span className="text-sm font-semibold text-[#0B1F35] group-hover:text-[#1676B9] transition-colors">
//                       Explore System
//                     </span>
//                     <div className="flex size-8 items-center justify-center rounded-full bg-slate-50 text-[#0B1F35] group-hover:bg-[#1676B9] group-hover:text-white transition-colors">
//                       <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
            
//             {filteredProducts.length === 0 && (
//               <div className="col-span-full text-center py-20 text-slate-500 bg-white rounded-2xl border border-slate-200">
//                 <p className="text-lg font-medium">No products found</p>
//                 <p className="text-sm mt-2">Try adjusting your search or category filter.</p>
//                 <button 
//                   onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
//                   className="mt-4 text-[#1676B9] font-semibold hover:underline"
//                 >
//                   Clear all filters
//                 </button>
//               </div>
//             )}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight } from "lucide-react";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { SiteImage } from "@/components/site/SiteImage";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Defence Training Products & Simulators | GVS India" },
      { name: "description", content: "Explore the GVS portfolio of defence training simulators, VR systems, and simulation equipment." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#EAF0F6] min-h-screen">
      
      {/* 1. HERO SECTION WITH producthero.png BACKGROUND */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden bg-[#0E223B]"
        style={{
          backgroundImage: "image-set(url('/optimized/producthero-2ea00471f53c-768.webp') 1x, url('/optimized/producthero-2ea00471f53c-1920.webp') 2x)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E223B] via-[#0E223B]/80 to-transparent" />
        
        {/* Optional Technical Grid Pattern (Very subtle) */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px"
          }}
        />

        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[650px] animate-fade-up">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
              Defence Simulation Portfolio
            </p>
            <h1 className="text-4xl md:text-[48px] lg:text-[54px] font-bold leading-[1.1] text-white mb-6">
              Defence Training Products & Simulation Systems
            </h1>
            <p className="text-[17px] text-slate-300 leading-relaxed mb-8 max-w-xl">
              GVS offers a portfolio of defence training and simulation products developed to support specialized instruction, equipment familiarization, tactical training and immersive scenario-based learning.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["Weapon Training", "VR & Immersive", "Tactical Systems", "Engineering"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90 backdrop-blur-sm border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT EXPLORATION SECTION */}
      <section 
        className="py-16 md:py-20 relative overflow-hidden"
        style={{
          backgroundColor: "#EAF0F6",
          backgroundImage: `
            radial-gradient(circle at top center, rgba(22, 118, 185, 0.08) 0%, transparent 50%),
            linear-gradient(rgba(11, 31, 53, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11, 31, 53, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px"
        }}
      >
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F35]">Explore Our Products</h2>
              <p className="text-[#526174] mt-2">Browse our range of simulation systems designed to meet specific training requirements.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-500 shadow-sm shrink-0">
              <span className="text-[#1676B9] font-bold">{filteredProducts.length}</span>
              Products
            </div>
          </div>

          {/* Controls Container */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10 space-y-6">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-3.5 size-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products by name or capability..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#1676B9] focus:bg-white transition-colors text-[#0B1F35]"
              />
            </div>

            {/* Filters */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Filter by Category</p>
              <div className="flex flex-wrap gap-2.5">
                <button 
                  onClick={() => setActiveCategory("All")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                    activeCategory === "All" 
                      ? 'bg-[#0B1F35] text-white border-[#0B1F35] shadow-sm' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#1676B9] hover:text-[#1676B9]'
                  }`}
                >
                  All Products
                </button>
                {productCategories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      activeCategory === cat 
                        ? 'bg-[#0B1F35] text-white border-[#0B1F35] shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-[#1676B9] hover:text-[#1676B9]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. PRODUCT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Link 
                key={product.slug} 
                to="/products/$slug" 
                params={{ slug: product.slug }}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1676B9]/40 hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative w-full overflow-hidden bg-[#0B1F35] p-1 h-[220px] md:h-[240px] lg:h-[280px]">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <SiteImage 
                      image={product.image as any} 
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Product Index Label */}
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white/90 tracking-wider">
                    {String(index + 1).padStart(2, '0')} / {filteredProducts.length}
                  </div>

                  {/* Conceptual Label */}
                  {product.note && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white/90">
                      Conceptual Illustration
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  <p className="text-[11px] font-bold tracking-wider text-[#1676B9] uppercase mb-2">
                    {product.category}
                  </p>
                  
                  <h3 className="text-[21px] font-semibold text-[#0B1F35] leading-snug mb-2.5 group-hover:text-[#1676B9] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-[14px] text-[#526174] leading-relaxed line-clamp-3 mb-5 flex-grow">
                    {product.summary}
                  </p>

                  {/* Divider & CTA */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0B1F35] group-hover:text-[#1676B9] transition-colors">
                      Explore System
                    </span>
                    <div className="flex size-8 items-center justify-center rounded-full bg-slate-50 text-[#0B1F35] group-hover:bg-[#1676B9] group-hover:text-white transition-colors">
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-20 text-slate-500 bg-white rounded-2xl border border-slate-200">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm mt-2">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-4 text-[#1676B9] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}