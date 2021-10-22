import { RcRadioGroup } from "@ringcentral/juno/components/Forms/RadioGroup";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const RadioGroup = ({ _children, value: valueProp, ...rest }: any) => {
  const [value, setValue] = useState(valueProp);

  const children = _children.map((a: any) => {
    return a.props.children;
  });

  return (
    <RcThemeProvider>
      {children.length > 0 ? (
        <RcRadioGroup
          {...rest}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>, value) => {
            setValue(value);
          }}
        >
          {children}
        </RcRadioGroup>
      ) : (
        <div>choice children</div>
      )}
    </RcThemeProvider>
  );
};
