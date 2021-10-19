import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Icon, {
  symbol: {
    type: ControlType.Enum,
    title: "symbol",
    defaultValue: "Help",
    options: lib.iconOptions,
  },
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: "interactive.b02",
    options: lib.colorOptions,
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    defaultValue: "large",
    options: [
      "xsmall",
      "small",
      "medium",
      "large",
      "xlarge",
      "xxlarge",
      "xxxlarge",
    ],
  },
  loading: {
    title: "loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
});

export const Icon: React.ComponentType = lib.Icon;
