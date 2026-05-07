# @gaodes/pi-utils-ui

> This is a fork of [@aliou/pi-utils-ui](https://github.com/aliou/pi-utils-ui) by [Aliou DIA](https://github.com/aliou).
> All versions prior to 0.3.0 are credited to the original author.

## 0.3.2 - 2026-05-08

### Changed

- Updated peer and dev dependencies from `@mariozechner/*` to `@earendil-works/*` following the Pi 0.74.0 scope migration.
- Bumped minimum peer dependency versions to `>=0.74.0` to align with the new package scope.

## 0.3.1 - 2026-05-03

### Changed

- Point package metadata and npm README links at the public `gaodes/pi-utils-ui` GitHub mirror.
- Update README import example to use `@gaodes/pi-utils-ui`.
- Include `CHANGELOG.md` in the published package.

## 0.3.0 - 2026-05-01

### Changed

- Renamed package from `@aliou/pi-utils-ui` to `@gaodes/pi-utils-ui`
- Published under `@gaodes` npm scope

## 0.2.0

### Minor Changes

- e0ad809: Refactor `Frame` to extend `Container` from `pi-tui`, inheriting `addChild`, `removeChild`, and `clear`. `borderColor` is now required. Children are no longer accepted via constructor options — use `addChild` instead.
- Add Tree component for rendering nested data with box-drawing characters

## 0.1.5

### Patch Changes

- 72da619: Add a reusable `Frame` widget that wraps child components in a rounded border and allows configuring the border color.

## 0.1.4

### Patch Changes

- b14fb96: Relax Pi peer dependency ranges for pi-coding-agent and pi-tui to support current and future Pi versions without strict pinning.

## 0.1.3

### Patch Changes

- 76e7ef2: update Pi deps to 0.61.0

## 0.1.1

### Patch Changes

- 2f5ec32: mark pi SDK peer deps as optional to prevent koffi OOM in Gondolin VMs
