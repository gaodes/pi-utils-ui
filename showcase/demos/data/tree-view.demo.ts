import { Tree } from "../../../src/data/tree-view";
import type { ShowcaseDemo } from "../../app/types";

const accent = (t: string) => `\x1b[36m${t}\x1b[0m`;
const dim = (t: string) => `\x1b[2m${t}\x1b[0m`;

export const treeDemo: ShowcaseDemo = {
  id: "tree",
  title: "Tree",
  category: "data",
  summary: "Hierarchical data rendered with box-drawing characters",
  variants: [
    {
      id: "file-tree",
      title: "File tree",
      description: "Typical directory listing with dirSuffix",
      render: () => {
        return new Tree({
          nodes: [
            {
              label: "src",
              labelStyle: accent,
              children: [
                { label: "index.ts" },
                {
                  label: "components",
                  labelStyle: accent,
                  children: [{ label: "Button.ts" }, { label: "Input.ts" }],
                },
                {
                  label: "utils",
                  labelStyle: accent,
                  children: [{ label: "helpers.ts" }],
                },
              ],
            },
            { label: "package.json" },
            { label: "README.md" },
          ],
          guideStyle: dim,
        });
      },
    },
    {
      id: "grep-results",
      title: "Grep results",
      description: "Grouped matches using colon suffix",
      render: () => {
        return new Tree({
          nodes: [
            {
              label: "src/index.ts",
              labelStyle: accent,
              children: [
                { label: "L12: export { Tree } from './tree-view'" },
                { label: "L45: const tree = new Tree(nodes)" },
              ],
            },
            {
              label: "src/data/tree-view.ts",
              labelStyle: accent,
              children: [
                { label: "L8: export class Tree implements Component" },
                { label: "L34: render(width: number): string[]" },
              ],
            },
          ],
          guideStyle: dim,
          dirSuffix: ":",
        });
      },
    },
    {
      id: "root-connectors",
      title: "Root connectors",
      description: "Box-drawing connectors at root level",
      render: () => {
        return new Tree({
          nodes: [
            {
              label: "Folder A",
              labelStyle: accent,
              children: [{ label: "file1.ts" }, { label: "file2.ts" }],
            },
            {
              label: "Folder B",
              labelStyle: accent,
              children: [{ label: "file3.ts" }],
            },
            { label: "README.md" },
          ],
          guideStyle: dim,
          rootConnectors: true,
        });
      },
    },
  ],
};
