import { Grid } from "@mui/material";
import React, { useState } from "react";
import Buy from "./Buy";
import Payment from "./Payment";
import styles from "../styles";
import { withStyles } from "@mui/styles";

function Content({ classes }) {
  const [simType, setSimType] = useState("prepaid");
  const [number, setNumber] = useState("- - -");
  const [wow, setWow] = useState(false);
  const [email, setEmail] = useState("- - - ");
  const [amount, setAmount] = useState(20000);

  const handleType = (data) => {
    setSimType(data);
  };
  const handleNumber = (data) => {
    setNumber(data);
  };
  const handleWowValue = (data) => {
    setWow(data);
  };
  const handleEmail = (data) => {
    setEmail(data);
  };
  const handleAmount = (data) => {
    setAmount(data);
  };
  return (
    <Grid
      item
      container
      xs={12}
      sm={8}
      md={8}
      className={classes.section_container}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Buy
          handleType={handleType}
          handleNumber={handleNumber}
          handleWowValue={handleWowValue}
          handleEmail={handleEmail}
          handleAmount={handleAmount}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Payment
          simType={simType}
          userNumber={number}
          wow={wow}
          email={email}
          amount={amount}
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Content);
