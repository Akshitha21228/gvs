import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/project-lifecycle-support")({
  head: () => ({
    meta: [
      { title: "Project Services & Lifecycle Support | GVS India" },
      { name: "description", content: "GVS supports projects through engineering, integration and lifecycle services aligned with the agreed scope of work." },
    ],
  }),
  component: ProjectLifecycleSupport,
});

const lifecycleServices = [
  {
    number: "01",
    title: "Consultancy & Requirement Analysis",
    desc: "Understanding project objectives, user requirements, technical constraints and integration needs."
  },
  {
    number: "02",
    title: "Design & Development",
    desc: "Designing and developing software, embedded systems, simulation applications and supporting hardware interfaces."
  },
  {
    number: "03",
    title: "Manufacturing & Integration",
    desc: "Coordinating the build and integration of equipment, electronics, mockups and software components, as applicable to each project."
  },
  {
    number: "04",
    title: "Testing & Commissioning",
    desc: "Supporting functional checks, integration tests and deployment activities against agreed project requirements."
  },
  {
    number: "05",
    title: "Maintenance, Repair & Upgrades",
    desc: "Providing applicable technical support, repair, refurbishment, updates and Annual Maintenance Contract services."
  }
];

function ProjectLifecycleSupport() {
  return (
    <div className="bg-[#F4F7FA] min-h-screen">
      
      {/* 1. HERO SECTION WITH heroser.png */}
      <section 
        className="relative py-24 md:py-32 overflow-hidden bg-[#0E223B]"
        style={{
          backgroundImage: "image-set(url('/optimized/heroser-293e8a07c997-768.webp') 1x, url('/optimized/heroser-293e8a07c997-1672.webp') 2x)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E223B] via-[#0E223B]/85 to-transparent" />
        
        <div className="container-x max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest text-[#8CCBFF] uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              Project Services & Lifecycle Support
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
              GVS supports projects through engineering, integration and lifecycle services aligned with the agreed scope of work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LIFECYCLE SERVICES SECTION */}
      <section className="py-20 md:py-28">
        <div className="container-x max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#102B4E] mb-4">
              Our Lifecycle Services
            </h2>
            <p className="text-[#52647A] text-[17px] leading-relaxed max-w-2xl mx-auto">
              A connected approach from initial requirements through to long-term maintenance and upgrades.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[#E4EBF2] -translate-x-1/2 hidden md:block" />

            <div className="flex flex-col gap-10 md:gap-16">
              {lifecycleServices.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Number Marker */}
                    <div className="flex size-14 items-center justify-center rounded-full bg-white border-2 border-[#1682B9] text-[#1682B9] font-bold text-xl shrink-0 z-10 shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                      {service.number}
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-[calc(50%-40px)] bg-white rounded-[16px] p-6 md:p-8 border border-[#E4EBF2] shadow-sm ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <h3 className="text-xl font-bold text-[#102B4E] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#52647A] text-[16px] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className="bg-[#0E223B] py-20 text-center">
        <div className="container-x max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Discuss Your Project Requirements
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center h-14 px-10 rounded-[12px] bg-[#1682B9] hover:bg-blue-600 text-white font-bold text-lg transition-colors shadow-lg"
          >
            Contact GVS <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}