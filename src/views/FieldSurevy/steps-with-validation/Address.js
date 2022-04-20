// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "react-feather";
import cloneDeep from "clone-deep";

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from "reactstrap";
import Violation from "../Violation";
import { Item } from "react-contexify";
const initField = {
  value: false,
  violation_item: "",
  violation_Picture: [],
  violation_number: "",
  violation_clause: "",
  violation_record_picture: [],
};
const Address = ({
  stepper,
  data,
  validation,
  setData,
  setValidation,
  dataSubmit,
}) => {
  // ** Hooks
  const { handleSubmit } = useForm();
  const [field, setField] = useState([initField]);
  //handle inputs value
  const handleChange = (index, key, fValue) => {
    let fieldTmp = cloneDeep(field);
    if (key === "value" && !fValue) {
      fieldTmp[index] =
        index === 0
          ? initField
          : {
              value: false,
              violation_item: "",
              violation_Picture: "",
            };
      setField(fieldTmp);
    } else {
      fieldTmp[index][key] = fValue;
      setField(fieldTmp);
    }
  };
  const onSubmit = () => {
    //check violation item validation
    const checkValidation = field.map((Item) => {
      if (Item.value) {
        if (
          Item.violation_item?.length === 0 ||
          Item.violation_Picture?.length === 0 ||
          Item.violation_number === "" ||
          Item.violation_record_picture?.length === 0
        ) {
          return true;
        } else if (
          Item.violation_item === "other" &&
          Item.violation_clause === ""
        ) {
          return true;
        }
      } else return false;
    });
    if (checkValidation?.filter((item) => item === true)?.length > 0) {
      setValidation(true);
    } else {
      dataSubmit(field);
    }
  };
  return (
    <Fragment>
      <Form>
        <Violation
          handleChange={handleChange}
          data={data}
          setField={setField}
          field={field}
          validation={validation}
        />
      </Form>
      <div className="d-flex justify-content-between mt-1">
        <Button
          type="button"
          color="primary"
          className="btn-prev"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle me-sm-25 me-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Previous
          </span>
        </Button>
        <Button
          type="submit"
          color="primary"
          className="btn-next"
          onClick={() => onSubmit()}
        >
          <span className="align-middle d-sm-inline-block d-none">Submit</span>
          {/* <ArrowRight
            size={14}
            className="align-middle ms-sm-25 ms-0"
          ></ArrowRight> */}
        </Button>
      </div>
    </Fragment>
  );
};

export default Address;
