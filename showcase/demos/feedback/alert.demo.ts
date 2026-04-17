import { Alert } from "../../../src/feedback/alert";
import type { ShowcaseDemo } from "../../app/types";

const red = (t: string) => `\x1b[31m${t}\x1b[0m`;
const redBg = (t: string) => `\x1b[41m${t}\x1b[0m`;
const yellow = (t: string) => `\x1b[33m${t}\x1b[0m`;
const yellowBg = (t: string) => `\x1b[43m${t}\x1b[0m`;
const green = (t: string) => `\x1b[32m${t}\x1b[0m`;
const greenBg = (t: string) => `\x1b[42m${t}\x1b[0m`;
const blue = (t: string) => `\x1b[34m${t}\x1b[0m`;
const blueBg = (t: string) => `\x1b[44m${t}\x1b[0m`;

export const alertDemo: ShowcaseDemo = {
  id: "alert",
  title: "Alert",
  category: "feedback",
  summary: "Prominent message block for info, success, warning, error feedback",
  variants: [
    {
      id: "error",
      title: "Error",
      description: "Error alert with red styling",
      render: () => {
        return new Alert({
          title: "Error",
          message: "Something went wrong while processing your request.",
          borderStyle: red,
          titleStyle: redBg,
          iconStyle: redBg,
          icon: "X",
        });
      },
    },
    {
      id: "warning",
      title: "Warning",
      description: "Warning alert with yellow styling",
      render: () => {
        return new Alert({
          title: "Warning",
          message: "You are about to perform an irreversible action.",
          borderStyle: yellow,
          titleStyle: yellowBg,
          iconStyle: yellowBg,
          icon: "!",
        });
      },
    },
    {
      id: "success",
      title: "Success",
      description: "Success alert with green styling",
      render: () => {
        return new Alert({
          title: "Success",
          message: "Your changes have been saved successfully.",
          borderStyle: green,
          titleStyle: greenBg,
          iconStyle: greenBg,
          icon: "+",
        });
      },
    },
    {
      id: "info",
      title: "Info",
      description: "Info alert with blue styling, no title",
      render: () => {
        return new Alert({
          message: "This is an informational message without a title.",
          borderStyle: blue,
          iconStyle: blueBg,
          icon: "i",
        });
      },
    },
  ],
};
