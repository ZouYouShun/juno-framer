import { RcList } from "@ringcentral/juno/components/List/List/List";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const List = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });
  return (
    <RcThemeProvider>
      <RcList {...rest}>{children}</RcList>
    </RcThemeProvider>
  );
};
