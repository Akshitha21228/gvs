// import { createFileRoute, Link } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { SiteImage } from "@/components/site/SiteImage";
// import { FinalCta } from "@/components/site/FinalCta";
// import { images } from "@/data/images";
// import { activities, deliveredSystems, jointDevelopmentStatement } from "@/data/company";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About GVS — Green Vision Solutions, Hyderabad" },
//       { name: "description", content: "Green Vision Solutions designs, develops, manufactures, integrates and supports defence training simulators and simulation technologies from Hyderabad, India." },
//       { property: "og:title", content: "About Green Vision Solutions (GVS India)" },
//       { property: "og:description", content: "Company overview, business activities, design, manufacturing, integration and support capabilities." },
//     ],
//   }),
//   component: About,
// });

// const pillars = [
//   { title: "Design and development", body: "Training simulators, VR/AR and simulation-based combat training systems, combat medical care simulators and mission rehearsal systems." },
//   { title: "Manufacturing and integration", body: "Defence mockups, laser-based firing systems, weapon-mounted training systems, battlefield simulation systems, target systems and accessories." },
//   { title: "Defence electronics", body: "Electro-optical devices, surveillance, communication, tracking and sensor-based systems for allied military applications." },
//   { title: "Technical support", body: "Training, consultancy, technical support, AMC, repair, upgrade and system integration services." },
// ];

// function About() {
//   return (
//     <>
//       <PageHero eyebrow="About GVS" title="Green Vision Solutions" intro="A Hyderabad-based company engaged in defence training simulators, simulation technologies, system development, manufacturing, integration and support." image={images.terrain} />

//       <section className="py-20 md:py-28">
//         <div className="container-x grid gap-12 lg:grid-cols-2">
//           <div>
//             <p className="eyebrow">Company overview</p>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simulation technology for training</h2>
//             <p className="mt-6 leading-relaxed text-muted-foreground">
//               GVS works across the full lifecycle of training and simulation systems — from design and development through manufacture and integration to training, maintenance and upgrades.
//             </p>
//             <blockquote className="mt-8 border-l-4 border-olive bg-mist p-6">
//               <p className="font-medium">{jointDevelopmentStatement}</p>
//               <footer className="mt-2 text-xs text-muted-foreground">Statement from company records — subject to company verification for publication.</footer>
//             </blockquote>
//           </div>
//           <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
//         </div>
//       </section>

//       <section className="bg-mist py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Business activities</p>
//           <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">What GVS does</h2>
//           <ol className="mt-10 grid gap-4 md:grid-cols-2">
//             {activities.map((a, i) => (
//               <li key={i} className="flex gap-5 rounded-xl bg-card p-6 shadow-card">
//                 <span className="font-display text-2xl font-bold text-olive">{String(i + 1).padStart(2, "0")}</span>
//                 <p className="text-sm leading-relaxed">{a}</p>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="container-x">
//           <p className="eyebrow">Capabilities</p>
//           <h2 className="mt-3 text-3xl font-bold md:text-4xl">Design, manufacture, integration and support</h2>
//           <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {pillars.map((p) => (
//               <div key={p.title} className="border-t-2 border-olive pt-5">
//                 <h3 className="font-semibold">{p.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-16 rounded-2xl bg-navy p-8 text-on-dark md:p-12">
//             <h3 className="text-xl font-semibold">Systems designed, developed and delivered</h3>
//             <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//               {deliveredSystems.map((s) => <li key={s} className="text-sm text-on-dark-muted">— {s}</li>)}
//             </ul>
//             <Link to="/products" className="mt-8 inline-block text-sm font-semibold underline-offset-4 hover:underline">Browse the full product catalogue →</Link>
//           </div>
//         </div>
//       </section>
//       <FinalCta />
//     </>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Layers, Cpu, Wrench, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | GVS India" },
      { name: "description", content: "Learn about Green Vision Solutions: our mission, vision, and engineering approach to defence simulation." },
    ],
  }),
  component: About,
});

const approachSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    desc: "We work closely with defence organizations to understand specific training objectives, operational requirements and integration challenges. This ensures the proposed simulation solutions are aligned precisely with defined needs."
  },
  {
    number: "02",
    title: "Design & Engineering",
    desc: "Our engineering team combines mechanical design, embedded electronics, and software development to create robust training systems. We focus on realistic interfaces, accurate simulation models, and reliable hardware integration."
  },
  {
    number: "03",
    title: "Manufacturing & Integration",
    desc: "We manufacture defence mockups, physical interfaces and electronic components in-house. Our integration process ensures seamless communication between software, visual systems, and physical training equipment."
  },
  {
    number: "04",
    title: "Testing & Deployment",
    desc: "Every system undergoes rigorous testing before deployment. We handle installation, commissioning, and user training, ensuring the final solution operates reliably and meets the required training standards."
  }
];

function About() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative isolate flex min-h-[50vh] lg:min-h-[60vh] items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/heroabout.png" 
            alt="About GVS Background" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102235] via-[#102235]/90 to-[#102235]/40" />
        </div>
        
        <div className="container-x max-w-[1240px] mx-auto w-full py-20 relative z-10">
          <div className="max-w-[800px] animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1]">
              About Green Vision Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION (Asymmetric 40/60 Layout) */}
      <section className="bg-white py-[88px]">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
            
            {/* Left Column: Heading & Accent */}
            <div>
              <div className="sticky top-28">
                <h2 className="text-[36px] md:text-[42px] font-bold text-[#102235] leading-tight mb-6">
                  About Green Vision Solutions
                </h2>
                <div className="w-16 h-1 bg-[#2563EB]" />
              </div>
            </div>

            {/* Right Column: 3 Paragraphs */}
            <div className="space-y-6 text-[17px] leading-[1.7] text-[#526174]">
              <p>
                Green Vision Solutions (GVS) is a Hyderabad-based company engaged in the design, development and manufacture of defence training simulators and simulation technologies — together with system development, integration, maintenance and technical support.
              </p>
              <p>
                The company's activities include the design, development and manufacture of Infantry Weapon Training Simulators, Anti-Tank Guided Missile (ATGM) Simulators, mortar and rocket launcher simulators, tactical training simulators, and other associated defence simulation equipment.
              </p>
              <p>
                GVS has developed these systems as a Joint Development Partner of the Simulator Development Division. Our work brings together physical mockups, embedded control systems, simulation applications, visual environments and integrated hardware to create solutions aligned with defined training requirements, supporting operational readiness for defence and security personnel.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Dark Navy with Divider) */}
      <section className="bg-[#102235] py-[88px] text-white">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative">
            
            {/* Divider Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />

            {/* Mission */}
            <div className="md:pr-16 lg:pr-24">
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <Target className="size-6 text-[#8CCBFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[17px] leading-[1.7] text-slate-300">
                To provide advanced, reliable and realistic simulation solutions that enhance the training effectiveness, operational preparedness and safety of defence and security personnel through continuous innovation and engineering excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="md:pl-16 lg:pl-24">
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <Eye className="size-6 text-[#8CCBFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-[17px] leading-[1.7] text-slate-300">
                To be a trusted partner in defence training by delivering technology-driven simulation systems that support operational readiness, skill development and long-term capability building for armed forces.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (Numbered Rows) */}
      <section className="bg-[#F5F7FA] py-[88px]">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-[36px] md:text-[42px] font-bold text-[#102235]">
              Our Approach
            </h2>
          </div>

          <div className="border-t border-[#102235]/10">
            {approachSteps.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-[#102235]/10 transition-colors hover:bg-white/50"
              >
                {/* Number */}
                <div className="md:w-24 shrink-0">
                  <span className="text-xl font-bold text-[#2563EB]">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
                  <h3 className="text-xl font-bold text-[#102235]">
                    {step.title}
                  </h3>
                  <p className="text-[17px] leading-[1.7] text-[#526174]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
