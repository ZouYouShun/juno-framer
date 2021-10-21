import { RcDownshift } from "@ringcentral/juno/components/Downshift";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Downshift = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcDownshift {...rest}>{_children}</RcDownshift>
    </RcThemeProvider>
  );
};
