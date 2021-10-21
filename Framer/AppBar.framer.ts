import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?asda";

addPropertyControls(lib.AppBar, {
  //   color: {
  //     title: "color",
  //     type: ControlType.Enum,
  //     /** description: "The color of the component. It supports those theme colors that make sense for this component.", */
  //     defaultValue: undefined,
  //     options: ["default", "inherit", "primary", "secondary", "transparent"],
  //   },
  _children: {
    title: "children",
    type: ControlType.ComponentInstance,
    /** description: "The content of the component.", */
  },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  elevation: {
    title: "elevation",
    type: ControlType.Enum,
    /** description: "Shadow depth, corresponds to `dp` in the spec.
It accepts values between 0 and 24 inclusive.", */
    defaultValue: "undefined",
    options: lib.elevationOptions,
  },
  //   square: {
  //     title: "square",
  //     type: ControlType.Boolean,
  //     /** description: "If `true`, rounded corners are disabled.", */
  //     defaultValue: false,
  //   },
  //   variant: {
  //     title: "variant",
  //     type: ControlType.Enum,
  //     /** description: "The variant to use.", */
  //     defaultValue: undefined,
  //     options: ["outlined", "elevation"],
  //   },
  position: {
    title: "position",
    type: ControlType.Enum,
    /** description: "The positioning type. The behavior of the different options is described
[in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
Note: `sticky` is not universally supported and will fall back to `static` when unavailable.", */
    defaultValue: "static",
    options: ["fixed", "absolute", "sticky", "static", "relative"],
  },
});

const RcAppBar: React.ComponentType = lib.AppBar;
export default RcAppBar;
