import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.LinearProgress, {
  color: {
    title: "color",
    type: ControlType.Enum,
    /** description: "custom color", */
    defaultValue: "interactive.f01",
    options: lib.colorOptions,
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    /** description: "The variant to use.
Use indeterminate or query when there is no progress value.", */
    defaultValue: 'indeterminate',
    options: ["determinate", "indeterminate", "buffer", "query"],
  },
  value: {
    title: "value",
    type: ControlType.Number,
    /** description: "The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.", */
    defaultValue: undefined,
  },
  valueBuffer: {
    title: "valueBuffer",
    type: ControlType.Number,
    /** description: "The value for the buffer variant.
Value between 0 and 100.", */
    defaultValue: undefined,
  },
});

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcLinearProgress: React.ComponentType = lib.LinearProgress;
export default RcLinearProgress;
