import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Tooltip, {
  children: {
    type: ControlType.ComponentInstance,
  },
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: "neutral.b04",
    options: lib.colorOptions,
  },
  textColor: {
    type: ControlType.Enum,
    title: "textColor",
    defaultValue: "neutral.f01",
    options: lib.colorOptions,
  },
  placement: {
    title: "placement",
    type: ControlType.Enum,
    defaultValue: "bottom",
    options: [
      "bottom",
      "left",
      "right",
      "top",
      "bottom-end",
      "bottom-start",
      "left-end",
      "left-start",
      "right-end",
      "right-start",
      "top-end",
      "top-start",
    ],
  },
  title: {
    title: "title",
    type: ControlType.String,
    defaultValue: "title",
  },
  enterDelay: {
    title: "enterDelay",
    type: ControlType.Number,
  },
  enterNextDelay: {
    title: "enterNextDelay",
    type: ControlType.Number,
  },
  enterTouchDelay: {
    title: "enterTouchDelay",
    type: ControlType.Number,
  },
  leaveDelay: {
    title: "leaveDelay",
    type: ControlType.Number,
  },
});

export const Tooltip: React.ComponentType = lib.Tooltip;
