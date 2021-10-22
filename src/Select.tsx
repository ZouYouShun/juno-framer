import { RcSelect } from "@ringcentral/juno/components/Forms/Select";
import { RcListItemText } from "@ringcentral/juno/components/List/ListItemText";
import { RcMenuItem } from "@ringcentral/juno/components/Menu/MenuItem";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const Select = ({ _children, ...rest }: any) => {
  const [value, setValue] = useState<any>(undefined);

  const children =
    _children?.map((a: any, i: number) => {
      const item = a.props.children;
      return React.cloneElement(item, { key: i, value: item.props.value });
    }) || [];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <RcThemeProvider>
      <RcSelect {...rest} onChange={handleChange} value={value}>
        {children.length > 0 ? (
          children
        ) : (
          <RcMenuItem value="0">
            <RcListItemText primary="add children" />
          </RcMenuItem>
        )}
      </RcSelect>
    </RcThemeProvider>
  );
};
