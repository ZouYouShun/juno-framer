import { useChange } from "@ringcentral/juno/foundation/hooks/useChange";
import { RcTimePicker } from "@ringcentral/juno/components/Forms/Picker/TimePicker";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useRef, useState } from "react";

export const TimePicker = ({
  _children,
  max: maxProp,
  min: minProp,
  value: valueProp,
  ...rest
}: any) => {
  const min = useRef(minProp ? new Date(`2020/1/1 ${minProp}`) : undefined);
  const max = useRef(maxProp ? new Date(`2020/1/1 ${maxProp}`) : undefined);
  const [value, setValue] = useState<number | Date | undefined>(valueProp);

  useChange(
    () => {
      min.current = minProp ? new Date(`2020/1/1 ${minProp}`) : undefined;
      max.current = maxProp ? new Date(`2020/1/1 ${maxProp}`) : undefined;
    },
    () => minProp
  );

  const handleChange = (time: number) => {
    setValue(time);
  };

  return (
    <RcThemeProvider>
      <RcTimePicker
        value={value}
        onChange={handleChange}
        min={min.current}
        max={max.current}
        {...rest}
      />
    </RcThemeProvider>
  );
};
