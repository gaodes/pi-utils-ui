import { ProgressBar } from "../../../src/feedback/progress-bar";
import { Stack } from "../../../src/layout/stack";
import type { ShowcaseDemo } from "../../app/types";

const cyan = (t: string) => `\x1b[46m${t}\x1b[0m`;
const dimBar = (t: string) => `\x1b[2m${t}\x1b[0m`;

export const progressBarDemo: ShowcaseDemo = {
  id: "progress-bar",
  title: "ProgressBar",
  category: "feedback",
  summary: "Determinate progress display",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Default green bar with percent",
      render: () => {
        return new ProgressBar({ value: 0.65 });
      },
    },
    {
      id: "with-label",
      title: "With label",
      description: "Label and detail text above the bar",
      render: () => {
        return new ProgressBar({
          value: 0.42,
          label: "Downloading",
          detail: "4.2 MB / 10 MB",
        });
      },
    },
    {
      id: "multiple",
      title: "Multiple bars",
      description: "Stack of progress bars at different values",
      render: () => {
        const stack = new Stack({ gap: 1 });
        stack.addChild(new ProgressBar({ value: 1.0, label: "Complete" }));
        stack.addChild(new ProgressBar({ value: 0.75, label: "In progress" }));
        stack.addChild(new ProgressBar({ value: 0.25, label: "Just started" }));
        stack.addChild(new ProgressBar({ value: 0.0, label: "Pending" }));
        return stack;
      },
    },
    {
      id: "styled",
      title: "Custom style",
      description: "Cyan filled bar with dim empty bar",
      render: () => {
        return new ProgressBar({
          value: 0.55,
          label: "Processing",
          filledStyle: cyan,
          emptyStyle: dimBar,
        });
      },
    },
  ],
};
