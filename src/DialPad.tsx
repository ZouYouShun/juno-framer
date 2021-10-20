import {
  RcDialerPadSounds,
  RcDialPad,
} from "@ringcentral/juno/components/Dialer";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const DialPad = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcDialPad {...rest} sounds={RcDialerPadSounds} />
    </RcThemeProvider>
  );
};
