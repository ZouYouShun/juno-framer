import { RcSwitch } from "@ringcentral/juno/components/Forms/Switch";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Switch = ({ ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcSwitch {...rest} />
    </RcThemeProvider>
  );
};
