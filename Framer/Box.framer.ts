import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.Box, {
  color: {
    title: "color",
    type: ControlType.Object,
    /** description: "all palette color support", */
    defaultValue: undefined,
  },
  bgcolor: {
    title: "bgcolor",
    type: ControlType.Object,
    /** description: "all palette color support", */
    defaultValue: undefined,
  },
  borderColor: {
    title: "borderColor",
    type: ControlType.Object,
    /** description: "all palette color support", */
    defaultValue: undefined,
  },
  zIndex: {
    title: "zIndex",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  p: {
    title: "p",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  alignContent: {
    title: "alignContent",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  alignItems: {
    title: "alignItems",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  alignSelf: {
    title: "alignSelf",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  bottom: {
    title: "bottom",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  boxShadow: {
    title: "boxShadow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  boxSizing: {
    title: "boxSizing",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  display: {
    title: "display",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flexBasis: {
    title: "flexBasis",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flexDirection: {
    title: "flexDirection",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flexGrow: {
    title: "flexGrow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flexShrink: {
    title: "flexShrink",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flexWrap: {
    title: "flexWrap",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  fontFamily: {
    title: "fontFamily",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  fontSize: {
    title: "fontSize",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  fontStyle: {
    title: "fontStyle",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  fontWeight: {
    title: "fontWeight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoColumns: {
    title: "gridAutoColumns",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoFlow: {
    title: "gridAutoFlow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoRows: {
    title: "gridAutoRows",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateAreas: {
    title: "gridTemplateAreas",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateColumns: {
    title: "gridTemplateColumns",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateRows: {
    title: "gridTemplateRows",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  height: {
    title: "height",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  justifyContent: {
    title: "justifyContent",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  justifyItems: {
    title: "justifyItems",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  justifySelf: {
    title: "justifySelf",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  left: {
    title: "left",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  letterSpacing: {
    title: "letterSpacing",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  lineHeight: {
    title: "lineHeight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginBottom: {
    title: "marginBottom",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginLeft: {
    title: "marginLeft",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginRight: {
    title: "marginRight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginTop: {
    title: "marginTop",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  maxHeight: {
    title: "maxHeight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  maxWidth: {
    title: "maxWidth",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  minHeight: {
    title: "minHeight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  minWidth: {
    title: "minWidth",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  order: {
    title: "order",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingBottom: {
    title: "paddingBottom",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingLeft: {
    title: "paddingLeft",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingRight: {
    title: "paddingRight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingTop: {
    title: "paddingTop",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  position: {
    title: "position",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  right: {
    title: "right",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  textAlign: {
    title: "textAlign",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  textOverflow: {
    title: "textOverflow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  top: {
    title: "top",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  visibility: {
    title: "visibility",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  whiteSpace: {
    title: "whiteSpace",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  width: {
    title: "width",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  border: {
    title: "border",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  borderBottom: {
    title: "borderBottom",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  borderLeft: {
    title: "borderLeft",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  borderRadius: {
    title: "borderRadius",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  borderRight: {
    title: "borderRight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  borderTop: {
    title: "borderTop",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  flex: {
    title: "flex",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridArea: {
    title: "gridArea",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridColumn: {
    title: "gridColumn",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridRow: {
    title: "gridRow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  margin: {
    title: "margin",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  overflow: {
    title: "overflow",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  padding: {
    title: "padding",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridColumnGap: {
    title: "gridColumnGap",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridGap: {
    title: "gridGap",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  gridRowGap: {
    title: "gridRowGap",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  clone: {
    title: "clone",
    type: ControlType.Boolean,
    /** description: "If `true`, the box will recycle its children DOM element. It's using `React.cloneElement` internally.", */
    defaultValue: false,
  },
  component: {
    title: "component",
    type: ControlType.Object,
    /** description: "The component used for the root node. Either a string to use a DOM element or a component.", */
    defaultValue: undefined,
  },
  displayPrint: {
    title: "displayPrint",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  sizeWidth: {
    title: "sizeWidth",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  sizeHeight: {
    title: "sizeHeight",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  m: {
    title: "m",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  mt: {
    title: "mt",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  mr: {
    title: "mr",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  mb: {
    title: "mb",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  ml: {
    title: "ml",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  mx: {
    title: "mx",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  my: {
    title: "my",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  pt: {
    title: "pt",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  pr: {
    title: "pr",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  pb: {
    title: "pb",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  pl: {
    title: "pl",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  px: {
    title: "px",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  py: {
    title: "py",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginX: {
    title: "marginX",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  marginY: {
    title: "marginY",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingX: {
    title: "paddingX",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingY: {
    title: "paddingY",
    type: ControlType.Object,
    /** description: "", */
    defaultValue: undefined,
  },
});

const RcBox: React.ComponentType = lib.Box;
export default RcBox;
