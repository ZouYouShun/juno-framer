import { RcChip } from "@ringcentral/juno/components/Chip";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Chip = ({ avatar, deleteIcon, onDelete, ...rest }: any) => {
  console.log(rest);

  const inputAvatar = avatar?.[0];
  const ava = inputAvatar
    ? React.cloneElement(inputAvatar, {
        size: "xxsmall",
      })
    : undefined;

  return (
    <RcThemeProvider>
      <RcChip
        {...rest}
        avatar={ava}
        onDelete={
          deleteIcon
            ? (e) => {
                onDelete(e);
              }
            : undefined
        }
      />
    </RcThemeProvider>
  );
};
