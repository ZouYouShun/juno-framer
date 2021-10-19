import { RcDatePicker } from "@ringcentral/juno/components/Forms/Picker/DatePicker";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const DatePicker = ({ _children, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcDatePicker {...rest}>{_children}</RcDatePicker>
    </RcThemeProvider>
  );
};
