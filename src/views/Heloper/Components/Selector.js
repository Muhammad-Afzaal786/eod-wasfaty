import React, { useContext } from "react";
import Select from "react-select";
import Validation from "./FieldValidation";
import { IntlContext } from "../../../utility/context/Internationalization";

const Selector = ({ handleChange, value, name, validation }) => {
  const Opt = [
    { label: "YES", value: "yes" },
    { label: "NO", value: "no" },
  ];
  let context = useContext(IntlContext);

  return (
    <div>
      <Select
        placeholder={context.locale === "sa" ? "تحديد" : "select"}
        options={Opt}
        className="react-select"
        classNamePrefix="select"
        value={value}
        // menuPlacement="top"
        onChange={(e) => handleChange(name, e)}
      />
      <Validation type="select" value={value} validation={validation} />
    </div>
  );
};

export default Selector;
