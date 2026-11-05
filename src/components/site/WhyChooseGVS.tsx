import { Cpu, Target, Layers, Monitor, ShieldCheck } from "lucide-react";

const advantages = [
  {
    title: "Cross-Disciplinary Engineering",
    desc: "Capabilities across software, embedded systems, electronics and simulation integration.",
    icon: <Cpu className="size-6" />
  },
  {
    title: "Application-Focused Development",
    desc: "Solutions planned around defined customer requirements and training objectives.",
    icon: <Target className="size-6" />
  },
  {
    title: "End-to-End Project Perspective",
    desc: "Support across design, development, integration, testing and maintenance, depending on project scope.",
    icon: <Layers className="size-6" />
  },
  {
    title: "Experience Across Simulator Types",
    desc: "A product portfolio spanning weapon, tactical, mortar, observation, medical and immersive training applications.",
    icon: <Monitor className="size-6" />
  },
  {
    title: "Customer-Oriented Delivery",
    desc: "A focus on clear requirements, practical engineering and long-term technical support.",
    icon: <ShieldCheck className="size-6" />
  }
];

export function WhyChooseGVS() {
  return (
    <section className="relative py-20 md:py-28 bg-[#081D33] overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0B2949] via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container-x max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#32BCEB] uppercase mb-4">
            The GVS Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose GVS?
          </h2>
          <p className="text-[#A1B8D0] text-lg md:text-xl leading-relaxed">
            Engineering expertise focused on practical requirements, dependable delivery and long-term technical support.
          </p>
        </div>

        {/* Capability Modules */}
        <div className="space-y-6">
          
          {/* Row 1: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.slice(0, 3).map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-[#32BCEB]/20 rounded-[16px] p-8 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[#32BCEB]/50 hover:bg-white/10"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#32BCEB]/10 text-[#32BCEB] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#A1B8D0] text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.slice(3, 5).map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-[#32BCEB]/20 rounded-[16px] p-8 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[#32BCEB]/50 hover:bg-white/10"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#32BCEB]/10 text-[#32BCEB] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#A1B8D0] text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}