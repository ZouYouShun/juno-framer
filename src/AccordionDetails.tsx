import { RcAccordionDetails } from "@ringcentral/juno/components/Accordion/AccordionDetails";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const AccordionDetails = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <RcThemeProvider>
      <RcAccordionDetails {...rest}>{children}</RcAccordionDetails>
    </RcThemeProvider>
  );
};
