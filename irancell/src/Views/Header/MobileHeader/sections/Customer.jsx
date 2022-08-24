import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Group, ShoppingCart, Person, Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import styles from "../styles";
import i18next from "i18next";
import { withStyles } from "@mui/styles";

function Customer({ handleLang, classes }) {
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
      className={lang === "EN" ? classes.customer_rtl : classes.customer_ltr}
    >
      <Grid
        item
        container
        xs={6}
        sm={6}
        md={6}
        style={{ alignItems: "center" }}
      >
        <Group style={{ margin: "0 10px", width: "18px", height: "18px" }} />
        {translate("orgCustomers")}
      </Grid>
      <Grid
        item
        container
        xs={6}
        sm={6}
        md={6}
        style={{ justifyContent: "flex-end" }}
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
