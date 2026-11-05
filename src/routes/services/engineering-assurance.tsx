// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, ShieldCheck, FileText, CheckSquare, Search } from "lucide-react";

// export const Route = createFileRoute("/services/engineering-assurance")({
//   head: () => ({
//     meta: [
//       { title: "Engineering Assurance & IV&V | GVS India" },
//       { name: "description", content: "GVS provides independent verification, validation, testing and standards-aligned documentation for mission-critical systems." },
//     ],
//   }),
//   component: EngineeringAssurance,
// });

// const assuranceServices = [
//   {
//     title: "Independent Verification & Validation (IV&V)",
//     desc: "Objective assessment of requirements, design, implementation and system behaviour against defined acceptance criteria. Independence, review boundaries and reporting arrangements are agreed at project initiation.",
//     icon: <ShieldCheck className="size-6" />
//   },
//   {
//     title: "Testing Services - Unit to Functional Level",
//     desc: "Structured testing across the software and system lifecycle. Test activities are planned around agreed requirements, interfaces, risks and acceptance criteria.",
//     icon: <CheckSquare className="size-6" />
//   },
//   {
//     title: "Documentation & Standards Compliance",
//     desc: "Support for engineering and software lifecycle documentation in line with applicable project requirements and selected standards (e.g., IEEE, RTCA DO-178B).",
//     icon: <FileText className="size-6" />
//   },
//   {
//     title: "Technical Reviews & Gap Assessments",
//     desc: "Requirements reviews, traceability assessment, design and architecture reviews, and compliance-readiness support for legacy software and systems.",
//     icon: <Search className="size-6" />
//   }
// ];

// function EngineeringAssurance() {
//   return (
//     <div className="bg-[#F3F6FA] min-h-screen">
      
//       {/* 1. HERO SECTION */}
//       <section 
//         className="relative bg-[#0D233B] py-24 md:py-32 overflow-hidden"
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
//               Services / Assurance
//             </p>
//             <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
//               Engineering Assurance & IV&V
//             </h1>
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
//               GVS provides software and system assurance services to support the development, verification, validation and testing of safety-critical, mission-critical and high-reliability systems.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. ASSURANCE SERVICES GRID */}
//       <section className="py-20 md:py-28">
//         <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="mb-16 text-center max-w-2xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#102B4E] mb-4">
//               Engineering Assurance for Mission-Critical Systems
//             </h2>
//             <p className="text-[#52647A] text-lg">
//               Services can be tailored to project requirements, contractual deliverables and applicable standards.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {assuranceServices.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-[16px] border border-[#DDE5ED] p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               >
//                 <div className="flex size-14 items-center justify-center rounded-xl bg-[#F3F6FA] text-[#1679B4] mb-6">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-[#102B4E] mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#52647A] leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. CLOSING CTA */}
//       <section className="bg-[#0D233B] py-20 text-center">
//         <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Discuss Your Assurance Requirements
//           </h2>
//           <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
//             Need independent assurance, structured testing or standards-aligned documentation for your project? Contact GVS to discuss your system, applicable standards and required deliverables.
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
import { 
  ArrowRight, 
  FileSearch, 
  CheckSquare,
  ClipboardCheck,
  Layers,
  Code2,
  ShieldCheck,
  Target,
  ClipboardList,
  CheckCircle2,
  Check,
  Info
} from "lucide-react";

export const Route = createFileRoute("/services/engineering-assurance")({
  head: () => ({
    meta: [
      { title: "Engineering Assurance & IV&V Services | GVS" },
      { name: "description", content: "Explore GVS engineering assurance services, including independent verification and validation, software testing, requirements traceability and standards-aligned documentation." },
    ],
  }),
  component: EngineeringAssurance,
});

const assurancePanels = [
  { number: "01", title: "Documentation & Standards", desc: "Lifecycle documentation, requirements traceability and standards support.", labels: ["Documentation", "Traceability", "Review records"] },
  { number: "02", title: "Independent Verification & Validation", desc: "Objective assessment of requirements, design and system behaviour.", labels: ["Requirements", "Design reviews", "Validation"] },
  { number: "03", title: "Testing Services", desc: "Structured testing across unit, integration and functional levels.", labels: ["Unit testing", "Integration", "Regression"] },
  { number: "04", title: "Additional Assurance", desc: "Complementary technical services, subject to GVS capabilities and staffing.", labels: ["Quality assurance", "Risk-based testing", "Technical reviews"] }
];

const documentationAreas = [
  "Software development plans, standards and procedures",
  "Requirements specifications and traceability matrices",
  "Software design descriptions and architecture documentation",
  "Test plans, test procedures, test cases and test reports",
  "Verification, validation and review records",
  "Configuration management, change control and defect records",
  "Quality assurance records and project compliance documentation"
];

const orbitLabels = [
  "DEVELOPMENT PLANS",
  "REQUIREMENTS",
  "ARCHITECTURE",
  "TEST DOCUMENTATION",
  "V&V RECORDS",
  "CONFIGURATION CONTROL",
  "QUALITY RECORDS"
];

const leftModules = [
  { number: "01", title: "Requirements", desc: "Requirements reviews and traceability assessment", icon: <ClipboardCheck className="size-5" /> },
  { number: "03", title: "Implementation", desc: "Independent review of implementation and technical artefacts", icon: <Code2 className="size-5" /> },
  { number: "05", title: "Validation", desc: "Validation against intended use and stakeholder needs", icon: <Target className="size-5" /> }
];

const rightModules = [
  { number: "02", title: "Architecture", desc: "Design and architecture reviews", icon: <Layers className="size-5" /> },
  { number: "04", title: "Verification", desc: "Verification of compliance with specified requirements", icon: <ShieldCheck className="size-5" /> },
  { number: "06", title: "Reporting", desc: "Defect tracking, risk observations and evidence-based reporting", icon: <ClipboardList className="size-5" /> }
];

const testingLadder = [
  { level: "04", title: "Functional & System-Level Testing", bg: "bg-[#102B4E]", text: "text-white", border: "border-[#0D233B]", width: "w-full" },
  { level: "03", title: "Integration & Interface Testing", bg: "bg-[#234E77]", text: "text-white", border: "border-[#1A3B5C]", width: "w-[90%]" },
  { level: "02", title: "Component & Module Testing", bg: "bg-[#DCEBF5]", text: "text-[#102B4E]", border: "border-[#C9DFED]", width: "w-[80%]" },
  { level: "01", title: "Unit Testing", bg: "bg-[#EAF3F9]", text: "text-[#102B4E]", border: "border-[#DDE7F0]", width: "w-[70%]" }
];

const supportingActivities = [
  "Regression testing after fixes or changes",
  "Requirements-based testing and traceability",
  "Defect logging, retesting and test summary reports"
];

const additionalServices = [
  "Requirements engineering and requirements traceability management",
  "Software quality assurance (SQA) and process audits",
  "Configuration management and change-impact analysis",
  "Risk-based testing and test strategy development",
  "Hardware-software integration testing",
  "System acceptance testing and commissioning support",
  "Cybersecurity verification and vulnerability assessment, where appropriately qualified",
  "Test automation and continuous integration testing",
  "Legacy software assessment, reverse engineering and upgrade verification",
  "Technical reviews, gap assessments and compliance-readiness support"
];

const approachSteps = [
  { number: "01", title: "Understand", desc: "Understand the system context, applicable standards, project lifecycle, independence requirements and acceptance criteria." },
  { number: "02", title: "Define", desc: "Define the review or test scope, evidence requirements, activities and reporting format." },
  { number: "03", title: "Review & Test", desc: "Carry out the agreed review and testing activities within the defined project scope." },
  { number: "04", title: "Document & Report", desc: "Document findings clearly so project teams can assess issues, take corrective action and demonstrate progress against agreed requirements." }
];

// Orbit geometry
const ORBIT_RADIUS = 155;
const HUB_RADIUS = 66;
const SVG_SIZE = 500;
const CENTER = SVG_SIZE / 2;

function getNodePosition(index: number) {
  const angle = (index * (360 / 7) - 90) * (Math.PI / 180);
  return {
    x: CENTER + ORBIT_RADIUS * Math.cos(angle),
    y: CENTER + ORBIT_RADIUS * Math.sin(angle),
  };
}

function EngineeringAssurance() {
  const [activeDocIndex, setActiveDocIndex] = useState(0);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative py-24 md:py-32 overflow-hidden bg-[#0E223B]"
        style={{
          backgroundImage: "image-set(url('/optimized/assurance-hero-c37990b6af71-768.webp') 1x, url('/optimized/assurance-hero-c37990b6af71-1754.webp') 2x)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E223B] via-[#0E223B]/85 to-transparent" />
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
              Engineering Assurance & IV&V
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              Engineering Assurance for Mission-Critical Systems
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              GVS provides software and system assurance services to support the development, verification, validation and testing of safety-critical, mission-critical and high-reliability systems. Services can be tailored to project requirements, contractual deliverables and applicable standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STRUCTURED APPROACH */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px] mb-10 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#1679B4]" />
              <p className="text-xs font-medium tracking-widest text-[#1679B4] uppercase">
                Our Assurance Expertise
              </p>
            </div>
            <h2 className="text-[34px] md:text-[38px] lg:text-[40px] font-bold text-[#102B4E] leading-tight mb-3">
              A Structured Approach to System Confidence
            </h2>
            <p className="text-[#52647A] text-[17px] leading-relaxed max-w-[780px]">
              Engineering assurance services aligned with defined requirements, acceptance criteria and applicable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {assurancePanels.map((panel, index) => (
              <div 
                key={index}
                className="group flex flex-col h-full bg-white rounded-[12px] p-6 border border-[#DDE6EE] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#9EC6E0] hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[40px] leading-none font-medium text-[#AFC8DB]">
                    {panel.number}
                  </span>
                  <div className="w-8 h-px bg-[#1679B4] mt-2.5" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#102B4E] leading-snug mb-2 min-h-[3rem]">
                  {panel.title}
                </h3>
                <p className="text-[14px] text-[#52647A] leading-[1.6] mb-4 flex-grow">
                  {panel.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {panel.labels.map((label, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center rounded px-2 py-1 text-[11px] font-medium bg-[#EEF4F8] text-[#315C7A]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-left max-w-[850px]">
            <p className="text-[#52647A]/70 text-sm italic">
              Additional assurance services are subject to GVS capabilities and staffing.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DOCUMENTATION ORBIT */}
      <section className="py-16 md:py-20 bg-[#F5F8FB]">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-10 lg:gap-14 items-center">
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-[#1686BD]" />
                <p className="text-xs font-medium tracking-widest text-[#1686BD] uppercase">
                  Engineering Assurance / 01
                </p>
              </div>
              <h2 className="text-[32px] md:text-[36px] lg:text-[38px] font-bold text-[#102B4E] leading-tight mb-4">
                Documentation & Standards Compliance Support
              </h2>
              <p className="text-[#52647A] text-[16px] leading-[1.65] mb-6">
                GVS supports the preparation, review and maintenance of engineering and software lifecycle documentation in line with applicable project requirements and selected standards. Depending on the project scope, documentation support may include IEEE standards, RTCA DO-178B or other applicable industry or customer standards.
              </p>

              <div className="bg-white rounded-r-lg border-l-4 border-[#1686BD] border-y border-r border-[#E5EBF1] p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FileSearch className="size-4 text-[#1686BD]" />
                  <p className="text-xs font-bold tracking-widest text-[#1686BD] uppercase">
                    Selected Documentation Area
                  </p>
                </div>
                <p className="text-[16px] font-semibold text-[#102B4E] leading-[1.5]">
                  {documentationAreas[activeDocIndex]}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative w-full max-w-[520px] mx-auto aspect-square">
                <svg 
                  viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} 
                  className="w-full h-full overflow-visible"
                  role="group"
                  aria-label="Documentation areas orbital selector"
                >
                  <circle cx={CENTER} cy={CENTER} r={ORBIT_RADIUS - 20} fill="none" stroke="#C9DFED" strokeWidth="1" />
                  <circle cx={CENTER} cy={CENTER} r={ORBIT_RADIUS - 10} fill="none" stroke="#C9DFED" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx={CENTER} cy={CENTER} r={ORBIT_RADIUS} fill="none" stroke="#C9DFED" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {documentationAreas.map((_, index) => {
                    const pos = getNodePosition(index);
                    return (
                      <line 
                        key={`line-${index}`}
                        x1={CENTER} y1={CENTER} x2={pos.x} y2={pos.y} 
                        stroke="#D7E5EF" strokeWidth="1" 
                      />
                    );
                  })}

                  <circle cx={CENTER} cy={CENTER} r={HUB_RADIUS} fill="#102B4E" />
                  <circle cx={CENTER} cy={CENTER} r={HUB_RADIUS - 6} fill="none" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" />
                  <text x={CENTER} y={CENTER - 8} textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">GVS</text>
                  <text x={CENTER} y={CENTER + 10} textAnchor="middle" fill="#8CCBFF" fontSize="9">DOCUMENTATION SUPPORT</text>

                  {documentationAreas.map((area, index) => {
                    const pos = getNodePosition(index);
                    const isActive = activeDocIndex === index;
                    
                    const isLeft = pos.x < CENTER - 20;
                    const labelX = isLeft ? pos.x - 12 : pos.x + 12;
                    const labelAnchor = isLeft ? "end" : "start";
                    const labelY = pos.y + 4;

                    return (
                      <g 
                        key={`node-${index}`}
                        onClick={() => setActiveDocIndex(index)}
                        className="cursor-pointer focus:outline-none"
                        tabIndex={0}
                        role="button"
                        aria-label={`Area ${index + 1}: ${area}`}
                        aria-pressed={isActive}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveDocIndex(index);
                          }
                        }}
                      >
                        <circle 
                          cx={pos.x} cy={pos.y} r={isActive ? 10 : 7} 
                          fill={isActive ? "#1686BD" : "#FFFFFF"} 
                          stroke={isActive ? "#1686BD" : "#9EC6E0"} 
                          strokeWidth={isActive ? 0 : 1.5}
                          className="transition-all duration-200"
                        />
                        <text 
                          x={labelX} y={labelY} textAnchor={labelAnchor}
                          fill={isActive ? "#102B4E" : "#52647A"}
                          fontSize="11" fontWeight="700" letterSpacing="0.5"
                          className="pointer-events-none transition-colors duration-200"
                          style={{ textTransform: 'uppercase' }}
                        >
                          {orbitLabels[index]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="md:hidden bg-white rounded-[14px] border border-[#DEE6EE] overflow-hidden">
                {documentationAreas.map((area, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDocIndex(index)}
                    className={`w-full flex items-start gap-3 px-4 py-3 text-left border-b border-[#E5EBF1] last:border-b-0 transition-colors ${
                      activeDocIndex === index ? 'bg-[#EAF1F7]' : 'bg-white hover:bg-[#F7F9FC]'
                    }`}
                  >
                    <span className={`text-xs font-bold ${activeDocIndex === index ? 'text-[#1686BD]' : 'text-[#AFC8DB]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[13px] leading-relaxed ${activeDocIndex === index ? 'text-[#102B4E] font-medium' : 'text-[#52647A]'}`}>
                      {area}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK NAVY IV&V MIND MAP */}
      <section className="py-20 md:py-24 bg-[#071B32] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0B2949] via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0B2949] via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold tracking-widest text-[#35C9EE] uppercase mb-4">
              Engineering Assurance / 02
            </p>
            <h2 className="text-3xl md:text-[42px] font-bold text-white mb-6 leading-tight">
              Independent Verification & Validation (IV&V)
            </h2>
            <p className="text-[#D3E1EF] text-[17px] leading-relaxed">
              GVS offers Independent Verification and Validation services for mission-critical systems, with an emphasis on objective assessment of requirements, design, implementation and system behaviour against defined acceptance criteria. Independence, review boundaries and reporting arrangements should be agreed at project initiation.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:grid grid-cols-[1fr_300px_1fr] gap-8 items-center relative">
              <div className="flex flex-col gap-6 items-end">
                {leftModules.map((module, index) => (
                  <div key={index} className="w-full max-w-[320px] bg-[#F8FBFF] rounded-[18px] p-5 shadow-xl relative">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF1F7] text-[#168DCC]">
                        {module.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#168DCC] block mb-1">{module.number}</span>
                        <h4 className="text-[16px] font-bold text-[#102B4E] mb-2">{module.title}</h4>
                        <p className="text-[13px] text-[#405875] leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative flex justify-center items-center">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 300 450" preserveAspectRatio="none">
                  <path d="M 0 75 C 60 75, 80 225, 150 225" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="0" cy="75" r="4" fill="#35C9EE" />
                  <path d="M 0 225 C 60 225, 80 225, 150 225" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="0" cy="225" r="4" fill="#35C9EE" />
                  <path d="M 0 375 C 60 375, 80 225, 150 225" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="0" cy="375" r="4" fill="#35C9EE" />
                  
                  <path d="M 150 225 C 220 225, 240 75, 300 75" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="300" cy="75" r="4" fill="#35C9EE" />
                  <path d="M 150 225 C 220 225, 240 225, 300 225" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="300" cy="225" r="4" fill="#35C9EE" />
                  <path d="M 150 225 C 220 225, 240 375, 300 375" fill="none" stroke="#35C9EE" strokeWidth="2" strokeOpacity="0.6" />
                  <circle cx="300" cy="375" r="4" fill="#35C9EE" />
                </svg>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="absolute w-[220px] h-[220px] rounded-full border border-[#35C9EE]/20" />
                  <div className="absolute w-[190px] h-[190px] rounded-full border border-dashed border-[#35C9EE]/30" />
                  <div className="flex flex-col items-center justify-center w-[170px] h-[170px] rounded-full bg-[#061629] border-2 border-[#35C9EE] shadow-2xl">
                    <span className="text-xl font-bold text-white tracking-widest">GVS</span>
                    <div className="w-6 h-px bg-[#35C9EE] my-1" />
                    <span className="text-xs font-bold text-[#35C9EE] uppercase tracking-widest">IV&V</span>
                    <span className="text-[9px] text-slate-400 mt-1 px-4 text-center">Verification Framework</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start">
                {rightModules.map((module, index) => (
                  <div key={index} className="w-full max-w-[320px] bg-[#F8FBFF] rounded-[18px] p-5 shadow-xl relative">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF1F7] text-[#168DCC]">
                        {module.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#168DCC] block mb-1">{module.number}</span>
                        <h4 className="text-[16px] font-bold text-[#102B4E] mb-2">{module.title}</h4>
                        <p className="text-[13px] text-[#405875] leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex flex-col relative pl-6">
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#35C9EE]/30" />
              
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className="flex flex-col items-center justify-center w-[160px] h-[160px] rounded-full bg-[#061629] border-2 border-[#35C9EE]">
                  <span className="text-lg font-bold text-white">GVS</span>
                  <div className="w-5 h-px bg-[#35C9EE] my-1" />
                  <span className="text-xs font-bold text-[#35C9EE]">IV&V</span>
                </div>
              </div>

              {[...leftModules, ...rightModules].map((module, index) => (
                <div key={index} className="relative z-10 mb-5 flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#35C9EE] shrink-0 mt-5" />
                  <div className="w-full bg-[#F8FBFF] rounded-[16px] p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-[#EAF1F7] text-[#168DCC]">
                        {module.icon}
                      </div>
                      <span className="text-xs font-bold text-[#168DCC]">{module.number}</span>
                    </div>
                    <h4 className="text-[15px] font-bold text-[#102B4E] mb-1">{module.title}</h4>
                    <p className="text-[12px] text-[#405875] leading-relaxed">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-[#0B2949] rounded-[16px] p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 border border-[#35C9EE]/30">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#35C9EE]/10 text-[#35C9EE] shrink-0">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-0.5">Evidence-Based Assessment</h4>
              <p className="text-[#D3E1EF] text-sm">
                Findings documented against agreed requirements and acceptance criteria.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTING LADDER */}
      <section className="py-20 bg-[#F5F8FC]">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest text-[#1682B9] uppercase mb-3">
              Engineering Assurance / 03
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#102B4E] mb-6">
              Testing Services — Unit Level to Functional Level
            </h2>
            <p className="text-[#52647A] text-[17px] leading-relaxed">
              GVS supports structured testing across the software and system lifecycle, from individual units and components through integration and functional testing. Test activities are planned around agreed requirements, interfaces, risks and acceptance criteria.
            </p>
          </div>

          <div className="bg-white rounded-[16px] border border-[#DDE7F0] p-8 md:p-10 shadow-sm mb-8">
            <div className="mb-8 border-b border-[#DDE7F0] pb-4">
              <h3 className="text-sm font-bold tracking-widest text-[#1682B9] uppercase">
                Testing Coverage Framework
              </h3>
            </div>

            <div className="flex flex-col items-start gap-3">
              {testingLadder.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 md:p-5 rounded-r-lg border border-[#DDE7F0] ${step.bg} ${step.text} transition-all duration-300`}
                  style={{ width: step.width }}
                >
                  <span className="text-2xl font-bold opacity-80">{step.level}</span>
                  <div className="w-px h-8 bg-current opacity-20" />
                  <span className="text-[15px] md:text-[17px] font-semibold">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#102B4E] mb-6">
              Supporting Testing Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {supportingActivities.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[12px] p-5 border border-[#DDE7F0] flex items-start gap-3 shadow-sm"
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#EAF3F9] text-[#1682B9] shrink-0">
                    <Check className="size-4" />
                  </div>
                  <p className="text-[15px] text-[#52647A] leading-relaxed font-medium pt-1">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. REFINED: ADDITIONAL ASSURANCE CAPABILITIES MATRIX */}
      <section className="py-20 md:py-24 bg-[#091D35] relative overflow-hidden">
        <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#57C6EE]" />
              <p className="text-xs font-bold tracking-widest text-[#57C6EE] uppercase">
                Engineering Assurance / 04
              </p>
            </div>
            <h2 className="text-2xl md:text-[32px] font-bold text-white mb-4">
              Additional Assurance Services to Consider
            </h2>
            <p className="text-[#C2D1E2] text-[16px] leading-relaxed">
              Subject to GVS capabilities and staffing, the following services could complement the core offering:
            </p>
          </div>

          {/* 2-Column, 5-Row Technical Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 py-5 border-b border-[#29445F]"
              >
                <span className="text-sm font-bold text-[#57C6EE] shrink-0 pt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[#F1F6FB] text-[15px] leading-relaxed">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Qualification Note */}
          <div className="mt-8 flex items-start gap-3">
            <Info className="size-4 text-[#C2D1E2]/60 shrink-0 mt-0.5" />
            <p className="text-[#C2D1E2]/60 text-sm">
              These are potential complementary services subject to GVS capabilities, staffing and agreed project scope.
            </p>
          </div>

        </div>
      </section>

      {/* 7. OUR APPROACH */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#102B4E]">A Clear, Evidence-Based Process</h2>
          </div>
          <div className="hidden md:grid grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-[16px] p-6 border border-[#DDE6EE] shadow-sm relative">
                <span className="text-3xl font-bold text-[#AFC8DB] block mb-3">{step.number}</span>
                <h3 className="text-lg font-bold text-[#102B4E] mb-2">{step.title}</h3>
                <p className="text-[#52647A] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-4">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-[16px] p-6 border border-[#DDE6EE] shadow-sm flex gap-4">
                <span className="text-2xl font-bold text-[#AFC8DB]">{step.number}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#102B4E] mb-1">{step.title}</h3>
                  <p className="text-[#52647A] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="bg-[#0E223B] py-20 text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Discuss Your Assurance Requirements</h2>
          <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
            Need independent assurance, structured testing or standards-aligned documentation for your project? Contact GVS to discuss your system, applicable standards and required deliverables.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1679B4] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg">
            Discuss Your Assurance Requirements <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}