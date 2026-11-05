import { ResponsiveImage } from "@/components/site/ResponsiveImage";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Code2, Cpu, Box, Layers, Settings, Wrench, ArrowRight } from "lucide-react";

// export const Route = createFileRoute("/engineering-capabilities")({
//   head: () => ({
//     meta: [
//       { title: "Engineering Capabilities | GVS India" },
//       { name: "description", content: "Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support." },
//     ],
//   }),
//   component: EngineeringCapabilities,
// });

// const capabilities = [
//   {
//     number: "01",
//     title: "Simulation Software & Applications",
//     desc: "Development of PC-based applications, model-based software and embedded applications that support simulation and training systems.",
//     icon: <Code2 className="size-6" />
//   },
//   {
//     number: "02",
//     title: "Embedded Systems & Electronics",
//     desc: "Design and integration of embedded control electronics, firmware, interface electronics and application-specific system components.",
//     icon: <Cpu className="size-6" />
//   },
//   {
//     number: "03",
//     title: "VR & 3D Simulation",
//     desc: "Development and integration of immersive virtual environments and 3D simulated scenes for approved training use cases.",
//     icon: <Box className="size-6" />
//   },
//   {
//     number: "04",
//     title: "Hardware & Mockup Integration",
//     desc: "Integration of physical mockups, replica equipment, controls, displays and software-driven training interfaces.",
//     icon: <Layers className="size-6" />
//   },
//   {
//     number: "05",
//     title: "System Integration & Testing",
//     desc: "Integration of hardware and software subsystems, functional verification, troubleshooting and project-specific acceptance support.",
//     icon: <Settings className="size-6" />
//   },
//   {
//     number: "06",
//     title: "Maintenance, Upgrades & Technical Support",
//     desc: "Support services may include installation, repair, upgrades, maintenance and technical assistance according to contract scope.",
//     icon: <Wrench className="size-6" />
//   }
// ];

// function EngineeringCapabilities() {
//   return (
//     <div className="bg-[#F3F6FA] min-h-screen">
      
//       {/* SECTION 1: HERO */}
//       <section 
//         className="relative bg-[#10243D] py-20 md:py-28 overflow-hidden"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at top right, rgba(22, 118, 185, 0.15) 0%, transparent 40%),
//             linear-gradient(rgba(100, 145, 190, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(100, 145, 190, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "100% 100%, 40px 40px, 40px 40px"
//         }}
//       >
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
//               Engineering Capabilities
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
//               Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: CAPABILITIES GRID */}
//       <section className="py-20 md:py-28">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             {capabilities.map((cap, index) => (
//               <div 
//                 key={index}
//                 className="group flex flex-col bg-white rounded-[16px] border border-[#DFE7EF] p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex size-12 items-center justify-center rounded-xl bg-[#F3F6FA] text-[#1679B4]">
//                     {cap.icon}
//                   </div>
//                   <span className="text-2xl font-bold text-[#DFE7EF]">
//                     {cap.number}
//                   </span>
//                 </div>
                
//                 <h2 className="text-xl font-bold text-[#102B4E] mb-3 leading-snug">
//                   {cap.title}
//                 </h2>
//                 <p className="text-[#52647A] leading-relaxed flex-grow">
//                   {cap.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: CLOSING CTA */}
//       <section className="bg-[#10243D] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Engineering Solutions Built Around Your Requirements
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to discuss your engineering, simulation, integration and technical support needs.
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

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";

// export const Route = createFileRoute("/engineering-capabilities")({
//   head: () => ({
//     meta: [
//       { title: "Engineering Capabilities | GVS India" },
//       { name: "description", content: "Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support." },
//     ],
//   }),
//   component: EngineeringCapabilities,
// });

// const capabilities = [
//   {
//     number: "01",
//     category: "Software Engineering",
//     title: "Simulation Software & Applications",
//     desc: "Development of PC-based applications, model-based software and embedded applications that support simulation and training systems.",
//     image: "/software-lab.jpg", // Replace with your actual image
//     alt: "Engineering software development laboratory",
//     bg: "bg-[#F3F6FA]"
//   },
//   {
//     number: "02",
//     category: "Embedded Systems",
//     title: "Embedded Systems & Electronics",
//     desc: "Design and integration of embedded control electronics, firmware, interface electronics and application-specific system components.",
//     image: "/electronics-lab.jpg", // Replace with your actual image
//     alt: "Electronics engineering laboratory",
//     bg: "bg-white"
//   },
//   {
//     number: "03",
//     category: "Immersive Technology",
//     title: "VR & 3D Simulation",
//     desc: "Development and integration of immersive virtual environments and 3D simulated scenes for approved training use cases.",
//     image: "/vr-lab.jpg", // Replace with your actual image
//     alt: "Virtual reality simulation laboratory",
//     bg: "bg-[#F3F6FA]"
//   },
//   {
//     number: "04",
//     category: "Hardware Engineering",
//     title: "Hardware & Mockup Integration",
//     desc: "Integration of physical mockups, replica equipment, controls, displays and software-driven training interfaces.",
//     image: "/hardware-lab.jpg", // Replace with your actual image
//     alt: "Simulator engineering laboratory with physical mockups",
//     bg: "bg-white"
//   },
//   {
//     number: "05",
//     category: "System Validation",
//     title: "System Integration & Testing",
//     desc: "Integration of hardware and software subsystems, functional verification, troubleshooting and project-specific acceptance support.",
//     image: "/testing-lab.jpg", // Replace with your actual image
//     alt: "Engineering testing laboratory",
//     bg: "bg-[#F3F6FA]"
//   },
//   {
//     number: "06",
//     category: "Lifecycle Support",
//     title: "Maintenance, Upgrades & Technical Support",
//     desc: "Support services may include installation, repair, upgrades, maintenance and technical assistance according to contract scope.",
//     image: "/support-lab.jpg", // Replace with your actual image
//     alt: "Electronics maintenance and technical support laboratory",
//     bg: "bg-white"
//   }
// ];

// function EngineeringCapabilities() {
//   return (
//     <div className="bg-[#F3F6FA] min-h-screen">
      
//       {/* 1. PREMIUM HERO */}
//       <section 
//         className="relative bg-[#0E223B] py-20 md:py-28 overflow-hidden"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(100, 145, 190, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(100, 145, 190, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "44px 44px, 44px 44px"
//         }}
//       >
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
//               GVS / Engineering Expertise
//             </p>
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
//               Engineering Capabilities
//             </h1>
//             <div className="w-16 h-1 bg-[#1679B4] mb-6" />
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
//               Combining software, electronics, immersive technology and system integration to support specialized training and engineering requirements.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. ALTERNATING ZIG-ZAG CAPABILITIES */}
//       <div className="flex flex-col">
//         {capabilities.map((cap, index) => {
//           const isEven = index % 2 === 0;
//           return (
//             <section key={index} className={`${cap.bg} py-16 md:py-24 overflow-hidden`}>
//               <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                  
//                   {/* Image Column */}
//                   <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
//                     <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-xl bg-slate-200">
//                       <img 
//                         src={cap.image} 
//                         alt={cap.alt} 
//                         className="absolute inset-0 w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                       {/* Subtle overlay to ensure text if needed */}
//                       <div className="absolute inset-0 bg-[#0E223B]/5" />
//                     </div>
//                   </div>

//                   {/* Content Column */}
//                   <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
//                     <div className="flex items-center gap-4 mb-4">
//                       <span className="text-4xl font-bold text-[#1679B4]/20">{cap.number}</span>
//                       <span className="text-xs font-bold tracking-widest text-[#1679B4] uppercase">
//                         {cap.category}
//                       </span>
//                     </div>
                    
//                     <h2 className="text-2xl md:text-[32px] font-bold text-[#102B4E] leading-tight mb-4">
//                       {cap.title}
//                     </h2>
                    
//                     <div className="w-12 h-1 bg-[#1679B4] mb-6" />
                    
//                     <p className="text-[17px] md:text-[18px] text-[#52647A] leading-relaxed">
//                       {cap.desc}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </section>
//           );
//         })}
//       </div>

//       {/* 3. CLOSING CTA */}
//       <section className="bg-[#0E223B] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Engineering Solutions Built Around Your Requirements
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to discuss your simulation, electronics, integration and technical support requirements.
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
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";

// export const Route = createFileRoute("/engineering-capabilities")({
//   head: () => ({
//     meta: [
//       { title: "Engineering Capabilities | GVS India" },
//       { name: "description", content: "Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support." },
//     ],
//   }),
//   component: EngineeringCapabilities,
// });

// const capabilities = [
//   {
//     number: "01",
//     category: "Software Engineering",
//     title: "Simulation Software & Applications",
//     desc: "Development of PC-based applications, model-based software and embedded applications that support simulation and training systems.",
//     image: "/software-lab.jpg", 
//     alt: "Engineering software development laboratory",
//     bg: "bg-[#EAF0F6]" // Main background (Even)
//   },
//   {
//     number: "02",
//     category: "Embedded Systems",
//     title: "Embedded Systems & Electronics",
//     desc: "Design and integration of embedded control electronics, firmware, interface electronics and application-specific system components.",
//     image: "/electronics-lab.jpg", 
//     alt: "Electronics engineering laboratory",
//     bg: "bg-[#F8FAFC]" // Alternate background (Odd)
//   },
//   {
//     number: "03",
//     category: "Immersive Technology",
//     title: "VR & 3D Simulation",
//     desc: "Development and integration of immersive virtual environments and 3D simulated scenes for approved training use cases.",
//     image: "/vr-lab.png", 
//     alt: "Virtual reality simulation laboratory",
//     bg: "bg-[#EAF0F6]" 
//   },
//   {
//     number: "04",
//     category: "Hardware Engineering",
//     title: "Hardware & Mockup Integration",
//     desc: "Integration of physical mockups, replica equipment, controls, displays and software-driven training interfaces.",
//     image: "/hardware-lab.jpg", 
//     alt: "Simulator engineering laboratory with physical mockups",
//     bg: "bg-[#F8FAFC]"
//   },
//   {
//     number: "05",
//     category: "System Validation",
//     title: "System Integration & Testing",
//     desc: "Integration of hardware and software subsystems, functional verification, troubleshooting and project-specific acceptance support.",
//     image: "/testing-lab.jpg", 
//     alt: "Engineering testing laboratory",
//     bg: "bg-[#EAF0F6]"
//   },
//   {
//     number: "06",
//     category: "Lifecycle Support",
//     title: "Maintenance, Upgrades & Technical Support",
//     desc: "Support services may include installation, repair, upgrades, maintenance and technical assistance according to contract scope.",
//     image: "/support-lab.jpg", 
//     alt: "Electronics maintenance and technical support laboratory",
//     bg: "bg-[#F8FAFC]"
//   }
// ];

// function EngineeringCapabilities() {
//   return (
//     <div className="bg-[#EAF0F6] min-h-screen">
      
//       {/* 1. PREMIUM HERO (with subtle technical grid) */}
//       <section 
//         className="relative bg-[#10243D] py-20 md:py-28 overflow-hidden"
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
//               GVS / Engineering Expertise
//             </p>
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
//               Engineering Capabilities
//             </h1>
//             <div className="w-16 h-1 bg-[#1679B4] mb-6" />
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
//               Combining software, electronics, immersive technology and system integration to support specialized training and engineering requirements.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. ALTERNATING ZIG-ZAG CAPABILITIES */}
//       <div className="flex flex-col">
//         {capabilities.map((cap, index) => {
//           const isEven = index % 2 === 0;
//           return (
//             <section key={index} className={`${cap.bg} py-16 md:py-24 overflow-hidden`}>
//               <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                  
//                   {/* Image Column */}
//                   <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
//                     <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-lg bg-slate-200">
//                       <img 
//                         src={cap.image} 
//                         alt={cap.alt} 
//                         className="absolute inset-0 w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>

//                   {/* Content Column */}
//                   <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
//                     <div className="flex items-center gap-4 mb-4">
//                       <span className="text-4xl font-bold text-[#1679B4]/20">{cap.number}</span>
//                       <span className="text-xs font-bold tracking-widest text-[#1679B4] uppercase">
//                         {cap.category}
//                       </span>
//                     </div>
                    
//                     <h2 className="text-2xl md:text-[32px] font-bold text-[#102B4E] leading-tight mb-4">
//                       {cap.title}
//                     </h2>
                    
//                     <div className="w-12 h-1 bg-[#1679B4] mb-6" />
                    
//                     <p className="text-[17px] md:text-[18px] text-[#52647A] leading-relaxed">
//                       {cap.desc}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </section>
//           );
//         })}
//       </div>

//       {/* 3. CLOSING CTA */}
//       <section className="bg-[#10243D] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Engineering Solutions Built Around Your Requirements
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to discuss your simulation, electronics, integration and technical support requirements.
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

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";

// export const Route = createFileRoute("/engineering-capabilities")({
//   head: () => ({
//     meta: [
//       { title: "Engineering Capabilities | GVS India" },
//       { name: "description", content: "Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support." },
//     ],
//   }),
//   component: EngineeringCapabilities,
// });

// const capabilities = [
//   {
//     number: "01",
//     category: "Software Engineering",
//     title: "Simulation Software & Applications",
//     desc: "Development of PC-based applications, model-based software and embedded applications that support simulation and training systems.",
//     image: "/software-lab.jpg", 
//     alt: "Engineering software development laboratory",
//     bg: "bg-[#EAF0F6]"
//   },
//   {
//     number: "02",
//     category: "Embedded Systems",
//     title: "Embedded Systems & Electronics",
//     desc: "Design and integration of embedded control electronics, firmware, interface electronics and application-specific system components.",
//     image: "/electronics-lab.jpg", 
//     alt: "Electronics engineering laboratory",
//     bg: "bg-[#F8FAFC]"
//   },
//   {
//     number: "03",
//     category: "Immersive Technology",
//     title: "VR & 3D Simulation",
//     desc: "Development and integration of immersive virtual environments and 3D simulated scenes for approved training use cases.",
//     image: "/vr-lab.png", 
//     alt: "Virtual reality simulation laboratory",
//     bg: "bg-[#EAF0F6]" 
//   },
//   {
//     number: "04",
//     category: "Hardware Engineering",
//     title: "Hardware & Mockup Integration",
//     desc: "Integration of physical mockups, replica equipment, controls, displays and software-driven training interfaces.",
//     image: "/hardware-lab.jpg", 
//     alt: "Simulator engineering laboratory with physical mockups",
//     bg: "bg-[#F8FAFC]"
//   },
//   {
//     number: "05",
//     category: "System Validation",
//     title: "System Integration & Testing",
//     desc: "Integration of hardware and software subsystems, functional verification, troubleshooting and project-specific acceptance support.",
//     image: "/testing-lab.jpg", 
//     alt: "Engineering testing laboratory",
//     bg: "bg-[#EAF0F6]"
//   },
//   {
//     number: "06",
//     category: "Lifecycle Support",
//     title: "Maintenance, Upgrades & Technical Support",
//     desc: "Support services may include installation, repair, upgrades, maintenance and technical assistance according to contract scope.",
//     image: "/support-lab.jpg", 
//     alt: "Electronics maintenance and technical support laboratory",
//     bg: "bg-[#F8FAFC]"
//   }
// ];

// function EngineeringCapabilities() {
//   return (
//     <div className="bg-[#EAF0F6] min-h-screen">
      
//       {/* 1. PREMIUM HERO WITH enghero.png BACKGROUND */}
//       <section 
//         className="relative flex items-center justify-start overflow-hidden bg-[#10243D] h-[430px] md:h-[480px] lg:h-[500px]"
//         style={{
//           backgroundImage: "url('/enghero.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Subtle Left-to-Right Gradient for Text Readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#10243D]/90 via-[#10243D]/60 to-transparent w-full lg:w-3/4 pointer-events-none" />

//         {/* Content Container */}
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//           <div className="max-w-[550px]">
            
//             {/* Eyebrow with Accent Line */}
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-8 h-px bg-[#8CCBFF]" />
//               <p className="text-xs font-semibold tracking-[2px] text-[#8CCBFF] uppercase">
//                 Engineering Expertise
//               </p>
//             </div>
            
//             {/* Heading */}
//             <h1 className="text-[34px] md:text-[52px] lg:text-[58px] font-bold text-white leading-[1.1] mb-6">
//               Engineering Capabilities
//             </h1>
            
//             {/* Description */}
//             <p className="text-[17px] md:text-[18px] text-[#E2E8F0] leading-[1.7]">
//               Combining software, electronics, immersive technology and system integration to support specialized training and engineering requirements.
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* 2. ALTERNATING ZIG-ZAG CAPABILITIES (Unchanged) */}
//       <div className="flex flex-col">
//         {capabilities.map((cap, index) => {
//           const isEven = index % 2 === 0;
//           return (
//             <section key={index} className={`${cap.bg} py-16 md:py-24 overflow-hidden`}>
//               <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                  
//                   {/* Image Column */}
//                   <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
//                     <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-lg bg-slate-200">
//                       <img 
//                         src={cap.image} 
//                         alt={cap.alt} 
//                         className="absolute inset-0 w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>

//                   {/* Content Column */}
//                   <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
//                     <div className="flex items-center gap-4 mb-4">
//                       <span className="text-4xl font-bold text-[#1679B4]/20">{cap.number}</span>
//                       <span className="text-xs font-bold tracking-widest text-[#1679B4] uppercase">
//                         {cap.category}
//                       </span>
//                     </div>
                    
//                     <h2 className="text-2xl md:text-[32px] font-bold text-[#102B4E] leading-tight mb-4">
//                       {cap.title}
//                     </h2>
                    
//                     <div className="w-12 h-1 bg-[#1679B4] mb-6" />
                    
//                     <p className="text-[17px] md:text-[18px] text-[#52647A] leading-relaxed">
//                       {cap.desc}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </section>
//           );
//         })}
//       </div>

//       {/* 3. CLOSING CTA (Unchanged) */}
//       <section className="bg-[#10243D] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Engineering Solutions Built Around Your Requirements
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Connect with GVS to discuss your simulation, electronics, integration and technical support requirements.
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
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/engineering-capabilities")({
  head: () => ({
    meta: [
      { title: "Engineering Capabilities | GVS India" },
      { name: "description", content: "Integrated expertise across simulation software, embedded electronics, immersive technology, hardware integration and lifecycle support." },
    ],
  }),
  component: EngineeringCapabilities,
});

const capabilities = [
  {
    number: "01",
    category: "Software Engineering",
    title: "Simulation Software & Applications",
    desc: "Development of PC-based applications, model-based software and embedded applications that support simulation and training systems.",
    image: "/software-lab.jpg", // Updated to .png
    alt: "Engineering software development laboratory",
    bg: "bg-[#EAF0F6]"
  },
  {
    number: "02",
    category: "Embedded Systems",
    title: "Embedded Systems & Electronics",
    desc: "Design and integration of embedded control electronics, firmware, interface electronics and application-specific system components.",
    image: "/electronics-lab.jpg", 
    alt: "Electronics engineering laboratory",
    bg: "bg-[#F8FAFC]"
  },
  {
    number: "03",
    category: "Immersive Technology",
    title: "VR & 3D Simulation",
    desc: "Development and integration of immersive virtual environments and 3D simulated scenes for approved training use cases.",
    image: "/vr-lab.png", // Updated to .png
    alt: "Virtual reality simulation laboratory",
    bg: "bg-[#EAF0F6]" 
  },
  {
    number: "04",
    category: "Hardware Engineering",
    title: "Hardware & Mockup Integration",
    desc: "Integration of physical mockups, replica equipment, controls, displays and software-driven training interfaces.",
    image: "/hardware-lab.jpg", 
    alt: "Simulator engineering laboratory with physical mockups",
    bg: "bg-[#F8FAFC]"
  },
  {
    number: "05",
    category: "System Validation",
    title: "System Integration & Testing",
    desc: "Integration of hardware and software subsystems, functional verification, troubleshooting and project-specific acceptance support.",
    image: "/testing-lab.jpg", 
    alt: "Engineering testing laboratory",
    bg: "bg-[#EAF0F6]"
  },
  {
    number: "06",
    category: "Lifecycle Support",
    title: "Maintenance, Upgrades & Technical Support",
    desc: "Support services may include installation, repair, upgrades, maintenance and technical assistance according to contract scope.",
    image: "/support-lab.jpg", 
    alt: "Electronics maintenance and technical support laboratory",
    bg: "bg-[#F8FAFC]"
  }
];

function EngineeringCapabilities() {
  return (
    <div className="bg-[#EAF0F6] min-h-screen">
      
      {/* 1. PREMIUM HERO WITH enghero.png BACKGROUND */}
      <section 
        className="relative flex items-center justify-start overflow-hidden bg-[#10243D] h-[430px] md:h-[480px] lg:h-[500px]"
        style={{
          backgroundImage: "image-set(url('/optimized/enghero-1791df665639-768.webp') 1x, url('/optimized/enghero-1791df665639-1920.webp') 2x)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle Left-to-Right Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243D]/90 via-[#10243D]/60 to-transparent w-full lg:w-3/4 pointer-events-none" />

        {/* Content Container */}
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-[550px]">
            
            {/* Eyebrow with Accent Line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8CCBFF]" />
              <p className="text-xs font-semibold tracking-[2px] text-[#8CCBFF] uppercase">
                Engineering Expertise
              </p>
            </div>
            
            {/* Heading */}
            <h1 className="text-[34px] md:text-[52px] lg:text-[58px] font-bold text-white leading-[1.1] mb-6">
              Engineering Capabilities
            </h1>
            
            {/* Description */}
            <p className="text-[17px] md:text-[18px] text-[#E2E8F0] leading-[1.7]">
              Combining software, electronics, immersive technology and system integration to support specialized training and engineering requirements.
            </p>

          </div>
        </div>
      </section>

      {/* 2. ALTERNATING ZIG-ZAG CAPABILITIES */}
      <div className="flex flex-col">
        {capabilities.map((cap, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={index} className={`${cap.bg} py-16 md:py-24 overflow-hidden`}>
              <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                  
                  {/* Image Column */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-lg bg-slate-200">
                      <ResponsiveImage
                        src={cap.image} 
                        alt={cap.alt} 
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-[#1679B4]/20">{cap.number}</span>
                      <span className="text-xs font-bold tracking-widest text-[#1679B4] uppercase">
                        {cap.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-[32px] font-bold text-[#102B4E] leading-tight mb-4">
                      {cap.title}
                    </h2>
                    
                    <div className="w-12 h-1 bg-[#1679B4] mb-6" />
                    
                    <p className="text-[17px] md:text-[18px] text-[#52647A] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CLOSING CTA */}
      <section className="bg-[#10243D] py-20 text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engineering Solutions Built Around Your Requirements
          </h2>
          <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
            Connect with GVS to discuss your simulation, electronics, integration and technical support requirements.
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