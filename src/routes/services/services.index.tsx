import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, PenTool, Boxes, CheckSquare, Wrench } from "lucide-react";

export const Route = createFileRoute("/services/services/")({
  head: () => ({
    meta: [
      { title: "Services & Lifecycle Support | Green Vision Solutions" },
      { name: "description", content: "Explore GVS engineering services, including requirement analysis, software development, system integration, testing, commissioning, maintenance and upgrades." },
    ],
  }),
  component: ServicesPage,
});

const lifecycleStages = [
  { number: "01", title: "Consultancy & Requirement Analysis", icon: <ClipboardCheck className="size-5" /> },
  { number: "02", title: "Design & Development", icon: <PenTool className="size-5" /> },
  { number: "03", title: "Manufacturing & Integration", icon: <Boxes className="size-5" /> },
  { number: "04", title: "Testing & Commissioning", icon: <CheckSquare className="size-5" /> },
  { number: "05", title: "Maintenance, Repair & Upgrades", icon: <Wrench className="size-5" /> },
];

const services = [
  {
    number: "01",
    title: "Consultancy & Requirement Analysis",
    desc: "Understanding project objectives, user requirements, technical constraints and integration needs.",
    image: "/enghero.png",
    alt: "Consultancy and requirement analysis",
  },
  {
    number: "02",
    title: "Design & Development",
    desc: "Designing and developing software, embedded systems, simulation applications and supporting hardware interfaces.",
    image: "/electronics-lab.jpg",
    alt: "Design and development laboratory",
  },
  {
    number: "03",
    title: "Manufacturing & Integration",
    desc: "Coordinating the build and integration of equipment, electronics, mockups and software components, as applicable to each project.",
    image: "/hardware-lab.jpg",
    alt: "Manufacturing and integration facility",
  },
  {
    number: "04",
    title: "Testing & Commissioning",
    desc: "Supporting functional checks, integration tests and deployment activities against agreed project requirements.",
    image: "/testing-lab.jpg",
    alt: "Testing and commissioning laboratory",
  },
  {
    number: "05",
    title: "Maintenance, Repair & Upgrades",
    desc: "Providing applicable technical support, repair, refurbishment, updates and Annual Maintenance Contract services.",
    image: "/support-lab.jpg",
    alt: "Maintenance and repair workshop",
  }
];

function ServicesPage() {
  return (
    <div className="bg-[#F3F6FA] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-[#0D233B] py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 145, 190, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 145, 190, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px"
        }}
      >
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
              Services & Lifecycle Support
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              Engineering Support Across the Project Lifecycle
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              GVS supports projects through engineering, integration and lifecycle services aligned with the agreed scope of work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LIFECYCLE APPROACH TIMELINE */}
      <section className="py-20 bg-white">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">
              Our Service Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102B4E]">
              One Connected Engineering Lifecycle
            </h2>
          </div>

          {/* Horizontal Desktop Timeline */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-[#DDE5ED] z-0" />
            
            {lifecycleStages.map((stage, index) => (
              <div key={index} className="relative flex flex-col items-center text-center z-10 w-1/5 px-2">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#DDE5ED] flex items-center justify-center text-[#1679B4] mb-4 shadow-sm">
                  {stage.icon}
                </div>
                <span className="text-xs font-bold text-[#1679B4] mb-1">{stage.number}</span>
                <h3 className="text-sm font-semibold text-[#102B4E] leading-snug">
                  {stage.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Vertical Mobile Timeline */}
          <div className="md:hidden flex flex-col border-l-2 border-[#DDE5ED] ml-6 space-y-8">
            {lifecycleStages.map((stage, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[29px] top-0 w-14 h-14 rounded-full bg-white border-2 border-[#DDE5ED] flex items-center justify-center text-[#1679B4] shadow-sm">
                  {stage.icon}
                </div>
                <span className="text-xs font-bold text-[#1679B4] mb-1">{stage.number}</span>
                <h3 className="text-lg font-semibold text-[#102B4E] leading-snug mt-1">
                  {stage.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SERVICES EDITORIAL SECTION */}
      <section className="py-20 bg-[#F3F6FA]">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-[#1679B4] uppercase mb-3">
              Our Engineering Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102B4E]">
              Comprehensive Support at Every Stage
            </h2>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              // For services 04 and 05, we stack them in a slightly different way if needed, 
              // but the alternating layout works for all 5 perfectly.
              
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#DDE5ED] shadow-md bg-white p-2">
                      <img 
                        src={service.image} 
                        alt={service.alt} 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-[#DDE5ED]">{service.number}</span>
                      <div className="w-12 h-0.5 bg-[#1679B4]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#102B4E] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[17px] text-[#52647A] leading-[1.7]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. LIFECYCLE SUPPORT BANNER */}
      <section className="py-16 bg-[#E8EEF5] border-y border-[#DDE5ED]">
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#102B4E] mb-4">
            Support Beyond Initial Development
          </h2>
          <p className="text-[#52647A] text-lg leading-relaxed max-w-3xl mx-auto">
            GVS provides applicable technical support, repair, refurbishment, updates and maintenance services according to project requirements and agreed scope.
          </p>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="bg-[#0D233B] py-20 text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discuss Your Engineering Requirements
          </h2>
          <p className="text-[#A1B8D0] text-lg mb-8 leading-relaxed">
            Connect with GVS to discuss your project objectives, technical requirements, integration needs and lifecycle support.
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