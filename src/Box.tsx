import { RcBox } from "@ringcentral/juno/components/Box";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Box = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <RcThemeProvider>
      <RcBox {...rest}>{children}</RcBox>
    </RcThemeProvider>
  );
};
