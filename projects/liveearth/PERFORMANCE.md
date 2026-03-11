# Live Earth Performance Notes

## Code-Level Changes Landed

- Default terrain mode now uses low-detail country geometry plus lightweight border paths.
- Country selection highlight is decoupled from the base overlay, so open/close no longer forces a full world choropleth redraw.
- Country side panels no longer shift or resize the WebGL canvas while animating.
- Heavy live layers now respect motion- and zoom-aware render budgets.
- Weather, rainfall, wind, air-quality, hazards, rivers, ISS, and space-weather fetches are proxied through shared liveearth endpoints.
- Remote sky and terrain assets are now self-hosted.

## Recommended Vercel Settings

- Prefer a region close to the largest user cluster and the upstream APIs you care about most.
- Keep CDN caching on for `/projects/liveearth/data/*` and `/projects/liveearth/textures/*`.
- Use `s-maxage` and `stale-while-revalidate` for every live feed endpoint.
- If live feeds start timing out under load, raise memory/CPU only for the hot functions instead of the whole project.
- Fluid Compute is worth enabling if request bursts or cold-start variance start showing up in the live feeds.
- Watch function count on Hobby plans. If the dedicated liveearth deployment stays on Hobby, keep consolidating proxies instead of adding one function per source.

## Recommended Hardware / Browser Setup

- GPU matters more than server horsepower for the country layer and globe motion.
- Strong single-core CPU performance helps camera and interaction smoothness.
- Keep browser hardware acceleration enabled.
- On high-DPI or ultrawide displays, the adaptive renderer pixel ratio is important; avoid forcing full native pixel ratio during interaction.
- Test in Chromium-based browsers first when diagnosing client-side smoothness.
