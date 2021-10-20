import { addPropertyControls, ControlType } from "framer";
import * as lib from "https://zouyoushun.github.io/juno-framer/esmbuild@1.0.6/index.js";

addPropertyControls(lib.Avatar, {
  clickable: {
    title: "clickable",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  color: {
    type: ControlType.Enum,
    title: "color",
    defaultValue: "avatar.global",
    options: [undefined, ...lib.colorOptions],
  },
  src: {
    title: "src",
    type: ControlType.Image,
  },
  _children: {
    title: "children",
    type: ControlType.String,
    defaultValue: "T",
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    defaultValue: "medium",
    options: ["small", "medium", "large", "xxsmall", "xsmall", "xlarge"],
  },
  useRcTooltip: {
    title: "useRcTooltip",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  title: {
    title: "Tooltip",
    type: ControlType.String,
    hidden(props) {
      return !props.useRcTooltip;
    },
  },
  hasPresence: {
    title: "presence",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: true,
  },
  presenceOrigin: {
    title: "presenceOrigin",
    type: ControlType.Object,
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
    hidden(props) {
      return !props.hasPresence;
    },
  },
  presenceProps: {
    title: "presenceProps",
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
    hidden(props) {
      return !props.hasPresence;
    },
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
