import { RcButton } from "@ringcentral/juno";
import { RcListItemText } from "@ringcentral/juno/components/List/ListItemText";
import { RcMenu, RcMenuItem } from "@ringcentral/juno/components/Menu";
import { RcThemeProvider } from "@ringcentral/juno/foundation/theme/ThemeProvider";
import React, { useState } from "react";

export const Menu = ({ _children, anchorEl: anchorElProp, ...rest }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setAnchorEl(event.currentTarget);

  const host =
    anchorElProp.length > 0 ? (
      React.cloneElement(anchorElProp[0].props.children, {
        onClick: handleClick,
      })
    ) : (
      <RcButton onClick={handleClick}>add host element with anchorEl</RcButton>
    );

  const handleClose = () => setAnchorEl(null);

  const children = _children.map((a: any) => {
    return React.cloneElement(a.props.children, { onClick: handleClose });
  });

  return (
    <RcThemeProvider>
      {host}
      <RcMenu
        {...rest}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {children.length > 0 ? (
          children
        ) : (
          <RcMenuItem>
            <RcListItemText primary="add children with MenuItem" />
          </RcMenuItem>
        )}
      </RcMenu>
    </RcThemeProvider>
  );
};
