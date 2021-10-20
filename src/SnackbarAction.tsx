import { RcSnackbarAction } from "@ringcentral/juno/components/Snackbar/SnackbarAction";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const SnackbarAction = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcSnackbarAction {...rest}>{_children}</RcSnackbarAction>
    </RcThemeProvider>
  );
};
