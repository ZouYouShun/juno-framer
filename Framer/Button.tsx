import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Button, {
  onClick: {
    type: ControlType.EventHandler,
  },
  children2: {
    title: "CTA",
    type: ControlType.String,
    defaultValue: "Title",
  },
  startIcon: {
    title: "startIcon",
    type: ControlType.String,
    defaultValue: "",
  },
  endIcon: {
    title: "endIcon",
    type: ControlType.String,
    defaultValue: "",
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
    options: ["xsmall", "small", "medium", "large", "xlarge"],
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    defaultValue: "contained",
    options: ["text", "outlined", "contained", "plain"],
  },
  loadingMode: {
    title: "loadingMode",
    type: ControlType.Enum,
    defaultValue: "replace",
    options: ["prefix", "replace", "suffix"],
  },
  radius: {
    title: "radius",
    type: ControlType.Enum,
    defaultValue: "lg",
    options: ["circle", "lg", "md", "round", "sm", "xl", "xxl", "zero"],
  },
  title: {
    title: "title",
    type: ControlType.String,
    defaultValue: "tooltip",
  },
  loading: {
    title: "loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  useRcTooltip: {
    title: "useRcTooltip",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  fullWidth: {
    title: "fullWidth",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  keepElevation: {
    title: "keepElevation",
    type: ControlType.Boolean,
    defaultValue: undefined,
  },
  disabledVariant: {
    title: "disabledVariant",
    type: ControlType.Enum,
    defaultValue: "normal",
    options: ["normal", "mask"],
  },
});

export const Button: React.ComponentType = lib.Button;
