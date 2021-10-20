import { addPropertyControls, ControlType } from "framer";
import * as lib from "https://zouyoushun.github.io/juno-framer/esmbuild@1.0.7/index.js";

addPropertyControls(lib.LinearProgress, {
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
    options: ["determinate", "indeterminate", "buffer", "query"],
  },
  value: {
    title: "value",
    type: ControlType.Number,
  },
  valueBuffer: {
    title: "valueBuffer",
    type: ControlType.Number,
  },
});

const RcLinearProgress: React.ComponentType = lib.LinearProgress;
export default RcLinearProgress;
