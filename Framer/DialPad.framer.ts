import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.DialPad, {
  muted: {
    title: "muted",
    type: ControlType.Boolean,
    /** description: "is keypad sound muted", */
    defaultValue: false,
  },
  volume: {
    title: "volume",
    type: ControlType.Number,
    /** description: "volume of keypad sound", */
    defaultValue: 1,
  },
  longPressDelay: {
    title: "longPressDelay",
    type: ControlType.Number,
    /** description: "long press '0' time to typing '+'", */
    defaultValue: 1000,
  },
  persistBgTime: {
    title: "persistBgTime",
    type: ControlType.Number,
    /** description: "time of persist button background when manual trigger by 'actionRef'
button background will not persist if persistBgTime less than 0", */
    defaultValue: 200,
  },
});

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcDialPad: React.ComponentType = lib.DialPad;
export default RcDialPad;
