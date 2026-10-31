// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Cpu, Layers, Wrench, PencilRuler } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { ProductCard } from "@/components/site/ProductCard";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { capabilities } from "@/data/solutions";
// import { featuredSlugs, getProduct, products } from "@/data/products";
// import { deliveredSystems, jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GVS India â€” Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
//       { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
//     ],
//   }),
//   component: Home,
// });

// const why = [
//   { icon: PencilRuler, title: "Design and development", body: "In-house design and development of training simulators, VR/AR training systems and simulation software." },
//   { icon: Layers, title: "Customised simulation solutions", body: "Simulators, mockups, target systems and accessories configured to each organisation's training requirement." },
//   { icon: Cpu, title: "Manufacture and integration", body: "Manufacture and integration of defence mockups, laser-based firing systems and battlefield simulation systems." },
//   { icon: Wrench, title: "Technical support", body: "Training, consultancy, AMC, repair, upgrade and system integration services for simulation equipment." },
// ];

// function Home() {
//   const featured = featuredSlugs.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative isolate overflow-hidden bg-navy text-on-dark">
//         <SiteImage image={images.hero} priority labelPosition="bottom" className="absolute inset-0 -z-10" />
//         <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
//         <div className="container-x flex min-h-[calc(100svh-72px)] flex-col justify-center py-24">
//           <p className="eyebrow fade-up">Green Vision Solutions Â· Hyderabad, India</p>
//           <h1 className="fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
//             Engineering the Future of Defence Training
//           </h1>
//           <p className="fade-up mt-6 max-w-2xl text-lg text-on-dark-muted md:text-xl">
//             Advanced simulation, immersive VR/AR training, and integrated technology solutions for realistic, effective, and technology-driven training.
//           </p>
//           <div className="fade-up mt-10 flex flex-col gap-3 sm:flex-row">
//             <Button asChild variant="hero" size="lg" className="h-12 px-7">
//               <Link to="/products">Explore Our Products <ArrowRight /></Link>
//             </Button>
//             <Button asChild variant="heroOutline" size="lg" className="h-12 px-7">
//               <Link to="/contact">Request an Enquiry</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Intro */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
//           <div>
//             <p className="eyebrow">Who we are</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">Defence training simulators, built and supported in India</h2>
//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//               Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies â€” together with system development, integration, maintenance and technical support.
//             </p>
//             <p className="mt-4 leading-relaxed text-muted-foreground">{jointDevelopmentStatement}</p>
//             <Button asChild variant="link" className="mt-4 px-0 text-base font-semibold">
//               <Link to="/about">More about GVS <ArrowRight /></Link>
//             </Button>
//           </div>
//           <div className="rounded-2xl bg-mist p-8">
//             <p className="text-sm font-semibold">Systems designed, developed and delivered by GVS</p>
//             <ul className="mt-5 grid gap-3 sm:grid-cols-2">
//               {deliveredSystems.map((s) => (
//                 <li key={s} className="flex gap-3 text-sm"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-olive" aria-hidden />{s}</li>
//               ))}
//             </ul>
//             <p className="mt-6 border-t pt-4 font-display text-3xl font-bold">{products.length}<span className="ml-2 text-sm font-medium text-muted-foreground">products in the GVS catalogue</span></p>
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="bg-navy py-20 text-on-dark md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Core capabilities</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Simulation across the training spectrum</h2>
//             <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-muted hover:text-on-dark">All solutions <ArrowRight className="size-4" /></Link>
//           </div>
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {capabilities.map((c) => (
//               <Link
//                 key={c.title}
//                 to="/solutions"
//                 hash={c.solutionId}
//                 className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
//               >
//                 <SiteImage image={c.image} className="absolute inset-0" imgClassName="transition-transform duration-700 group-hover:scale-105" />
//                 <div className="absolute inset-0 bg-card-overlay" aria-hidden />
//                 <div className="absolute inset-x-0 bottom-0 p-5">
//                   <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
//                   <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-on-dark-muted group-hover:text-on-dark">Learn more <ArrowRight className="size-3" /></span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured products */}
//       <section className="bg-mist py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Featured products</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Selected from our simulator portfolio</h2>
//             <Button asChild variant="navy"><Link to="/products">View all {products.length} products</Link></Button>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
//           </div>
//         </div>
//       </section>

//       {/* Why GVS */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
//           <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
//           <div>
//             <p className="eyebrow">Why GVS</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">From design to long-term support</h2>
//             <div className="mt-10 grid gap-8 sm:grid-cols-2">
//               {why.map((w) => (
//                 <div key={w.title}>
//                   <w.icon className="size-6 text-olive" aria-hidden />
//                   <h3 className="mt-3 font-semibold">{w.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects teaser */}
//       <section className="bg-charcoal py-20 text-on-dark md:py-24">
//         <div className="container-x grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
//           <div>
//             <p className="eyebrow">Projects and capabilities</p>
//             <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Simulators delivered for defence training</h2>
//             <p className="mt-4 max-w-2xl text-on-dark-muted">See the systems GVS has designed, developed and delivered. Approved project photographs will be added to the gallery as they are released.</p>
//           </div>
//           <Button asChild variant="heroOutline" size="lg"><Link to="/projects">View projects & capabilities</Link></Button>
//         </div>
//       </section>

//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Cpu, Layers, Wrench, PencilRuler } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { ProductCard } from "@/components/site/ProductCard";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { capabilities } from "@/data/solutions";
// import { featuredSlugs, getProduct, products } from "@/data/products";
// import { deliveredSystems, jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GVS India â€” Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
//       { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
//     ],
//   }),
//   component: Home,
// });

// const why = [
//   { icon: PencilRuler, title: "Design and development", body: "In-house design and development of training simulators, VR/AR training systems and simulation software." },
//   { icon: Layers, title: "Customised simulation solutions", body: "Simulators, mockups, target systems and accessories configured to each organisation's training requirement." },
//   { icon: Cpu, title: "Manufacture and integration", body: "Manufacture and integration of defence mockups, laser-based firing systems and battlefield simulation systems." },
//   { icon: Wrench, title: "Technical support", body: "Training, consultancy, AMC, repair, upgrade and system integration services for simulation equipment." },
// ];

// function Home() {
//   const featured = featuredSlugs.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative isolate overflow-hidden bg-navy text-on-dark">
//         <SiteImage image={images.hero} priority labelPosition="bottom" className="absolute inset-0 -z-10" />
//         <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
//         <div className="container-x flex min-h-[calc(100svh-72px)] flex-col justify-center py-24">
//           <p className="eyebrow fade-up">Green Vision Solutions Â· Hyderabad, India</p>
//           <h1 className="fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
//             Engineering the Future of Defence Training
//           </h1>
//           <p className="fade-up mt-6 max-w-2xl text-lg text-on-dark-muted md:text-xl">
//             Advanced simulation, immersive VR/AR training, and integrated technology solutions for realistic, effective, and technology-driven training.
//           </p>
//           <div className="fade-up mt-10 flex flex-col gap-3 sm:flex-row">
//             <Button asChild variant="hero" size="lg" className="h-12 px-7">
//               <Link to="/products">Explore Our Products <ArrowRight /></Link>
//             </Button>
//             <Button asChild variant="heroOutline" size="lg" className="h-12 px-7">
//               <Link to="/contact">Request an Enquiry</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Intro */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
//           <div>
//             <p className="eyebrow">Who we are</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">Defence training simulators, built and supported in India</h2>
//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//               Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies â€” together with system development, integration, maintenance and technical support.
//             </p>
//             <p className="mt-4 leading-relaxed text-muted-foreground">{jointDevelopmentStatement}</p>
//             <Button asChild variant="link" className="mt-4 px-0 text-base font-semibold">
//               <Link to="/about">More about GVS <ArrowRight /></Link>
//             </Button>
//           </div>
//           <div className="rounded-2xl bg-mist p-8">
//             <p className="text-sm font-semibold">Systems designed, developed and delivered by GVS</p>
//             <ul className="mt-5 grid gap-3 sm:grid-cols-2">
//               {deliveredSystems.map((s) => (
//                 <li key={s} className="flex gap-3 text-sm"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-olive" aria-hidden />{s}</li>
//               ))}
//             </ul>
//             <p className="mt-6 border-t pt-4 font-display text-3xl font-bold">{products.length}<span className="ml-2 text-sm font-medium text-muted-foreground">products in the GVS catalogue</span></p>
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="bg-navy py-20 text-on-dark md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Core capabilities</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Simulation across the training spectrum</h2>
//             <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-muted hover:text-on-dark">All solutions <ArrowRight className="size-4" /></Link>
//           </div>
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {capabilities.map((c) => (
//               <Link
//                 key={c.title}
//                 to="/solutions"
//                 hash={c.solutionId}
//                 className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
//               >
//                 <SiteImage image={c.image} className="absolute inset-0" imgClassName="transition-transform duration-700 group-hover:scale-105" />
//                 <div className="absolute inset-0 bg-card-overlay" aria-hidden />
//                 <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
//                   <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                  
//                   {/* THE DESCRIPTION IS ADDED HERE */}
//                   {c.description && (
//                     <p className="mt-2 text-sm text-[#CBD5E1] line-clamp-2">
//                       {c.description}
//                     </p>
//                   )}

//                   <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">Learn more <ArrowRight className="size-3" /></span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured products */}
//       <section className="bg-mist py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Featured products</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Selected from our simulator portfolio</h2>
//             <Button asChild variant="navy"><Link to="/products">View all {products.length} products</Link></Button>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
//           </div>
//         </div>
//       </section>

//       {/* Why GVS */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
//           <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
//           <div>
//             <p className="eyebrow">Why GVS</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">From design to long-term support</h2>
//             <div className="mt-10 grid gap-8 sm:grid-cols-2">
//               {why.map((w) => (
//                 <div key={w.title}>
//                   <w.icon className="size-6 text-olive" aria-hidden />
//                   <h3 className="mt-3 font-semibold">{w.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects teaser */}
//       <section className="bg-charcoal py-20 text-on-dark md:py-24">
//         <div className="container-x grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
//           <div>
//             <p className="eyebrow">Projects and capabilities</p>
//             <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Simulators delivered for defence training</h2>
//             <p className="mt-4 max-w-2xl text-on-dark-muted">See the systems GVS has designed, developed and delivered. Approved project photographs will be added to the gallery as they are released.</p>
//           </div>
//           <Button asChild variant="heroOutline" size="lg"><Link to="/projects">View projects & capabilities</Link></Button>
//         </div>
//       </section>

//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Cpu, Layers, Wrench, PencilRuler } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { ProductCard } from "@/components/site/ProductCard";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { capabilities } from "@/data/solutions";
// import { featuredSlugs, getProduct, products } from "@/data/products";
// import { deliveredSystems, jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GVS India â€” Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
//       { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
//     ],
//   }),
//   component: Home,
// });

// const why = [
//   { icon: PencilRuler, title: "Design and development", body: "In-house design and development of training simulators, VR/AR training systems and simulation software." },
//   { icon: Layers, title: "Customised simulation solutions", body: "Simulators, mockups, target systems and accessories configured to each organisation's training requirement." },
//   { icon: Cpu, title: "Manufacture and integration", body: "Manufacture and integration of defence mockups, laser-based firing systems and battlefield simulation systems." },
//   { icon: Wrench, title: "Technical support", body: "Training, consultancy, AMC, repair, upgrade and system integration services for simulation equipment." },
// ];

// function Home() {
//   const featured = featuredSlugs.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
  
//   return (
//     <>
//       {/* 1. REFINED PREMIUM HERO SECTION */}
//       <section className="relative isolate min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-navy">
        
//         {/* Background Image & Overlay */}
//         <div className="absolute inset-0 -z-10">
//           <img 
//             src="/hero.png" 
//             alt="Advanced defence simulation laboratory" 
//             className="w-full h-full object-cover object-[70%_center] lg:object-center"
//           />
//           {/* Left-to-right gradient for text readability */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0D1D2D] via-[#0D1D2D]/80 to-transparent lg:w-3/4" />
//           {/* Mobile overlay boost */}
//           <div className="absolute inset-0 bg-[#0D1D2D]/40 lg:hidden" />
//         </div>

//         {/* Hero Content */}
//         <div className="container-x max-w-[1280px] mx-auto w-full py-20 lg:py-0 relative z-10">
//           <div className="max-w-[620px] animate-fade-up">
            
//             <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-6">
//               Advanced Defence Simulation & Engineering Solutions
//             </p>
            
//             <h1 className="text-4xl md:text-[48px] lg:text-[54px] font-bold text-white leading-[1.1] mb-6">
//               Engineering Realistic Training. <br className="hidden md:block" />
//               <span className="text-[#8CCBFF]">Enabling Operational Readiness.</span>
//             </h1>
            
//             <p className="text-[17px] text-slate-300 leading-[1.6] mb-10">
//               GVS designs, develops and integrates specialized defence training simulators, immersive VR systems, embedded electronics and mission-oriented training solutions. We combine software, hardware and engineering expertise to support realistic, repeatable and application-specific training.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button asChild size="lg" className="h-12 px-8 bg-[#155DFC] hover:bg-blue-600 text-white transition-colors">
//                 <Link to="/products">Explore Our Products <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white text-white hover:bg-white hover:text-navy transition-colors bg-transparent">
//                 <Link to="/contact">Discuss a Project <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. REFINED "ABOUT" SECTION */}
//       <section className="bg-[#F5F7FA] py-[90px] lg:py-[100px]">
//         <div className="container-x max-w-[1280px] mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          
//           <div className="flex flex-col justify-center animate-fade-up">
//             <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
//               About Green Vision Solutions
//             </p>
            
//             <h2 className="text-[36px] md:text-[42px] font-bold text-[#10243A] leading-[1.15] mb-6 max-w-[90%]">
//               Technology That Supports Better Training
//             </h2>
            
//             <div className="space-y-6 text-[17px] leading-[1.7] text-[#526174]">
//               <p>
//                 Green Vision Solutions develops technology-led systems for defence training and simulation. Our work brings together physical mockups, embedded control systems, simulation applications, visual environments and integrated hardware to create solutions aligned with defined training requirements.
//               </p>
//               <p>
//                 From product development and system integration to testing, installation, upgrades and technical support, GVS supports the solution lifecycle with a focus on functionality, reliability and customer requirements.
//               </p>
//             </div>

//             <div className="mt-8">
//               <Link 
//                 to="/about" 
//                 className="group inline-flex items-center text-blue-600 font-semibold text-[17px] hover:text-blue-800 transition-colors"
//               >
//                 Discover GVS 
//                 <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
//               </Link>
//             </div>
//           </div>

//           <div className="relative animate-fade-in w-full aspect-[5/4] rounded-xl overflow-hidden shadow-xl bg-slate-100">
//             <img 
//               src="/engineering-lab.png" 
//               alt="Defence simulation laboratory with advanced screens and equipment" 
//               className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
//             />
//           </div>
//         </div>
//       </section>

//       {/* 3. INTRO SECTION (Existing) */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
//           <div>
//             <p className="eyebrow">Who we are</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">Defence training simulators, built and supported in India</h2>
//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//               Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies â€” together with system development, integration, maintenance and technical support.
//             </p>
//             <p className="mt-4 leading-relaxed text-muted-foreground">{jointDevelopmentStatement}</p>
//             <Button asChild variant="link" className="mt-4 px-0 text-base font-semibold">
//               <Link to="/about">More about GVS <ArrowRight /></Link>
//             </Button>
//           </div>
//           <div className="rounded-2xl bg-mist p-8">
//             <p className="text-sm font-semibold">Systems designed, developed and delivered by GVS</p>
//             <ul className="mt-5 grid gap-3 sm:grid-cols-2">
//               {deliveredSystems.map((s) => (
//                 <li key={s} className="flex gap-3 text-sm"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-olive" aria-hidden />{s}</li>
//               ))}
//             </ul>
//             <p className="mt-6 border-t pt-4 font-display text-3xl font-bold">{products.length}<span className="ml-2 text-sm font-medium text-muted-foreground">products in the GVS catalogue</span></p>
//           </div>
//         </div>
//       </section>

//       {/* 4. CAPABILITIES SECTION */}
//       <section className="bg-navy py-20 text-on-dark md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Core capabilities</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Simulation across the training spectrum</h2>
//             <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-muted hover:text-on-dark">All solutions <ArrowRight className="size-4" /></Link>
//           </div>
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {capabilities.map((c) => (
//               <Link
//                 key={c.title}
//                 to="/solutions"
//                 hash={c.solutionId}
//                 className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
//               >
//                 <SiteImage image={c.image} className="absolute inset-0" imgClassName="transition-transform duration-700 group-hover:scale-105" />
//                 <div className="absolute inset-0 bg-card-overlay" aria-hidden />
//                 <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
//                   <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                  
//                   {c.description && (
//                     <p className="mt-2 text-sm text-[#CBD5E1] line-clamp-2">
//                       {c.description}
//                     </p>
//                   )}

//                   <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">Learn more <ArrowRight className="size-3" /></span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. FEATURED PRODUCTS */}
//       <section className="bg-mist py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Featured products</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Selected from our simulator portfolio</h2>
//             <Button asChild variant="navy"><Link to="/products">View all {products.length} products</Link></Button>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
//           </div>
//         </div>
//       </section>

//       {/* 6. WHY GVS */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
//           <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
//           <div>
//             <p className="eyebrow">Why GVS</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">From design to long-term support</h2>
//             <div className="mt-10 grid gap-8 sm:grid-cols-2">
//               {why.map((w) => (
//                 <div key={w.title}>
//                   <w.icon className="size-6 text-olive" aria-hidden />
//                   <h3 className="mt-3 font-semibold">{w.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. PROJECTS TEASER */}
//       <section className="bg-charcoal py-20 text-on-dark md:py-24">
//         <div className="container-x grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
//           <div>
//             <p className="eyebrow">Projects and capabilities</p>
//             <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Simulators delivered for defence training</h2>
//             <p className="mt-4 max-w-2xl text-on-dark-muted">See the systems GVS has designed, developed and delivered. Approved project photographs will be added to the gallery as they are released.</p>
//           </div>
//           <Button asChild variant="heroOutline" size="lg"><Link to="/projects">View projects & capabilities</Link></Button>
//         </div>
//       </section>

//       <FinalCta />
//     </>
//   );
// }



// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Cpu, Layers, Wrench, PencilRuler } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiteImage } from "@/components/site/SiteImage";
// import { ProductCard } from "@/components/site/ProductCard";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { capabilities } from "@/data/solutions";
// import { featuredSlugs, getProduct, products } from "@/data/products";
// import { deliveredSystems, jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GVS India â€” Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
//       { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
//     ],
//   }),
//   component: Home,
// });

// const why = [
//   { icon: PencilRuler, title: "Design and development", body: "In-house design and development of training simulators, VR/AR training systems and simulation software." },
//   { icon: Layers, title: "Customised simulation solutions", body: "Simulators, mockups, target systems and accessories configured to each organisation's training requirement." },
//   { icon: Cpu, title: "Manufacture and integration", body: "Manufacture and integration of defence mockups, laser-based firing systems and battlefield simulation systems." },
//   { icon: Wrench, title: "Technical support", body: "Training, consultancy, AMC, repair, upgrade and system integration services for simulation equipment." },
// ];

// const visualCapabilities = [
//   {
//     number: "01 / SIMULATION",
//     title: "Defence Training Simulators",
//     desc: "Infantry weapon, ATGM, mortar, rocket launcher, sniper, bunker defence and tactical training simulators.",
//     image: "/defence.png",
//     link: "/solutions#infantry-weapon-training"
//   },
//   {
//     number: "02 / IMMERSIVE TECHNOLOGY",
//     title: "VR & Immersive Training",
//     desc: "VR-based weapon systems, combat medical care, terrain familiarization and tactical training scenarios.",
//     image: "/vrhome.png",
//     link: "/solutions#vr-ar-training"
//   },
//   {
//     number: "03 / ENGINEERING",
//     title: "Embedded Electronics & Integration",
//     desc: "Electronic controls, firmware, physical interfaces, displays, sensors and simulation software.",
//     image: "/emmbeedelec.jpg",
//     link: "/solutions#defence-electronics"
//   },
//   {
//     number: "04 / LIFECYCLE SUPPORT",
//     title: "Project Execution & Support",
//     desc: "Technical consultancy, system integration, testing, commissioning, maintenance, repair and upgrades.",
//     image: "/projectexe.jpg",
//     link: "/solutions#system-integration"
//   },
// ];

// const experienceTags = [
//   "Infantry Weapon Training Simulators",
//   "ATGM Simulators",
//   "VROP Simulators",
//   "LORROS Simulators",
//   "81mm Mortar Simulators",
//   "VR-Based Rocket Launcher Simulators",
//   "VR-Based Combat Medical Care Simulators",
//   "Tactical Tank Training Simulators"
// ];

// function Home() {
//   const featured = featuredSlugs.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
  
//   return (
//     <>
//       {/* 1. HERO SECTION */}
//       <section className="relative isolate min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-navy">
//         <div className="absolute inset-0 -z-10">
//           <img src="/hero.png" alt="Defence Lab" className="w-full h-full object-cover object-[70%_center] lg:object-center" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0D1D2D] via-[#0D1D2D]/80 to-transparent lg:w-3/4" />
//           <div className="absolute inset-0 bg-[#0D1D2D]/40 lg:hidden" />
//         </div>
//         <div className="container-x max-w-[1280px] mx-auto w-full py-20 lg:py-0 relative z-10">
//           <div className="max-w-[620px] animate-fade-up">
//             <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-6">Advanced Defence Simulation & Engineering Solutions</p>
//             <h1 className="text-4xl md:text-[46px] lg:text-[50px] font-bold text-white leading-[1.1] mb-6">
//               Engineering Realistic Training. <br className="hidden md:block" />
//               <span className="text-[#8CCBFF]">Enabling Operational Readiness.</span>
//             </h1>
//             <p className="text-[17px] text-slate-300 leading-[1.6] mb-10">
//               GVS designs, develops and integrates specialized defence training simulators, immersive VR systems, embedded electronics and mission-oriented training solutions. We combine software, hardware and engineering expertise to support realistic, repeatable and application-specific training.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button asChild size="lg" className="h-12 px-8 bg-[#155DFC] hover:bg-blue-600 text-white transition-colors">
//                 <Link to="/products">Explore Our Products <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white text-white hover:bg-white hover:text-navy transition-colors bg-transparent">
//                 <Link to="/contact">Discuss a Project <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. ABOUT SECTION */}
//       <section className="bg-[#F5F7FA] py-[90px] lg:py-[100px]">
//         <div className="container-x max-w-[1280px] mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
//           <div className="flex flex-col justify-center animate-fade-up">
//             <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">About Green Vision Solutions</p>
//             <h2 className="text-[36px] md:text-[42px] font-bold text-[#10243A] leading-[1.15] mb-6 max-w-[90%]">
//               Technology That Supports Better Training
//             </h2>
//             <div className="space-y-6 text-[17px] leading-[1.7] text-[#526174]">
//               <p>Green Vision Solutions develops technology-led systems for defence training and simulation. Our work brings together physical mockups, embedded control systems, simulation applications, visual environments and integrated hardware to create solutions aligned with defined training requirements.</p>
//               <p>From product development and system integration to testing, installation, upgrades and technical support, GVS supports the solution lifecycle with a focus on functionality, reliability and customer requirements.</p>
//             </div>
//             <div className="mt-8">
//               <Link to="/about" className="group inline-flex items-center text-blue-600 font-semibold text-[17px] hover:text-blue-800 transition-colors">
//                 Discover GVS <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
//               </Link>
//             </div>
//           </div>
//           <div className="relative animate-fade-in w-full aspect-[5/4] rounded-xl overflow-hidden shadow-xl bg-slate-100">
//             <img src="/engineering-lab.png" alt="Lab" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
//           </div>
//         </div>
//       </section>

//       {/* 3. COMPACT PREMIUM VISUAL CAPABILITIES SHOWCASE */}
//       <section className="bg-[#F5F7FA] py-20 md:py-28">
//         <div className="container-x max-w-[1280px] mx-auto">
//           <div className="mb-10 text-center max-w-3xl mx-auto">
//             <p className="text-xs font-bold tracking-widest text-[#80C5FF] uppercase mb-3">Our Expertise</p>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#10243A] mb-4">Engineering Capabilities</h2>
//             <p className="text-[17px] text-[#526174] leading-relaxed">Specialized technologies and integrated engineering solutions for defence training.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//             {visualCapabilities.map((cap, index) => (
//               <Link
//                 key={index}
//                 to={cap.link}
//                 className="group flex flex-col h-full bg-[#0D1C2D] rounded-[14px] overflow-hidden shadow-md border border-transparent hover:border-[#80C5FF]/50 transition-all duration-300"
//               >
//                 <div className="relative aspect-[16/9] w-full overflow-hidden">
//                   <img src={cap.image} alt={cap.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2D]/90 via-transparent to-transparent opacity-50" />
//                   <div className="absolute top-4 left-4 bg-[#0D1C2D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-[#80C5FF] tracking-wider">
//                     {cap.number}
//                   </div>
//                 </div>
//                 <div className="flex flex-col flex-grow p-6">
//                   <h3 className="text-[24px] font-bold text-[#FFFFFF] mb-2 leading-tight">{cap.title}</h3>
//                   <p className="text-[16px] text-slate-300 leading-relaxed mb-6 flex-grow">{cap.desc}</p>
//                   <span className="mt-auto inline-flex items-center text-[15px] font-semibold text-[#80C5FF] group-hover:text-white transition-colors">
//                     Explore Solutions <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. OUR EXPERIENCE SECTION (With Tags) */}
//       <section className="bg-[#F5F7FA] py-20 md:py-24">
//         <div className="container-x max-w-[1280px] mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-10 lg:h-[540px]">
            
//             {/* LEFT SIDE: Video Container */}
//             <div className="relative w-full h-[450px] lg:h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0D1D2D]">
//               <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110">
//                 <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
//               </video>
//               <video autoPlay muted loop playsInline poster="/engineering-lab.png" className="absolute inset-0 w-full h-full object-contain z-10">
//                 <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
//               </video>
//             </div>

//             {/* RIGHT SIDE: Info Card with Tags */}
//             <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-center h-full">
//               <p className="text-xs font-bold tracking-widest text-[#155DFC] uppercase mb-3">Our Experience</p>
//               <h2 className="text-3xl md:text-[36px] font-bold text-[#10243A] leading-tight mb-6">
//                 Proven Experience in Defence Simulation
//               </h2>
              
//               <div className="text-[#526174] leading-[1.7] text-[16px] mb-6">
//                 <p>GVS has successfully designed, developed and delivered a range of defence training and simulation systems, including:</p>
//               </div>

//               {/* Capsule Tags */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {experienceTags.map((tag, idx) => (
//                   <span 
//                     key={idx} 
//                     className="inline-flex items-center rounded-full bg-[#EFF5FC] border border-[#D6E5F5] px-3 py-2 text-[13px] font-medium text-[#234B75]"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
              
//               <div>
//                 <Link to="/projects" className="group inline-flex items-center text-[#155DFC] font-semibold text-[17px] hover:text-blue-800 transition-colors">
//                   Explore Our Projects 
//                   <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
//                 </Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 5. CAPABILITIES SECTION (Existing Solution Cards) */}
//       <section className="bg-navy py-20 text-on-dark md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Core capabilities</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Simulation across the training spectrum</h2>
//             <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-muted hover:text-on-dark">All solutions <ArrowRight className="size-4" /></Link>
//           </div>
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {capabilities.map((c) => (
//               <Link
//                 key={c.title}
//                 to="/solutions"
//                 hash={c.solutionId}
//                 className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
//               >
//                 <SiteImage image={c.image} className="absolute inset-0" imgClassName="transition-transform duration-700 group-hover:scale-105" />
//                 <div className="absolute inset-0 bg-card-overlay" aria-hidden />
//                 <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
//                   <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
//                   {c.description && (
//                     <p className="mt-2 text-sm text-[#CBD5E1] line-clamp-2">{c.description}</p>
//                   )}
//                   <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">Learn more <ArrowRight className="size-3" /></span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. FEATURED PRODUCTS */}
//       <section className="bg-mist py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Featured products</p>
//           <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Selected from our simulator portfolio</h2>
//             <Button asChild variant="navy"><Link to="/products">View all {products.length} products</Link></Button>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
//           </div>
//         </div>
//       </section>

//       {/* 7. WHY GVS */}
//       <section className="bg-background py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
//           <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
//           <div>
//             <p className="eyebrow">Why GVS</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-5xl">From design to long-term support</h2>
//             <div className="mt-10 grid gap-8 sm:grid-cols-2">
//               {why.map((w) => (
//                 <div key={w.title}>
//                   <w.icon className="size-6 text-olive" aria-hidden />
//                   <h3 className="mt-3 font-semibold">{w.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 8. PROJECTS TEASER */}
//       <section className="bg-charcoal py-20 text-on-dark md:py-24">
//         <div className="container-x grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
//           <div>
//             <p className="eyebrow">Projects and capabilities</p>
//             <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Simulators delivered for defence training</h2>
//             <p className="mt-4 max-w-2xl text-on-dark-muted">See the systems GVS has designed, developed and delivered. Approved project photographs will be added to the gallery as they are released.</p>
//           </div>
//           <Button asChild variant="heroOutline" size="lg"><Link to="/projects">View projects & capabilities</Link></Button>
//         </div>
//       </section>

//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { FinalCta } from "@/components/site/FinalCta";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GVS India â€” Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
//       { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
//     ],
//   }),
//   component: Home,
// });

// const visualCapabilities = [
//   {
//     number: "01 / SIMULATION",
//     title: "Defence Training Simulators",
//     desc: "Infantry weapon, ATGM, mortar, rocket launcher, sniper, bunker defence and tactical training simulators.",
//     image: "/defence.png",
//     link: "/solutions#infantry-weapon-training",
//     objectPosition: "center 30%"
//   },
//   {
//     number: "02 / IMMERSIVE TECHNOLOGY",
//     title: "VR & Immersive Training",
//     desc: "VR-based weapon systems, combat medical care, terrain familiarization and tactical training scenarios.",
//     image: "/vrhome.png",
//     link: "/solutions#vr-ar-training",
//     objectPosition: "center 40%"
//   },
//   {
//     number: "03 / ENGINEERING",
//     title: "Embedded Electronics & Integration",
//     desc: "Electronic controls, firmware, physical interfaces, displays, sensors and simulation software.",
//     image: "/emmbeedelec.jpg",
//     link: "/solutions#defence-electronics",
//     objectPosition: "center 50%"
//   },
//   {
//     number: "04 / LIFECYCLE SUPPORT",
//     title: "Project Execution & Support",
//     desc: "Technical consultancy, system integration, testing, commissioning, maintenance, repair and upgrades.",
//     image: "/projectexe.jpg",
//     link: "/solutions#system-integration",
//     objectPosition: "center 60%"
//   },
// ];

// const experienceTags = [
//   "Infantry Weapon Training Simulators",
//   "ATGM Simulators",
//   "VROP Simulators",
//   "LORROS Simulators",
//   "81mm Mortar Simulators",
//   "VR-Based Rocket Launcher Simulators",
//   "VR-Based Combat Medical Care Simulators",
//   "Tactical Tank Training Simulators"
// ];

// function Home() {
//   return (
//     <>
//       {/* 1. HERO SECTION */}
//       <section className="relative isolate min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-navy">
//         <div className="absolute inset-0 -z-10">
//           <img src="/hero.png" alt="Defence Lab" className="w-full h-full object-cover object-[70%_center] lg:object-center" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0D1D2D] via-[#0D1D2D]/80 to-transparent lg:w-3/4" />
//           <div className="absolute inset-0 bg-[#0D1D2D]/40 lg:hidden" />
//         </div>
//         <div className="container-x max-w-[1280px] mx-auto w-full py-20 lg:py-0 relative z-10">
//           <div className="max-w-[620px] animate-fade-up">
//             <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-6">Advanced Defence Simulation & Engineering Solutions</p>
//             <h1 className="text-4xl md:text-[46px] lg:text-[50px] font-bold text-white leading-[1.1] mb-6">
//               Engineering Realistic Training. <br className="hidden md:block" />
//               <span className="text-[#8CCBFF]">Enabling Operational Readiness.</span>
//             </h1>
//             <p className="text-[17px] text-slate-300 leading-[1.6] mb-10">
//               GVS designs, develops and integrates specialized defence training simulators, immersive VR systems, embedded electronics and mission-oriented training solutions. We combine software, hardware and engineering expertise to support realistic, repeatable and application-specific training.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button asChild size="lg" className="h-12 px-8 bg-[#155DFC] hover:bg-blue-600 text-white transition-colors">
//                 <Link to="/products">Explore Our Products <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white text-white hover:bg-white hover:text-navy transition-colors bg-transparent">
//                 <Link to="/contact">Discuss a Project <ArrowRight className="ml-2 size-4" /></Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. REFINED "ABOUT" SECTION */}
//       <section className="bg-[#F5F7FA] py-[90px] lg:py-[100px]">
//         <div className="container-x max-w-[1280px] mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          
//           {/* LEFT COLUMN: Text Content */}
//           <div className="flex flex-col justify-center animate-fade-up">
//             <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">About Green Vision Solutions</p>
//             <h2 className="text-[36px] md:text-[42px] font-bold text-[#10243A] leading-[1.15] mb-6 max-w-[90%]">
//               Technology That Supports Better Training
//             </h2>
            
//             <div className="space-y-[22px] text-[17px] leading-[1.7] text-[#526174]">
//               {/* First Paragraph (Left aligned) */}
//               <p>
//                 Green Vision Solutions develops technology-led systems for defence training and simulation. Our work brings together physical mockups, embedded control systems, simulation applications, visual environments and integrated hardware to create solutions aligned with defined training requirements.
//               </p>
              
//               {/* Second Paragraph (Indented with accent line) */}
//               <div className="pl-[30px] border-l-[3px] border-blue-500">
//                 <p>
//                   From product development and system integration to testing, installation, upgrades and technical support, GVS supports the solution lifecycle with a focus on functionality, reliability and customer requirements.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Link to="/about" className="group inline-flex items-center text-blue-600 font-semibold text-[17px] hover:text-blue-800 transition-colors">
//                 Discover GVS <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Image */}
//           <div className="relative animate-fade-in w-full aspect-[5/4] rounded-xl overflow-hidden shadow-xl bg-slate-100">
//             <img src="/engineering-lab.png" alt="Lab" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
//           </div>
//         </div>
//       </section>

//       {/* 3. COMPACT PREMIUM VISUAL CAPABILITIES SHOWCASE */}
//       <section className="bg-[#F5F7FA] py-20 md:py-28 scroll-mt-24" id="engineering-capabilities">
//         <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
//           <div className="mb-10 text-center max-w-3xl mx-auto">
//             <p className="text-xs font-bold tracking-widest text-[#80C5FF] uppercase mb-3">Our Expertise</p>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#10243A] mb-4">Engineering Capabilities</h2>
//             <p className="text-[17px] text-[#526174] leading-relaxed">Specialized technologies and integrated engineering solutions for defence training.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
//             {visualCapabilities.map((cap, index) => (
//               <Link
//                 key={index}
//                 to={cap.link}
//                 className="group flex flex-col h-full bg-[#0D1C2D] rounded-[16px] overflow-hidden shadow-md border border-transparent hover:border-[#80C5FF]/50 transition-all duration-300"
//               >
//                 <div className="relative h-[290px] w-full overflow-hidden">
//                   <img 
//                     src={cap.image} 
//                     alt={cap.title} 
//                     style={{ objectPosition: cap.objectPosition }}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2D]/90 via-transparent to-transparent opacity-50" />
//                   <div className="absolute top-4 left-4 bg-[#0D1C2D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-[#80C5FF] tracking-wider">
//                     {cap.number}
//                   </div>
//                 </div>
//                 <div className="flex flex-col flex-grow p-6">
//                   <h3 className="text-[24px] font-bold text-[#FFFFFF] mb-2 leading-tight">{cap.title}</h3>
//                   <p className="text-[16px] text-slate-300 leading-relaxed mb-6 flex-grow">{cap.desc}</p>
//                   <span className="mt-auto inline-flex items-center text-[15px] font-semibold text-[#80C5FF] group-hover:text-white transition-colors">
//                     Explore Solutions <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. OUR EXPERIENCE SECTION */}
//       <section className="bg-[#F5F7FA] py-20 md:py-24">
//         <div className="container-x max-w-[1280px] mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-10 lg:h-[540px]">
            
//             <div className="relative w-full h-[450px] lg:h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0D1D2D]">
//               <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110">
//                 <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
//               </video>
//               <video autoPlay muted loop playsInline poster="/engineering-lab.png" className="absolute inset-0 w-full h-full object-contain z-10">
//                 <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
//               </video>
//             </div>

//             <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-center h-full">
//               <p className="text-xs font-bold tracking-widest text-[#155DFC] uppercase mb-3">Our Experience</p>
//               <h2 className="text-3xl md:text-[36px] font-bold text-[#10243A] leading-tight mb-6">
//                 Proven Experience in Defence Simulation
//               </h2>
              
//               <div className="text-[#526174] leading-[1.7] text-[16px] mb-6">
//                 <p>GVS has successfully designed, developed and delivered a range of defence training and simulation systems, including:</p>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-8">
//                 {experienceTags.map((tag, idx) => (
//                   <span 
//                     key={idx} 
//                     className="inline-flex items-center rounded-full bg-[#EFF5FC] border border-[#D6E5F5] px-3 py-2 text-[13px] font-medium text-[#234B75]"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
              
//               <div>
//                 <Link to="/projects" className="group inline-flex items-center text-[#155DFC] font-semibold text-[17px] hover:text-blue-800 transition-colors">
//                   Explore Our Projects 
//                   <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
//                 </Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <FinalCta />
//     </>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GVS India â€” Engineering the Future of Defence Training" },
      { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
      { property: "og:title", content: "GVS India â€” Engineering the Future of Defence Training" },
      { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
    ],
  }),
  component: Home,
});

const visualCapabilities = [
  {
    number: "01 / SIMULATION",
    title: "Defence Training Simulators",
    desc: "Infantry weapon, ATGM, mortar, rocket launcher, sniper, bunker defence and tactical training simulators.",
    image: "/defence.png",
    link: "/solutions#infantry-weapon-training",
    objectPosition: "center 30%"
  },
  {
    number: "02 / IMMERSIVE TECHNOLOGY",
    title: "VR & Immersive Training",
    desc: "VR-based weapon systems, combat medical care, terrain familiarization and tactical training scenarios.",
    image: "/vrhome.png",
    link: "/solutions#vr-ar-training",
    objectPosition: "center 40%"
  },
  {
    number: "03 / ENGINEERING",
    title: "Embedded Electronics & Integration",
    desc: "Electronic controls, firmware, physical interfaces, displays, sensors and simulation software.",
    image: "/emmbeedelec.jpg",
    link: "/solutions#defence-electronics",
    objectPosition: "center 50%"
  },
  {
    number: "04 / LIFECYCLE SUPPORT",
    title: "Project Execution & Support",
    desc: "Technical consultancy, system integration, testing, commissioning, maintenance, repair and upgrades.",
    image: "/projectexe.jpg",
    link: "/solutions#system-integration",
    objectPosition: "center 60%"
  },
];

const experienceTags = [
  "Infantry Weapon Training Simulators",
  "ATGM Simulators",
  "VROP Simulators",
  "LORROS Simulators",
  "81mm Mortar Simulators",
  "VR-Based Rocket Launcher Simulators",
  "VR-Based Combat Medical Care Simulators",
  "Tactical Tank Training Simulators"
];

function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative isolate min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <img src="/hero.png" alt="Defence Lab" className="w-full h-full object-cover object-[70%_center] lg:object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1D2D] via-[#0D1D2D]/80 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-[#0D1D2D]/40 lg:hidden" />
        </div>
        <div className="container-x max-w-[1280px] mx-auto w-full py-20 lg:py-0 relative z-10">
          <div className="max-w-[620px] animate-fade-up">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-6">Advanced Defence Simulation & Engineering Solutions</p>
            <h1 className="text-4xl md:text-[46px] lg:text-[50px] font-bold text-white leading-[1.1] mb-6">
              Engineering Realistic Training. <br className="hidden md:block" />
              <span className="text-[#8CCBFF]">Enabling Operational Readiness.</span>
            </h1>
            <p className="text-[17px] text-slate-300 leading-[1.6] mb-10">
              GVS designs, develops and integrates specialized defence training simulators, immersive VR systems, embedded electronics and mission-oriented training solutions. We combine software, hardware and engineering expertise to support realistic, repeatable and application-specific training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 bg-[#155DFC] hover:bg-blue-600 text-white transition-colors">
                <Link to="/products">Explore Our Products <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white text-white hover:bg-white hover:text-navy transition-colors bg-transparent">
                <Link to="/contact">Discuss a Project <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REFINED "ABOUT" SECTION (Text Left, Image Right) */}
      <section className="bg-[#F5F7FA] py-[70px] lg:py-[80px]">
        <div className="container-x max-w-[1280px] mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center animate-fade-up">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">About Green Vision Solutions</p>
            <h2 className="text-[36px] md:text-[42px] font-bold text-[#10243A] leading-[1.15] mb-6 max-w-[90%]">
              Technology That Supports Better Training
            </h2>
            
            <div className="space-y-[22px] text-[17px] leading-[1.7] text-[#526174]">
              {/* First Paragraph (No border) */}
              <div>
                <p>
                  Green Vision Solutions develops technology-led systems for defence training and simulation. Our work brings together physical mockups, embedded control systems, simulation applications, visual environments and integrated hardware to create solutions aligned with defined training requirements.
                </p>
              </div>
              
              {/* Second Paragraph (Shifted right with blue accent line) */}
              <div className="pl-[18px] border-l-[3px] border-blue-500">
                <p>
                  From product development and system integration to testing, installation, upgrades and technical support, GVS supports the solution lifecycle with a focus on functionality, reliability and customer requirements.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about" className="group inline-flex items-center text-blue-600 font-semibold text-[17px] hover:text-blue-800 transition-colors">
                Discover GVS <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="relative animate-fade-in w-full aspect-[5/4] rounded-xl overflow-hidden shadow-xl bg-slate-100">
            <img src="/engineering-lab.png" alt="Lab" className="absolute inset-0 w-full h-full object-cover object-[60%_center]" />
          </div>

        </div>
      </section>

      {/* 3. COMPACT PREMIUM VISUAL CAPABILITIES SHOWCASE */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 scroll-mt-24" id="engineering-capabilities">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-[#80C5FF] uppercase mb-3">Our Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#10243A] mb-4">Engineering Capabilities</h2>
            <p className="text-[17px] text-[#526174] leading-relaxed">Specialized technologies and integrated engineering solutions for defence training.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {visualCapabilities.map((cap, index) => (
              <Link
                key={index}
                to={cap.link}
                className="group flex flex-col h-full bg-[#0D1C2D] rounded-[16px] overflow-hidden shadow-md border border-transparent hover:border-[#80C5FF]/50 transition-all duration-300"
              >
                <div className="relative h-[290px] w-full overflow-hidden">
                  <img 
                    src={cap.image} 
                    alt={cap.title} 
                    style={{ objectPosition: cap.objectPosition }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C2D]/90 via-transparent to-transparent opacity-50" />
                  <div className="absolute top-4 left-4 bg-[#0D1C2D]/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-[#80C5FF] tracking-wider">
                    {cap.number}
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-[24px] font-bold text-[#FFFFFF] mb-2 leading-tight">{cap.title}</h3>
                  <p className="text-[16px] text-slate-300 leading-relaxed mb-6 flex-grow">{cap.desc}</p>
                  <span className="mt-auto inline-flex items-center text-[15px] font-semibold text-[#80C5FF] group-hover:text-white transition-colors">
                    Explore Solutions <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERIENCE SECTION (Video Left, Info Right) */}
      <section className="bg-[#F5F7FA] py-20 md:py-24">
        <div className="container-x max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-10 lg:h-[540px]">
            
            <div className="relative w-full h-[450px] lg:h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0D1D2D]">
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110">
                <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
              </video>
              <video autoPlay muted loop playsInline poster="/engineering-lab.png" className="absolute inset-0 w-full h-full object-contain z-10">
                <source src="/gvs-experience-optimized.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-center h-full">
              <p className="text-xs font-bold tracking-widest text-[#155DFC] uppercase mb-3">Our Experience</p>
              <h2 className="text-3xl md:text-[36px] font-bold text-[#10243A] leading-tight mb-6">
                Proven Experience in Defence Simulation
              </h2>
              
              <div className="text-[#526174] leading-[1.7] text-[16px] mb-6">
                <p>GVS has successfully designed, developed and delivered a range of defence training and simulation systems, including:</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {experienceTags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center rounded-full bg-[#EFF5FC] border border-[#D6E5F5] px-3 py-2 text-[13px] font-medium text-[#234B75]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div>
                <Link to="/projects" className="group inline-flex items-center text-[#155DFC] font-semibold text-[17px] hover:text-blue-800 transition-colors">
                  Explore Our Projects 
                  <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}