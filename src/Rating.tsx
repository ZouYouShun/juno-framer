import { RcIcon } from "@ringcentral/juno/components/Icon";
import { RcRating } from "@ringcentral/juno/components/Rating";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import * as iconMap from "@ringcentral/juno/icon";
import React, { useEffect, useState } from "react";

// TODO: multiple rating will populate each other
export const Rating = ({ size = "xlarge", icon, emptyIcon, ...rest }: any) => {
  return (
    <RcThemeProvider>
      <RcRating
        icon={<RcIcon size={size} symbol={(iconMap as any)[icon]} />}
        emptyIcon={<RcIcon size={size} symbol={(iconMap as any)[emptyIcon]} />}
        {...rest}
      />
    </RcThemeProvider>
  );
};
