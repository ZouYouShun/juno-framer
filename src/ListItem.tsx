import { RcListItem } from "@ringcentral/juno/components/List/ListItem/ListItem";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const ListItem = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcListItem {...rest}>{_children}</RcListItem>
    </RcThemeProvider>
  );
};
