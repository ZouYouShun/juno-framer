import { RcwnshiftDoc } from "@ringcentral/juno/components/wnshiftDoc";
  import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
  import React from "react";

  export const wnshiftDoc = ({ _children, ...rest }: any) => {
    return (
      <RcThemeProvider>
        <RcwnshiftDoc {...rest}>{_children}</RcwnshiftDoc>
      </RcThemeProvider>
    );
  };
  