import { withStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles";

function UpSection({ classes, simType, userNumber, wow, email, amount }) {
  const { t: translate } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: "#f0eff5",

        width: "100%",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        {translate("finalInvoice")}
      </div>
      <div className={classes.title}>{translate("simType")}</div>
      <div className={classes.detail}>{translate(simType)}</div>
      <div className={classes.title}>{translate("directTo")}</div>
      <div className={classes.detail}>{userNumber}</div>
      <div className={classes.title}>{translate("paymentPrice")}</div>
      <div className={classes.detail}>
        {amount + amount * 0.09} {translate("rial")}
      </div>
      <div className={classes.title} style={{ display: "flex" }}>
        {translate("reward")}{" "}
        <div
          style={{
            backgroundColor: "#0faf4b",
            width: "13px",
            height: "13px",
            borderRadius: "50%",
            marginRight: "5px",
            marginTop: "5px",
          }}
        />
      </div>
      <div className={classes.detail}>
        {amount * 0.01} {translate("rial")}
      </div>
      <div className={classes.title}>{translate("chargeType")}</div>
      <div className={classes.detail}>
        {wow ? translate("wow") : translate("normal")}
      </div>
      <div className={classes.title}>{translate("paymentEmail")}</div>
      <div className={classes.detail}>{email}</div>
      <div className={classes.title}>{translate("bankName")}</div>
      <div className={classes.detail}>- - - </div>
    </div>
  );
}

export default withStyles(styles)(UpSection);
