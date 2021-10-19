import { RcSlider } from "@ringcentral/juno/components/Forms/Slider";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Slider = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcSlider {...rest}>{_children}</RcSlider>
    </RcThemeProvider>
  );
};
