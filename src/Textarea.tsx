import { RcTextarea } from "@ringcentral/juno/components/Forms/Textarea";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const Textarea = ({ value: valueProp, ...rest }: any) => {
  const [value, setValue] = useState(valueProp);

  return (
    <RcThemeProvider>
      <RcTextarea
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </RcThemeProvider>
  );
};
