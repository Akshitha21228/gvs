// import { Link } from "@tanstack/react-router";
// import { Button } from "@/components/ui/button";

// export function FinalCta() {
//   return (
//     <section className="relative overflow-hidden bg-charcoal text-on-dark">
//       <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
//       <div className="container-x relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
//         <div>
//           <p className="eyebrow">Get in touch</p>
//           <h2 className="mt-3 max-w-xl text-3xl font-bold md:text-4xl">Let's Discuss Your Training Requirements</h2>
//         </div>
//         <Button asChild variant="hero" size="lg" className="h-12 px-8">
//           <Link to="/contact">Contact GVS</Link>
//         </Button>
//       </div>
//     </section>
//   );
// }
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-charcoal py-20 text-on-dark md:py-24 relative overflow-hidden">
      {/* Optional background grid pattern to match your screenshot */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" aria-hidden="true" />
      
      <div className="container-x max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-olive uppercase mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold md:text-[44px] leading-[1.15] text-white">
              Have a specific training or simulation requirement?
            </h2>
            <p className="mt-4 text-lg text-[#CBD5E1] max-w-2xl">
              Talk to GVS about your project objectives, technical requirements and integration needs.
            </p>
          </div>

          <div className="shrink-0">
            <Button asChild size="lg" className="h-14 px-8 bg-[#71804B] hover:bg-olive text-white transition-colors text-lg font-semibold">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}