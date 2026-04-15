import type { Theme } from "@mariozechner/pi-coding-agent";
import type { Component } from "@mariozechner/pi-tui";
import { truncateToWidth, visibleWidth } from "@mariozechner/pi-tui";

export type TreeTone =
  | "muted"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "toolOutput"
  | "dim";

export interface TreeNode {
  /** Display label for this node */
  label: string;
  /** Theme tone for the label. Defaults to "toolOutput". */
  tone?: TreeTone;
  /** Child nodes */
  children?: TreeNode[];
}

export interface TreeOptions {
  /** Theme for styling */
  theme: Theme;
  /** Whether to show root-level connectors (├──/└──). Default: false. */
  rootConnectors?: boolean;
  /** Suffix appended to nodes that have children. Default: "/" */
  dirSuffix?: string;
}

/**
 * Tree component — renders nested TreeNode data as a tree with box-drawing characters.
 *
 * Tree chars (├──, └──, │) are always rendered in the "muted" tone.
 * Each node's label is rendered in its own tone (default: "toolOutput").
 *
 * Collapse/expand is handled outside this component — callers slice
 * their data before constructing the tree.
 */
export class Tree implements Component {
  private options: TreeOptions;
  private roots: TreeNode[];

  constructor(roots: TreeNode[], options: TreeOptions) {
    this.roots = roots;
    this.options = options;
  }

  update(roots: TreeNode[], options: TreeOptions): void {
    this.roots = roots;
    this.options = options;
  }

  invalidate(): void {}

  render(width: number): string[] {
    const lines: string[] = [];
    const { theme, rootConnectors = false, dirSuffix = "/" } = this.options;

    for (let i = 0; i < this.roots.length; i++) {
      const isLast = i === this.roots.length - 1;
      const node = this.roots[i];

      if (rootConnectors) {
        renderChild(node, isLast, [], width, theme, dirSuffix, lines);
      } else {
        // Root nodes: no connector, just the label
        renderRoot(node, width, theme, dirSuffix, lines);
      }
    }

    return lines;
  }
}

/** Render a root node (no connector prefix). */
function renderRoot(
  node: TreeNode,
  width: number,
  theme: Theme,
  dirSuffix: string,
  lines: string[],
): void {
  const hasChildren = node.children && node.children.length > 0;
  const label = hasChildren ? `${node.label}${dirSuffix}` : node.label;
  const tone = node.tone ?? "toolOutput";
  const truncated = truncateToWidth(label, width);
  lines.push(theme.fg(tone, truncated));

  if (!node.children || node.children.length === 0) return;

  for (let i = 0; i < node.children.length; i++) {
    const isLast = i === node.children.length - 1;
    renderChild(node.children[i], isLast, [], width, theme, dirSuffix, lines);
  }
}

/**
 * Render a child node with a connector prefix.
 * `ancestorBars` tracks whether each ancestor level has a continuation bar (│).
 */
function renderChild(
  node: TreeNode,
  isLast: boolean,
  ancestorBars: boolean[],
  width: number,
  theme: Theme,
  dirSuffix: string,
  lines: string[],
): void {
  // Build prefix: ancestor continuation bars + connector
  let prefix = "";
  for (const hasBar of ancestorBars) {
    prefix += hasBar ? "│   " : "    ";
  }
  prefix += isLast ? "└── " : "├── ";

  const hasChildren = node.children && node.children.length > 0;
  const label = hasChildren ? `${node.label}${dirSuffix}` : node.label;
  const tone = node.tone ?? "toolOutput";

  // Truncate label to fit remaining width after prefix
  const prefixVisible = visibleWidth(prefix);
  const available = Math.max(1, width - prefixVisible);
  const truncated = truncateToWidth(label, available);

  lines.push(`${theme.fg("muted", prefix)}${theme.fg(tone, truncated)}`);

  if (!node.children || node.children.length === 0) return;

  // For children: this node's "hasBar" = we are NOT the last sibling
  // (meaning there are more siblings below us → continuation bar)
  const childBars = [...ancestorBars, !isLast];

  for (let i = 0; i < node.children.length; i++) {
    const childIsLast = i === node.children.length - 1;
    renderChild(
      node.children[i],
      childIsLast,
      childBars,
      width,
      theme,
      dirSuffix,
      lines,
    );
  }
}
