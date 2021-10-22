import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.AccordionDetails, {
  _children: {
    title: "children",
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion details.", */
  },
});

const RcAccordionDetails: React.ComponentType = lib.AccordionDetails;
export default RcAccordionDetails;
