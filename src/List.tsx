import { RcList } from "@ringcentral/juno/components/List/List/List";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const List = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcList {...rest}>{_children}</RcList>
    </RcThemeProvider>
  );
};
