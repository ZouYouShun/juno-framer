import { RcLink } from "@ringcentral/juno/components/Link";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Link = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcLink {...rest}>{_children}</RcLink>
    </RcThemeProvider>
  );
};
