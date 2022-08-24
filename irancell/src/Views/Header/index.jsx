import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down(900));

  return <div>{isPhone ? <MobileHeader /> : <DesktopHeader />}</div>;
}

export default Header;
