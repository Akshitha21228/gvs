import { createMiddleware } from "@tanstack/react-start";

// Load the auth SDK only when making a server-function call, rather than on
// every public page. Preserve the existing bearer-token behavior.
export const lazyAuthMiddleware = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
  },
);
