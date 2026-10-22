import type { ReactNode } from "react";
import type { SiteImage as SiteImageT } from "@/data/images";
import { SiteImage } from "./SiteImage";

export function PageHero({ eyebrow, title, intro, image, children }: {
  eyebrow: string; title: string; intro?: string; image?: SiteImageT; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-on-dark">
      {image && <SiteImage image={image} priority labelPosition="bottom" className="absolute inset-0" />}
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="fade-up mt-6 max-w-2xl text-lg text-on-dark-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
