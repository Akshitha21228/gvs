<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All site imagery is mapped in `src/data/images.ts`; components never import image files directly, so approved GVS photos can be swapped in one place.
- Product, solution and company facts live in `src/data/*.ts`; pages render from these so copy stays verifiable against company sources.
- Enquiries are stored via the `submitEnquiry` server function into the `enquiries` table (RLS on, no public policies; service-role insert only).
