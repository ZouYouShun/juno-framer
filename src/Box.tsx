import { RcBox } from "@ringcentral/juno/components/Box";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Box = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcBox {...rest}>{_children}</RcBox>
    </RcThemeProvider>
  );
};
