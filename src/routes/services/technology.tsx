import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Code, Cpu, Lightbulb, Wrench, Monitor, CheckCircle2, ShieldCheck, Settings, Layers, Server, PenTool } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/technology")({
  head: () => ({
    meta: [
      { title: "Technology Services | GVS India" },
      { name: "description", content: "Custom software development, consulting, and maintenance services by Green Vision Solutions." },
    ],
  }),
  component: TechnologyServices,
});

// --- DATA DEFINITIONS ---
const tabs = [
  { id: "software-dev", label: "Software Development" },
  { id: "consulting", label: "Consulting Services" },
  { id: "maintenance", label: "Maintenance and Support" },
  { id: "technologies", label: "Technologies" },
];

const contentData = {
  "software-dev": {
    title: "Software Development",
    intro: "We see development as a process of approaching the world with ideas, code and syntax. We develop reliable and scalable applications.",
    overview: "GVS is a software development company with deep industry experience and comprehensive expertise in building custom software. Our vast experience helps us build applications designed to meet your business needs. Our techno-functional consultants work closely with process owners to design high-fidelity wireframes ensuring the final delivery meets your business objectives.",
    image: { src: "/software.png", alt: "Software Development" },
    capabilities: [
      { icon: <Monitor />, title: "Web Applications", desc: "Scalable browser-based software." },
      { icon: <Cpu />, title: "PC Based Software", desc: "High-performance desktop solutions." },
      { icon: <Layers />, title: "Model-Based", desc: "Advanced simulation and modeling." },
      { icon: <Server />, title: "Embedded Systems", desc: "Hardware-integrated firmware." },
    ]
  },
  "consulting": {
    title: "Consulting Services",
    intro: "GVS caters smart techniques to handle challenging consulting services for your software development needs.",
    overview: "Technology is often misapplied without understanding the dynamics of business, customer needs, and organization goals. We utilize a proven methodology to effectively analyze your business requirements and identify appropriate technology solutions. Upon completion, we provide you with a comprehensive document and an overview of our findings to help you meet your business needs.",
    image: { src: "/consultancy.jpg", alt: "Consulting Services" }, 
    capabilities: [
      { icon: <Lightbulb />, title: "Strategy Analysis", desc: "Aligning tech with business goals." },
      { icon: <CheckCircle2 />, title: "Process Mapping", desc: "Optimizing workflow efficiency." },
      { icon: <ShieldCheck />, title: "Risk Mitigation", desc: "Identifying and resolving gaps." },
      { icon: <PenTool />, title: "Tech Integration", desc: "Seamless system implementation." },
    ]
  },
  "maintenance": {
    title: "Maintenance and Support",
    intro: "GVS provides Software maintenance and support services for the foreseeable future. Focus on running your business, not your systems.",
    overview: "In software maintenance, the word maintenance involves activities on the developed and delivered software in order to correct errors, improve performance, or acclimatize the product to a modified environment. We provide enhancements, modification, and product upgrade support services for your software, ensuring issues are resolved in a timely manner.",
    // FIXED: Matches your file 'Maintenance-Services.jpg'
    image: { src: "/Maintenance-Services.jpg", alt: "Maintenance and Support" }, 
    capabilities: [
      { icon: <Settings />, title: "Bug Fixes", desc: "Rapid resolution of critical errors." },
      { icon: <ShieldCheck />, title: "Stabilization", desc: "Adapting to new environments." },
      { icon: <Cpu />, title: "New Integration", desc: "Connecting with modern apps." },
      { icon: <CheckCircle2 />, title: "System Updates", desc: "Continuous performance upgrades." },
    ]
  },
  "technologies": {
    title: "Technologies",
    intro: "Ready Product vs. Custom Build. The answer is a decision best made after in-depth analysis of internal requirements.",
    overview: "Before concluding technology decisions, it is highly recommended to ensure a thorough understanding of current business requirements and mapping solutions with cost, ROI, and expected results. Over course of time, GVS has built an extensive team of technology experts across various programming languages and tools, each surpassing in their own area of expertise.",
    // FIXED: Matches your file 'technologies.png'
    image: { src: "/technologies.png", alt: "Technologies" },
    capabilities: [
      { icon: <Code />, title: "C / C++", desc: "Core systems programming." },
      { icon: <Cpu />, title: "Embedded C", desc: "Microcontroller development." },
      { icon: <Monitor />, title: "JAVA / .NET", desc: "Enterprise application frameworks." },
      { icon: <Settings />, title: "QT / Lab View", desc: "UI and instrumentation tools." },
    ]
  }
};

function TechnologyServices() {
  const [activeTab, setActiveTab] = useState<keyof typeof contentData>("software-dev");
  const activeContent = contentData[activeTab];

  return (
    <>
      <PageHero 
        eyebrow="Services" 
        title="Technology Services" 
        intro="Custom software development, consulting, and maintenance services designed to solve complex business puzzles." 
        image={images.electronicsLab} 
      />

      <section className="py-16 md:py-20 bg-[#F3F5F7]">
        <div className="container-x grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          
          {/* STICKY SIDEBAR */}
          <aside className="flex flex-col gap-2 lg:sticky lg:top-[100px] z-20">
            <h2 className="text-lg font-bold text-navy mb-4 px-2">Technology Services</h2>
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

          {/* RIGHT CONTENT AREA */}
          <div className="flex flex-col gap-6">
            
            {/* TOP SECTION: 2 Columns */}
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start relative">
              
              {/* Staggered Info Cards */}
              <div className="flex flex-col gap-4 lg:mt-[55px] z-10">
                
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-border">
                  <h3 className="text-2xl font-bold text-navy mb-3">{activeContent.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {activeContent.intro}
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-border">
                  <h4 className="text-xs font-bold text-[#71804B] uppercase tracking-widest mb-3">Service Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {activeContent.overview}
                  </p>
                </div>
              </div>

              {/* Balanced Large Image */}
              <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-border h-[350px] lg:h-[480px]">
                <img 
                  src={activeContent.image.src} 
                  alt={activeContent.image.alt} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
              </div>
            </div>

            {/* Core Capabilities */}
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