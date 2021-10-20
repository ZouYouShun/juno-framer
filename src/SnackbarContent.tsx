import { RcSnackbarContent } from "@ringcentral/juno/components/Snackbar/SnackbarContent";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const SnackbarContent = ({
  _children,
  action: actionProp = [],
  ...rest
}: any) => {

  // because framer will wrap component with a framer div, that will broken that layer
  // so we need use children's children directly
  const action = actionProp.map((a: any) => {
    return a.props.children;
  });

  return (
    <RcThemeProvider>
      <RcSnackbarContent {...rest} action={action}>
        {_children}
      </RcSnackbarContent>
    </RcThemeProvider>
  );
};
