# 988 FM — tuned version

This version is based on the previously working autoplay build.

Autoplay logic intentionally preserved:
- `<audio preload="auto" autoplay playsinline>`
- play on page load
- second play attempt after 500 ms

Only the UI, reconnection handling, and service-worker caching were fine-tuned.
The live stream URL and autoplay mechanism were not changed.

Upload/replace all files in this package in the GitHub Pages repository.
Do not remove `988-logo-transparent.png`.
