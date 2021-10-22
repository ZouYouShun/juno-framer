import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?axssskksslsssj";

addPropertyControls(lib.RadioGroup, {
  //   defaultValue: {
  //     title: "defaultValue",
  //     type: ControlType.Object,
  //     /** description: "The default `input` element value. Use when the component is not controlled.", */
  //     defaultValue: undefined,
  //   },
  _children: {
    title: "children",
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the component.", */
  },
  row: {
    title: "row",
    type: ControlType.Boolean,
    /** description: "Display group of elements in a compact row.", */
    defaultValue: false,
  },
  //   name: {
  //     title: "name",
  //     type: ControlType.String,
  //     /** description: "The name used to reference the value of the control.
  // If you don't provide this prop, it falls back to a randomly generated name.", */
  //     defaultValue: undefined,
  //   },
  value: {
    title: "value",
    type: ControlType.String,
    /** description: "Value of the selected radio button. The DOM API casts this to a string.", */
    defaultValue: undefined,
  },
});

const RcRadioGroup: React.ComponentType = lib.RadioGroup;
export default RcRadioGroup;
