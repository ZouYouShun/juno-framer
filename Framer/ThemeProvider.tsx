import { addPropertyControls, ControlType } from "framer";
import * as lib from "http://127.0.0.1:8000/index.js";

addPropertyControls(lib.ThemeProvider, {
  themeId: {
    title: "themeId",
    type: ControlType.Enum,
    defaultValue: "rcBlue",
    options: lib.themeOptions,
  },
  children: {
    type: ControlType.ComponentInstance,
  },
});

export const ThemeProvider: React.ComponentType = lib.ThemeProvider;
