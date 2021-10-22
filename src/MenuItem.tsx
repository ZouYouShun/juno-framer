import { RcMenuItem } from "@ringcentral/juno/components/Menu/MenuItem";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const MenuItem = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });

  return (
    <RcThemeProvider>
      <RcMenuItem {...rest}>{children}</RcMenuItem>
    </RcThemeProvider>
  );
};
