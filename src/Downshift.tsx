import {
  RcDownshift,
  RcDownshiftDefaultFilterOptions,
  RcDownshiftSelectedItem,
} from "@ringcentral/juno/components/Downshift";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

const options = [
  { id: "phone_1", label: "Afghanistan" },
  { id: "phone_2", label: "Aland Islands" },
  { id: "phone_3", label: "Bahamas" },
  { id: "phone_4", label: "Bahrain" },
  { id: "phone_5", label: "China" },
  { id: "phone_6", label: "Algeria" },
  { id: "phone_7", label: "American Samoa" },
  { id: "phone_8", label: "Andorra" },
  { id: "phone_9", label: "Angola" },
  { id: "phone_10", label: "Anguilla" },
  { id: "phone_11", label: "Antarctica" },
  { id: "phone_12", label: "Antigua and Barbuda" },
  { id: "phone_13", label: "Argentina" },
  { id: "phone_14", label: "Armenia" },
];

export const Downshift = ({ _children, ...rest }: any) => {
  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  return (
    <RcThemeProvider>
      <RcDownshift
        {...rest}
        options={options}
        value={value}
        onChange={(selectedItems) => {
          setValue(selectedItems);
        }}
        filterOptions={RcDownshiftDefaultFilterOptions}
      />
    </RcThemeProvider>
  );
};
