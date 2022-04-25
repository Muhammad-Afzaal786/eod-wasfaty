import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { handleRTL } from "../../../../redux/layout";
import { IntlContext } from "../../../../utility/context/Internationalization";
function Language() {
  const dispatch = useDispatch();
  const intlContext = useContext(IntlContext);
  const RTL = (lg) => {
    dispatch(handleRTL(lg === "en" ? false : true));
    intlContext.switchLanguage(lg);
  };
  return (
    <div>
      {intlContext.locale === "en" ? (
        <span className="CustomLanguage">
          <strong
            className={intlContext.locale === "en" ? "Black m-25" : " m-25"}
            onClick={() => RTL("en")}
          >
            {"English "}
          </strong>

          <strong className="">|</strong>
          <strong
            className={intlContext.locale === "sa" ? "Black m-25" : " m-25"}
            onClick={() => RTL("sa")}
          >
            {"العربية"}
          </strong>
        </span>
      ) : (
        <span className="CustomLanguage">
          <strong
            className={intlContext.locale === "sa" ? "Black m-25" : " m-25"}
            onClick={() => RTL("sa")}
          >
            {"العربية"}
          </strong>

          <strong className="">|</strong>
          <strong className="m-25" onClick={() => RTL("en")}>
            {"English "}
          </strong>
        </span>
      )}
    </div>
  );
}

export default Language;
