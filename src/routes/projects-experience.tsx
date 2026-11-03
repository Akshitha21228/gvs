// import { useState } from "react";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import { SiteImage } from "@/components/site/SiteImage";

// export const Route = createFileRoute("/projects-experience")({
//   head: () => ({
//     meta: [
//       { title: "Projects & Experience | GVS India" },
//       { name: "description", content: "GVS has successfully designed, developed and delivered defence training and simulation systems across several application areas." },
//     ],
//   }),
//   component: ProjectsExperience,
// });

// const projects = [
//   { 
//     id: "01", 
//     title: "Infantry Weapon Training Simulators", 
//     image: "/infantary(2).png", 
//     alt: "Infantry Weapon Training Simulator",
//     slug: "tetherless-infantry-weapon-training-simulator"
//   },
//   { 
//     id: "02", 
//     title: "ATGM Simulators", 
//     image: "/atgmsimulator.png", 
//     alt: "ATGM Simulator",
//     slug: "atgm-ground-launcher-simulator"
//   },
//   { 
//     id: "03", 
//     title: "VROP Simulators", 
//     image: "/vrop.png", 
//     alt: "VROP Simulator",
//     slug: "vrop-tiioe-simulator"
//   },
//   { 
//     id: "04", 
//     title: "LORROS Simulators", 
//     image: "/lors.png", 
//     alt: "LORROS Simulator",
//     slug: "lorros-simulator"
//   },
//   { 
//     id: "05", 
//     title: "81mm Mortar Simulators", 
//     image: "/81 (2).png", 
//     alt: "81mm Mortar Simulator",
//     slug: "81mm-mortar-firing-simulator"
//   },
//   { 
//     id: "06", 
//     title: "VR-Based Rocket Launcher Simulators", 
//     image: "/vrweapon.png", 
//     alt: "VR Rocket Launcher Simulator",
//     slug: "vr-rocket-launcher-simulator"
//   },
//   { 
//     id: "07", 
//     title: "VR-Based Combat Medical Care Simulators", 
//     image: "/hos.png", 
//     alt: "VR Combat Medical Care Simulator",
//     slug: "vr-combat-medical-care-simulator"
//   },
//   { 
//     id: "08", 
//     title: "Tactical Tank Training Simulators", 
//     image: "/tan.png", 
//     alt: "Tactical Tank Training Simulator",
//     slug: "tank-troop-tactical-training-simulator"
//   },
// ];

// function ProjectsExperience() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   // Use fallback to projects[0] to satisfy TypeScript's strict null checks
//   const activeProject = projects[activeIndex] || projects[0];

//   return (
//     <div className="bg-[#F3F6FA] min-h-screen">
      
//       {/* 1. HERO SECTION */}
//       <section 
//         className="relative bg-[#0E223B] py-20 md:py-28 overflow-hidden"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(100, 145, 190, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(100, 145, 190, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px, 40px 40px"
//         }}
//       >
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
//               Projects & Experience
//             </p>
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
//               Delivered Systems. Applied Engineering.
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
//               GVS has successfully designed, developed and delivered defence training and simulation systems across several application areas.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. INTERACTIVE FEATURED-PROJECT GALLERY */}
//       <section className="py-16 md:py-24">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            
//             {/* LEFT SIDE: FEATURED IMAGE */}
//             <div className="bg-white rounded-[16px] border border-[#DCE5EE] shadow-sm p-3 md:p-4 order-2 lg:order-1">
//               <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#F3F6FA]">
//                 <SiteImage 
//                   image={{ src: activeProject.image, alt: activeProject.alt, illustrative: true }} 
//                   className="absolute inset-0 w-full h-full object-contain" 
//                 />
//                 <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-medium text-white/90">
//                   Conceptual Illustration
//                 </div>
//               </div>
              
//               <div className="px-2 pt-6 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-2">
//                     Featured System
//                   </p>
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#102B4E]">
//                     {activeProject.title}
//                   </h3>
//                 </div>
                
//                 {activeProject.slug && (
//                   <Link 
//                     to="/products/$slug" 
//                     params={{ slug: activeProject.slug }}
//                     className="inline-flex items-center gap-2 text-sm font-semibold text-[#1679B4] hover:text-[#102B4E] transition-colors shrink-0"
//                   >
//                     View System Details <ExternalLink className="size-4" />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* RIGHT SIDE: PROJECT SELECTION */}
//             <div className="order-1 lg:order-2 bg-white rounded-[16px] border border-[#DCE5EE] shadow-sm overflow-hidden">
//               <div className="p-6 md:p-8 border-b border-[#DCE5EE] bg-[#FAFBFC]">
//                 <h2 className="text-lg font-bold text-[#102B4E]">
//                   Select a System
//                 </h2>
//               </div>
              
//               <div className="flex flex-col">
//                 {projects.map((project, index) => {
//                   const isActive = activeIndex === index;
//                   return (
//                     <button
//                       key={project.id}
//                       onClick={() => setActiveIndex(index)}
//                       className={`w-full flex items-center gap-4 px-6 py-4 text-left border-b border-[#DCE5EE] last:border-b-0 transition-all duration-200 ${
//                         isActive 
//                           ? 'bg-[#102B4E] border-l-4 border-l-[#1679B4]' 
//                           : 'bg-white hover:bg-[#F3F6FA] border-l-4 border-l-transparent'
//                       }`}
//                     >
//                       <span className={`text-sm font-bold ${isActive ? 'text-[#8CCBFF]' : 'text-[#1679B4]/40'}`}>
//                         {project.id}
//                       </span>
//                       <span className={`font-semibold text-[15px] leading-snug ${isActive ? 'text-white' : 'text-[#102B4E]'}`}>
//                         {project.title}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3. CLOSING CTA */}
//       <section className="bg-[#0E223B] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Discuss Your Next Simulation Project
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to discuss training systems, engineering integration and project requirements.
//           </p>
//           <Link 
//             to="/contact" 
//             className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1679B4] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg"
//           >
//             Discuss a Project <ArrowRight className="ml-2 size-5" />
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// }
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteImage } from "@/components/site/SiteImage";

export const Route = createFileRoute("/projects-experience")({
  head: () => ({
    meta: [
      { title: "Projects & Experience | GVS India" },
      { name: "description", content: "GVS has successfully designed, developed and delivered defence training and simulation systems across several application areas." },
    ],
  }),
  component: ProjectsExperience,
});

const projects = [
  { 
    id: "01", 
    title: "Infantry Weapon Training Simulators", 
    image: "/infantary(2).png", 
    alt: "Infantry Weapon Training Simulator",
    slug: "tetherless-infantry-weapon-training-simulator"
  },
  { 
    id: "02", 
    title: "ATGM Simulators", 
    image: "/atgmsimulator.png", 
    alt: "ATGM Simulator",
    slug: "atgm-ground-launcher-simulator"
  },
  { 
    id: "03", 
    title: "VROP Simulators", 
    image: "/vrop.png", 
    alt: "VROP Simulator",
    slug: "vrop-tiioe-simulator"
  },
  { 
    id: "04", 
    title: "LORROS Simulators", 
    image: "/lors.png", 
    alt: "LORROS Simulator",
    slug: "lorros-simulator"
  },
  { 
    id: "05", 
    title: "81mm Mortar Simulators", 
    image: "/81 (2).png", 
    alt: "81mm Mortar Simulator",
    slug: "81mm-mortar-firing-simulator"
  },
  { 
    id: "06", 
    title: "VR-Based Rocket Launcher Simulators", 
    image: "/vrweapon.png", 
    alt: "VR Rocket Launcher Simulator",
    slug: "vr-rocket-launcher-simulator"
  },
  { 
    id: "07", 
    title: "VR-Based Combat Medical Care Simulators", 
    image: "/hos.png", 
    alt: "VR Combat Medical Care Simulator",
    slug: "vr-combat-medical-care-simulator"
  },
  { 
    id: "08", 
    title: "Tactical Tank Training Simulators", 
    image: "/tan.png", 
    alt: "Tactical Tank Training Simulator",
    slug: "tank-troop-tactical-training-simulator"
  },
];

// Define the type for a single project
type ProjectType = typeof projects[0];

function ProjectsExperience() {
  // Explicitly type the state to ensure TypeScript knows it's always defined
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Safe fallback to guarantee a defined project
  const activeProject: ProjectType = projects[activeIndex] || projects[0];

  return (
    <div className="bg-[#F3F6FA] min-h-screen">
      
      {/* 1. HERO SECTION WITH project.png BACKGROUND */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden bg-[#0E223B]"
        style={{
          backgroundImage: "url('/project.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Lightened Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0E223B]/60" />
        
        {/* Technical Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 145, 190, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 145, 190, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px"
          }}
        />

        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
              Projects & Experience
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              Delivered Systems. Applied Engineering.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              GVS has successfully designed, developed and delivered defence training and simulation systems across several application areas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE FEATURED-PROJECT GALLERY */}
      <section className="py-16 md:py-24">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            
            {/* LEFT SIDE: FEATURED IMAGE */}
            <div className="bg-white rounded-[16px] border border-[#DCE5EE] shadow-sm p-3 md:p-4 order-2 lg:order-1">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#F3F6FA]">
                <SiteImage 
                  image={{ src: activeProject.image, alt: activeProject.alt, illustrative: true }} 
                  className="absolute inset-0 w-full h-full object-contain" 
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-medium text-white/90">
                  Conceptual Illustration
                </div>
              </div>
              
              <div className="px-2 pt-6 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-2">
                    Featured System
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#102B4E]">
                    {activeProject.title}
                  </h3>
                </div>
                
                <Link 
                  to="/products/$slug" 
                  params={{ slug: activeProject.slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1679B4] hover:text-[#102B4E] transition-colors shrink-0"
                >
                  View System Details <ExternalLink className="size-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: PROJECT SELECTION */}
            <div className="order-1 lg:order-2 bg-white rounded-[16px] border border-[#DCE5EE] shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-[#DCE5EE] bg-[#FAFBFC]">
                <h2 className="text-lg font-bold text-[#102B4E]">
                  Select a System
                </h2>
              </div>
              
              <div className="flex flex-col">
                {projects.map((project, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full flex items-center gap-4 px-6 py-4 text-left border-b border-[#DCE5EE] last:border-b-0 transition-all duration-200 ${
                        isActive 
                          ? 'bg-[#102B4E] border-l-4 border-l-[#1679B4]' 
                          : 'bg-white hover:bg-[#F3F6FA] border-l-4 border-l-transparent'
                      }`}
                    >
                      <span className={`text-sm font-bold ${isActive ? 'text-[#8CCBFF]' : 'text-[#1679B4]/40'}`}>
                        {project.id}
                      </span>
                      <span className={`font-semibold text-[15px] leading-snug ${isActive ? 'text-white' : 'text-[#102B4E]'}`}>
                        {project.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className="bg-[#0E223B] py-20 text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discuss Your Next Simulation Project
          </h2>
          <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
            Connect with GVS to discuss training systems, engineering integration and project requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1679B4] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg"
          >
            Discuss a Project <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}