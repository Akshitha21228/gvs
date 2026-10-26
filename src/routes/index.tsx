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
//       { title: "GVS India — Engineering the Future of Defence Training" },
//       { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
//       { property: "og:title", content: "GVS India — Engineering the Future of Defence Training" },
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
//           <p className="eyebrow fade-up">Green Vision Solutions · Hyderabad, India</p>
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
//               Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies — together with system development, integration, maintenance and technical support.
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
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Layers, Wrench, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/site/SiteImage";
import { ProductCard } from "@/components/site/ProductCard";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/images";
import { capabilities } from "@/data/solutions";
import { featuredSlugs, getProduct, products } from "@/data/products";
import { deliveredSystems, jointDevelopmentStatement } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GVS India — Engineering the Future of Defence Training" },
      { name: "description", content: "Green Vision Solutions: defence training simulators, immersive VR/AR training and integrated simulation technology, designed and supported from Hyderabad, India." },
      { property: "og:title", content: "GVS India — Engineering the Future of Defence Training" },
      { property: "og:description", content: "Advanced simulation, immersive VR/AR training and integrated technology solutions for defence training." },
    ],
  }),
  component: Home,
});

const why = [
  { icon: PencilRuler, title: "Design and development", body: "In-house design and development of training simulators, VR/AR training systems and simulation software." },
  { icon: Layers, title: "Customised simulation solutions", body: "Simulators, mockups, target systems and accessories configured to each organisation's training requirement." },
  { icon: Cpu, title: "Manufacture and integration", body: "Manufacture and integration of defence mockups, laser-based firing systems and battlefield simulation systems." },
  { icon: Wrench, title: "Technical support", body: "Training, consultancy, AMC, repair, upgrade and system integration services for simulation equipment." },
];

function Home() {
  const featured = featuredSlugs.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-on-dark">
        <SiteImage image={images.hero} priority labelPosition="bottom" className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
        <div className="container-x flex min-h-[calc(100svh-72px)] flex-col justify-center py-24">
          <p className="eyebrow fade-up">Green Vision Solutions · Hyderabad, India</p>
          <h1 className="fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Engineering the Future of Defence Training
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg text-on-dark-muted md:text-xl">
            Advanced simulation, immersive VR/AR training, and integrated technology solutions for realistic, effective, and technology-driven training.
          </p>
          <div className="fade-up mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="h-12 px-7">
              <Link to="/products">Explore Our Products <ArrowRight /></Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="h-12 px-7">
              <Link to="/contact">Request an Enquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Defence training simulators, built and supported in India</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies — together with system development, integration, maintenance and technical support.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{jointDevelopmentStatement}</p>
            <Button asChild variant="link" className="mt-4 px-0 text-base font-semibold">
              <Link to="/about">More about GVS <ArrowRight /></Link>
            </Button>
          </div>
          <div className="rounded-2xl bg-mist p-8">
            <p className="text-sm font-semibold">Systems designed, developed and delivered by GVS</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {deliveredSystems.map((s) => (
                <li key={s} className="flex gap-3 text-sm"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-olive" aria-hidden />{s}</li>
              ))}
            </ul>
            <p className="mt-6 border-t pt-4 font-display text-3xl font-bold">{products.length}<span className="ml-2 text-sm font-medium text-muted-foreground">products in the GVS catalogue</span></p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-navy py-20 text-on-dark md:py-28">
        <div className="container-x">
          <p className="eyebrow">Core capabilities</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Simulation across the training spectrum</h2>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-muted hover:text-on-dark">All solutions <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <Link
                key={c.title}
                to="/solutions"
                hash={c.solutionId}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
              >
                <SiteImage image={c.image} className="absolute inset-0" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-card-overlay" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                  
                  {/* THE DESCRIPTION IS ADDED HERE */}
                  {c.description && (
                    <p className="mt-2 text-sm text-[#CBD5E1] line-clamp-2">
                      {c.description}
                    </p>
                  )}

                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">Learn more <ArrowRight className="size-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Featured products</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Selected from our simulator portfolio</h2>
            <Button asChild variant="navy"><Link to="/products">View all {products.length} products</Link></Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* Why GVS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
          <div>
            <p className="eyebrow">Why GVS</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">From design to long-term support</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title}>
                  <w.icon className="size-6 text-olive" aria-hidden />
                  <h3 className="mt-3 font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section className="bg-charcoal py-20 text-on-dark md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Projects and capabilities</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Simulators delivered for defence training</h2>
            <p className="mt-4 max-w-2xl text-on-dark-muted">See the systems GVS has designed, developed and delivered. Approved project photographs will be added to the gallery as they are released.</p>
          </div>
          <Button asChild variant="heroOutline" size="lg"><Link to="/projects">View projects & capabilities</Link></Button>
        </div>
      </section>

      <FinalCta />
    </>
  );
}