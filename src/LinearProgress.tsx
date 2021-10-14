import { RcLinearProgress } from "@ringcentral/juno/components/Progress/LinearProgress";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const LinearProgress = ({ ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcLinearProgress {...rest} />
    </RcThemeProvider>
  );
};
