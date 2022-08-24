import { withStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles";

function SimType({
  prepaid,
  postpaid,
  handlePostpaid,
  handlePrepaid,
  classes,
}) {
  const { t: translate } = useTranslation();
  return (
    <div className={classes.simType_container}>
      <div
        onClick={handlePrepaid}
        className={prepaid ? classes.active : classes.not_active}
      >
        {translate("prepaid")}
      </div>
      <div
        className={postpaid ? classes.active : classes.not_active}
        onClick={handlePostpaid}
      >
        {translate("postpaid")}
      </div>
    </div>
  );
}

export default withStyles(styles)(SimType);
