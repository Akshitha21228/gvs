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
 
// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { EnquiryForm } from "@/components/site/EnquiryForm";
// import { ProductCard } from "@/components/site/ProductCard";
// import { getProduct, products } from "@/data/products";

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
//         <div className="container-x py-12 lg:py-16">
//           <div className="max-w-4xl">
//             <Link to="/products" className="inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark">
//               <ArrowLeft className="size-4" /> All products
//             </Link>
//             <p className="eyebrow mt-6">Product {String(p.number).padStart(2, "0")} · {p.category}</p>
//             <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl text-[#FFFFFF]">{p.name}</h1>
//             <p className="mt-5 text-lg text-on-dark-muted">{p.overview}</p>
//             <div className="mt-8">
//               <Button asChild variant="hero" size="lg" className="h-12">
//                 <a href="#enquiry">Request Product Information</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-background">
//         <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          
//           {/* IMAGE SECTION: Now directly uses the p.image data */}
//           <div className="lg:sticky lg:top-28">
//             <SiteImage 
//               image={p.image} 
//               priority 
//               className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg border border-border" 
//             />
//           </div>

//           <div className="bg-[#0D1D2D] border border-border rounded-3xl p-8 md:p-10 shadow-xl">
            
//             <div className="mb-10">
//               <h2 className="text-xs font-bold tracking-widest text-[#A8B879] uppercase mb-2">
//                 Catalogue name
//               </h2>
//               <p className="text-lg font-semibold text-[#FFFFFF] leading-snug">{p.officialName}</p>
//             </div>

//             <div className="mb-10">
//               <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
//                 Purpose and training application
//               </h2>
//               <p className="text-[#CBD5E1] leading-relaxed">{p.application}</p>
//             </div>

//             <div className="mb-10">
//               <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
//                 Features and specifications
//               </h2>
//               {p.features.length ? (
//                 <ul className="space-y-3 mt-4">
//                   {p.features.map((f) => (
//                     <li key={f} className="flex gap-3 text-[#CBD5E1]">
//                       <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#A8B879]" /> 
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <div className="mt-4 flex gap-3 rounded-xl bg-[#152435] border border-[#334155] p-5 text-sm">
//                   <Info className="mt-0.5 size-5 shrink-0 text-[#A8B879]" aria-hidden />
//                   <p className="font-medium text-[#CBD5E1]">Contact our team for product specifications and availability.</p>
//                 </div>
//               )}
//             </div>

//             <div>
//               <h2 className="text-xl font-bold text-[#F1F5F9] mb-3 border-b border-[#334155] pb-2">
//                 Integration and support
//               </h2>
//               <p className="text-[#CBD5E1] leading-relaxed">
//                 GVS provides training, consultancy, technical support, annual maintenance contracts (AMC), repair, upgrade and system integration services for defence and simulation equipment.
//               </p>
//             </div>

//             {p.note && (
//               <div className="mt-8 rounded-xl border border-dashed border-[#334155] p-5 text-sm text-[#CBD5E1]">
//                 <strong className="text-[#F1F5F9]">Note: </strong>{p.note}
//               </div>
//             )}
            
//           </div>
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
// import { CheckCircle2, ChevronRight } from "lucide-react";
// import { getProduct, products } from "@/data/products";
// import { SiteImage } from "@/components/site/SiteImage";

// export const Route = createFileRoute("/products/$slug")({
//   loader: ({ params }) => {
//     const product = getProduct(params.slug);
//     if (!product) throw notFound();
//     return { slug: product.slug };
//   },
//   head: ({ loaderData }) => {
//     const p = loaderData ? getProduct(loaderData.slug) : undefined;
//     if (!p) return { meta: [{ title: "Product not found | GVS India" }] };
//     return {
//       meta: [
//         { title: `${p.name} | GVS India` },
//         { name: "description", content: p.summary },
//       ],
//     };
//   },
//   notFoundComponent: () => (
//     <div className="container-x py-24 text-center">
//       <h1 className="text-3xl font-bold text-[#0B1F35]">Product not found</h1>
//       <Link to="/products" className="mt-6 inline-block font-semibold text-[#1676B9]">Back to all products</Link>
//     </div>
//   ),
//   component: ProductDetailPage,
// });

// function ProductDetailPage() {
//   const { slug } = Route.useLoaderData();
//   const product = getProduct(slug)!;

//   return (
//     <div className="bg-[#F5F7FA] min-h-screen pb-20">
//       {/* Breadcrumb */}
//       <div className="bg-white border-b border-slate-200">
//         <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-slate-500">
//           <Link to="/" className="hover:text-[#1676B9]">Home</Link>
//           <ChevronRight className="mx-2 size-4" />
//           <Link to="/products" className="hover:text-[#1676B9]">Products</Link>
//           <ChevronRight className="mx-2 size-4" />
//           <span className="text-[#0B1F35] font-medium truncate">{product.name}</span>
//         </div>
//       </div>

//       {/* Product Hero */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div className="order-last lg:order-first relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100 border border-slate-200">
//             <SiteImage image={product.image as any} className="absolute inset-0 w-full h-full object-cover" />
//           </div>
//           <div>
//             <p className="text-xs font-bold tracking-widest text-[#1676B9] uppercase mb-3">{product.category}</p>
//             <h1 className="text-3xl md:text-5xl font-bold text-[#0B1F35] leading-tight mb-6">{product.name}</h1>
//             <p className="text-lg text-[#526174] leading-relaxed mb-8">{product.summary}</p>
//             <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#0B1F35] text-white font-semibold hover:bg-[#1676B9] transition-colors">
//               Enquire Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-16 md:py-24">
//         <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-3">
          
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-12">
//             <div>
//               <h2 className="text-2xl font-bold text-[#0B1F35] mb-4">Product Overview</h2>
//               <p className="text-[#526174] leading-relaxed text-[17px]">{product.overview}</p>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-[#0B1F35] mb-4">Training Applications</h2>
//               <p className="text-[#526174] leading-relaxed text-[17px]">{product.application}</p>
//             </div>

//             {product.note && (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
//                 <strong>Note:</strong> {product.note}
//               </div>
//             )}
//           </div>

//           {/* Sidebar / CTA */}
//           <div>
//             <div className="bg-[#0B1F35] rounded-2xl p-8 text-white sticky top-28">
//               <h3 className="text-xl font-bold mb-3">Interested in This Training Solution?</h3>
//               <p className="text-slate-300 text-sm mb-6">
//                 Connect with our team to discuss product capabilities, integration requirements and application-specific training solutions.
//               </p>
//               <Link to="/contact" className="block w-full text-center py-3 rounded-md bg-[#1676B9] hover:bg-blue-600 font-semibold transition-colors">
//                 Enquire About This Product
//               </Link>
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// // }
// import { createFileRoute, Link, notFound } from "@tanstack/react-router";
// import { ChevronRight, CheckCircle2, ArrowRight, Activity, Shield, HeartPulse, Target, Settings, Layers } from "lucide-react";
// import { getProduct, products } from "@/data/products";
// import { SiteImage } from "@/components/site/SiteImage";

// export const Route = createFileRoute("/products/$slug")({
//   loader: ({ params }) => {
//     const product = getProduct(params.slug);
//     if (!product) throw notFound();
//     return { slug: product.slug };
//   },
//   head: ({ loaderData }) => {
//     const p = loaderData ? getProduct(loaderData.slug) : undefined;
//     if (!p) return { meta: [{ title: "Product not found | GVS India" }] };
//     return {
//       meta: [
//         { title: `${p.name} | GVS India` },
//         { name: "description", content: p.summary },
//       ],
//     };
//   },
//   notFoundComponent: () => (
//     <div className="container-x py-24 text-center">
//       <h1 className="text-3xl font-bold text-[#102B4E]">Product not found</h1>
//       <Link to="/products" className="mt-6 inline-block font-semibold text-[#1679B4]">Back to all products</Link>
//     </div>
//   ),
//   component: ProductDetailPage,
// });

// function ProductDetailPage() {
//   const { slug } = Route.useLoaderData();
//   const product = getProduct(slug)!;
  
//   // Find related products (same category, excluding current)
//   const relatedProducts = products
//     .filter((p) => p.category === product.category && p.slug !== product.slug)
//     .slice(0, 3);

//   // Helper to parse features into title + description
//   const parseFeature = (feature: string) => {
//     const colonIndex = feature.indexOf(':');
//     if (colonIndex !== -1) {
//       return {
//         title: feature.substring(0, colonIndex).trim(),
//         desc: feature.substring(colonIndex + 1).trim()
//       };
//     }
//     // If no colon, use first few words as title
//     const words = feature.split(' ');
//     if (words.length > 5) {
//        return {
//         title: words.slice(0, 4).join(' ') + "...",
//         desc: feature
//       };
//     }
//     return { title: feature, desc: "" };
//   };

//   return (
//     <div className="bg-[#F3F6FA] min-h-screen pb-20 font-sans">
//       {/* 1. BREADCRUMB */}
//       <div className="bg-white border-b border-[#E1E8F0]">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-[#52647A]">
//           <Link to="/" className="hover:text-[#1679B4]">Home</Link>
//           <ChevronRight className="mx-2 size-4" />
//           <Link to="/products" className="hover:text-[#1679B4]">Products</Link>
//           <ChevronRight className="mx-2 size-4" />
//           <span className="text-[#102B4E] font-medium truncate">{product.name}</span>
//         </div>
//       </div>

//       {/* 2. PRODUCT HERO */}
//       <section className="bg-white py-16 md:py-24 border-b border-[#E1E8F0]">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div className="order-last lg:order-first relative aspect-[4/3] rounded-[16px] overflow-hidden shadow-sm bg-[#F3F6FA] border border-[#E1E8F0] p-2">
//             <SiteImage image={product.image as any} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
//           </div>
//           <div>
//             <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">{product.category}</p>
//             <h1 className="text-3xl md:text-5xl font-bold text-[#102B4E] leading-tight mb-6">{product.name}</h1>
//             <p className="text-lg text-[#52647A] leading-relaxed mb-8">{product.summary}</p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-[12px] bg-[#102B4E] text-white font-semibold hover:bg-[#1679B4] transition-colors">
//                 Enquire About This System
//               </Link>
//               {product.features.length > 0 && (
//                 <a href="#capabilities" className="inline-flex items-center justify-center h-12 px-8 rounded-[12px] bg-white border border-[#E1E8F0] text-[#102B4E] font-semibold hover:bg-[#F3F6FA] transition-colors">
//                   Explore Capabilities
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. SYSTEM OVERVIEW & CAPABILITIES */}
//       <section className="py-16 md:py-24">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* System Overview */}
//           <div className="mb-16">
//             <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">System Overview</p>
//             <h2 className="text-3xl font-bold text-[#102B4E] mb-6">Product Description</h2>
//             <p className="text-[#52647A] leading-relaxed text-[17px] max-w-4xl">
//               {product.overview}
//             </p>
//           </div>

//           {/* Key Capabilities Grid */}
//           {product.features.length > 0 && (
//             <div id="capabilities" className="scroll-mt-24 mb-16">
//               <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">Key Capabilities</p>
//               <h2 className="text-3xl font-bold text-[#102B4E] mb-8">System Features</h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {product.features.map((feature, idx) => {
//                   const { title, desc } = parseFeature(feature);
//                   return (
//                     <div key={idx} className="bg-white rounded-[16px] p-6 border border-[#E1E8F0] shadow-sm flex flex-col">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="flex size-10 items-center justify-center rounded-full bg-[#F3F6FA] text-[#1679B4]">
//                           <CheckCircle2 className="size-5" />
//                         </div>
//                         <h3 className="font-bold text-[#102B4E] text-lg leading-tight">{title}</h3>
//                       </div>
//                       {desc && (
//                         <p className="text-[#52647A] text-[15px] leading-relaxed flex-grow">{desc}</p>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Training Applications */}
//           <div className="bg-white rounded-[16px] p-8 border border-[#E1E8F0] shadow-sm mb-16">
//             <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">Training Applications</p>
//             <h2 className="text-2xl font-bold text-[#102B4E] mb-4">Intended Use</h2>
//             <p className="text-[#52647A] leading-relaxed text-[17px]">
//               {product.application}
//             </p>
//           </div>

//           {/* Note / Disclaimer */}
//           {product.note && (
//             <div className="bg-yellow-50 border border-yellow-200 rounded-[12px] p-5 text-sm text-yellow-800 mb-16 flex gap-3">
//               <Shield className="size-5 shrink-0" />
//               <p><strong>Note:</strong> {product.note}</p>
//             </div>
//           )}

//         </div>
//       </section>

//       {/* 4. PREMIUM ENQUIRY CTA */}
//       <section className="bg-[#102B4E] py-16 text-white text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Discuss Your Training Requirements</h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to explore system configuration, integration and project requirements.
//           </p>
//           <Link to="/contact" className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1679B4] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg">
//             Contact GVS
//           </Link>
//         </div>
//       </section>

//       {/* 5. RELATED PRODUCTS */}
//       {relatedProducts.length > 0 && (
//         <section className="py-16 bg-white border-t border-[#E1E8F0]">
//           <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold text-[#102B4E] mb-8">Related Systems</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedProducts.map((rp) => (
//                 <Link 
//                   key={rp.slug} 
//                   to="/products/$slug" 
//                   params={{ slug: rp.slug }}
//                   className="group flex flex-col bg-[#F3F6FA] rounded-[16px] overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
//                 >
//                   <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-2">
//                     <SiteImage image={rp.image as any} className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
//                   </div>
//                   <div className="p-5 flex flex-col flex-grow bg-white border-t border-[#E1E8F0]">
//                     <p className="text-[10px] font-bold text-[#1679B4] uppercase mb-2">{rp.category}</p>
//                     <h3 className="font-bold text-[#102B4E] leading-tight mb-3 flex-grow">{rp.name}</h3>
//                     <span className="text-sm font-semibold text-[#1679B4] flex items-center gap-1 group-hover:gap-2 transition-all">
//                       Explore System <ArrowRight className="size-4" />
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { SiteImage } from "@/components/site/SiteImage";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Product not found | GVS India" }] };
    return {
      meta: [
        { title: `${p.name} | GVS India` },
        { name: "description", content: p.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-[#F3F6FA] min-h-screen flex items-center justify-center py-24 px-4">
      <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-slate-200 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-[#102B4E] mb-4">Product not found</h1>
        <p className="text-[#52647A] mb-8">The product you are looking for does not exist or has been moved.</p>
        <Link to="/products" className="inline-block px-8 py-3 rounded-md bg-[#102B4E] text-white font-semibold hover:bg-[#1679B4] transition-colors">
          Back to all products
        </Link>
      </div>
    </div>
  ),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug)!;
  
  // Find related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  // Helper to parse features into title + description
  const parseFeature = (feature: string) => {
    const colonIndex = feature.indexOf(':');
    if (colonIndex !== -1) {
      return {
        title: feature.substring(0, colonIndex).trim(),
        desc: feature.substring(colonIndex + 1).trim()
      };
    }
    const words = feature.split(' ');
    if (words.length > 5) {
       return {
        title: words.slice(0, 4).join(' ') + "...",
        desc: feature
      };
    }
    return { title: feature, desc: "" };
  };

  return (
    <div className="bg-[#F3F6FA] min-h-screen pb-20 font-sans">
      {/* 1. BREADCRUMB (Clean White Background) */}
      <div className="bg-white border-b border-[#E3E9F0]">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-[#52647A]">
          <Link to="/" className="hover:text-[#1679B4]">Home</Link>
          <ChevronRight className="mx-2 size-4" />
          <Link to="/products" className="hover:text-[#1679B4]">Products</Link>
          <ChevronRight className="mx-2 size-4" />
          <span className="text-[#102B4E] font-medium truncate">{product.name}</span>
        </div>
      </div>

      {/* 2. MAIN PRODUCT CONTENT WITH DEEP NAVY GRID BACKGROUND */}
      <section 
        className="py-12 md:py-16 relative"
        style={{
          backgroundColor: "#0B1C31",
          backgroundImage: `
            linear-gradient(rgba(100, 145, 190, 0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 145, 190, 0.10) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(22, 118, 185, 0.05) 0%, transparent 70%)
          `,
          backgroundSize: "44px 44px, 44px 44px, 100% 100%"
        }}
      >
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-8 relative z-10">
          
          {/* ROW 1: Two Cards (Image Left, Details Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Left Card: Image */}
            <div className="bg-white rounded-[16px] border border-[#E3E9F0] shadow-xl p-3 md:p-4 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F3F6FA]">
                <SiteImage priority
                  image={product.image as any} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Right Card: Details */}
            <div className="bg-white rounded-[16px] border border-[#E3E9F0] shadow-xl p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-4">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#102B4E] leading-tight mb-6">
                {product.name}
              </h1>
              <div className="w-12 h-1 bg-[#1679B4] mb-6" />
              <p className="text-[17px] text-[#52647A] leading-relaxed">
                {product.summary}
              </p>
            </div>

          </div>

          {/* ROW 2: Full-Width Features Card */}
          {product.features.length > 0 && (
            <div className="bg-white rounded-[16px] border border-[#E3E9F0] shadow-xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#102B4E] mb-8 pb-4 border-b border-[#E3E9F0]">
                Features & Capabilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {product.features.map((feature, idx) => {
                  const { title, desc } = parseFeature(feature);
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="size-5 text-[#1679B4]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#102B4E] text-[16px] leading-snug mb-1.5">
                          {title}
                        </h3>
                        {desc && (
                          <p className="text-[15px] text-[#52647A] leading-relaxed">
                            {desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Additional Information (Overview & Applications) */}
          {(product.overview || product.application) && (
             <div className="bg-white rounded-[16px] border border-[#E3E9F0] shadow-xl p-8 md:p-10">
                {product.overview && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#102B4E] mb-4">System Overview</h2>
                    <p className="text-[#52647A] leading-relaxed text-[16px]">{product.overview}</p>
                  </div>
                )}
                {product.application && (
                  <div>
                    <h2 className="text-xl font-bold text-[#102B4E] mb-4 border-t border-[#E3E9F0] pt-6">Training Applications</h2>
                    <p className="text-[#52647A] leading-relaxed text-[16px]">{product.application}</p>
                  </div>
                )}
             </div>
          )}

          {/* Note */}
          {product.note && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-[16px] p-6 text-sm text-yellow-800 flex gap-4 shadow-xl">
              <Shield className="size-5 shrink-0" />
              <p><strong>Note:</strong> {product.note}</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. RELATED PRODUCTS (Light Background) */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F3F6FA] border-t border-[#E3E9F0]">
          <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#102B4E] mb-8">Related Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link 
                  key={rp.slug} 
                  to="/products/$slug" 
                  params={{ slug: rp.slug }}
                  className="group flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#E3E9F0] shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-2">
                    <SiteImage image={rp.image as any} className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow bg-white border-t border-[#E3E9F0]">
                    <p className="text-[10px] font-bold text-[#1679B4] uppercase mb-2">{rp.category}</p>
                    <h3 className="font-bold text-[#102B4E] leading-tight mb-3 flex-grow">{rp.name}</h3>
                    <span className="text-sm font-semibold text-[#1679B4] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore System <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PREMIUM ENQUIRY CTA */}
      <section className="bg-[#102B4E] py-16 text-white text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discuss Your Training Requirements</h2>
          <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
            Connect with GVS to explore system configuration, integration and project requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1679B4] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg">
            Contact GVS
          </Link>
        </div>
      </section>
    </div>
  );
}