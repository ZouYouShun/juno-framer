import { RcCircularProgress } from "@ringcentral/juno/components/Progress/CircularProgress";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const CircularProgress = ({ ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcCircularProgress {...rest} />
    </RcThemeProvider>
  );
};
