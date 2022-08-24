import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: localStorage.getItem("language") ?? "fa",
    fallbackLng: localStorage.getItem("language") ?? "fa",
    backend: {
      loadPath: `/assets/i18n/{{ns}}/{{lng}}.json`,
    },
    ns: ["translations"],
    defaultNS: "translations",
    // interpolation: {
    //   escapeValue: false,
    //   formatSeparator: ",",
    // },
    // react: {
    //   wait: true,
    // },
  });

export default i18n;
