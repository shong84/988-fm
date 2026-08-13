# 988 FM — Tesla-optimized web player

Replace your existing `index.html` with the supplied file.

The page:
- keeps the existing `988-logo-original.png` asset;
- uses the direct 988 AAC live stream;
- tries autoplay on page load;
- falls back to one large PLAY button if autoplay is blocked;
- supports Media Session controls where the browser exposes them;
- keeps a minimal Tesla-friendly UI;
- attempts automatic reconnection after a stream interruption.

Tesla's current Model 3 manual states that browser audio continues in the background after the browser is minimized and can be controlled from the Media Miniplayer.

Required existing asset:
`988-logo-original.png`
