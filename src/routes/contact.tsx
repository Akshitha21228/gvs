import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { company } from "@/data/company";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ product: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Contact GVS — Request an Enquiry | Green Vision Solutions" },
      { name: "description", content: "Contact Green Vision Solutions, ECIL, Hyderabad. Send an enquiry about defence training simulators, VR/AR training, integration or support." },
      { property: "og:title", content: "Contact Green Vision Solutions (GVS India)" },
      { property: "og:description", content: "Send an enquiry to the GVS team in Hyderabad." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { product } = Route.useSearch();
  const productName = product ? getProduct(product)?.name ?? "" : "";
  return (
    <>
      <PageHero eyebrow="Contact us" title="Request an Enquiry" intro="Tell us about your training requirement. Our team will respond to the email address you provide." />
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-on-dark">
              <h2 className="text-xl font-semibold">{company.name}</h2>
              <address className="mt-6 space-y-5 text-sm not-italic text-on-dark-muted">
                <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
                  <span>{company.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
                <p className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
                  <a href={company.teleFaxHref} className="hover:text-on-dark">Tele-Fax: {company.teleFax}</a></p>
                <p className="flex gap-3"><Mail className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-on-dark">{company.email}</a></p>
              </address>
            </div>
            <iframe
              title="Map showing ECIL, Kapra, Hyderabad"
              src="https://www.google.com/maps?q=Bhavani+Nagar,+Kapra,+ECIL,+Hyderabad+500062&output=embed"
              className="aspect-[4/3] w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-card md:p-10">
            <h2 className="text-2xl font-bold">Send us your enquiry</h2>
            <p className="mt-2 mb-8 text-sm text-muted-foreground">All enquiries are handled by the GVS team.</p>
            <EnquiryForm defaultProduct={productName} sourcePage="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
