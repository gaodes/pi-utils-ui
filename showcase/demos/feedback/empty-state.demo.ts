import { EmptyState } from "../../../src/feedback/empty-state";
import type { ShowcaseDemo } from "../../app/types";

const bold = (t: string) => `\x1b[1m${t}\x1b[0m`;

export const emptyStateDemo: ShowcaseDemo = {
  id: "empty-state",
  title: "EmptyState",
  category: "feedback",
  summary: "Friendly placeholder for when there is no data to display",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Title and description, centered",
      render: () => {
        return new EmptyState({
          title: "No items found",
          description: "Add some items to get started",
        });
      },
    },
    {
      id: "title-only",
      title: "Title only",
      description: "No description text",
      render: () => {
        return new EmptyState({
          title: "Nothing here yet",
        });
      },
    },
    {
      id: "styled",
      title: "Styled",
      description: "Custom title style",
      render: () => {
        return new EmptyState({
          title: "No results",
          description: "Try adjusting your search filters",
          titleStyle: bold,
        });
      },
    },
  ],
};
