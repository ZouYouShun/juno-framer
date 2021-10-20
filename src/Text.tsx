import { RcText } from "@ringcentral/juno/components/Text";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Text = ({ _children, startIcon, endIcon, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcText {...rest}>{_children}</RcText>
    </RcThemeProvider>
  );
};
