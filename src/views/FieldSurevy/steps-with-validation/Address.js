// ** React Imports
import { useContext, Fragment, useState, useEffect } from "react";

// ** Third Party Components
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "react-feather";
import cloneDeep from "clone-deep";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../../utility/context/Internationalization";
// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from "reactstrap";
import Violation from "../Violation";
import { Item } from "react-contexify";
const initField = {
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
  handleChange,
  setValidation,
  dataSubmit,
}) => {
  // ** Hooks
  const { handleSubmit } = useForm();
  const [field, setField] = useState([initField]);
  let context = useContext(IntlContext);
  useEffect(() => {
    setField([initField]);
  }, [data.is_violation]);
  //handle inputs value
  const handleField = (index, key, fValue) => {
    let fieldTmp = cloneDeep(field);
    fieldTmp[index][key] = fValue;
    setField(fieldTmp);
  };
  const onSubmit = () => {
    //check violation item validation
    const checkValidation =
      data.is_violation?.value === "yes"
        ? field.map((Item) => {
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
          })
        : [false];
    if (
      checkValidation?.filter((item) => item === true)?.length > 0 ||
      data.is_violation?.length === 0
    ) {
      setValidation(true);
    } else {
      const postData = field?.map((item) => {
        return { ...item, value: item.value?.value || "" };
      });
      dataSubmit(postData);
    }
  };
  return (
    <Fragment>
      <Form>
        <Violation
          handleField={handleField}
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
            {context.locale === "sa" ? "سابق" : "Previous"}
          </span>
        </Button>
        <Button
          type="submit"
          color="primary"
          className="btn-next"
          onClick={() => onSubmit()}
        >
          <span className="align-middle d-sm-inline-block d-none">
            {context.locale === "sa" ? "إرسال" : "Submit"}
          </span>
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
