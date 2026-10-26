// import { createFileRoute, Link } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { solutions } from "@/data/solutions";
// import { getProduct } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/solutions")({
//   head: () => ({
//     meta: [
//       { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
//       { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
//       { property: "og:title", content: "Defence Training Solutions | GVS India" },
//       { property: "og:description", content: "Simulation, electronics, integration and support solutions for defence training." },
//     ],
//   }),
//   component: Solutions,
// });

// function Solutions() {
//   return (
//     <>
//       <PageHero eyebrow="Solutions" title="Training and technology solutions" intro="Ten solution areas covering simulation, electronics, integration and lifetime support." image={images.tank} />
//       <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
//         <div className="container-x flex gap-2 overflow-x-auto py-3">
//           {solutions.map((s) => (
//             <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
//           ))}
//         </div>
//       </nav>
//       <div>
//         {solutions.map((s, i) => (
//           <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
//             <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
//               <SiteImage image={s.image} className={cn("aspect-[4/3] rounded-2xl", i % 2 && "lg:order-2")} />
//               <div>
//                 <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
//                 <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.title}</h2>
//                 <p className="mt-5 leading-relaxed text-muted-foreground">{s.body}</p>
//                 {s.productSlugs.length > 0 && (
//                   <div className="mt-8">
//                     <p className="text-sm font-semibold">Related products</p>
//                     <ul className="mt-3 flex flex-wrap gap-2">
//                       {s.productSlugs.map((slug) => {
//                         const p = getProduct(slug);
//                         return p ? (
//                           <li key={slug}>
//                             <Link to="/products/$slug" params={{ slug }} className="inline-block rounded-md bg-navy px-3 py-2 text-xs font-semibold text-on-dark hover:bg-olive">{p.name}</Link>
//                           </li>
//                         ) : null;
//                       })}
//                     </ul>
//                   </div>
//                 )}
//                 <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-olive hover:underline">Discuss this solution →</Link>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { solutions } from "@/data/solutions";
// import { getProduct } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/solutions")({
//   head: () => ({
//     meta: [
//       { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
//       { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
//     ],
//   }),
//   component: Solutions,
// });

// function Solutions() {
//   // Check if the URL has #infantry-weapon-training
//   const isInfantryPage = window.location.hash === "#infantry-weapon-training";

//   // Filter the list to only show Infantry if we are on that specific page
//   const displayedSolutions = isInfantryPage 
//     ? solutions.filter(s => s.id === "infantry-weapon-training")
//     : solutions;

//   return (
//     <>
//       <PageHero 
//         eyebrow="Solutions" 
//         title={isInfantryPage ? "Infantry Weapon Training" : "Training and technology solutions"} 
//         intro={isInfantryPage ? "Advanced Simulation Technology for Modern Defence Forces" : "Ten solution areas covering simulation, electronics, integration and lifetime support."} 
//         image={images.tank} 
//       />
      
//       {/* Hide the navigation bar if we are looking at a single solution */}
//       {!isInfantryPage && (
//         <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
//           <div className="container-x flex gap-2 overflow-x-auto py-3">
//             {solutions.map((s) => (
//               <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
//             ))}
//           </div>
//         </nav>
//       )}

//       <div>
//         {displayedSolutions.map((s, i) => (
//           <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
//             <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
//               <SiteImage image={s.image} className={cn("aspect-[4/3] rounded-2xl", i % 2 && "lg:order-2")} />
//               <div>
//                 {!isInfantryPage && <p className="eyebrow">{String(solutions.findIndex(sol => sol.id === s.id) + 1).padStart(2, "0")}</p>}
//                 <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.title}</h2>
//                 <div className="mt-5 leading-relaxed text-muted-foreground whitespace-pre-wrap">{s.body}</div>
                
//                 {s.productSlugs.length > 0 && (
//                   <div className="mt-8">
//                     <p className="text-sm font-semibold">Related products</p>
//                     <ul className="mt-3 flex flex-wrap gap-2">
//                       {s.productSlugs.map((slug) => {
//                         const p = getProduct(slug);
//                         return p ? (
//                           <li key={slug}>
//                             <Link to="/products/$slug" params={{ slug }} className="inline-block rounded-md bg-navy px-3 py-2 text-xs font-semibold text-on-dark hover:bg-olive">{p.name}</Link>
//                           </li>
//                         ) : null;
//                       })}
//                     </ul>
//                   </div>
//                 )}
//                 <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-olive hover:underline">Discuss this solution →</Link>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//       <FinalCta />
//     </>
//   );
// }
// // 

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { solutions } from "@/data/solutions";
// import { getProduct } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/solutions")({
//   head: () => ({
//     meta: [
//       { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
//       { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
//     ],
//   }),
//   component: Solutions,
// });

// function Solutions() {
//   const currentHash = window.location.hash.replace("#", "");
//   const activeSolution = solutions.find(s => s.id === currentHash);
  
//   const isSinglePage = !!activeSolution;
//   const displayedSolutions = isSinglePage ? [activeSolution] : solutions;

//   return (
//     <>
//       <PageHero 
//         eyebrow="Solutions" 
//         title={isSinglePage ? activeSolution.title : "Training and technology solutions"} 
//         intro={isSinglePage ? activeSolution.body.split('\n\n')[0] : "Ten solution areas covering simulation, electronics, integration and lifetime support."} 
//         image={isSinglePage && activeSolution.image ? (activeSolution.image as any) : images.tank} 
//       />
      
//       {!isSinglePage && (
//         <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
//           <div className="container-x flex gap-2 overflow-x-auto py-3">
//             {solutions.map((s) => (
//               <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
//             ))}
//           </div>
//         </nav>
//       )}

//       <div>
//         {displayedSolutions.map((s, i) => {
//           const paragraphs = s.body.split('\n\n').filter(p => p.trim() !== '');
          
//           const isInfantry = s.id === "infantry-weapon-training";
//           const isAtgm = s.id === "atgm-training";
//           const isVr = s.id === "vr-ar-training";
//           const isTactical = s.id === "tactical-battlefield";
//           const isObservation = s.id === "observation-equipment";
//           const isCombatMedical = s.id === "combat-medical";
//           const isDefenceElectronics = s.id === "defence-electronics";
//           const isSystemIntegration = s.id === "system-integration";

//           return (
//             <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
//               <div className="container-x">
                
//                 {isInfantry ? (
//                   /* INFANTRY LAYOUT */
//                   <div className="space-y-16 mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                       <div>
//                         {!isSinglePage && <p className="eyebrow mb-3">02</p>}
//                         <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                         {paragraphs.slice(0, 3).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
//                         <ul className="space-y-4">
//                           {s.list?.map((item, idx) => {
//                             const [title, desc] = item.split(':');
//                             return (
//                               <li key={idx} className="flex items-start">
//                                 <span className="text-olive mr-3 font-bold text-lg">•</span>
//                                 <div>
//                                   <span className="font-bold text-foreground">{title}:</span>
//                                   <span className="text-muted-foreground ml-1">{desc}</span>
//                                 </div>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                       <div>
//                         <SiteImage image={s.secondImage as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : isAtgm ? (
//                   /* ATGM LAYOUT */
//                   <div className="space-y-16 mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                       <div>
//                         {!isSinglePage && <p className="eyebrow mb-3">03</p>}
//                         <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                         {paragraphs.slice(0, 3).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <h3 className="text-2xl font-bold mb-6">Advanced Training Through Intelligent Simulation</h3>
//                         {paragraphs.slice(4, 7).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                       <div>
//                         <SiteImage image={s.secondImage as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : isVr ? (
//                   /* VR LAYOUT */
//                   <div className="space-y-16 mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                       <div>
//                         {!isSinglePage && <p className="eyebrow mb-3">01</p>}
//                         <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                         {paragraphs.slice(0, 4).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <h3 className="text-2xl font-bold mb-6">VR-Based Sniper Simulator</h3>
//                         {paragraphs.slice(4).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                       <div>
//                         <SiteImage image={s.secondImage as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : isTactical ? (
//                   /* TACTICAL LAYOUT */
//                   <div className="space-y-16 mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                       <div>
//                         {!isSinglePage && <p className="eyebrow mb-3">04</p>}
//                         <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                         {paragraphs.slice(0, 4).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div className="lg:order-1">
//                         <h3 className="text-2xl font-bold mb-6">Integrated Tactical and Battlefield Training Systems</h3>
//                         {paragraphs.slice(4, 8).map((para, index) => {
//                           if (para === "Integrated Tactical and Battlefield Training Systems") return null; 
//                           return (
//                             <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                           );
//                         })}
//                       </div>
//                       <div className="lg:order-2">
//                         <SiteImage image={s.secondImage as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : isObservation ? (
//                   /* OBSERVATION LAYOUT */
//                   <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
//                     <div>
//                       <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                     </div>
//                     <div>
//                       {!isSinglePage && <p className="eyebrow mb-3">05</p>}
//                       <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                       {paragraphs.map((para, index) => (
//                         <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ) : isCombatMedical ? (
//                   /* COMBAT MEDICAL LAYOUT */
//                   <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
//                     <div>
//                       <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                     </div>
//                     <div>
//                       {!isSinglePage && <p className="eyebrow mb-3">06</p>}
//                       <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                       {paragraphs.map((para, index) => (
//                         <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ) : isDefenceElectronics ? (
//                   /* DEFENCE ELECTRONICS LAYOUT */
//                   <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
//                     <div>
//                       <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                     </div>
//                     <div>
//                       {!isSinglePage && <p className="eyebrow mb-3">07</p>}
//                       <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                       {paragraphs.map((para, index) => (
//                         <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ) : isSystemIntegration ? (
//                   /* =========================================
//                      SYSTEM INTEGRATION LAYOUT
//                      ========================================= */
//                   <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
//                     <div>
//                       <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                     </div>
//                     <div>
//                       {!isSinglePage && <p className="eyebrow mb-3">09</p>}
//                       <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                       {paragraphs.map((para, index) => (
//                         <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   /* STANDARD LAYOUT FOR OTHER SOLUTIONS */
//                   <div className="mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
//                       <div className={cn(i % 2 === 1 && "lg:order-2")}>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover" />
//                       </div>
//                       <div className={cn(i % 2 === 1 && "lg:order-1")}>
//                         {!isSinglePage && <p className="eyebrow">{String(solutions.findIndex(sol => sol.id === s.id) + 1).padStart(2, "0")}</p>}
//                         <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.title}</h2>
//                         <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
//                           {paragraphs.map((para, index) => (
//                             <p key={index} className="whitespace-pre-wrap">{para}</p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* =========================================
//                    RELATED PRODUCTS (4 CARD GRID)
//                    ========================================= */}
//                 <div className="mt-12 pt-8 border-t border-border">
//                   {s.productSlugs.length > 0 && (
//                     <div className="mb-8">
//                       <p className="text-sm font-semibold mb-4">Related products</p>
//                       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {s.productSlugs.map((slug) => {
//                           const p = getProduct(slug);
//                           return p ? (
//                             <li key={slug}>
//                               <Link 
//                                 to="/products/$slug" 
//                                 params={{ slug }} 
//                                 className="flex items-center justify-center text-center h-full rounded-lg border-2 border-transparent bg-navy px-4 py-6 text-sm font-semibold text-on-dark shadow-md transition-all hover:bg-olive hover:border-olive"
//                               >
//                                 {p.name}
//                               </Link>
//                             </li>
//                           ) : null;
//                         })}
//                       </ul>
//                     </div>
//                   )}
//                   <Link to="/contact" className="inline-block text-sm font-semibold text-olive hover:underline mt-4">Discuss this solution →</Link>
//                 </div>

//               </div>
//             </section>
//           );
//         })}
//       </div>
//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { solutions } from "@/data/solutions";
// import { getProduct } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/solutions")({
//   head: () => ({
//     meta: [
//       { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
//       { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
//     ],
//   }),
//   component: Solutions,
// });

// function Solutions() {
//   const hash = useRouterState({ select: (s) => s.location.hash });
//   const currentHash = hash ? hash.replace("#", "") : "";

//   const activeSolution = solutions.find(s => s.id === currentHash);
//   const isSinglePage = !!activeSolution;
//   const displayedSolutions = isSinglePage ? [activeSolution] : solutions;

//   return (
//     <>
//       <PageHero 
//         eyebrow="Solutions" 
//         title={isSinglePage ? activeSolution.title : "Training and technology solutions"} 
//         intro={isSinglePage ? activeSolution.body.split('\n\n')[0] : "Ten solution areas covering simulation, electronics, integration and lifetime support."} 
//         image={isSinglePage && activeSolution.image ? (activeSolution.image as any) : images.tank} 
//       />
      
//       {!isSinglePage && (
//         <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
//           <div className="container-x flex gap-2 overflow-x-auto py-3">
//             {solutions.map((s) => (
//               <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
//             ))}
//           </div>
//         </nav>
//       )}

//       <div>
//         {displayedSolutions.map((s, i) => {
//           const paragraphs = s.body ? s.body.split('\n\n').filter(p => p.trim() !== '') : [];
//           const isInfantry = s.id === "infantry-weapon-training";

//           return (
//             <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
//               <div className="container-x">
                
//                 {isInfantry ? (
//                   <div className="space-y-16 mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                       <div>
//                         {!isSinglePage && <p className="eyebrow mb-3">02</p>}
//                         <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
//                         {paragraphs.slice(0, 3).map((para, index) => (
//                           <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//                       <div>
//                         <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
//                         <p className="text-slate-600 leading-relaxed text-base">
//                           {s.customExpertise || "GVS specialises in Infantry Weapon Training Simulators, Laser-Based Training Systems, Replica Weapons, and Virtual Reality Training Solutions."}
//                         </p>
//                       </div>
//                       <div>
//                         <SiteImage image={s.secondImage as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="mb-16">
//                     <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
//                       <div className={cn(i % 2 === 1 && "lg:order-2")}>
//                         <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover" />
//                       </div>
//                       <div className={cn(i % 2 === 1 && "lg:order-1")}>
//                         {!isSinglePage && <p className="eyebrow">{String(solutions.findIndex(sol => sol.id === s.id) + 1).padStart(2, "0")}</p>}
//                         <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.title}</h2>
//                         <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
//                           {paragraphs.map((para, index) => (
//                             <p key={index} className="whitespace-pre-wrap">{para}</p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div className="mt-12 pt-8 border-t border-border">
//                   {s.productSlugs && s.productSlugs.length > 0 && (
//                     <div className="mb-8">
//                       <p className="text-sm font-semibold mb-4">Related products</p>
//                       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {s.productSlugs.map((slug) => {
//                           const p = getProduct(slug);
//                           return p ? (
//                             <li key={slug}>
//                               <Link 
//                                 to="/products/$slug" 
//                                 params={{ slug }} 
//                                 className="flex items-center justify-center text-center h-full rounded-lg border-2 border-transparent bg-navy px-4 py-6 text-sm font-semibold text-on-dark shadow-md transition-all hover:bg-olive hover:border-olive"
//                               >
//                                 {p.name}
//                               </Link>
//                             </li>
//                           ) : null;
//                         })}
//                       </ul>
//                     </div>
//                   )}
//                   <Link to="/contact" className="inline-block text-sm font-semibold text-olive hover:underline mt-4">Discuss this solution →</Link>
//                 </div>
//               </div>
//             </section>
//           );
//         })}
//       </div>
//       <FinalCta />
//     </>
//   );
// }

// import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { solutions } from "@/data/solutions";
// import { getProduct } from "@/data/products";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/solutions")({
//   head: () => ({
//     meta: [
//       { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
//       { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
//     ],
//   }),
//   component: Solutions,
// });

// function Solutions() {
//   const hash = useRouterState({ select: (s) => s.location.hash });
//   const currentHash = hash ? hash.replace("#", "") : "";

//   const activeSolution = solutions.find(s => s.id === currentHash);
//   const isSinglePage = !!activeSolution;
//   const displayedSolutions = isSinglePage ? [activeSolution] : solutions;

//   return (
//     <>
//       <PageHero 
//         eyebrow="Solutions" 
//         title={isSinglePage ? activeSolution.title : "Training and technology solutions"} 
//         intro={isSinglePage ? activeSolution.body.split('\n\n')[0] : "Ten solution areas covering simulation, electronics, integration and lifetime support."} 
//         image={isSinglePage && activeSolution.image ? (activeSolution.image as any) : images.tank} 
//       />
      
//       {!isSinglePage && (
//         <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
//           <div className="container-x flex gap-2 overflow-x-auto py-3">
//             {solutions.map((s) => (
//               <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
//             ))}
//           </div>
//         </nav>
//       )}

//       <div>
//         {displayedSolutions.map((s, i) => {
//           const paragraphs = s.body ? s.body.split('\n\n').filter(p => p.trim() !== '') : [];

//           return (
//             <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
//               <div className="container-x">
                
//                 {/* STANDARD LAYOUT: Image Left, Content Right */}
//                 <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
//                   <div>
//                     <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
//                   </div>
//                   <div>
//                     {!isSinglePage && <p className="eyebrow mb-3">{String(solutions.findIndex(sol => sol.id === s.id) + 1).padStart(2, "0")}</p>}
//                     <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
                    
//                     {/* Original Content */}
//                     {paragraphs.map((para, index) => (
//                       <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
//                     ))}

//                     {/* Custom Expertise Paragraph Added Below */}
//                     {s.customExpertise && (
//                       <p className="text-slate-600 leading-relaxed text-base mt-6">
//                         {s.customExpertise}
//                       </p>
//                     )}

//                   </div>
//                 </div>

//                 {/* RELATED PRODUCTS */}
//                 <div className="mt-12 pt-8 border-t border-border">
//                   {s.productSlugs && s.productSlugs.length > 0 && (
//                     <div className="mb-8">
//                       <p className="text-sm font-semibold mb-4">Related products</p>
//                       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {s.productSlugs.map((slug) => {
//                           const p = getProduct(slug);
//                           return p ? (
//                             <li key={slug}>
//                               <Link 
//                                 to="/products/$slug" 
//                                 params={{ slug }} 
//                                 className="flex items-center justify-center text-center h-full rounded-lg border-2 border-transparent bg-navy px-4 py-6 text-sm font-semibold text-on-dark shadow-md transition-all hover:bg-olive hover:border-olive"
//                               >
//                                 {p.name}
//                               </Link>
//                             </li>
//                           ) : null;
//                         })}
//                       </ul>
//                     </div>
//                   )}
//                   <Link to="/contact" className="inline-block text-sm font-semibold text-olive hover:underline mt-4">Discuss this solution →</Link>
//                 </div>

//               </div>
//             </section>
//           );
//         })}
//       </div>
//       <FinalCta />
//     </>
//   );
// }
import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteImage } from "@/components/site/SiteImage";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/images";
import { solutions } from "@/data/solutions";
import { getProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — VR/AR, Weapon, ATGM & Tactical Training | GVS India" },
      { name: "description", content: "GVS solutions: VR and AR training, infantry weapon and ATGM training simulation, tactical simulation, observation, combat medical, defence electronics, integration and AMC." },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const currentHash = hash ? hash.replace("#", "") : "";

  const activeSolution = solutions.find(s => s.id === currentHash);
  const isSinglePage = !!activeSolution;
  const displayedSolutions = isSinglePage ? [activeSolution] : solutions;

  return (
    <>
      <PageHero 
        eyebrow="Solutions" 
        title={isSinglePage ? activeSolution.title : "Training and technology solutions"} 
        intro={isSinglePage ? activeSolution.body.split('\n\n')[0] : "Ten solution areas covering simulation, electronics, integration and lifetime support."} 
        image={isSinglePage && activeSolution.image ? (activeSolution.image as any) : images.tank} 
      />
      
      {!isSinglePage && (
        <nav aria-label="Solutions" className="sticky top-[72px] z-30 border-b bg-background/95 backdrop-blur">
          <div className="container-x flex gap-2 overflow-x-auto py-3">
            {solutions.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:border-olive hover:text-olive">{s.title}</a>
            ))}
          </div>
        </nav>
      )}

      <div>
        {displayedSolutions.map((s, i) => {
          const paragraphs = s.body ? s.body.split('\n\n').filter(p => p.trim() !== '') : [];

          return (
            <section key={s.id} id={s.id} className={cn("scroll-mt-32 py-16 md:py-24", i % 2 ? "bg-mist" : "bg-background")}>
              <div className="container-x">
                
                {/* STANDARD LAYOUT: Image Left, Content Right */}
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
                  <div>
                    <SiteImage image={s.image as any} className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg" />
                  </div>
                  <div>
                    {!isSinglePage && <p className="eyebrow mb-3">{String(solutions.findIndex(sol => sol.id === s.id) + 1).padStart(2, "0")}</p>}
                    <h2 className="text-3xl font-bold md:text-4xl mb-6">{s.title}</h2>
                    
                    {/* Original Content */}
                    {paragraphs.map((para, index) => (
                      <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{para}</p>
                    ))}

                    {/* Custom Expertise Paragraph Added Below */}
                    {s.customExpertise && (
                      <p className="text-slate-600 leading-relaxed text-base mt-6">
                        {s.customExpertise}
                      </p>
                    )}

                  </div>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-12 pt-8 border-t border-border">
                  {s.productSlugs && s.productSlugs.length > 0 && (
                    <div className="mb-8">
                      <p className="text-sm font-semibold mb-4">Related products</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {s.productSlugs.map((slug) => {
                          const p = getProduct(slug);
                          return p ? (
                            <li key={slug}>
                              <Link 
                                to="/products/$slug" 
                                params={{ slug }} 
                                className="flex items-center justify-center text-center h-full rounded-lg border-2 border-transparent bg-navy px-4 py-6 text-sm font-semibold text-on-dark shadow-md transition-all hover:bg-olive hover:border-olive"
                              >
                                {p.name}
                              </Link>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}
                  <Link to="/contact" className="inline-block text-sm font-semibold text-olive hover:underline mt-4">Discuss this solution →</Link>
                </div>

              </div>
            </section>
          );
        })}
      </div>
      <FinalCta />
    </>
  );
}