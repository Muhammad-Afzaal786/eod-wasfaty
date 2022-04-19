import React, { useState } from "react";
import { Button, Col, Input, Label } from "reactstrap";
import Select, { components } from "react-select";
import cloneDeep from "clone-deep";
import SwitchIcons from "../Heloper/Components/Switcher";
import FileUploader from "../Heloper/Components/FileUploader";
const initField = {
  value: false,
  violation_item: "",
  violation_Picture: "",
};
const Violation = (props) => {
  const [field, setField] = useState([initField]);
  const [value, setValue] = useState({});
  const [item, setItem] = useState([]);
  const addField = () => {
    setField([...field, initField]);
  };
  const handleChange = (index, key, fValue) => {
    //setField({ ...field, [key]: fValue });
    let fieldTmp = cloneDeep(field);
    fieldTmp[index][key] = fValue;
    setField(fieldTmp);
  };
  const CustomLabel = ({ htmlFor, handleChange, index }) => {
    return (
      <Label className="form-check-label" htmlFor={htmlFor}>
        <span
          className="switch-icon-left"
          onClick={() => handleChange(index, "value", false)}
        >
          Yes
        </span>
        <span
          className="switch-icon-right text-white"
          onClick={() => handleChange(index, "value", true)}
        >
          No
        </span>
      </Label>
    );
  };
  const itemOpt = [
    {
      label: "Practicing the activity before obtaining the license",
      value: "Practicing the activity before obtaining the license",
    },
    {
      label:
        "did not comply with the license renewal request within 30 days before the expiry of the license",
      value:
        "did not comply with the license renewal request within 30 days before the expiry of the license",
    },

    {
      label:
        "Closure of the facility Temporary closure of the entire facility or part of it without notifying the Ministry",
      value:
        "Closure of the facility Temporary closure of the entire facility or part of it without notifying the Ministry",
    },

    {
      label:
        "Closing the facility Permanent closure of the entire facility and cancellation of the license without notifying the Ministry",
      value:
        "Closing the facility Permanent closure of the entire facility and cancellation of the license without notifying the Ministry",
    },

    {
      label:
        "Failure to update all data of tourist accommodation facilities in the electronic system for licensing tourist accommodation facilities as soon as it changes",
      value:
        "Failure to update all data of tourist accommodation facilities in the electronic system for licensing tourist accommodation facilities as soon as it changes",
    },

    { label: "Other", value: "other" },
  ];
  console.log(field);
  return (
    <React.Fragment>
      {/* for yes case If there is violation */}
      {field.map((item, index) => (
        <React.Fragment key={index}>
          <div className="d-flex justify-content-between mt-1">
            <Label>
              Is there a violation<strong className="text-danger">*</strong>
            </Label>

            <div className="form-switch form-check-success">
              <Input
                type="switch"
                id="violation"
                checked={item.value}
                className="customWidth"
                name={"violation"}
                onChange={(e) => handleChange(index, "value", e.target.checked)}
              />
              <CustomLabel
                htmlFor="icon-primary"
                handleChange={handleChange}
                index={index}
              />
            </div>
          </div>
          {item.value && (
            <React.Fragment key={index}>
              <Col lg="12 mb-1">
                <Label>
                  violation items<strong className="text-danger">*</strong>
                </Label>
                <Select
                  options={itemOpt}
                  className="react-select"
                  classNamePrefix="select"
                  //   value={item}
                  onChange={(e) =>
                    handleChange(index, "violation_item", e.value)
                  }
                />
              </Col>

              {item.violation_item === "other" && (
                <Col lg="12 mb-1">
                  <Label>
                    Violation clause (Explanation of the violation)
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input />
                </Col>
              )}
              <Col lg="12 mb-1">
                <Label>
                  violation picture
                  <strong className="text-danger">*</strong>
                </Label>
                <FileUploader />
              </Col>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}

      <Col lg="12" className="mb-2">
        <div>
          <Button color="primary" type="button" onClick={() => addField()}>
            Add Violation
          </Button>
        </div>
      </Col>
      {field.length > 0 && field[0].value && (
        <>
          <Col lg="12 mb-2">
            <Label>
              violation Number<strong className="text-danger">*</strong>
            </Label>
            <Input />
          </Col>
          <Col lg="12 mb-2">
            <Label>
              Record Picture<strong className="text-danger">*</strong>
            </Label>
            <FileUploader />
          </Col>
        </>
      )}
    </React.Fragment>
  );
};

export default Violation;
