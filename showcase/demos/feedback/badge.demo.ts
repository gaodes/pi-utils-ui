import { Badge } from "../../../src/feedback/badge";
import { Columns, Stack } from "../../../src/index";
import type { ShowcaseDemo } from "../../app/types";

const red = (t: string) => `\x1b[41m${t}\x1b[0m`;
const green = (t: string) => `\x1b[42m${t}\x1b[0m`;
const yellow = (t: string) => `\x1b[43m${t}\x1b[0m`;
const blue = (t: string) => `\x1b[44m${t}\x1b[0m`;
const cyan = (t: string) => `\x1b[46m${t}\x1b[0m`;
const magenta = (t: string) => `\x1b[45m${t}\x1b[0m`;

export const badgeDemo: ShowcaseDemo = {
  id: "badge",
  title: "Badge",
  category: "feedback",
  summary: "Compact status/tag label",
  variants: [
    {
      id: "colored",
      title: "Colored badges",
      description: "Badges with different background colors",
      render: () => {
        const stack = new Stack({ gap: 1 });
        stack.addChild(new Badge("error", red));
        stack.addChild(new Badge("success", green));
        stack.addChild(new Badge("warning", yellow));
        stack.addChild(new Badge("info", blue));
        stack.addChild(new Badge("pending", cyan));
        stack.addChild(new Badge("feature", magenta));
        return stack;
      },
    },
    {
      id: "plain",
      title: "Plain (no style)",
      description: "Badge without any styling",
      render: () => {
        const stack = new Stack({ gap: 1 });
        stack.addChild(new Badge("plain badge"));
        stack.addChild(new Badge("another one"));
        return stack;
      },
    },
    {
      id: "inline-row",
      title: "Inline row",
      description: "Multiple badges in a row using Columns",
      render: () => {
        return new Columns(
          [
            { child: new Badge("v1.2.0", green), width: 12 },
            { child: new Badge("beta", yellow), width: 8 },
            { child: new Badge("breaking", red), width: 12 },
          ],
          { gap: 1 },
        );
      },
    },
  ],
};
