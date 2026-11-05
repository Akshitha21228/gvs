# GVS performance implementation

81 source images optimized into 290 uncropped WebP variants at widths up to 480, 768, 1280 and 1920 pixels, without upscaling. Originals retained. Full per-image byte sizes and variants: [image-size-report.json](scripts/image-size-report.json).

Comparable image transfer totals (one 1280px-or-nearest variant per source): 232,581,824 original bytes → 8,933,902 bytes; 223,647,922 bytes saved (96.16%). All generated resolutions together occupy 26,677,786 bytes. These are transfer comparisons, not a reduction in checkout size; retaining originals increases disk usage.

| Image | Original bytes | 1280px WebP bytes |
| --- | ---: | ---: |
| hero.png | 2,292,879 | 172,238 |
| vrop.png | 7,949,828 | 95,002 |
| vrweapon.png | 7,879,455 | 125,608 |
| calibiration.png | 8,721,582 | 154,696 |

ResponsiveImage uses srcset, sizes, real intrinsic dimensions, async decoding, lazy loading by default and eager/high priority for heroes. The tall mobile homepage hero uses a cover-aware sizes value to preserve sharpness. Background heroes use DPR-aware image-set. Product paths are local, case-sensitive, content-addressed URLs and all variants are present in Vercel static output.

The initial main bundle changed from 703.23 KB (203.93 KB gzip) to approximately 507 KB (152 KB gzip). The 219 KB Supabase client chunk loads on server-function use. Route splitting was already active; it is now explicit, and intent preloading uses a 30-second freshness window to avoid repeated preloads. Font families and weights are preserved using locally served variable WOFF2 files.

Scrolling: viewport video observers defer downloads, pause offscreen/background playback, and retain the original foreground and blurred-background video presentation. No custom scroll listeners were found to remove. Card hover transitions are restricted to affected properties; existing transforms and animations remain. Header memoization avoids parent-driven renders while menu state and router subscriptions still update normally.

Vercel: explicit platform preset when VERCEL is set, Node.js 24 function output, immutable caching for hashed assets, shorter revalidating caching for fonts/video. A postbuild helper adds cache rules to Build Output API routes. Original assets remain available. No deployment was performed.

Validation: Vercel production build and postbuild passed; seven tests passed; TypeScript passed; git diff whitespace check passed. Chromium checked 13 routes at 390px and 1440px widths: all 26 checks returned 200, without broken visible images, horizontal overflow, or page errors. Mobile client navigation worked; all 18 product images decoded. Initial homepage requests had no external destinations; offscreen videos had no loaded source. Generated image paths were checked in Vercel output. These are functional checks, not measured Core Web Vitals or Lighthouse results.

Remaining: live Vercel deployment and field metrics unverified; existing lint debt remains. Videos are still large when playback starts, and the two visible video layers still decode separately to preserve the current effect. Original images remain in output for compatibility. Enquiry credential configuration is independent of this frontend work.

## Modified files

- `.gitignore`
- `package.json`
- `src/components/site/Logo.tsx`
- `src/components/site/PageHero.tsx`
- `src/components/site/SiteHeader.tsx`
- `src/components/site/SiteImage.tsx`
- `src/components/site/WhyChooseGVS.tsx`
- `src/data/images.ts`
- `src/router.tsx`
- `src/routes/__root.tsx`
- `src/routes/about.tsx`
- `src/routes/engineering-capabilities.tsx`
- `src/routes/index.tsx`
- `src/routes/products.$slug.tsx`
- `src/routes/products.index.tsx`
- `src/routes/projects-experience.tsx`
- `src/routes/services/calibration.tsx`
- `src/routes/services/engineering-assurance.tsx`
- `src/routes/services/project-lifecycle-support.tsx`
- `src/routes/services/services.index.tsx`
- `src/routes/services/solar.tsx`
- `src/routes/services/technology.tsx`
- `src/start.ts`
- `src/styles.css`
- `vite.config.ts`
- `src/components/site/ResponsiveImage.tsx`
- `src/components/site/ViewportVideo.tsx`
- `src/data/optimized-images.json`
- `src/lib/lazy-auth-middleware.ts`
- `src/test/responsive-image.test.tsx`
- `scripts/optimize-images.py`
- `scripts/configure-vercel.mjs`
- `scripts/image-size-report.json`
- `vercel.json`
- `public/fonts/ (two variable fonts and licenses)`
- `public/optimized/ (290 generated WebP variants)`
