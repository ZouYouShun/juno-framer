import { RcAlert } from "@ringcentral/juno/components/Alert";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";
import * as iconMap from "@ringcentral/juno/icon";

export const Alert = ({ _children, icon, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcAlert {...rest} icon={(iconMap as any)[icon]}>
        {_children}
      </RcAlert>
    </RcThemeProvider>
  );
};
