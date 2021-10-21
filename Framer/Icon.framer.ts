import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Icon, {
  symbol: {
    title: "symbol",
    type: ControlType.Enum,
    /** description: "Component for render", */
    defaultValue: "Help",
    options: lib.iconOptions,
  },
  color: {
    title: "color",
    type: ControlType.Enum,
    /** description: "color of icon", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    /** description: "size of icon", */
    defaultValue: "large",
    options: [
      "small",
      "inherit",
      "medium",
      "large",
      "xsmall",
      "xlarge",
      "xxlarge",
      "xxxlarge",
    ],
  },
  loading: {
    title: "loading",
    type: ControlType.Boolean,
    /** description: "is that icon replace to loading", */
    defaultValue: false,
  },
  // CircularProgressProps: {
  //   title: "CircularProgressProps",
  //   type: ControlType.Object,
  //   /** description: "Props send to `RcCircularProgress` when loading is `true`", */
  //   defaultValue: undefined,
  // },
});

const RcIcon: React.ComponentType = lib.Icon;
export default RcIcon;
