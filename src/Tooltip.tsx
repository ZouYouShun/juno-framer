import { RcTooltip } from "@ringcentral/juno/components/Tooltip";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

// import { RenderTarget } from "framer";
export const Tooltip = ({ _children, children, ...rest }: any) => {
  // const current = RenderTarget.current();

  return (
    <RcThemeProvider>
      {_children.length > 0 ? (
        // because framer issue, use ignorePointer to wrap that
        <RcTooltip
          // open={current === RenderTarget.canvas ? true : open}
          {...rest}
          ignorePointer
        >
          {_children[0].props.children}
        </RcTooltip>
      ) : (
        <div>choice children</div>
      )}
    </RcThemeProvider>
  );
};
