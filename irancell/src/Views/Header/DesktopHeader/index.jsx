import React, { useState } from "react";
import HeaderNav from "./sections/HeaderNav";
import Customer from "./sections/Customer";
import { Grid } from "@mui/material";

function DesktopHeader() {
  const [lang, setLang] = useState("en");
  const handleLang = (data) => {
    setLang(data);
  };

  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      style={
        lang === "en"
          ? {
              display: "flex",
              height: "90px",
              width: "100vw",
              backgroundColor: "#000",
              direction: "ltr",
            }
          : {
              display: "flex",
              height: "90px",
              width: "100vw",
              backgroundColor: "#000",
              direction: "rtl",
            }
      }
    >
      <Grid item xs={12} sm={12} md={2}>
        <Customer handleLang={handleLang} />
      </Grid>
      <Grid item container xs={12} sm={12} md={10}>
        <HeaderNav lang={lang} />
      </Grid>
    </Grid>
  );
}

export default DesktopHeader;
