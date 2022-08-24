import { withStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles";

function HamMenu({ lang, classes }) {
  const { t: translate } = useTranslation();

  return (
    <div className={lang === "en" ? classes.ham_rtl : classes.ham_ltr}>
      <div className={classes.ham_items}>{translate("store")}</div>
      <div className={classes.ham_items}>{translate("services")}</div>
      <div className={classes.ham_items}>{translate("festivals")}</div>
      <div className={classes.ham_items}>{translate("support")}</div>
      <div className={classes.ham_items}>{translate("workWithUs")}</div>
      <div className={classes.ham_items}>{translate("blog")}</div>
      <div className={classes.ham_items}>{translate("news")}</div>
      <div className={classes.ham_items}>{translate("moveTo")}</div>
    </div>
  );
}

export default withStyles(styles)(HamMenu);
