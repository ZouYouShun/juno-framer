import { RcAccordionSummary } from "@ringcentral/juno/components/Accordion/AccordionSummary";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

import * as iconMap from "@ringcentral/juno/icon";
export const AccordionSummary = ({ _children, expandIcon, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });
  return (
    <RcThemeProvider>
      <RcAccordionSummary {...rest} expandIcon={(iconMap as any)[expandIcon]}>
        {children}
      </RcAccordionSummary>
    </RcThemeProvider>
  );
};
