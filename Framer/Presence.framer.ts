import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?asdasdasd";

addPropertyControls(lib.Presence, {
  type: {
    title: "type",
    type: ControlType.Enum,
    /** description: "presence type", */
    defaultValue: "notReady",
    options: [
      "notReady",
      "unavailable",
      "available",
      "onCall",
      "DND",
      "inMeeting",
      "busy",
      "offline",
      "attended",
      "unAttended",
    ],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    /** description: "size of presence", */
    defaultValue: "xsmall",
    options: ["small", "medium", "large", "xxsmall", "xsmall", "xlarge"],
  },
  borderSize: {
    title: "borderSize",
    type: ControlType.Enum,
    /** description: "custom presence border, default is equal to size", */
    defaultValue: undefined,
    options: [
      undefined,
      "small",
      "medium",
      "large",
      "xxsmall",
      "xsmall",
      "xlarge",
    ],
  },
  color: {
    title: "color",
    type: ControlType.Enum,
    /** description: "other custom color with presence", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
});

const RcPresence: React.ComponentType = lib.Presence;
export default RcPresence;
