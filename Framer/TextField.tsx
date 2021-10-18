import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?s22";

addPropertyControls(lib.TextField, {
  variant: {
    title: "variant",
    type: ControlType.Enum,
    defaultValue: "standard",
    options: ["standard", "outline", "borderLess"],
  },
  label: {
    title: "label",
    type: ControlType.String,
    defaultValue: "label",
  },
  placeholder: {
    title: "placeholder",
    type: ControlType.String,
    defaultValue: "placeholder",
  },
  helperText: {
    title: "helperText",
    type: ControlType.String,
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  error: {
    title: "error",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  textVariant: {
    title: "textVariant",
    type: ControlType.Enum,
    defaultValue: "subheading1",
    options: lib.typographyOptions,
  },
  align: {
    title: "align",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "left", "right", "center"],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    defaultValue: "medium",
    options: ["small", "medium", "large"],
  },
  gutterBottom: {
    title: "gutterBottom",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  fullWidth: {
    title: "fullWidth",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  defaultValue: {
    title: "defaultValue",
    type: ControlType.String,
  },
  // value: {
  //   title: "value",
  //   type: ControlType.String,
  // },
  title: {
    title: "title",
    type: ControlType.String,
  },
  clearBtn: {
    title: "clearBtn",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  required: {
    title: "required",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  autoFocus: {
    title: "autoFocus",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  radius: {
    title: "radius",
    type: ControlType.Enum,
    defaultValue: "lg",
    options: lib.radiusOptions,
  },
  autoComplete: {
    title: "autoComplete",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  multiline: {
    title: "multiline",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  rows: {
    title: "rows",
    type: ControlType.Number,
  },
  rowsMax: {
    title: "rowsMax",
    type: ControlType.Number,
  },
  weight: {
    title: "weight",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "normal", "bold"],
  },
});

const RcTextField: React.ComponentType = lib.TextField;
export default RcTextField;
