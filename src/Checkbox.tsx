import { RcCheckbox } from "@ringcentral/juno/components/Forms/Checkbox";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Checkbox = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcCheckbox {...rest}>{_children}</RcCheckbox>
    </RcThemeProvider>
  );
};
