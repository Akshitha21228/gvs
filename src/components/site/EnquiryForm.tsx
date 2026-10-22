import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { enquirySchema, enquiryTypes } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<string, string>>;
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success" } | { kind: "error"; message: string };

const fieldCls =
  "mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive";

export function EnquiryForm({ defaultProduct = "", sourcePage = "" }: { defaultProduct?: string; sourcePage?: string }) {
  const send = useServerFn(submitEnquiry);
  const startedAt = useRef(Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [product, setProduct] = useState(defaultProduct);

  useEffect(() => setProduct(defaultProduct), [defaultProduct]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      fullName: String(fd.get("fullName") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      product,
      enquiryType: String(fd.get("enquiryType") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
      sourcePage,
    };
    const parsed = enquirySchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      setStatus({ kind: "idle" });
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }
    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const res = await send({ data: raw });
      if (res.ok) {
        setStatus({ kind: "success" });
        form.reset();
        setProduct(defaultProduct);
      } else {
        setStatus({ kind: "error", message: res.error });
      }
    } catch {
      setStatus({ kind: "error", message: "We could not send your enquiry. Please check your connection and try again." });
    }
  }

  if (status.kind === "success") {
    return (
      <div role="status" className="rounded-xl border border-success/30 bg-olive-soft p-8">
        <CheckCircle2 className="size-10 text-success" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold">Enquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you. Your enquiry has been recorded and the GVS team will respond to the email address you provided.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => { startedAt.current = Date.now(); setStatus({ kind: "idle" }); }}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-xs font-medium text-destructive">{errors[k]}</p> : null;
  const a11y = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label="Enquiry form">
      <div>
        <label htmlFor="fullName" className="text-sm font-medium">Full name *</label>
        <input id="fullName" name="fullName" autoComplete="name" className={fieldCls} {...a11y("fullName")} />
        {err("fullName")}
      </div>
      <div>
        <label htmlFor="organisation" className="text-sm font-medium">Organisation *</label>
        <input id="organisation" name="organisation" autoComplete="organization" className={fieldCls} {...a11y("organisation")} />
        {err("organisation")}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Business email *</label>
        <input id="email" name="email" type="email" autoComplete="email" className={fieldCls} {...a11y("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">Phone number *</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldCls} {...a11y("phone")} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="product" className="text-sm font-medium">Product of interest</label>
        <select id="product" name="product" value={product} onChange={(e) => setProduct(e.target.value)} className={fieldCls}>
          <option value="">Not specific / general</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="enquiryType" className="text-sm font-medium">Enquiry type *</label>
        <select id="enquiryType" name="enquiryType" defaultValue="" className={fieldCls} {...a11y("enquiryType")}>
          <option value="" disabled>Select…</option>
          {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {err("enquiryType")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">Message *</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} className={cn(fieldCls, "resize-y")} {...a11y("message")} />
        {err("message")}
      </div>
      {/* Honeypot — hidden from people, tempting for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status.kind === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive sm:col-span-2">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {status.message}
        </div>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" variant="navy" size="lg" className="h-12 w-full sm:w-auto" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? <><Loader2 className="animate-spin" aria-hidden /> Sending…</> : "Submit Enquiry"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">Fields marked * are required.</p>
      </div>
    </form>
  );
}
