import { Grid } from "@mui/material";
import React from "react";
import Content from "./sections";

function Container() {
  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={12}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      <Content />
    </Grid>
  );
}

export default Container;
