import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Link, {
  children2: {
    title: "children",
    type: ControlType.String,
    defaultValue: "Link",
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    defaultValue: "body1",
    options: lib.typographyOptions,
  },
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: "informative.f02",
    options: lib.colorOptions,
  },
  href: {
    type: ControlType.String,
    title: "href",
    defaultValue: "http://127.0.0.1",
  },
  target: {
    type: ControlType.String,
    title: "target",
    defaultValue: "_blank",
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
});

const RcLink: React.ComponentType = lib.Link;
export default RcLink;
