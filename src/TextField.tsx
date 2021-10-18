import { RcTextField } from "@ringcentral/juno/components/Forms/TextField";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const TextField = ({ value: valueProp, ...rest }: any) => {
  const [value, setValue] = useState(valueProp);

  return (
    <RcThemeProvider>
      <RcTextField
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </RcThemeProvider>
  );
};
