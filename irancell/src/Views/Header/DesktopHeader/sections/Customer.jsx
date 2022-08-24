import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Group, ShoppingCart, Person, Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { withStyles } from "@mui/styles";
import styles from "../styles";
import i18next from "i18next";

function Customer({ classes, handleLang }) {
  const { t: translate } = useTranslation();
  const [lang, setLang] = useState("EN");

  const handleLanguage = () => {
    if (lang === "FA") {
      localStorage.setItem("language", "fa");
      i18next.changeLanguage("fa");
      setLang("EN");
      handleLang("en");
    } else {
      localStorage.setItem("language", "en");
      i18next.changeLanguage("en");
      setLang("FA");
      handleLang("fa");
    }
  };

  return (
    <div
      className={classes.customer_container}
      style={lang === "EN" ? { direction: "rtl" } : { direction: "ltr" }}
    >
      <Grid item xs={10} sm={10} md={12} className={classes.orgCustomers}>
        <Group style={{ marginLeft: "10px", width: "18px", height: "18px" }} />
        {translate("orgCustomers")}
      </Grid>
      <Grid
        item
        xs={2}
        sm={2}
        md={12}
        className={classes.iconSection}
        style={{ marginTop: "10px" }}
      >
        <ShoppingCart
          style={{
            marginLeft: "15px",
            cursor: "pointer",
            width: "18px",
            height: "18px",
          }}
        />
        <Person
          style={{
            marginLeft: "15px",
            cursor: "pointer",
            width: "18px",
            height: "18px",
          }}
        />
        <div
          onClick={handleLanguage}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <Language
            style={{ margin: "0 5px", width: "18px", height: "18px" }}
          />
          {lang}
        </div>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Customer);
