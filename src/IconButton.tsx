import { RcIconButton } from "@ringcentral/juno/components/Buttons/IconButton";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import * as iconMap from "@ringcentral/juno/icon";
import React from "react";

export const IconButton = ({
  _children,
  symbol,
  radius,
  elevation,
  activeElevation,
  ...rest
}: any) => {
  return (
    <RcThemeProvider>
      <RcIconButton
        symbol={(iconMap as any)[symbol]}
        {...rest}
        elevation={elevation === "undefined" ? undefined : elevation}
        activeElevation={
          activeElevation === "undefined" ? undefined : activeElevation
        }
      />
    </RcThemeProvider>
  );
};
