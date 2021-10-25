import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?xsdcsdd1s1ssscsssxx";

addPropertyControls(lib.Spacing, {
  count: {
    title: "count",
    type: ControlType.Enum,
    /** description: "", */
    options: ["1", "2", "3", "4", "5", "6", "8", "10", "12"],
    defaultValue: "4",
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
