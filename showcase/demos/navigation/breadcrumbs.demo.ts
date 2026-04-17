import { Breadcrumbs } from "../../../src/navigation/breadcrumbs";
import type { ShowcaseDemo } from "../../app/types";

const bold = (t: string) => `\x1b[1m${t}\x1b[0m`;
const dim = (t: string) => `\x1b[2m${t}\x1b[0m`;
const cyan = (t: string) => `\x1b[36m${t}\x1b[0m`;

export const breadcrumbsDemo: ShowcaseDemo = {
  id: "breadcrumbs",
  title: "Breadcrumbs",
  category: "navigation",
  summary: "Hierarchical path display, truncates from left when too narrow",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Simple path with default separator",
      render: () => {
        return new Breadcrumbs({
          items: [
            { id: "home", label: "Home" },
            { id: "projects", label: "Projects" },
            { id: "my-app", label: "my-app" },
            { id: "src", label: "src" },
          ],
        });
      },
    },
    {
      id: "styled",
      title: "Styled",
      description: "Custom active and inactive styles",
      render: () => {
        return new Breadcrumbs({
          items: [
            { id: "root", label: "/" },
            { id: "users", label: "users" },
            { id: "alice", label: "alice" },
            { id: "settings", label: "settings" },
          ],
          activeStyle: bold,
          inactiveStyle: dim,
        });
      },
    },
    {
      id: "custom-separator",
      title: "Custom separator",
      description: "Using / as separator",
      render: () => {
        return new Breadcrumbs({
          items: [
            { id: "a", label: "org" },
            { id: "b", label: "repo" },
            { id: "c", label: "main" },
            { id: "d", label: "src" },
            { id: "e", label: "index.ts" },
          ],
          separator: " / ",
          inactiveStyle: cyan,
        });
      },
    },
  ],
};
