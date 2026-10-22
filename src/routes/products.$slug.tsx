// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { EnquiryForm } from "@/components/site/EnquiryForm";
// import { ProductCard } from "@/components/site/ProductCard";
// import { getProduct, products } from "@/data/products";
// import { jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/products/$slug")({
//   loader: ({ params }) => {
//     const product = getProduct(params.slug);
//     if (!product) throw notFound();
//     return { slug: product.slug };
//   },
//   head: ({ loaderData }) => {
//     const p = loaderData ? getProduct(loaderData.slug) : undefined;
//     if (!p) return { meta: [{ title: "Product not found | GVS India" }, { name: "robots", content: "noindex" }] };
//     return {
//       meta: [
//         { title: `${p.name} | GVS India` },
//         { name: "description", content: `${p.summary} Request product information from Green Vision Solutions.` },
//         { property: "og:title", content: `${p.name} — Green Vision Solutions` },
//         { property: "og:description", content: p.summary },
//         { property: "og:type", content: "product" },
//       ],
//     };
//   },
//   notFoundComponent: () => (
//     <div className="container-x py-24 text-center">
//       <h1 className="text-3xl font-bold">Product not found</h1>
//       <Link to="/products" className="mt-6 inline-block font-semibold text-olive">Back to all products</Link>
//     </div>
//   ),
//   component: ProductPage,
// });

// function ProductPage() {
//   const { slug } = Route.useLoaderData();
//   const p = getProduct(slug)!;
//   const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

//   return (
//     <>
//       <section className="bg-navy text-on-dark">
//         <div className="container-x grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
//           <div className="order-2 lg:order-1">
//             <Link to="/products" className="inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark"><ArrowLeft className="size-4" /> All products</Link>
//             <p className="eyebrow mt-6">Product {String(p.number).padStart(2, "0")} · {p.category}</p>
//             <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{p.name}</h1>
//             <p className="mt-5 text-lg text-on-dark-muted">{p.overview}</p>
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Button asChild variant="hero" size="lg" className="h-12"><a href="#enquiry">Request Product Information</a></Button>
//             </div>
//           </div>
//           <SiteImage image={p.image} priority className="order-1 aspect-[4/3] rounded-2xl lg:order-2" />
//         </div>
//       </section>

//       <section className="py-16 md:py-24">
//         <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
//           <div className="space-y-12">
//             <div>
//               <h2 className="text-2xl font-bold">Catalogue name</h2>
//               <p className="mt-3 leading-relaxed text-muted-foreground">{p.officialName}</p>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold">Purpose and training application</h2>
//               <p className="mt-3 leading-relaxed text-muted-foreground">{p.application}</p>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold">Features and specifications</h2>
//               {p.features.length ? (
//                 <ul className="mt-4 space-y-2">{p.features.map((f) => <li key={f} className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-olive" />{f}</li>)}</ul>
//               ) : (
//                 <p className="mt-4 flex gap-3 rounded-xl bg-mist p-5 text-sm">
//                   <Info className="mt-0.5 size-4 shrink-0 text-steel" aria-hidden />
//                   Contact our team for product specifications and availability.
//                 </p>
//               )}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold">Integration and support</h2>
//               <p className="mt-3 leading-relaxed text-muted-foreground">
//                 GVS provides training, consultancy, technical support, annual maintenance contracts (AMC), repair, upgrade and system integration services for defence and simulation equipment.
//               </p>
//             </div>
//             {p.note && (
//               <p className="rounded-xl border border-dashed p-5 text-sm text-muted-foreground"><strong className="text-foreground">Note: </strong>{p.note}</p>
//             )}
//           </div>
//           <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
//             <div className="rounded-xl bg-mist p-6">
//               <h2 className="text-sm font-semibold">Development</h2>
//               <p className="mt-2 text-sm text-muted-foreground">{jointDevelopmentStatement}</p>
//               {p.delivered && (
//                 <p className="mt-4 flex gap-2 text-sm font-medium"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />Listed among systems GVS has designed, developed and delivered.</p>
//               )}
//             </div>
//             <div className="rounded-xl border p-6">
//               <h2 className="text-sm font-semibold">Additional photographs</h2>
//               <p className="mt-2 text-sm text-muted-foreground">Approved product photographs and diagrams will be added here once released by GVS.</p>
//             </div>
//           </aside>
//         </div>
//       </section>

//       <section id="enquiry" className="scroll-mt-24 bg-mist py-16 md:py-24">
//         <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
//           <div>
//             <p className="eyebrow">Product enquiry</p>
//             <h2 className="mt-3 text-3xl font-bold">Request information on the {p.name}</h2>
//             <p className="mt-4 text-muted-foreground">Share your requirement and the GVS team will get back to you.</p>
//           </div>
//           <div className="rounded-2xl bg-card p-6 shadow-card md:p-8">
//             <EnquiryForm defaultProduct={p.name} sourcePage={`/products/${p.slug}`} />
//           </div>
//         </div>
//       </section>

//       {related.length > 0 && (
//         <section className="py-16 md:py-24">
//           <div className="container-x">
//             <h2 className="text-2xl font-bold">Related products</h2>
//             <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {related.map((r) => <ProductCard key={r.slug} product={r} />)}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { EnquiryForm } from "@/components/site/EnquiryForm";
// import { ProductCard } from "@/components/site/ProductCard";
// import { getProduct, products } from "@/data/products";
// import { jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/products/$slug")({
//   loader: ({ params }) => {
//     const product = getProduct(params.slug);
//     if (!product) throw notFound();
//     return { slug: product.slug };
//   },
//   head: ({ loaderData }) => {
//     const p = loaderData ? getProduct(loaderData.slug) : undefined;
//     if (!p) return { meta: [{ title: "Product not found | GVS India" }, { name: "robots", content: "noindex" }] };
//     return {
//       meta: [
//         { title: `${p.name} | GVS India` },
//         { name: "description", content: `${p.summary} Request product information from Green Vision Solutions.` },
//         { property: "og:title", content: `${p.name} — Green Vision Solutions` },
//         { property: "og:description", content: p.summary },
//         { property: "og:type", content: "product" },
//       ],
//     };
//   },
//   notFoundComponent: () => (
//     <div className="container-x py-24 text-center">
//       <h1 className="text-3xl font-bold">Product not found</h1>
//       <Link to="/products" className="mt-6 inline-block font-semibold text-olive">Back to all products</Link>
//     </div>
//   ),
//   component: ProductPage,
// });

// function ProductPage() {
//   const { slug } = Route.useLoaderData();
//   const p = getProduct(slug)!;
//   const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

//   return (
//     <>
//       {/* TOP HEADER (Kept as it was) */}
//       <section className="bg-navy text-on-dark">
//         <div className="container-x py-12 lg:py-16">
//           <div className="max-w-4xl">
//             <Link to="/products" className="inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark">
//               <ArrowLeft className="size-4" /> All products
//             </Link>
//             <p className="eyebrow mt-6">Product {String(p.number).padStart(2, "0")} · {p.category}</p>
//             <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{p.name}</h1>
//             <p className="mt-5 text-lg text-on-dark-muted">{p.overview}</p>
//             <div className="mt-8">
//               <Button asChild variant="hero" size="lg" className="h-12">
//                 <a href="#enquiry">Request Product Information</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAIN CONTENT AREA (2 Columns) */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          
//           {/* LEFT SIDE: Product Image (Sticky so it stays while scrolling) */}
//           <div className="lg:sticky lg:top-28">
//             <SiteImage 
//               image={p.image} 
//               priority 
//               className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg border border-border" 
//             />
//           </div>

//           {/* RIGHT SIDE: Colored Details Card */}
//           <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
            
//             {/* Catalogue Name */}
//             <div className="mb-10">
//               <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
//                 Catalogue name
//               </h2>
//               <p className="text-lg font-semibold text-navy leading-snug">{p.officialName}</p>
//             </div>

//             {/* Purpose */}
//             <div className="mb-10">
//               <h2 className="text-xl font-bold text-navy mb-3 border-b border-slate-200 pb-2">
//                 Purpose and training application
//               </h2>
//               <p className="text-slate-600 leading-relaxed">{p.application}</p>
//             </div>

//             {/* Features */}
//             <div className="mb-10">
//               <h2 className="text-xl font-bold text-navy mb-3 border-b border-slate-200 pb-2">
//                 Features and specifications
//               </h2>
//               {p.features.length ? (
//                 <ul className="space-y-3 mt-4">
//                   {p.features.map((f) => (
//                     <li key={f} className="flex gap-3 text-slate-600">
//                       <CheckCircle2 className="mt-1 size-5 shrink-0 text-olive" /> 
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <div className="mt-4 flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-5 text-sm text-blue-900">
//                   <Info className="mt-0.5 size-5 shrink-0 text-blue-600" aria-hidden />
//                   <p className="font-medium">Contact our team for product specifications and availability.</p>
//                 </div>
//               )}
//             </div>

//             {/* Integration */}
//             <div>
//               <h2 className="text-xl font-bold text-navy mb-3 border-b border-slate-200 pb-2">
//                 Integration and support
//               </h2>
//               <p className="text-slate-600 leading-relaxed">
//                 GVS provides training, consultancy, technical support, annual maintenance contracts (AMC), repair, upgrade and system integration services for defence and simulation equipment.
//               </p>
//             </div>

//             {/* Note */}
//             {p.note && (
//               <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">
//                 <strong className="text-navy">Note: </strong>{p.note}
//               </div>
//             )}
            
//           </div>
//         </div>

//         {/* BOTTOM INFO CARDS (Development & Photographs) */}
//         <div className="container-x mt-12 grid gap-6 md:grid-cols-2">
//           <div className="rounded-2xl bg-mist p-8 border border-border">
//             <h2 className="text-lg font-bold text-navy">Development</h2>
//             <p className="mt-2 text-sm text-muted-foreground">{jointDevelopmentStatement}</p>
//             {p.delivered && (
//               <p className="mt-4 flex gap-2 text-sm font-medium text-navy">
//                 <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
//                 Listed among systems GVS has designed, developed and delivered.
//               </p>
//             )}
//           </div>
//           <div className="rounded-2xl bg-white border border-border p-8">
//             <h2 className="text-lg font-bold text-navy">Additional photographs</h2>
//             <p className="mt-2 text-sm text-muted-foreground">Approved product photographs and diagrams will be added here once released by GVS.</p>
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY FORM */}
//       <section id="enquiry" className="scroll-mt-24 bg-mist py-16 md:py-24">
//         <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
//           <div>
//             <p className="eyebrow">Product enquiry</p>
//             <h2 className="mt-3 text-3xl font-bold">Request information on the {p.name}</h2>
//             <p className="mt-4 text-muted-foreground">Share your requirement and the GVS team will get back to you.</p>
//           </div>
//           <div className="rounded-2xl bg-card p-6 shadow-card md:p-8">
//             <EnquiryForm defaultProduct={p.name} sourcePage={`/products/${p.slug}`} />
//           </div>
//         </div>
//       </section>

//       {/* RELATED PRODUCTS */}
//       {related.length > 0 && (
//         <section className="py-16 md:py-24">
//           <div className="container-x">
//             <h2 className="text-2xl font-bold">Related products</h2>
//             <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {related.map((r) => <ProductCard key={r.slug} product={r} />)}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }
 
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/site/SiteImage";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Product not found | GVS India" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} | GVS India` },
        { name: "description", content: `${p.summary} Request product information from Green Vision Solutions.` },
        { property: "og:title", content: `${p.name} — Green Vision Solutions` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block font-semibold text-olive">Back to all products</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug)!;
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy text-on-dark">
        <div className="container-x py-12 lg:py-16">
          <div className="max-w-4xl">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark">
              <ArrowLeft className="size-4" /> All products
            </Link>
            <p className="eyebrow mt-6">Product {String(p.number).padStart(2, "0")} · {p.category}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl text-[#FFFFFF]">{p.name}</h1>
            <p className="mt-5 text-lg text-on-dark-muted">{p.overview}</p>
            <div className="mt-8">
              <Button asChild variant="hero" size="lg" className="h-12">
                <a href="#enquiry">Request Product Information</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          
          {/* IMAGE SECTION: Now directly uses the p.image data */}
          <div className="lg:sticky lg:top-28">
            <SiteImage 
              image={p.image} 
              priority 
              className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg border border-border" 
            />
          </div>

          <div className="bg-[#0D1D2D] border border-border rounded-3xl p-8 md:p-10 shadow-xl">
            
            <div className="mb-10">
              <h2 className="text-xs font-bold tracking-widest text-[#A8B879] uppercase mb-2">
                Catalogue name
              </h2>
              <p className="text-lg font-semibold text-[#FFFFFF] leading-snug">{p.officialName}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
                Purpose and training application
              </h2>
              <p className="text-[#CBD5E1] leading-relaxed">{p.application}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
                Features and specifications
              </h2>
              {p.features.length ? (
                <ul className="space-y-3 mt-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[#CBD5E1]">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#A8B879]" /> 
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4 flex gap-3 rounded-xl bg-[#152435] border border-[#334155] p-5 text-sm">
                  <Info className="mt-0.5 size-5 shrink-0 text-[#A8B879]" aria-hidden />
                  <p className="font-medium text-[#CBD5E1]">Contact our team for product specifications and availability.</p>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
                Integration and support
              </h2>
              <p className="text-[#CBD5E1] leading-relaxed">
                GVS provides training, consultancy, technical support, annual maintenance contracts (AMC), repair, upgrade and system integration services for defence and simulation equipment.
              </p>
            </div>

            {p.note && (
              <div className="mt-8 rounded-xl border border-dashed border-[#334155] p-5 text-sm text-[#CBD5E1]">
                <strong className="text-[#F1F5F9]">Note: </strong>{p.note}
              </div>
            )}
            
          </div>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-mist py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Product enquiry</p>
            <h2 className="mt-3 text-3xl font-bold">Request information on the {p.name}</h2>
            <p className="mt-4 text-muted-foreground">Share your requirement and the GVS team will get back to you.</p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-card md:p-8">
            <EnquiryForm defaultProduct={p.name} sourcePage={`/products/${p.slug}`} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="text-2xl font-bold">Related products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <ProductCard key={r.slug} product={r} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}