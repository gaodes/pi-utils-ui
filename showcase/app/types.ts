import type { Component } from "@mariozechner/pi-tui";

export type DemoVariant = {
  id: string;
  title: string;
  description?: string;
  render: () => Component;
};

export type DemoCategory =
  | "layout"
  | "containers"
  | "data"
  | "feedback"
  | "navigation"
  | "forms"
  | "tools";

export type ShowcaseDemo = {
  id: string;
  title: string;
  category: DemoCategory;
  summary?: string;
  variants: DemoVariant[];
  initialVariantId?: string;
};
