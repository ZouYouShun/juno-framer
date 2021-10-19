import { RcTimePicker } from "@ringcentral/juno/components/Forms/Picker/TimePicker";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const TimePicker = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcTimePicker {...rest}>{_children}</RcTimePicker>
    </RcThemeProvider>
  );
};
