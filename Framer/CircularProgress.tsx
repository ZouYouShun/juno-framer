import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.CircularProgress, {
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
    options: ["determinate", "indeterminate"],
  },
  size: {
    title: "size",
    type: ControlType.Number,
    defaultValue: 24,
  },
  thickness: {
    title: "thickness",
    type: ControlType.Number,
    defaultValue: 4,
  },
  value: {
    title: "value",
    type: ControlType.Number,
  },
  disableShrink: {
    title: "disableShrink",
    type: ControlType.Boolean,
    defaultValue: false,
  },
});

export const CircularProgress: React.ComponentType = lib.CircularProgress;
