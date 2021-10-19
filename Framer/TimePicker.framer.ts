import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.TimePicker, {
  label: {
    title: "label",
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: undefined,
  },
  value: {
    title: "value",
    type: ControlType.Object,
    /** description: "Date or timestamp", */
    defaultValue: undefined,
  },
  placeholder: {
    title: "placeholder",
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: undefined,
  },
  radius: {
    title: "radius",
    type: ControlType.Enum,
    /** description: "border radius for outline text field", */
    defaultValue: undefined,
    options: ["circle", "round", "sm", "md", "lg", "xl", "xxl", "zero"],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    /** description: "with two size: 'small' | 'medium', default with medium.
size for TextField when `variant="outline"`", */
    defaultValue: "medium",
    options: ["small", "medium"],
  },
  disabled: {
    title: "disabled",
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be disabled.", */
    defaultValue: undefined,
  },
  variant: {
    title: "variant",
    type: ControlType.Enum,
    /** description: "variant type for different display TextField", */
    defaultValue: undefined,
    options: ["outline", "standard", "borderLess"],
  },
  autoFocus: {
    title: "autoFocus",
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be focused during the first mount.", */
    defaultValue: undefined,
  },
  max: {
    title: "max",
    type: ControlType.Object,
    /** description: "max time", */
    defaultValue: undefined,
  },
  fullWidth: {
    title: "fullWidth",
    type: ControlType.Boolean,
    /** description: "If `true`, the input will take up the full width of its container.", */
    defaultValue: undefined,
  },
  error: {
    title: "error",
    type: ControlType.Boolean,
    /** description: "If `true`, the label will be displayed in an error state.", */
    defaultValue: undefined,
  },
  inputProps: {
    title: "inputProps",
    type: ControlType.Object,
    /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
announcementText for screen reader read", */
    defaultValue: undefined,
  },
  required: {
    title: "required",
    type: ControlType.Boolean,
    /** description: "If `true`, the label is displayed as required and the `input` element` will be required.", */
    defaultValue: undefined,
  },
  InputProps: {
    title: "InputProps",
    type: ControlType.Object,
    /** description: "Props applied to the Input element.
It will be a [`FilledInput`](/api/filled-input/),
[`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
component depending on the `variant` prop value.", */
    defaultValue: undefined,
  },
  helperText: {
    title: "helperText",
    type: ControlType.Object,
    /** description: "The helper text content.", */
    defaultValue: undefined,
  },
  gutterBottom: {
    title: "gutterBottom",
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: undefined,
  },
  clearBtn: {
    title: "clearBtn",
    type: ControlType.Boolean,
    /** description: "is should show clear button", */
    defaultValue: true,
  },
  clearButtonProps: {
    title: "clearButtonProps",
    type: ControlType.Object,
    /** description: "props apply on default clear button", */
    defaultValue: undefined,
  },
  min: {
    title: "min",
    type: ControlType.Object,
    /** description: "min time", */
    defaultValue: undefined,
  },
  PopoverProps: {
    title: "PopoverProps",
    type: ControlType.Object,
    /** description: "props for hourPicker component", */
    defaultValue: undefined,
  },
  ActionSymbol: {
    title: "ActionSymbol",
    type: ControlType.Object,
    /** description: "action icon", */
    defaultValue: undefined,
  },
  isTwelveHourSystem: {
    title: "isTwelveHourSystem",
    type: ControlType.Boolean,
    /** description: "Is 12 hours system", */
    defaultValue: undefined,
  },
  dateMode: {
    title: "dateMode",
    type: ControlType.Boolean,
    /** description: "When all using date, this props will be remove,", */
    defaultValue: false,
  },
  HourPickerProps: {
    title: "HourPickerProps",
    type: ControlType.Object,
    /** description: "props for hourPicker component", */
    defaultValue: undefined,
  },
  MinutePickerProps: {
    title: "MinutePickerProps",
    type: ControlType.Object,
    /** description: "props for minutePicker component", */
    defaultValue: undefined,
  },
  PeriodToggleProps: {
    title: "PeriodToggleProps",
    type: ControlType.Object,
    /** description: "props for periodToggle component", */
    defaultValue: undefined,
  },
});

const RcTimePicker: React.ComponentType = lib.TimePicker;
export default RcTimePicker;
