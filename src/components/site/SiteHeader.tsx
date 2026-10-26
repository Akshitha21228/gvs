// import { Link } from "@tanstack/react-router";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Logo } from "./Logo";
// import { Button } from "@/components/ui/button";

// export const navItems = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About GVS" },
//   { to: "/solutions", label: "Solutions" },
//   { to: "/products", label: "Products" },
//   { to: "/projects", label: "Projects & Capabilities" },
//   { to: "/contact", label: "Contact Us" },
// ] as const;

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   return (
//     <header className="sticky top-0 z-50 border-b border-line-dark bg-navy/95 backdrop-blur">
//       <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-3 focus:py-2">
//         Skip to content
//       </a>
//       <div className="container-x flex h-18 items-center justify-between gap-4 py-3">
//         <Link to="/" aria-label="GVS India home" className="shrink-0">
//           <Logo className="h-11 md:h-12" />
//         </Link>
//         <nav aria-label="Main" className="hidden lg:block">
//           <ul className="flex items-center gap-1">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <Link
//                   to={item.to}
//                   activeOptions={{ exact: item.to === "/" }}
//                   className="rounded-md px-3 py-2 text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark data-[status=active]:text-on-dark data-[status=active]:bg-line-dark"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="flex items-center gap-2">
//           <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
//             <Link to="/contact">Request an Enquiry</Link>
//           </Button>
//           <button
//             type="button"
//             className="inline-flex size-10 items-center justify-center rounded-md text-on-dark lg:hidden"
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             aria-controls="mobile-nav"
//             onClick={() => setOpen((o) => !o)}
//           >
//             {open ? <X className="size-6" /> : <Menu className="size-6" />}
//           </button>
//         </div>
//       </div>
//       {open && (
//         <div id="mobile-nav" className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-navy lg:hidden">
//           <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
//             <div className="mb-4"><Logo className="h-12" /></div>
//             {navItems.map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 activeOptions={{ exact: item.to === "/" }}
//                 onClick={() => setOpen(false)}
//                 className="border-b border-line-dark py-4 font-display text-lg text-on-dark-muted data-[status=active]:text-on-dark"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Button asChild variant="hero" size="lg" className="mt-6">
//               <Link to="/contact" onClick={() => setOpen(false)}>Request an Enquiry</Link>
//             </Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// import { Link } from "@tanstack/react-router";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Logo } from "./Logo";
// import { Button } from "@/components/ui/button";

// export const navItems = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About GVS" },
//   { to: "/solutions", label: "Solutions" },
//   { to: "/products", label: "Products" },
//   { to: "/projects", label: "Projects & Capabilities" },
//   { to: "/contact", label: "Contact Us" },
// ] as const;

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   return (
//     <header className="sticky top-0 z-50 border-b border-line-dark bg-navy/95 backdrop-blur">
//       <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-3 focus:py-2">
//         Skip to content
//       </a>
      
//       {/* HEADER BAR */}
//       <div className="container-x flex h-[72px] items-center justify-between gap-4 py-3">
//         <Link to="/" aria-label="GVS India home" className="shrink-0" onClick={() => setOpen(false)}>
//           <Logo className="h-10 md:h-12" />
//         </Link>
        
//         {/* DESKTOP NAV */}
//         <nav aria-label="Main" className="hidden lg:block">
//           <ul className="flex items-center gap-1">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <Link
//                   to={item.to}
//                   activeOptions={{ exact: item.to === "/" }}
//                   className="rounded-md px-3 py-2 text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark data-[status=active]:text-on-dark data-[status=active]:bg-line-dark"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
        
//         {/* BUTTONS & MOBILE TOGGLE */}
//         <div className="flex items-center gap-2">
//           <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
//             <Link to="/contact">Request an Enquiry</Link>
//           </Button>
//           <button
//             type="button"
//             className="inline-flex size-10 items-center justify-center rounded-md text-on-dark lg:hidden hover:bg-white/10"
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             aria-controls="mobile-nav"
//             onClick={() => setOpen((o) => !o)}
//           >
//             {open ? <X className="size-6" /> : <Menu className="size-6" />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU DRAWER */}
//       {open && (
//         <div 
//           id="mobile-nav" 
//           className="absolute inset-x-0 top-[72px] h-[calc(100vh-72px)] z-40 overflow-y-auto bg-navy lg:hidden border-t border-line-dark"
//         >
//           <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 activeOptions={{ exact: item.to === "/" }}
//                 onClick={() => setOpen(false)}
//                 className="border-b border-line-dark py-4 font-display text-lg text-on-dark-muted data-[status=active]:text-on-dark"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Button asChild variant="hero" size="lg" className="mt-6">
//               <Link to="/contact" onClick={() => setOpen(false)}>Request an Enquiry</Link>
//             </Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Cpu, Sun, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About GVS" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects & Capabilities" },
  { to: "/contact", label: "Contact Us" },
] as const;

// The sub-services for the Mega Menu
const serviceItems = [
  { 
    to: "/services/technology", 
    label: "Technology Services",
    description: "Advanced tech integration and simulation support.",
    icon: <Cpu className="size-5 text-[#A8B879]" />
  },
  { 
    to: "/services/solar", 
    label: "Solar Services",
    description: "Sustainable energy solutions for defence infrastructure.",
    icon: <Sun className="size-5 text-[#A8B879]" />
  },
  { 
    to: "/services/calibration", 
    label: "Calibration Services",
    description: "Precision calibration for defence electronics and equipment.",
    icon: <Settings className="size-5 text-[#A8B879]" />
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); 
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // Prevent body scroll when mobile menu is open (SSR SAFE)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => { 
      if (typeof document !== "undefined") {
        document.body.style.overflow = ""; 
      }
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-navy/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-3 focus:py-2">
        Skip to content
      </a>
      
      <div className="container-x flex h-[72px] items-center justify-between gap-4 py-3">
        <Link to="/" aria-label="GVS India home" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-10 md:h-12" />
        </Link>
        
        {/* DESKTOP NAVIGATION */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark data-[status=active]:text-on-dark data-[status=active]:bg-line-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* MEGA MENU TRIGGER */}
            <li 
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark">
                Services
                <ChevronDown className={cn("size-4 transition-transform duration-200", showMegaMenu && "rotate-180")} />
              </button>

              {/* MEGA MENU PANEL (Single Column) */}
              {showMegaMenu && (
                <div className="absolute left-0 top-full w-[320px] pt-2">
                  <div className="overflow-hidden rounded-xl border border-line-dark bg-navy shadow-2xl">
                    <div className="flex flex-col p-2">
                      {serviceItems.map((subItem) => (
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          onClick={() => setShowMegaMenu(false)}
                          className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
                        >
                          <div className="mt-0.5">{subItem.icon}</div>
                          <div>
                            <p className="font-semibold text-on-dark group-hover:text-[#A8B879] transition-colors">{subItem.label}</p>
                            <p className="text-xs text-on-dark-muted mt-1 leading-relaxed">{subItem.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
        
        {/* BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Request an Enquiry</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-on-dark lg:hidden hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {open && (
        <div 
          id="mobile-nav" 
          className="absolute inset-x-0 top-[72px] h-[calc(100vh-72px)] z-40 overflow-y-auto bg-navy lg:hidden border-t border-line-dark"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-line-dark py-4 font-display text-lg text-on-dark-muted data-[status=active]:text-on-dark"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div className="border-b border-line-dark py-4">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between font-display text-lg text-on-dark-muted"
              >
                Services
                <ChevronDown className={cn("size-5 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="flex flex-col gap-4 pt-4 pl-4">
                  {serviceItems.map((subItem) => (
                    <Link
                      key={subItem.to}
                      to={subItem.to}
                      onClick={() => setOpen(false)}
                      className="flex flex-col gap-1 py-1 text-base text-on-dark-muted hover:text-on-dark"
                    >
                      <span className="font-semibold text-on-dark">{subItem.label}</span>
                      <span className="text-xs text-on-dark-muted">{subItem.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/contact" onClick={() => setOpen(false)}>Request an Enquiry</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}