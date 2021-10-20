import { RcSnackbarContent } from "@ringcentral/juno/components/Snackbar/SnackbarContent";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const SnackbarContent = ({ _children, ...rest }: any) => {
  console.log(rest, _children);
  return (
    <RcThemeProvider>
      <RcSnackbarContent {...rest}>{_children}</RcSnackbarContent>
    </RcThemeProvider>
  );
};
