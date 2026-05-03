![banner](https://assets.aliou.me/pi-extensions/banners/pi-utils-ui.png)

# @gaodes/pi-utils-ui

> **Fork of [@aliou/pi-utils-ui](https://github.com/aliou/pi-utils-ui)** by [Aliou DIA](https://github.com/aliou) — MIT License
>
> This fork is maintained by [El Che](https://github.com/gaodes) under the `@gaodes` npm scope.
> The original project and author retain full credit for their work.

Internal shared TUI abstractions for Pi extensions.

[**Source**](https://github.com/gaodes/pi-utils-ui) · [**npm**](https://www.npmjs.com/package/@gaodes/pi-utils-ui) · [**Upstream**](https://github.com/aliou/pi-utils-ui)

## Modules

- `tools`: reusable tool call/result UI components.
- `widgets`: reusable interactive panels and viewers.
- `primitives`: ANSI-safe layout and rendering helpers.

## Usage

```ts
import {
  ToolHeader,
  ToolBody,
  ToolLlmTelemetryFooter,
  ToolCallListField,
  MarkdownResponseField,
  createRenderCache,
} from "@gaodes/pi-utils-ui";
```
