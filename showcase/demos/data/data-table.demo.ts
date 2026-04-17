import type { TableColumn } from "../../../src/data/data-table";
import { DataTable } from "../../../src/data/data-table";
import type { ShowcaseDemo } from "../../app/types";

interface Person {
  name: string;
  age: number;
  role: string;
  status: string;
}

const bold = (t: string) => `\x1b[1m${t}\x1b[0m`;
const green = (t: string) => `\x1b[32m${t}\x1b[0m`;
const red = (t: string) => `\x1b[31m${t}\x1b[0m`;
const dim = (t: string) => `\x1b[2m${t}\x1b[0m`;

const columns: TableColumn<Person>[] = [
  {
    key: "name",
    header: "Name",
    render: (r) => r.name,
    width: 15,
    priority: 10,
  },
  {
    key: "age",
    header: "Age",
    render: (r) => String(r.age),
    width: 5,
    align: "right",
    priority: 5,
  },
  { key: "role", header: "Role", render: (r) => r.role, priority: 8 },
  {
    key: "status",
    header: "Status",
    render: (r) => r.status,
    priority: 3,
    cellStyle: (t) => (t === "active" ? green(t) : red(t)),
  },
];

const rows: Person[] = [
  { name: "Alice", age: 30, role: "Engineer", status: "active" },
  { name: "Bob", age: 25, role: "Designer", status: "active" },
  { name: "Carol", age: 35, role: "Manager", status: "inactive" },
  { name: "Dave", age: 28, role: "Engineer", status: "active" },
];

export const dataTableDemo: ShowcaseDemo = {
  id: "data-table",
  title: "DataTable",
  category: "data",
  summary: "Tabular data with responsive column hiding",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Table with fixed and flexible columns",
      render: () => {
        return new DataTable({ columns, rows });
      },
    },
    {
      id: "styled",
      title: "Styled headers",
      description: "Custom header and separator styles",
      render: () => {
        return new DataTable({
          columns,
          rows,
          headerStyle: bold,
          separatorStyle: dim,
        });
      },
    },
    {
      id: "empty",
      title: "Empty state",
      description: "No rows to display",
      render: () => {
        return new DataTable({ columns, rows: [] });
      },
    },
  ],
};
