import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Box, {
  color: {
    title: "color",
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: "neutral.f06",
    options: lib.colorOptions,
  },
  bgcolor: {
    title: "bgcolor",
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: "neutral.b01",
    options: ["transparent", ...lib.colorOptions],
  },
  borderColor: {
    title: "borderColor",
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: "transparent",
    options: ["transparent", ...lib.colorOptions],
  },
  clone: {
    title: "clone",
    type: ControlType.Boolean,
    description:
      "If `true`, the box will recycle its children DOM element. It's using `React.cloneElement` internally.",
    defaultValue: false,
  },
  _children: {
    title: "children",
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion.", */
  },
});

/**
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
const RcBox: React.ComponentType = lib.Box;
export default RcBox;
