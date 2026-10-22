// import { createFileRoute, Link } from "@tanstack/react-router";
// import { CheckCircle2 } from "lucide-react";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { activities, deliveredSystems } from "@/data/company";

// export const Route = createFileRoute("/projects")({
//   head: () => ({
//     meta: [
//       { title: "Projects & Capabilities | GVS India" },
//       { name: "description", content: "Training and simulation systems designed, developed and delivered by Green Vision Solutions, with GVS project capabilities." },
//       { property: "og:title", content: "Projects & Capabilities — GVS India" },
//       { property: "og:description", content: "Defence training and simulation systems delivered by GVS." },
//     ],
//   }),
//   component: Projects,
// });

// /** Gallery slots: replace `image` with approved GVS photographs in src/data/images.ts. */
// const gallery = [
//   { title: "Product photographs", image: { src: null, alt: "Approved GVS product photograph awaited", illustrative: false } },
//   { title: "Training set-ups", image: { src: null, alt: "Approved GVS training set-up photograph awaited", illustrative: false } },
//   { title: "Demonstrations", image: { src: null, alt: "Approved GVS demonstration photograph awaited", illustrative: false } },
//   { title: "Completed installations", image: { src: null, alt: "Approved GVS installation photograph awaited", illustrative: false } },
// ];

// function Projects() {
//   return (
//     <>
//       <PageHero eyebrow="Projects and capabilities" title="Systems designed, developed and delivered" intro="GVS has successfully designed, developed and delivered a range of defence training and simulation systems." image={images.mechInf} />
//       <section className="py-20 md:py-28">
//         <div className="container-x">
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {deliveredSystems.map((s) => (
//               <div key={s} className="flex gap-3 rounded-xl border p-5">
//                 <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
//                 <span className="font-medium">{s}</span>
//               </div>
//             ))}
//           </div>
//           <p className="mt-6 text-sm text-muted-foreground">Source: company records. Customer names and project details are not published.</p>
//         </div>
//       </section>

//       <section className="bg-navy py-20 text-on-dark md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Gallery</p>
//           <h2 className="mt-3 text-3xl font-bold md:text-4xl">Project gallery</h2>
//           <p className="mt-4 max-w-2xl text-on-dark-muted">This gallery is reserved for approved GVS photographs of products, training set-ups, demonstrations and completed projects. Placeholders are shown until photographs are released.</p>
//           <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {gallery.map((g) => (
//               <figure key={g.title}>
//                 <SiteImage image={g.image} className="aspect-square rounded-xl border border-line-dark" />
//                 <figcaption className="mt-3 text-sm text-on-dark-muted">{g.title}</figcaption>
//               </figure>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div>
//             <p className="eyebrow">Project execution</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl">Capabilities we bring to each project</h2>
//             <ul className="mt-8 space-y-4">
//               {activities.slice(2).map((a) => <li key={a} className="border-l-2 border-olive pl-4 text-sm leading-relaxed text-muted-foreground">{a}</li>)}
//             </ul>
//             <Link to="/contact" className="mt-8 inline-block font-semibold text-olive hover:underline">Discuss a project →</Link>
//           </div>
//           <SiteImage image={images.sa} className="aspect-[4/3] rounded-2xl" />
//         </div>
//       </section>
//       <FinalCta />
//     </>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SiteImage } from "@/components/site/SiteImage";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/images";
import { activities, deliveredSystems } from "@/data/company";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Capabilities | GVS India" },
      { name: "description", content: "Training and simulation systems designed, developed and delivered by Green Vision Solutions, with GVS project capabilities." },
      { property: "og:title", content: "Projects & Capabilities — GVS India" },
      { property: "og:description", content: "Defence training and simulation systems delivered by GVS." },
    ],
  }),
  component: Projects,
});

/** Gallery slots: replace `image` with approved GVS photographs in src/data/images.ts. */
const gallery = [
  { title: "Product photographs", image: { src: null, alt: "Approved GVS product photograph awaited", illustrative: false } },
  { title: "Training set-ups", image: { src: null, alt: "Approved GVS training set-up photograph awaited", illustrative: false } },
  { title: "Demonstrations", image: { src: null, alt: "Approved GVS demonstration photograph awaited", illustrative: false } },
  { title: "Completed installations", image: { src: null, alt: "Approved GVS installation photograph awaited", illustrative: false } },
];

function Projects() {
  return (
    <>
      <PageHero 
        eyebrow="Projects and capabilities" 
        title="Systems designed, developed and delivered" 
        intro="GVS has successfully designed, developed and delivered a range of defence training and simulation systems." 
        image={images.mechInf} 
      />
      
      {/* DELIVERED SYSTEMS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy mb-8">Delivered Systems</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliveredSystems.map((s) => (
              <div key={s} className="flex gap-3 rounded-xl border border-border p-5 shadow-sm bg-white">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#8d9e6b]" aria-hidden />
                <span className="font-medium text-slate-700">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Source: company records. Customer names and project details are not published.</p>
        </div>
      </section>

      {/* GALLERY (Navy Background) */}
      <section className="bg-navy py-20 text-on-dark md:py-28">
        <div className="container-x">
          <p className="text-xs font-bold tracking-widest text-[#A8B879] uppercase mb-3">Gallery</p>
          <h2 className="text-3xl font-bold md:text-4xl text-[#F1F5F9]">Project gallery</h2>
          <p className="mt-4 max-w-2xl text-[#CBD5E1]">This gallery is reserved for approved GVS photographs of products, training set-ups, demonstrations and completed projects. Placeholders are shown until photographs are released.</p>
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <figure key={g.title} className="group">
                {/* Styled Card for Gallery Image */}
                <div className="aspect-square rounded-2xl border border-[#334155] bg-[#0D1D2D] overflow-hidden flex items-center justify-center relative shadow-lg">
                  <SiteImage image={g.image} className="w-full h-full object-cover opacity-80" />
                  {/* Optional Overlay for "Placeholder" feel */}
                  <div className="absolute inset-0 bg-[#0D1D2D]/50 flex items-center justify-center group-hover:bg-[#0D1D2D]/20 transition-all">
                     <span className="text-[#A8B879] font-medium text-sm">Image Awaited</span>
                  </div>
                </div>
                <figcaption className="mt-4 text-sm font-medium text-[#CBD5E1] text-center">{g.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#8d9e6b] uppercase mb-3">Project execution</p>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Capabilities we bring to each project</h2>
            <ul className="mt-8 space-y-4">
              {activities.slice(2).map((a) => (
                <li key={a} className="border-l-2 border-[#8d9e6b] pl-4 text-sm leading-relaxed text-slate-600">
                  {a}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-block font-semibold text-[#8d9e6b] hover:underline">Discuss a project →</Link>
          </div>
          <SiteImage image={images.sa} className="aspect-[4/3] rounded-2xl shadow-lg border border-border" />
        </div>
      </section>
      
      <FinalCta />
    </>
  );
}