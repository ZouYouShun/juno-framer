import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

import { RcThemes } from "./themes/themes";

export const ThemeProvider = ({ children, themeId, ...rest }: any) => {
  const theme = (RcThemes as any)[themeId];

  return (
    <RcThemeProvider {...rest} theme={theme}>
      {children[0]}
    </RcThemeProvider>
  );
};
