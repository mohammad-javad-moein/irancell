import { Grid } from "@mui/material";
import React, { useState } from "react";
import HamMenu from "./HamMenu";
import { Menu, Close } from "@mui/icons-material";
import styles from "../styles";
import { withStyles } from "@mui/styles";

function HeaderNav({ lang, classes }) {
  const [showHam, setShowHam] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  return (
    <>
      <div className={lang === "en" ? classes.nav_rtl : classes.nav_ltr}>
        <Grid
          item
          container
          xs={10}
          sm={10}
          md={10}
          style={{ padding: "0 20px" }}
        >
          <div
            onClick={() => {
              setShowHam(!showHam);
              setShowIcon(!showIcon);
            }}
          >
            {showIcon && (
              <Menu style={{ padding: "0 20px", cursor: "pointer" }} />
            )}
            {!showIcon && (
              <Close style={{ padding: "0 20px", cursor: "pointer" }} />
            )}
          </div>
        </Grid>
        <Grid
          item
          container
          xs={2}
          sm={2}
          md={2}
          style={{ justifyContent: "flex-end", padding: "0 20px" }}
        >
          {localStorage.getItem("language") === "fa" ? (
            <img
              src="/src/assets/logo.png"
              style={{ width: "80px", height: "44px" }}
            />
          ) : (
            <img
              src="/src/assets/enlogo.png"
              style={{ width: "80px", height: "44px" }}
            />
          )}
        </Grid>
      </div>
      {showHam && <HamMenu lang={lang} />}
    </>
  );
}

export default withStyles(styles)(HeaderNav);
