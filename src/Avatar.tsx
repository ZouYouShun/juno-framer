import { RcAvatar } from "@ringcentral/juno/components/Avatar";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import * as iconMap from "@ringcentral/juno/icon";
import React from "react";

export const Avatar = ({
  _children,
  hasPresence,
  startIcon,
  endIcon,
  iconSymbol,
  presenceProps,
  ...rest
}: any) => {
  return (
    <RcThemeProvider>
      <RcAvatar
        {...rest}
        iconSymbol={(iconMap as any)[iconSymbol]}
        presenceProps={hasPresence ? presenceProps : undefined}
      >
        {_children}
      </RcAvatar>
    </RcThemeProvider>
  );
};
