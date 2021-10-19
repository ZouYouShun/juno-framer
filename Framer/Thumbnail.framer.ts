import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js?123aa";

addPropertyControls(lib.Thumbnail, {
  src: {
    title: "src",
    type: ControlType.Image,
    /** description: "Thumbnail background url", */
  },
  symbol: {
    title: "symbol",
    type: ControlType.Enum,
    /** description: "that will render RcIcon when not have url", */
    defaultValue: "NonEdit",
    options: [undefined, ...lib.iconOptions],
  },
  size: {
    title: "size",
    type: ControlType.Enum,
    /** description: "thumbnail size, default is `large`", */
    defaultValue: "large",
    options: ["small", "large"],
  },
});

const RcThumbnail: React.ComponentType = lib.Thumbnail;
export default RcThumbnail;
