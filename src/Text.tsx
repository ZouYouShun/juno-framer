import { RcText } from "@ringcentral/juno/components/Text";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Text = ({ children2, startIcon, endIcon, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcText {...rest}>{children2}</RcText>
    </RcThemeProvider>
  );
};
