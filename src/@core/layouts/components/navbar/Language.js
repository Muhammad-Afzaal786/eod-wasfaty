import React from "react";
import { useDispatch } from "react-redux";
import { handleRTL } from "../../../../redux/layout";
import { useTranslation } from "react-i18next";
import { IntlContext } from "../../../../utility/context/Internationalization";

function Language() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const RTL = (lg) => {
    dispatch(handleRTL(lg === "en" ? false : true));
    // i18n.changeLanguage("en");

    IntlContext.switchLanguage(lg);
  };
  console.log(i18n, useTranslation());
  return (
    <div>
      <span className="CustomLanguage">
        <strong
          // className={
          //   intlContext.locale === "sa" ? "Black m-25" : "text-info m-25"
          // }
          onClick={() => RTL("en")}
        >
          {"English "}
        </strong>

        <strong className="text-info">|</strong>
        <strong
          // className={
          //   intlContext.locale === "en" ? "Black m-25" : "text-info m-25"
          // }
          onClick={() => RTL("sa")}
        >
          {"العربية"}
        </strong>
      </span>
    </div>
  );
}

export default Language;
