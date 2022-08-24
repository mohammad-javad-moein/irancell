import React, { useState } from "react";
import Customer from "./sections/Customer";
import HeaderNav from "./sections/HeaderNav";

function MobileHeader() {
  const [lang, setLang] = useState("en");
  const handleLang = (data) => {
    setLang(data);
  };

  return (
    <div
      style={
        lang === "en"
          ? {
              direction: "ltr",
            }
          : {
              direction: "rtl",
            }
      }
    >
      <Customer handleLang={handleLang} />
      <HeaderNav lang={lang} />
    </div>
  );
}

export default MobileHeader;
