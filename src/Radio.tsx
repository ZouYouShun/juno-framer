import { RcRadio } from "@ringcentral/juno/components/Forms/Radio";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Radio = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcRadio {...rest}>{_children}</RcRadio>
    </RcThemeProvider>
  );
};
