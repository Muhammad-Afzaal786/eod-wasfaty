import React from "react";
import Select from "react-select";
import Validation from "./FieldValidation";
const Selector = ({ handleChange, value, name, validation }) => {
  const Opt = [
    { label: "YES", value: "yes" },
    { label: "NO", value: "no" },
  ];
  return (
    <div>
      <Select
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
