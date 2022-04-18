// ** React Imports
import { Fragment, useState } from "react";

// ** Utils
import { isObjEmpty } from "@utils";

// ** Third Party Components
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "react-feather";
import { yupResolver } from "@hookform/resolvers/yup";
// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from "reactstrap";
import Select, { components } from "react-select";
import { fieldSurveyObj } from "../../Heloper/Object";
import SwitchIcons from "../../Heloper/Components/Switcher";
import Validation from "../../Heloper/Components/FieldValidation";

const defaultValues = {
  email: "",
};

const AccountDetails = ({
  stepper,
  handleChange,
  data,
  validation,
  setData,
  setValidation,
}) => {
  // ** Hooks
  const [region, setRegion] = useState([{ label: "test", value: "test" }]);

  const { handleSubmit } = useForm();
  const onSubmit = () => {
    if (data.city === "" || data.neighborhood === "" || data.street === "") {
      setValidation(true);
      stepper.next();
    } else {
      stepper.next();
    }
  };
  //get current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setData({
        ...data,
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });
  };
  return (
    <Fragment>
      {/* <div className="content-header">
        <h5 className="mb-0">Account Details</h5>
        <small className="text-muted">Enter Your Account Details.</small>
      </div> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg="3">
            <Label>
              Region <strong className="text-danger">*</strong>
            </Label>
            <Select
              options={region}
              className="react-select"
              classNamePrefix="select"
              value={data.region}
              onChange={(e) => handleChange("region", e)}
            />
            <Validation
              validation={validation}
              type="select"
              value={data.region}
            />
          </Col>
          <Col lg="3">
            <Label>
              City <strong className="text-danger">*</strong>
            </Label>
            <Input
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
              invalid={data.city === "" && validation ? true : false}
            />
            <Validation
              type="text"
              value={data.neighborhood}
              validation={validation}
            />
          </Col>
          <Col lg="3">
            <Label>
              Neighborhood <strong className="text-danger">*</strong>
            </Label>
            <Input
              value={data.neighborhood}
              onChange={(e) => handleChange("neighborhood", e.target.value)}
              invalid={data.neighborhood === "" && validation ? true : false}
            />
            <Validation
              type="text"
              value={data.neighborhood}
              validation={validation}
            />
          </Col>
          <Col lg="3">
            <Label>
              Street <strong className="text-danger">*</strong>
            </Label>
            <Input
              value={data.street}
              onChange={(e) => handleChange("street", e.target.value)}
              invalid={data.street === "" && validation ? true : false}
            />
            <Validation
              type="text"
              value={data.street}
              validation={validation}
            />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col lg="12">
            <Label>
              Tourism License number
              <strong className="text-danger">*</strong>
            </Label>
            <Input
              type="number"
              value={data.tourism_License_number}
              onChange={(e) =>
                handleChange("tourism_License_number", e.target.value)
              }
              invalid={
                data.tourism_License_number === "" && validation ? true : false
              }
            />
            <Validation
              type="text"
              value={data.tourism_License_number}
              validation={validation}
            />
          </Col>
        </Row>
        <Row className="mt-1">
          <div className="d-flex justify-content-between">
            <span className="switchLabel">
              Is the inspector have a relationship the owner of the facility? *
            </span>
            <SwitchIcons
              handleChange={handleChange}
              name="inspectorRelation"
              value={data.inspectorRelation}
            />
          </div>
        </Row>

        <Row className="mt-1">
          <Col lg="12">
            <Label>
              Longitude <strong className="text-danger">*</strong>
            </Label>
            <Input type="number" value={data.location.longitude} disabled />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col lg="12">
            <Label>
              Latitude <strong className="text-danger">*</strong>
            </Label>
            <Input type="number" value={data.location.latitude} disabled />
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg="12">
            <Button
              color="primary"
              type="button"
              className="p-50"
              onClick={() => getLocation()}
            >
              Get Coordinates
            </Button>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col lg="12">
            <Label>
              Remarks <strong className="text-danger">*</strong>
            </Label>
            <Input
              value={data.remarks}
              type="textarea"
              onChange={(e) => handleChange("remarks", e.target.value)}
              invalid={data.remarks === "" && validation ? true : false}
            />
            <Validation
              type="text"
              value={data.remarks}
              validation={validation}
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-1">
          <Button type="submit" color="primary" className="btn-next">
            <span className="align-middle d-sm-inline-block d-none">
              Save & Submit
            </span>
            {/* <ArrowRight
              size={14}
              className="align-middle ms-sm-25 ms-0"
            ></ArrowRight> */}
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default AccountDetails;
