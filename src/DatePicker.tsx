import { useChange } from "@ringcentral/juno";
import { RcDatePicker } from "@ringcentral/juno/components/Forms/Picker/DatePicker";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useRef, useState } from "react";

export const DatePicker = ({
  _children,
  max: maxProp,
  min: minProp,
  value: valueProp,
  ...rest
}: any) => {
  const min = useRef(minProp ? new Date(minProp) : undefined);
  const max = useRef(maxProp ? new Date(maxProp) : undefined);
  const [value, setValue] = useState<number | Date | undefined>(valueProp);

  useChange(
    () => {
      min.current = minProp ? new Date(minProp) : undefined;
      max.current = maxProp ? new Date(maxProp) : undefined;
    },
    () => minProp
  );

  const handleChange = (time: number) => {
    setValue(time);
  };

  return (
    <RcThemeProvider>
      <RcDatePicker
        value={value}
        onChange={handleChange}
        min={min.current}
        max={max.current}
        {...rest}
      />
    </RcThemeProvider>
  );
};
