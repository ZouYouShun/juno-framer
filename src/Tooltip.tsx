import { RcTooltip } from "@ringcentral/juno/components/Tooltip";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Tooltip = ({ children, ...rest }: any) => {
  console.log(children, rest);

  return (
    <RcThemeProvider>
      {children.length > 0 ? (
        <RcTooltip css {...rest}>
          {children[0]}
        </RcTooltip>
      ) : (
        <div>Example</div>
      )}
    </RcThemeProvider>
  );
};
