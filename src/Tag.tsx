import { RcTag } from "@ringcentral/juno/components/Tag";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Tag = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcTag {...rest}>{_children}</RcTag>
    </RcThemeProvider>
  );
};
