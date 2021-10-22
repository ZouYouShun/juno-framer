import {
  RcAccordion,
  RcAccordionDetails,
  RcAccordionSummary,
} from "@ringcentral/juno/components/Accordion";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const Accordion = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <RcThemeProvider>
      <RcAccordion
        {...rest}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        {children}
      </RcAccordion>
    </RcThemeProvider>
  );
};
