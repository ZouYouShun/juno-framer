import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Spacing, {
  readOnly: {
    title: "count",
    type: ControlType.Number,
    /** description: "", */
    defaultValue: 4,
  },
  vertical: {
    title: "vertical",
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be required.", */
    defaultValue: false,
  },
});

const RcSpacing: React.ComponentType = lib.Spacing;
export default RcSpacing;
