import { RcInlineEditable } from "@ringcentral/juno/components/InlineEditable";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const InlineEditable = ({ value: valueProp, ...rest }: any) => {
  const [value, setValue] = useState(valueProp || "");
  return (
    <RcThemeProvider>
      <RcInlineEditable
        {...rest}
        value={value}
        onChange={(newValue, reason) => {
          setValue(newValue);
        }}
      />
    </RcThemeProvider>
  );
};
