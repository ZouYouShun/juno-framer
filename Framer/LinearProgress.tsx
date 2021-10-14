import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.LinearProgress, {
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: "informative.f02",
    options: lib.colorOptions,
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    defaultValue: "indeterminate",
    options: ["determinate", "indeterminate", "buffer", "query"],
  },
  value: {
    title: "value",
    type: ControlType.Number,
  },
  valueBuffer: {
    title: "valueBuffer",
    type: ControlType.Number,
  },
});

export const LinearProgress: React.ComponentType = lib.LinearProgress;
