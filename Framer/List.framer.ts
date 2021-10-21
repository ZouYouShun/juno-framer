import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.List, {
  dense: {
    title: "dense",
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  // subheader: {
  //   title: "subheader",
  //   type: ControlType.ComponentInstance,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  _children: {
    title: "children",
    control: {
      type: ControlType.ComponentInstance
    }
  },
  disablePadding: {
    title: "disablePadding",
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: true,
  },
});

const RcList: React.ComponentType = lib.List;
export default RcList;
