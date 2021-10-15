import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?123123s";

addPropertyControls(lib.Avatar, {
  clickable: {
    title: "clickable",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: 'avatar.global',
    options: [undefined, ...lib.colorOptions],
  },
  src: {
    title: "src",
    type: ControlType.Image,
  },
  _children: {
    title: "children",
    type: ControlType.String,
    defaultValue: 'T',
  },
  title: {
    title: "title",
    type: ControlType.String,
  },
  useRcTooltip: {
    title: "useRcTooltip",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  align: {
    title: "align",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, "inherit", "left", "right", "center", "justify"],
  },
  presenceOrigin: {
    title: "presenceOrigin",
    type: ControlType.Object,
    defaultValue: undefined,
    controls: {
      vertical: {
        title: "vertical",
        type: ControlType.Enum,
        defaultValue: "bottom",
        options: ["top", "bottom"],
      },
      horizontal: {
        title: "horizontal",
        type: ControlType.Enum,
        defaultValue: "right",
        options: ["left", "right"],
      },
    },
  },
  $noPresence: {
    title: "$noPresence",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  presenceProps: {
    title: "presenceProps",
    description: "when you don't need presence, set $noPresence to true",
    type: ControlType.Object,
    controls: {
      type: {
        title: "type",
        type: ControlType.Enum,
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
    },
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    defaultValue: "medium",
    options: ["small", "medium", "large", "xxsmall", "xsmall", "xlarge"],
  },
  mask: {
    title: "mask",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  shouldRenderPresenceHovered: {
    title: "shouldRenderPresenceHovered",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  iconSymbol: {
    title: "iconSymbol",
    type: ControlType.Enum,
    defaultValue: undefined,
    options: [undefined, ...lib.iconOptions],
  },
  iconSize: {
    title: "iconSize",
    type: ControlType.Enum,
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
});

const RcAvatar: React.ComponentType = lib.Avatar;
export default RcAvatar;
