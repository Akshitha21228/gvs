import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "./SiteHeader";
import { company } from "@/data/company";
import { products } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-on-dark-muted">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo className="h-14" />
          <p className="text-sm leading-relaxed">
            Green Vision Solutions — design, development, manufacture, integration and support of defence training simulators and simulation technologies.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-on-dark">Explore</h2>
          <ul className="space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-on-dark">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-on-dark">Selected products</h2>
          <ul className="space-y-2 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-on-dark">{p.name}</Link>
              </li>
            ))}
            <li><Link to="/products" className="font-semibold text-on-dark hover:underline">All 18 products →</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-on-dark">Contact</h2>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
              <span>{company.name}<br />{company.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span>
            </p>
            <p className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
              <a href={company.teleFaxHref} className="hover:text-on-dark">Tele-Fax: {company.teleFax}</a></p>
            <p className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
              <a href={`mailto:${company.email}`} className="hover:text-on-dark">{company.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-line-dark">
        <div className="container-x flex flex-col gap-2 py-6 text-xs md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Green Vision Solutions. All rights reserved.</p>
          <p>Images marked “Illustrative” are conceptual and do not depict genuine GVS equipment.</p>
        </div>
      </div>
    </footer>
  );
}
