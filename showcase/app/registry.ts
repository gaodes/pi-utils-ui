import { panelDemo } from "../demos/containers/panel.demo";
import { sectionDemo } from "../demos/containers/section.demo";
import { dataTableDemo } from "../demos/data/data-table.demo";
import { descriptionListDemo } from "../demos/data/description-list.demo";
import { treeDemo } from "../demos/data/tree-view.demo";
import { alertDemo } from "../demos/feedback/alert.demo";
import { badgeDemo } from "../demos/feedback/badge.demo";
import { emptyStateDemo } from "../demos/feedback/empty-state.demo";
import { progressBarDemo } from "../demos/feedback/progress-bar.demo";
import { stepsDemo } from "../demos/feedback/steps.demo";
import { fieldDemo } from "../demos/forms/field.demo";
import { columnsDemo } from "../demos/layout/columns.demo";
import { stackDemo } from "../demos/layout/stack.demo";
import { breadcrumbsDemo } from "../demos/navigation/breadcrumbs.demo";
import { statusLineDemo } from "../demos/navigation/status-line.demo";
import { tabsDemo } from "../demos/navigation/tabs.demo";
import { toolCallDemo } from "../demos/tools/tool-call.demo";
import type { ShowcaseDemo } from "./types";

export const demos: ShowcaseDemo[] = [
  stackDemo,
  columnsDemo,
  badgeDemo,
  panelDemo,
  sectionDemo,
  descriptionListDemo,
  dataTableDemo,
  treeDemo,
  alertDemo,
  progressBarDemo,
  emptyStateDemo,
  stepsDemo,
  fieldDemo,
  statusLineDemo,
  breadcrumbsDemo,
  tabsDemo,
  toolCallDemo,
];
