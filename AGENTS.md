<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- NEMPO Feed is migrated from github.com/nempocreative/nempo-60 as a sub-app in `src/apps/feed`, mounted at `/nempo-feed` (`/` redirects there); why: the owner is migrating that repo section by section.
- Tion Feed (Nasution Boy) is migrated from github.com/nempocreative/organizer `artifacts/tion-feed` as sub-app `src/apps/tion`, mounted at `/tion-feed` (all 12 source feed slides with the number picker, opening on slide 8; the Story and the bumper stay removed at the owner's request, and `/tion-feed/*` redirects to it), media as project asset pointers in `src/assets/tion/`; why: keeps the source app's own routing and look intact.
- Tion slides 13+ promos share `PromoVideoSlide` (scoped `tion13-` styles, per-slide `tion13--<name>` layout modifier, promo copy/prices in tested `tion-promos.ts`; Heyam only for letters since its demo build swaps digits for watermark glyphs, digits use Bowlby One SC) over a forward-reverse café loop video, and each downloads a pointer-only MP4 (1080×1350, 30 fps, two video loops) recorded from the preview at 1080 CSS px × 1 by seeking the video and time-stepping animations; re-record when a slide changes; why: download must match the animated preview.
- tsconfig strict extras (noUncheckedIndexedAccess, exactOptionalPropertyTypes, etc.) are off to match the source repo; why: migrated code was written without them.
- GGS prebuilt download files (MP4/PNG asset pointers) are captured from the live preview with the slide root pinned at 0,0 and 1440 CSS px wide, CSS animations paused and stepped per frame; videos at dpr 1. A 2× still is allowed only by capturing at dpr 2 with the header/footer overlay hidden and compositing the overlay afterwards with a Lanczos 2× upscale; why: the overlays are 1440×1920 bitmaps and the browser's rescale blurs their text. Recapture when the slide changes.
- NEMPO slide 37 plays its rendered activity MP4 through an asset pointer with pause/replay/audio controls and reduced-motion support; the same file is downloaded via a prefetched blob link and its first frame supplies the PNG cover, keeping preview and downloads identical.
- Every `.asset.json` pointer must belong to this project (re-upload with `lovable-assets create` when copying from another project); why: hosted media URLs are project-scoped and 404 elsewhere.
- GGS slide 33 recolors its reference-style glitter photo through a full-photo nail mask with color blending, preserving baked-in ombre, magnetic shimmer and glitter rather than covering them with flat paint; re-record its MP4 whenever the photo or layers change so downloads match the preview.

- GGS annual calendar keeps its 5:7 export artboard, UTC date calculation, and scoped ggcal styles with global palette tokens; dated national holidays and non-holiday commemorations live in tested ggs-calendar-dates with official source citations, separately from optional collective leave; why: print and preview must share an accurate, legible twelve-month layout.
- GGS price-list PDFs are prebuilt from the live print layout with embedded static font instances using scripts/export-ggs-price-pdf.py; regenerate when its data or design changes, keeping text vector instead of flattening pages to screenshots.
- GGS price-list print PNGs (one per page, 2480×3508 = A4 at 300 dpi, plus a ZIP of all) are pointer-only assets captured by scripts/export-ggs-price-png.py (sheet pinned to 620×877 CSS px at device scale 4, same print fonts as the PDF); regenerate alongside the PDF; why: the owner prints from PNG and needs it sharp.
- GGS Cowok slide 6 reuses slide 5's scoped promo layout (own `ggmh-` styles) and crossfades one AI photo per hair colour (same client and framing, colour list in tested `ggs-men-colouring-promo.ts`; lower photos sit underneath so fades never wash out), and downloads a pointer-only MP4 (1440×1920, 30 fps, one loop) time-stepped from the preview at 1440 CSS px × 1; re-record when photos or colours change; why: the owner rejected mask-tinted hair as fake-looking.
- GGS Cowok invitation slides keep promo prices in tested data and use scoped slide styles; slide 10 downloads a pointer-only PNG captured at 1080 CSS px × 3 with `?ggmi=plain` and the men's overlay composited with Lanczos; recapture on changes so the sharp download matches the preview.
- NEMPO slide 46 uses scoped `nbd-` styles, tested event data and a prebuilt PNG captured at 1080 CSS px × 3; recapture after changes so downloads match the preview.
- GGS Feed slide 52 uses scoped `ggno-` styles and a pointer-only 3240×4320 PNG captured at 1080 CSS px × 3 with `?ggno=plain`, compositing the v2 header/footer via Lanczos 3×; recapture when the slide changes so download and preview match.
- NEMPO Feed slide 49 plays a pre-rendered portrait motion-graphics MP4 (green NEMPO palette, one DJ across all photos) via a project asset pointer, using the same file for download and an opening-title frame as poster; re-render from the owner's transparent DJ cutouts when the design changes; why: original DJ faces and marks stay intact and downloaded animation matches playback.
- Prebuilt MP4 download buttons always show a target="_blank" "open video in a new tab" link beside the blob download; why: the preview frame can silently block downloads and the iPad/iPhone share sheet, and a window.open after an async rejection is blocked as a pop-up.
- NEMPO Feed slides 51–52 share slide 50's stage frame and animated stage lights (`nempo-stage-lights.ts`, `nar-` stage classes); slide 52 (`NempoHariIniSlide`, scoped `nhi-` styles, tested copy in `nempo-hari-ini.ts`) downloads a pointer-only MP4 (1080×1440, 30 fps, 6 s loop) time-stepped from the preview at 1080 CSS px × 1; re-record when the slide or shared lights change; why: download must match the animated preview.
