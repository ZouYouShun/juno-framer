import { RcBadge } from "@ringcentral/juno/components/Badge";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Badge = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcBadge {...rest}>{_children}</RcBadge>
    </RcThemeProvider>
  );
};
