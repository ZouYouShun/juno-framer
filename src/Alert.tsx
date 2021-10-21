import { RcAlert } from "@ringcentral/juno/components/Alert";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Alert = ({
  _children,
  icon: iconProp,
  defaultIcon,
  ...rest
}: any) => {
  const icon = iconProp?.[0]?.props?.children;

  return (
    <RcThemeProvider>
      <RcAlert {...rest} icon={defaultIcon ? true : icon}>
        {_children}
      </RcAlert>
    </RcThemeProvider>
  );
};
