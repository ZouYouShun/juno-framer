import { RcIcon } from "@ringcentral/juno/components/Icon";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

import * as iconMap from "@ringcentral/juno/icon";

export const Icon = ({ symbol, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcIcon symbol={(iconMap as any)[symbol]} {...rest} />
    </RcThemeProvider>
  );
};
