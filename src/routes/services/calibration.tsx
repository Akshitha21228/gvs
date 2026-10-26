import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Zap, Gauge, Radio, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { images } from "@/data/images";

export const Route = createFileRoute("/services/calibration")({
  head: () => ({
    meta: [
      { title: "Calibration Services | GVS India" },
      { name: "description", content: "Precision Calibration for Reliable Performance. NABL-accredited calibration services by GVS." },
    ],
  }),
  component: CalibrationServices,
});

function CalibrationServices() {
  return (
    <>
      <PageHero 
        eyebrow="Services" 
        title="Calibration Services" 
        intro="Precision Calibration for Reliable Performance. NABL-accredited calibration services for electro-technical, pressure, RF, and biomedical instruments." 
        image={images.electronicsLab} 
      />

      <section className="py-16 md:py-24 bg-[#F3F5F7]">
        <div className="container-x">
          
          {/* TOP SECTION: Content Left, Image Right */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
            
            {/* Content Left */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border">
              <h2 className="text-3xl font-bold text-navy mb-6">Precision Calibration for Reliable Performance</h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                GVS provides calibration services through NABL-accredited laboratories, helping industries maintain measurement accuracy, equipment reliability, and compliance with applicable quality standards.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Our calibration solutions cover electro-technical, pressure, radio frequency, and biomedical instruments.
              </p>

              <h3 className="text-xl font-bold text-navy mb-4 border-b border-border pb-2">Why Choose GVS?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="size-5 text-[#71804B] shrink-0 mt-0.5" />
                  <span>Calibration through NABL-accredited laboratories</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="size-5 text-[#71804B] shrink-0 mt-0.5" />
                  <span>Accurate and reliable measurement services</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="size-5 text-[#71804B] shrink-0 mt-0.5" />
                  <span>Support for industrial and biomedical equipment</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <CheckCircle2 className="size-5 text-[#71804B] shrink-0 mt-0.5" />
                  <span>Quality-focused technical assistance</span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="w-full relative rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-[500px]">
              <img 
                src="/calibiration.png" 
                alt="Calibration Services" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* BOTTOM SECTION: Calibration Capabilities */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">Our Calibration Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Capability 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                <div className="text-[#71804B] mb-4">
                  <Zap className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-2">Electro-Technical Calibration</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Precision calibration of electrical and electronic measuring instruments, including multifunction calibrators and temperature calibrators.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                <div className="text-[#71804B] mb-4">
                  <Gauge className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-2">Pressure Calibration</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Accurate pressure measurement and calibration using precision piston-cylinder and cross-float systems.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                <div className="text-[#71804B] mb-4">
                  <Radio className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-2">Radio Frequency (RF) Calibration</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calibration of RF and frequency-measuring instruments used in telecommunications and wireless communication.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                <div className="text-[#71804B] mb-4">
                  <Stethoscope className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-2">Biomedical Equipment Calibration</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calibration of medical monitoring and diagnostic equipment to help maintain measurement accuracy and patient safety.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}