import { Switch, TextField, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Price from "../Components/Price";
import SimType from "../Components/SimType";
import styles from "../styles";

function Buy({
  classes,
  handleType,
  handleNumber,
  handleWowValue,
  handleEmail,
  handleAmount,
}) {
  const { t: translate } = useTranslation();
  const [prepaid, setPrepaid] = useState(true);
  const [postpaid, setPostPaid] = useState(false);
  const [wow, setWow] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [other, setOther] = useState(false);

  const handlePrepaid = () => {
    setPrepaid(true);
    setPostPaid(false);
    handleType("prepaid");
  };
  const handlePostpaid = () => {
    setPrepaid(false);
    setPostPaid(true);
    handleType("postpaid");
  };

  const handleWow = () => {
    setWow(!wow);
    handleWowValue(!wow);
  };
  const handleOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setOther(false);
    handleAmount(10000);
  };
  const handleTwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
    setFive(false);
    setOther(false);
    handleAmount(20000);
  };
  const handleThree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
    setFive(false);
    setOther(false);
    handleAmount(50000);
  };
  const handleFour = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
    setFive(false);
    setOther(false);
    handleAmount(100000);
  };
  const handleFive = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(true);
    setOther(false);
    handleAmount(200000);
  };
  const handleOther = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setOther(true);
  };

  const handleOtherAmount = (data) => {
    handleAmount(Number(data));
  };

  return (
    <div>
      <div className={classes.title}>{translate("onlineCharge")}</div>
      <div className={classes.simType}>{translate("simType")}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <SimType
          prepaid={prepaid}
          postpaid={postpaid}
          handlePostpaid={handlePostpaid}
          handlePrepaid={handlePrepaid}
        />
      </div>
      <div className={classes.wow}>
        <Switch onChange={handleWow} />
        <div style={{ fontSize: "14px", padding: "0 10px" }}>
          {translate("wowRecharge")}
        </div>
      </div>
      <input
        className={classes.input}
        placeholder={translate("phone")}
        onChange={(e) => handleNumber(e.target.value)}
      />
      <div className={classes.price}>{translate("price")}</div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div onClick={handleOne}>
          <Price isActive={one}>
            {translate("10000")} {translate("rial")}
          </Price>
        </div>
        <div onClick={handleTwo}>
          <Price isActive={two}>
            {translate("20000")} {translate("rial")}
          </Price>
        </div>
        <div onClick={handleThree}>
          <Price isActive={three}>
            {translate("50000")} {translate("rial")}
          </Price>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-evenly",
          marginBottom: "15px",
        }}
      >
        <div onClick={handleFour}>
          <Price isActive={four}>
            {translate("100000")} {translate("rial")}
          </Price>
        </div>
        <div onClick={handleFive}>
          <Price isActive={five}>
            {translate("200000")} {translate("rial")}
          </Price>
        </div>
        <div onClick={handleOther}>
          <Price isActive={other}>{translate("otherAmount")}</Price>
        </div>
      </div>

      <div>
        {other && (
          <>
            <input
              className={classes.input}
              placeholder={translate("other")}
              onChange={(e) => handleOtherAmount(e.target.value)}
            />
            <div className={classes.minMax}>{translate("minMax")}</div>
          </>
        )}
      </div>

      <input
        className={classes.input}
        placeholder={translate("email")}
        onChange={(e) => handleEmail(e.target.value)}
      />
      <button className={classes.button}>{translate("chooseBank")}</button>
    </div>
  );
}

export default withStyles(styles)(Buy);
