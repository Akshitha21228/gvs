import { existsSync, readFileSync, writeFileSync } from "node:fs";

// Build Output API consumes its own routes, so include cache headers there too.
const output = new URL("../.vercel/output/config.json", import.meta.url);
if (existsSync(output)) {
  const config = JSON.parse(readFileSync(output, "utf8"));
  const { headers } = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  const rules = headers.filter(rule => !rule.source.startsWith("/assets/"))
    .map(rule => ({ src: rule.source, headers: Object.fromEntries(rule.headers.map(({ key, value }) => [key, value])), continue: true }));
  config.routes = [...rules, ...(config.routes ?? [])];
  writeFileSync(output, JSON.stringify(config, null, 2) + "\n");
}
