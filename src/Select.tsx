import { RcSelect } from "@ringcentral/juno/components/Forms/Select";
import { RcMenuItem } from "@ringcentral/juno/components/Menu/MenuItem";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

const menus = [
  { id: -1, value: 0 },
  { id: 0, value: "Zero" },
  { id: 1, value: "One: truncated when text too long!!!" },
  { id: 2, value: "Two" },
  { id: 3, value: "Three" },
];

export const Select = ({ _children, ...rest }: any) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setValue(+value);
  };
  return (
    <RcThemeProvider>
      <RcSelect {...rest} onChange={handleChange} value={value}>
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
    </RcThemeProvider>
  );
};
