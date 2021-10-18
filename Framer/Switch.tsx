import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?s222";

addPropertyControls(lib.Switch, {
  color: {
    title: "color",
    type: ControlType.Enum,
    defaultValue: "interactive.f01",
    options: lib.colorOptions,
  },
  trackColor: {
    title: "trackColor",
    type: ControlType.Enum,
    defaultValue: "neutral.f02",
    options: lib.colorOptions,
  },
  defaultChecked: {
    title: "defaultChecked",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  label: {
    title: "label",
    type: ControlType.String,
  },
  formControlLabelProps: {
    title: "formControlLabelProps",
    description: "control label placement",
    type: ControlType.Object,
    controls: {
      labelPlacement: {
        title: "labelPlacement",
        type: ControlType.Enum,
        defaultValue: "start",
        options: ["start", "end"],
      },
    },
    hidden(props) {
      return !props.label;
    },
  },
});

const RcSwitch: React.ComponentType = lib.Switch;
export default RcSwitch;
