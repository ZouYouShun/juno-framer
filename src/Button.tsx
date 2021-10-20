import { RcButton } from "@ringcentral/juno/components/Buttons/Button";
import { RcIcon } from "@ringcentral/juno/components/Icon";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import * as iconMap from "@ringcentral/juno/icon";
import React from "react";

export const Button = ({ _children, startIcon, endIcon, ...rest }: any) => {
  const StartIcon =
    startIcon === "" ? undefined : (
      <RcIcon symbol={(iconMap as any)[startIcon]} />
    );
  const EndIcon =
    endIcon === "" ? undefined : <RcIcon symbol={(iconMap as any)[endIcon]} />;

  return (
    <RcThemeProvider>
      <RcButton {...rest} startIcon={StartIcon} endIcon={EndIcon}>
        {_children}
      </RcButton>
    </RcThemeProvider>
  );
};
