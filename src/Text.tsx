import { RcText } from "@ringcentral/juno/components/Text";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const Text = ({
  _children,
  titleWhenOverflow: titleWhenOverflowProp,
  ...rest
}: any) => {
  let titleWhenOverflow: any = +titleWhenOverflowProp;
  if (titleWhenOverflowProp === "true") {
    titleWhenOverflow = true;
  } else if (titleWhenOverflowProp === "false") {
    titleWhenOverflow = false;
  }

  return (
    <RcThemeProvider>
      <RcText {...rest} titleWhenOverflow={titleWhenOverflow}>
        {_children}
      </RcText>
    </RcThemeProvider>
  );
};
