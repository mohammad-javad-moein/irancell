import React from "react";
import { useTranslation } from "react-i18next";
import UpSection from "../Components/UpSection";

function Payment({ simType, userNumber, wow, email, amount }) {
  const { t: translate } = useTranslation();

  return (
    <div>
      <UpSection
        simType={simType}
        userNumber={userNumber}
        wow={wow}
        email={email}
        amount={amount}
      />

      <div style={{ display: "flex", marginTop: "10px" }}>
        <div
          style={{
            backgroundColor: "#0faf4b",
            width: "15%",
            height: "13px",
            borderRadius: "50%",
            marginLeft: "5px",
            marginTop: "5px",
          }}
        />
        <div style={{ fontSize: "14px", color: "#898989" }}>
          {translate("text")}
        </div>
      </div>
    </div>
  );
}

export default Payment;
