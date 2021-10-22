import { RcPaper } from "@ringcentral/juno/components/Paper";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Paper = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <RcThemeProvider>
      <RcPaper {...rest}>{children}</RcPaper>
    </RcThemeProvider>
  );
};
