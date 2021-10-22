import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.AccordionSummary, {
  //   tabIndex: {
  //     title: "tabIndex",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  _children: {
    title: "children",
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion summary.
The content of the component.", */
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will be disabled.", */
    defaultValue: false,
  },
  expandIcon: {
    title: "expandIcon",
    type: ControlType.Enum,
    /** description: "The icon to display as the expand indicator, default is `ArrowUp2`", */
    defaultValue: "ArrowUp2",
    options: lib.iconOptions,
  },
  //   IconButtonProps: {
  //     title: "IconButtonProps",
  //     type: ControlType.Object,
  //     /** description: "The props apply on `RcIconButton`", */
  //     defaultValue: undefined,
  //   },
  centerRipple: {
    title: "centerRipple",
    type: ControlType.Boolean,
    /** description: "If `true`, the ripples will be centered.
They won't start at the cursor interaction position.", */
    defaultValue: false,
  },
  disableRipple: {
    title: "disableRipple",
    type: ControlType.Boolean,
    /** description: "If `true`, the ripple effect will be disabled.

⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
to highlight the element by applying separate styles with the `focusVisibleClassName`.", */
    defaultValue: false,
  },
  disableTouchRipple: {
    title: "disableTouchRipple",
    type: ControlType.Boolean,
    /** description: "If `true`, the touch ripple effect will be disabled.", */
    defaultValue: false,
  },
  focusRipple: {
    title: "focusRipple",
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will have a keyboard focus ripple.", */
    defaultValue: false,
  },
  //   TouchRippleProps: {
  //     title: "TouchRippleProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the `TouchRipple` element.", */
  //     defaultValue: undefined,
  //   },
});

const RcAccordionSummary: React.ComponentType = lib.AccordionSummary;
export default RcAccordionSummary;
