import { RcLink } from "@ringcentral/juno/components/Link";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Link = ({ children2, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcLink {...rest}>{children2}</RcLink>
    </RcThemeProvider>
  );
};
