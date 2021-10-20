import { RcAppBar } from "@ringcentral/juno/components/AppBar";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const AppBar = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcAppBar {...rest}>{_children}</RcAppBar>
    </RcThemeProvider>
  );
};
