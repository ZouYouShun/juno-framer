import { RcAccordionDetails } from "@ringcentral/juno/components/Accordion/AccordionDetails";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React from "react";

export const AccordionDetails = ({ _children = [], ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <RcThemeProvider>
      <RcAccordionDetails {...rest}>
        {children.length > 0 ? (
          children
        ) : (
          <div style={{ background: "white" }}>add children</div>
        )}
      </RcAccordionDetails>
    </RcThemeProvider>
  );
};
