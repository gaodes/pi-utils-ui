import { Steps } from "../../../src/feedback/steps";
import type { ShowcaseDemo } from "../../app/types";

export const stepsDemo: ShowcaseDemo = {
  id: "steps",
  title: "Steps",
  category: "feedback",
  summary: "Multi-step workflow state display",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Mixed step statuses",
      render: () => {
        return new Steps({
          items: [
            {
              title: "Initialize",
              status: "done",
              description: "Project created",
            },
            { title: "Install dependencies", status: "done" },
            {
              title: "Configure",
              status: "active",
              description: "Set your preferences",
            },
            { title: "Build", status: "pending" },
            { title: "Deploy", status: "pending" },
          ],
        });
      },
    },
    {
      id: "with-error",
      title: "With error",
      description: "One step has an error status",
      render: () => {
        return new Steps({
          items: [
            { title: "Fetch data", status: "done" },
            {
              title: "Validate",
              status: "error",
              description: "Schema mismatch on field 'name'",
            },
            { title: "Transform", status: "pending" },
            { title: "Save", status: "pending" },
          ],
        });
      },
    },
    {
      id: "compact",
      title: "Compact",
      description: "Reduced vertical spacing",
      render: () => {
        return new Steps({
          items: [
            { title: "Step 1", status: "done" },
            { title: "Step 2", status: "active" },
            { title: "Step 3", status: "pending" },
          ],
          compact: true,
        });
      },
    },
  ],
};
