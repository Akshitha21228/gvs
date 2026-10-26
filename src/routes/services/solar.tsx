import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Sun, Zap, CheckCircle2, Building2, Wrench, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/solar")({
  head: () => ({
    meta: [
      { title: "Solar Services | GVS India" },
      { name: "description", content: "Reliable and efficient solar photovoltaic (PV) solutions for residential, commercial, and industrial applications." },
    ],
  }),
  component: SolarServices,
});

const tabs = [
  { id: "power-plants", label: "Power Plants" },
  { id: "mega-watt", label: "Mega Watt Power Plants" },
];

const contentData = {
  "power-plants": {
    title: "Power Plants",
    intro: "GVS provides reliable and efficient solar photovoltaic (PV) solutions for residential, commercial, and industrial applications. Our solar power systems are designed to optimize energy generation, reduce electricity costs, and promote sustainable energy use.",
    overview: "Off-grid solar systems provide an independent power supply using battery storage. Solar panels generate electricity, while MPPT charge controllers and inverters manage energy storage and conversion, ensuring power availability during nighttime and grid outages.",
    image: { src: "/powerplant.webp", alt: "Solar Power Plant" },
    capabilities: [
      { icon: <BatteryCharging />, title: "Battery Storage", desc: "Reliable backup power for essential loads." },
      { icon: <Zap />, title: "MPPT Controllers", desc: "Optimized energy storage management." },
      { icon: <Sun />, title: "On-Grid Systems", desc: "Direct utility grid connectivity." },
      { icon: <CheckCircle2 />, title: "Pure Sine Wave", desc: "Stable inverter technology." },
    ]
  },
  "mega-watt": {
    title: "Mega Watt Power Plants",
    intro: "GVS specializes in large-scale solar photovoltaic power plants, offering Engineering, Procurement, and Construction (EPC) and turnkey solutions. Our solar division supports projects from planning and design to installation, commissioning, and maintenance.",
    overview: "Complete EPC solutions for megawatt-scale solar installations, including project planning, engineering, procurement, and execution. We supply and integrate quality photovoltaic modules designed for efficient energy generation and long-term performance.",
    image: { src: "/megawalts.jpeg", alt: "Mega Watt Power Plants" },
    capabilities: [
      { icon: <Building2 />, title: "Turnkey Projects", desc: "Complete EPC solutions." },
      { icon: <Sun />, title: "Solar PV Modules", desc: "Efficient long-term generation." },
      { icon: <Wrench />, title: "Balance of Systems", desc: "Inverters & switchgear integration." },
      { icon: <ShieldCheck />, title: "Maintenance", desc: "Ensuring operational efficiency." },
    ]
  }
};

function SolarServices() {
  const [activeTab, setActiveTab] = useState<keyof typeof contentData>("power-plants");
  const activeContent = contentData[activeTab];

  return (
    <>
      <PageHero 
        eyebrow="Services" 
        title="Solar Services" 
        intro="Reliable and efficient solar photovoltaic (PV) solutions for a sustainable future." 
        image={images.electronicsLab} 
      />

      <section className="py-16 md:py-20 bg-[#F3F5F7]">
        <div className="container-x grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          
          <aside className="flex flex-col gap-2 lg:sticky lg:top-[100px] z-20">
            <h2 className="text-lg font-bold text-navy mb-4 px-2">Solar Services</h2>
            <div className="flex flex-col rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as keyof typeof contentData)}
                  className={cn(
                    "text-left px-5 py-4 text-sm font-medium transition-colors border-b border-border last:border-b-0",
                    activeTab === tab.id 
                      ? "bg-[#e2e8f0] text-navy font-bold border-l-[3px] border-l-[#71804B]" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy border-l-[3px] border-l-transparent"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start relative">
              
              <div className="flex flex-col gap-4 lg:mt-[55px] z-10">
                <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-border">
                  <h3 className="text-2xl font-bold text-navy mb-3">{activeContent.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {activeContent.intro}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-border">
                  <h4 className="text-xs font-bold text-[#71804B] uppercase tracking-widest mb-3">Service Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {activeContent.overview}
                  </p>
                </div>
              </div>

              <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-border h-[350px] lg:h-[480px]">
                <img 
                  src={activeContent.image.src} 
                  alt={activeContent.image.alt} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
              </div>
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Core Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeContent.capabilities.map((cap, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                    <div className="text-[#71804B] mb-3 size-6">
                      {cap.icon}
                    </div>
                    <h5 className="font-bold text-navy text-sm mb-1">{cap.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}