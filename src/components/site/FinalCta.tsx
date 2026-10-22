import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-on-dark">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="container-x relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold md:text-4xl">Let's Discuss Your Training Requirements</h2>
        </div>
        <Button asChild variant="hero" size="lg" className="h-12 px-8">
          <Link to="/contact">Contact GVS</Link>
        </Button>
      </div>
    </section>
  );
}
