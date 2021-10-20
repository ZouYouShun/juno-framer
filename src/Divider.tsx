import { RcDivider } from "@ringcentral/juno/components/Divider";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Divider = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcDivider {...rest}>{_children}</RcDivider>
    </RcThemeProvider>
  );
};
