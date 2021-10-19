import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?123123123";

addPropertyControls(lib.Alert, {
  severity: {
    title: "severity",
    type: ControlType.Enum,
    /** description: "The severity of the alert. This defines the color and icon used.", */
    defaultValue: "info",
    options: ["error", "success", "info", "warning"],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    /** description: "size with spacing between message and root", */
    defaultValue: "medium",
    options: ["small", "medium"],
  },
  align: {
    title: "align",
    type: ControlType.Enum,
    /** description: "that text align of message", */
    defaultValue: "left",
    options: ["left", "right", "center"],
  },
  _children: {
    title: "children",
    type: ControlType.String,
    /** description: "The content of the component.", */
    defaultValue: "Alert Example",
  },
  icon: {
    title: "icon",
    type: ControlType.Enum,
    /** description: "Override the icon displayed before the children.
Unless provided, the icon is mapped to the value of the `severity` prop.", */
    defaultValue: undefined,
    options: [undefined, true, ...lib.iconOptions],
  },
  square: {
    title: "square",
    type: ControlType.Boolean,
    /** description: "If `true`, rounded corners are disabled.", */
    defaultValue: true,
  },
  elevation: {
    title: "elevation",
    type: ControlType.Number,
    description:
      "Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.",
    defaultValue: 0,
  },
  //   role: {
  //     title: "role",
  //     type: ControlType.String,
  //     /** description: "The ARIA role attribute of the element.", */
  //     defaultValue: undefined,
  //   },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  //   closeText: {
  //     title: "closeText",
  //     type: ControlType.String,
  //     /** description: "Override the default label for the *close popup* icon button.

  // For localization purposes, you can use the provided [translations](/guides/localization/).", */
  //     defaultValue: undefined,
  //   },
});

const RcAlert: React.ComponentType = lib.Alert;
export default RcAlert;
