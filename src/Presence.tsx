import { RcPresence } from "@ringcentral/juno/components/Presence";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Presence = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcPresence {...rest}>{_children}</RcPresence>
    </RcThemeProvider>
  );
};
