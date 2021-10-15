import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Text, {
  color: {
    title: "color",
    type: ControlType.Enum,
    defaultValue: "informative.f02",
    options: lib.colorOptions,
  },
  children2: {
    title: "children",
    type: ControlType.String,
    defaultValue: "Text",
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    defaultValue: "body1",
    options: lib.typographyOptions,
  },
  title: {
    title: "title",
    type: ControlType.String,
  },
  weight: {
    title: "weight",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "normal", "bold"],
  },
  useRcTooltip: {
    title: "useRcTooltip",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  display: {
    title: "display",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "inline", "initial", "block"],
  },
  align: {
    title: "align",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "inherit", "left", "right", "center", "justify"],
  },
  noWrap: {
    title: "noWrap",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  gutterBottom: {
    title: "gutterBottom",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  highlight: {
    title: "highlight",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  paragraph: {
    title: "paragraph",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  titleWhenOverflow: {
    title: "titleWhenOverflow",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  flexFull: {
    title: "flexFull",
    type: ControlType.Boolean,
    defaultValue: false,
  },
});

const RcText: React.ComponentType = lib.Text;
export default RcText;
