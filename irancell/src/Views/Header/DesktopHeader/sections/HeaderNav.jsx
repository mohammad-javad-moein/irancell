import { withStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles";

function HeaderNav({ classes, lang }) {
  const { t: translate } = useTranslation();

  return (
    <div
      className={classes.container}
      style={
        lang === "en"
          ? {
              borderTopLeftRadius: "60px",
              borderBottomLeftRadius: "60px",
              direction: "rtl",
            }
          : {
              borderTopRightRadius: "60px",
              borderBottomRightRadius: "60px",
              direction: "ltr",
            }
      }
    >
      {localStorage.getItem("language") === "fa" ? (
        <img src="/src/assets/logo.png" className={classes.logo} />
      ) : (
        <img src="/src/assets/enlogo.png" className={classes.logo} />
      )}
      <div className={classes.title}>{translate("store")}</div>
      <div className={classes.title}>{translate("services")}</div>
      <div className={classes.title}>{translate("festivals")}</div>
      <div className={classes.title}>{translate("support")}</div>
      <div className={classes.title}>{translate("workWithUs")}</div>
      <div className={classes.title}>{translate("blog")}</div>
      <div className={classes.title}>{translate("news")}</div>
      <div className={classes.title}>{translate("moveTo")}</div>
    </div>
  );
}

export default withStyles(styles)(HeaderNav);
