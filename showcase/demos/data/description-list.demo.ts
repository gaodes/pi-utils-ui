import { DescriptionList } from "../../../src/data/description-list";
import type { ShowcaseDemo } from "../../app/types";

const bold = (t: string) => `\x1b[1m${t}\x1b[0m`;
const dim = (t: string) => `\x1b[2m${t}\x1b[0m`;
const cyan = (t: string) => `\x1b[36m${t}\x1b[0m`;

export const descriptionListDemo: ShowcaseDemo = {
  id: "description-list",
  title: "DescriptionList",
  category: "data",
  summary: "Key-value pairs, side-by-side when wide, stacked when narrow",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Auto label width, key-value pairs",
      render: () => {
        return new DescriptionList({
          items: [
            { label: "Name", value: "pi-utils-ui" },
            { label: "Version", value: "0.2.1" },
            { label: "License", value: "MIT" },
            { label: "Description", value: "Shared TUI component library" },
          ],
        });
      },
    },
    {
      id: "styled",
      title: "Styled",
      description: "Custom label and value styles",
      render: () => {
        return new DescriptionList({
          items: [
            { label: "Status", value: "Running" },
            { label: "Uptime", value: "3d 14h" },
            { label: "Memory", value: "128 MB" },
            { label: "CPU", value: "2.3%" },
          ],
          labelStyle: bold,
          valueStyle: cyan,
        });
      },
    },
    {
      id: "fixed-label",
      title: "Fixed label width",
      description: "Label column fixed at 15 characters",
      render: () => {
        return new DescriptionList({
          items: [
            { label: "Host", value: "server-01.example.com" },
            { label: "Port", value: "443" },
            { label: "Protocol", value: "HTTPS" },
            { label: "Region", value: "us-east-1" },
          ],
          labelWidth: 15,
          labelStyle: bold,
        });
      },
    },
    {
      id: "with-gap",
      title: "With gap",
      description: "Extra vertical spacing between items",
      render: () => {
        return new DescriptionList({
          items: [
            { label: "Project", value: "pi-tui" },
            { label: "Author", value: "mariozechner" },
            { label: "Stars", value: "1.2k" },
          ],
          gap: 1,
          labelStyle: dim,
        });
      },
    },
  ],
};
