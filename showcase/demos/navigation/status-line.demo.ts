import { Badge } from "../../../src/feedback/badge";
import { StatusLine } from "../../../src/navigation/status-line";
import type { ShowcaseDemo } from "../../app/types";

const bold = (t: string) => `\x1b[1m${t}\x1b[0m`;
const dim = (t: string) => `\x1b[2m${t}\x1b[0m`;
const green = (t: string) => `\x1b[32m${t}\x1b[0m`;
const cyan = (t: string) => `\x1b[36m${t}\x1b[0m`;

export const statusLineDemo: ShowcaseDemo = {
  id: "status-line",
  title: "StatusLine",
  category: "navigation",
  summary: "Left/right aligned status bar, single line",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Left and right items",
      render: () => {
        return new StatusLine({
          left: ["NORMAL", "src/index.ts"],
          right: ["ln 42", "col 8"],
        });
      },
    },
    {
      id: "styled",
      title: "Styled",
      description: "With style function applied",
      render: () => {
        return new StatusLine({
          left: ["INSERT", "file.ts"],
          right: ["UTF-8", "LF"],
          style: dim,
        });
      },
    },
    {
      id: "with-badges",
      title: "With badges",
      description: "Badge components as items",
      render: () => {
        return new StatusLine({
          left: [new Badge("main", green), "README.md"],
          right: [new Badge("saved", cyan)],
          separator: "  ",
        });
      },
    },
    {
      id: "one-side",
      title: "Left only",
      description: "Only left items, right empty",
      render: () => {
        return new StatusLine({
          left: ["Running", "pid: 1234", "port: 3000"],
          style: bold,
        });
      },
    },
  ],
};
