import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.DatePicker, {
  label: {
    title: "label",
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: undefined,
  },
  value: {
    title: "value",
    type: ControlType.Object,
    /** description: "value for picker", */
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
    /** description: "size for date picker, default with medium
with prop medium and small, default with medium
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
    /** description: "Max date", */
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
    /** description: "when hover on the textField, if show the clearBtn. With default is true.
is should show clear button", */
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
    /** description: "Min date", */
    defaultValue: undefined,
  },
  disablePast: {
    title: "disablePast",
    type: ControlType.Boolean,
    /** description: "Disable past dates", */
    defaultValue: undefined,
  },
  disableFuture: {
    title: "disableFuture",
    type: ControlType.Boolean,
    /** description: "Disable future dates", */
    defaultValue: undefined,
  },
  todayButtonText: {
    title: "todayButtonText",
    type: ControlType.String,
    /** description: "Text label for Today button
Text label for Today button", */
    defaultValue: "Today",
  },
  formatString: {
    title: "formatString",
    type: ControlType.String,
    /** description: "Date format string, default with 'MM/DD/YYYY'
Date format string, default with 'MM/DD/YYYY'", */
    defaultValue: "MM/DD/YYYY",
  },
  loadingIndicator: {
    title: "loadingIndicator",
    type: ControlType.Object,
    /** description: "Custom loading indicator", */
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
  locale: {
    title: "locale",
    type: ControlType.String,
    /** description: "i18n locale country", */
    defaultValue: "en",
  },
  screenReaderProps: {
    title: "screenReaderProps",
    type: ControlType.Object,
    /** description: "Props containing functions for getting attribute for target element", */
    defaultValue: undefined,
  },
});

const RcDatePicker: React.ComponentType = lib.DatePicker;
export default RcDatePicker;
