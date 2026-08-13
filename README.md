# 988 FM — recovered autoplay version

This package restores the **autoplay logic from the version that was working yesterday**.

Important playback behavior:
- `<audio>` uses `autoplay` and `preload="auto"`.
- On page `load`, it calls `playRadio()` immediately.
- It calls `playRadio()` again 500 ms later as a second attempt.
- If the browser blocks autoplay, the PLAY 988 button remains available.
- The direct 988 AAC stream is unchanged.
- The main page uses the transparent `988-logo-transparent.png`.
- No AI-generated logo is used for the main page.

Upload all files to the root of the GitHub Pages repository and replace the old files.
