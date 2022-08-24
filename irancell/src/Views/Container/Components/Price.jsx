import { withStyles } from "@mui/styles";
import React from "react";
import styles from "./styles";

function Price({ children, isActive, classes }) {
  return (
    <div className={isActive ? classes.price_active : classes.price_not_active}>
      {children}
    </div>
  );
}

export default withStyles(styles)(Price);
