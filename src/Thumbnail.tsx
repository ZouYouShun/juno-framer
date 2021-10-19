import { RcThumbnail } from "@ringcentral/juno/components/Thumbnail";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import * as iconMap from "@ringcentral/juno/icon";
import React from "react";

export const Thumbnail = ({ _children, symbol, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcThumbnail {...rest} symbol={(iconMap as any)[symbol]}>
        {_children}
      </RcThumbnail>
    </RcThemeProvider>
  );
};
