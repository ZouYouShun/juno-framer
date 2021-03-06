import { RcSlider } from "@ringcentral/juno/components/Forms/Slider";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Slider = ({ ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcSlider {...rest} />
    </RcThemeProvider>
  );
};
