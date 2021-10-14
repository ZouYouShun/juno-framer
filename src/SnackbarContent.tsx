import { RcSnackbarContent } from "@ringcentral/juno/components/Snackbar/SnackbarContent";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const SnackbarContent = ({ children2, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcSnackbarContent {...rest}>{children2}</RcSnackbarContent>
    </RcThemeProvider>
  );
};
