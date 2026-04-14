---
"@aliou/pi-utils-ui": minor
---

Refactor `Frame` to extend `Container` from `pi-tui`, inheriting `addChild`, `removeChild`, and `clear`. `borderColor` is now required. Children are no longer accepted via constructor options — use `addChild` instead.
