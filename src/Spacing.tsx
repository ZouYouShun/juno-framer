import { RenderTarget } from "framer";
import { useEventListener } from "@ringcentral/juno/foundation/hooks/useEventListener";
import styled, { css } from "@ringcentral/juno/foundation/styled-components";
import { spacing } from "@ringcentral/juno/foundation/styles/spacing";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

const items = {
  "1": "#ef99b7",
  "2": "#79ecfa",
  "3": "#e479f7",
  "4": "#f8a58b",
  "5": "#91a0f9",
  "6": "#f9cf7a",
  "8": "#79d7e4",
  "10": "#79c4be",
  "12": "#a88ec9",
};

type SpaceItemProps = { vertical?: boolean; count: number; cmdHold: boolean };

const defaultSize = "100px";

const SpaceItem = styled.div<SpaceItemProps>`
  background: ${({ color }) => color};
  opacity: ${({ cmdHold }) => (cmdHold ? "1" : "0")};

  ${({ vertical, count }) => {
    if (vertical) {
      return css`
        width: ${defaultSize};
        height: ${spacing(count)};
      `;
    }

    return css`
      width: ${spacing(count)};
      height: ${defaultSize};
    `;
  }};
`;

export const Spacing = ({ count, ...rest }: SpaceItemProps) => {
  const [cmdHold, setCmdHold] = useState(false);
  const current = RenderTarget.current();

  useEventListener(document, "keydown", (e: any) => {
    if (e.key === "Meta") {
      setCmdHold(true);
    }
  });

  useEventListener(document, "keyup", () => {
    setCmdHold(false);
  });

  return (
    <RcThemeProvider>
      <SpaceItem
        {...rest}
        count={count}
        color={(items as any)[count]}
        cmdHold={cmdHold || current === RenderTarget.canvas}
      />
    </RcThemeProvider>
  );
};
