import { RcListItem } from "@ringcentral/juno/components/List/ListItem/ListItem";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const ListItem = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });
  return (
    <RcThemeProvider>
      <RcListItem {...rest}>{children}</RcListItem>
    </RcThemeProvider>
  );
};
