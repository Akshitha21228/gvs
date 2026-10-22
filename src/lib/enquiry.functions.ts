import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled or form submitted implausibly fast → silently reject as spam.
    if (data.website || Date.now() - data.startedAt < 3000) {
      return { ok: false as const, error: "Submission could not be verified. Please try again." };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const email = data.email.toLowerCase();

    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", since);
    if (countError) {
      console.error("enquiry rate check failed", countError.message);
      return { ok: false as const, error: "We could not send your enquiry right now. Please try again shortly." };
    }
    if ((count ?? 0) >= 5) {
      return { ok: false as const, error: "Too many enquiries from this email in the last hour. Please try again later." };
    }

    const { error } = await supabaseAdmin.from("enquiries").insert({
      full_name: data.fullName,
      organisation: data.organisation,
      email,
      phone: data.phone,
      product: data.product || null,
      enquiry_type: data.enquiryType,
      message: data.message,
      source_page: data.sourcePage || null,
    });
    if (error) {
      console.error("enquiry insert failed", error.message);
      return { ok: false as const, error: "We could not send your enquiry right now. Please try again shortly." };
    }
    return { ok: true as const };
  });
