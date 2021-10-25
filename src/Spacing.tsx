import { RenderTarget } from "framer";
import { useEventListener } from "@ringcentral/juno/foundation/hooks/useEventListener";
import styled, { css } from "@ringcentral/juno/foundation/styled-components";
import { spacing } from "@ringcentral/juno/foundation/styles/spacing";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

const items = [
  {
    color: "#ef99b7",
    count: 1,
  },
  {
    color: "#79ecfa",
    count: 2,
  },
  {
    color: "#e479f7",
    count: 3,
  },
  {
    color: "#f8a58b",
    count: 4,
  },
  {
    color: "#91a0f9",
    count: 5,
  },
  {
    color: "#f9cf7a",
    count: 6,
  },
  {
    color: "#79d7e4",
    count: 8,
  },
  {
    color: "#79c4be",
    count: 10,
  },
  {
    color: "#a88ec9",
    count: 12,
  },
];

type SpaceItemProps = { vertical?: boolean; count: number; cmdHold: boolean };

const defaultSize = "100px";

const SpaceItem = styled.div<SpaceItemProps>`
  background: ${({ color }) => color};
  opacity: ${({ cmdHold }) => cmdHold && "1"};

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

export const Spacing = ({ count, vertical }: SpaceItemProps) => {
  const [cmdHold, setCmdHold] = useState(false);
  const current = RenderTarget.current();

  useEventListener(document, "keydown", () => {
    setCmdHold(true);
  });

  useEventListener(document, "keyup", () => {
    setCmdHold(false);
  });

  return (
    <RcThemeProvider>
      <SpaceItem
        vertical={vertical}
        count={count}
        color={items[count].color}
        cmdHold={cmdHold || current === RenderTarget.canvas}
      />
    </RcThemeProvider>
  );
};
