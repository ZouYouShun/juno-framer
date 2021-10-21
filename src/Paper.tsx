import { RcPaper } from "@ringcentral/juno/components/Paper";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Paper = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcPaper {...rest}>{_children}</RcPaper>
    </RcThemeProvider>
  );
};
