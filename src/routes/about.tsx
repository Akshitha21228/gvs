import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteImage } from "@/components/site/SiteImage";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/data/images";
import { activities, deliveredSystems, jointDevelopmentStatement } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GVS — Green Vision Solutions, Hyderabad" },
      { name: "description", content: "Green Vision Solutions designs, develops, manufactures, integrates and supports defence training simulators and simulation technologies from Hyderabad, India." },
      { property: "og:title", content: "About Green Vision Solutions (GVS India)" },
      { property: "og:description", content: "Company overview, business activities, design, manufacturing, integration and support capabilities." },
    ],
  }),
  component: About,
});

const pillars = [
  { title: "Design and development", body: "Training simulators, VR/AR and simulation-based combat training systems, combat medical care simulators and mission rehearsal systems." },
  { title: "Manufacturing and integration", body: "Defence mockups, laser-based firing systems, weapon-mounted training systems, battlefield simulation systems, target systems and accessories." },
  { title: "Defence electronics", body: "Electro-optical devices, surveillance, communication, tracking and sensor-based systems for allied military applications." },
  { title: "Technical support", body: "Training, consultancy, technical support, AMC, repair, upgrade and system integration services." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About GVS" title="Green Vision Solutions" intro="A Hyderabad-based company engaged in defence training simulators, simulation technologies, system development, manufacturing, integration and support." image={images.terrain} />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Company overview</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simulation technology for training</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              GVS works across the full lifecycle of training and simulation systems — from design and development through manufacture and integration to training, maintenance and upgrades.
            </p>
            <blockquote className="mt-8 border-l-4 border-olive bg-mist p-6">
              <p className="font-medium">{jointDevelopmentStatement}</p>
              <footer className="mt-2 text-xs text-muted-foreground">Statement from company records — subject to company verification for publication.</footer>
            </blockquote>
          </div>
          <SiteImage image={images.electronicsLab} className="aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Business activities</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">What GVS does</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {activities.map((a, i) => (
              <li key={i} className="flex gap-5 rounded-xl bg-card p-6 shadow-card">
                <span className="font-display text-2xl font-bold text-olive">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Design, manufacture, integration and support</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-olive pt-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-navy p-8 text-on-dark md:p-12">
            <h3 className="text-xl font-semibold">Systems designed, developed and delivered</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {deliveredSystems.map((s) => <li key={s} className="text-sm text-on-dark-muted">— {s}</li>)}
            </ul>
            <Link to="/products" className="mt-8 inline-block text-sm font-semibold underline-offset-4 hover:underline">Browse the full product catalogue →</Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
