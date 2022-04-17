import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select, { components } from "react-select";
import {
  fieldSurveyObj,
  regionCreateObj,
  userCreateObj,
} from "../Heloper/Object";
import Validation from "../Heloper/Components/FieldValidation";
import Violation from "./Violation";

const AddSurvey = () => {
  const [data, setData] = useState(fieldSurveyObj);
  const [validation, setValidation] = useState(false);
  const [region, setRegion] = useState([]);
  // useEffect(() => {

  // }, []);
  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const reasonOpt = [
    {
      label: "The Facility Does not Exist",
      value: "The Facility Does not Exist",
    },
    {
      label: "The Facility is closed Permanent closure",
      value: "The Facility is closed Permanent closure",
    },
    {
      label: "Converting the activity to month and annual",
      value: "Converting the activity to month and annual",
    },
    { label: "The location is wrong", value: "The location is wrong" },
    {
      label: "There is no way point for the facility and it is not possibles",
      value: "There is no way point for the facility and it is not possibles",
    },
  ];
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
  console.log(data);
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">Field Survey</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mt-1">
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
                  invalid={
                    data.neighborhood === "" && validation ? true : false
                  }
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
                    data.tourism_License_number === "" && validation
                      ? true
                      : false
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
              <Col lg="12">
                <Label>
                  Is the inspector have a relationship the owner of the
                  facility?<strong className="text-danger">*</strong>
                </Label>
                <Select
                  options={[
                    { label: "YES", value: "yes" },
                    { label: "NO", value: "no" },
                  ]}
                  className="react-select"
                  classNamePrefix="select"
                  value={data.inspectorRelation}
                  onChange={(e) => handleChange("inspectorRelation", e)}
                />
                <Validation
                  validation={validation}
                  type="select"
                  value={data.inspectorRelation}
                />
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
                  Get Location
                </Button>
              </Col>
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
            {data.inspectorRelation?.value === "no" && (
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Is the facility working
                    <strong className="text-danger"> *</strong>
                  </Label>
                  <Select
                    options={[
                      { label: "YES", value: "yes" },
                      { label: "NO", value: "no" },
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    value={data?.facility_working}
                    onChange={(e) => handleChange("facility_working", e)}
                  />
                </Col>
              </Row>
            )}
            {data?.facility_working?.value === "no" && (
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Reasons for not working
                    <strong className="text-danger"> *</strong>
                  </Label>
                  <Select
                    options={reasonOpt}
                    className="react-select"
                    classNamePrefix="select"
                    value={data?.reasonOpt}
                    menuPlacement="top"
                    onChange={(e) => handleChange("reasonOpt", e)}
                  />
                </Col>
              </Row>
            )}
            {(data?.reasonOpt?.value ===
              "Converting the activity to month and annual" ||
              data?.reasonOpt?.value ===
                "There is no way point for the facility and it is not possibles" ||
              data?.reasonOpt?.value === "The Facility Does not Exist") && (
              <Row className="mt-1">
                <Col lg="12" className="mb-1">
                  <Label>
                    Picture if the facility not working
                    <strong className="text-danger">*</strong>
                  </Label>
                  <input type="file" id="myFile" name="filename" />
                </Col>
              </Row>
            )}
            {data?.facility_working?.value === "yes" && (
              <Row className="mt-1">
                <Col lg="12" className="mb-1">
                  <label>
                    A picture of the building showing the sign, the commercial
                    name and the main entrance
                    <span>
                      {" "}
                      <strong className="text-danger"> * </strong>
                    </span>{" "}
                  </label>
                  <input type="file" id="myFile" name="filename" />
                </Col>
                <Col lg="12" className="mb-1">
                  <Label>
                    Have you been notified of registration in the calendar
                    tourism licensing platform within the specified period of 4
                    days? <strong className="text-danger"> *</strong>
                  </Label>
                  <Select
                    options={[
                      { label: "YES", value: "yes" },
                      { label: "NO", value: "no" },
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    value={data?.specified_period}
                    onChange={(e) => handleChange("specified_period", e)}
                  />
                </Col>
                {data?.specified_period?.value === "no" && (
                  <Col lg="12" className="mb-1">
                    <Label>
                      Reasons for not notifying the facility of registration in
                      the tourism licensing platform{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input />
                  </Col>
                )}
                <Col lg="12" className="mb-1">
                  <Label>
                    Was the facility provided with the registration link and
                    update method? <strong className="text-danger"> *</strong>
                  </Label>
                  <Select
                    options={[
                      { label: "YES", value: "yes" },
                      { label: "NO", value: "no" },
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    // value={data?.facility_working}
                    // onChange={(e) => handleChange("facility_working", e)}
                  />
                </Col>
                <Col lg="12" className="mb-1">
                  <Label>
                    Is the tourist license valid?
                    <strong className="text-danger"> *</strong>
                  </Label>
                  <Select
                    options={[
                      { label: "YES", value: "yes" },
                      { label: "NO", value: "no" },
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    value={data?.license_valid}
                    onChange={(e) => handleChange("license_valid", e)}
                  />
                </Col>
                {data?.license_valid?.value === "no" && (
                  <Col lg="12" className="mb-1">
                    <Label>
                      Reasons for not renewing the license?
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input />
                  </Col>
                )}
                <Col lg="12 mb-2">
                  <Label>
                    operator name
                    <strong className="text-danger"> *</strong>
                  </Label>
                  <Input />
                </Col>
                <Col lg="12 mb-2">
                  <Label>
                    operator ID
                    <strong className="text-danger"> *</strong>
                  </Label>
                  <Input type="number" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>The trade name according to license</Label>
                  <Input type="text" />
                </Col>
                <Col lg="12 mb-2">
                  <Label>Commercial Registration No.</Label>
                  <Input type="number" />
                </Col>
                <Col lg="12 mb-2">
                  <form>
                    <span>Commercial Registration Image </span>
                    <input type="file" id="myFile" name="filename" />
                  </form>
                </Col>

                <Col lg="12 mb-2">
                  <Label>Facility Mobile number</Label>
                  <Input type="number" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>facility number</Label>
                  <Input type="number" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>facility email</Label>
                  <Input type="email" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>
                    Facility Room Number
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input type="number" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>
                    Tourist license copy?
                    <strong className="text-danger"> * </strong>
                  </Label>
                  <input type="file" id="myFile" name="filename" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>
                    Municipal license picture{" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <input type="file" id="myFile" name="filename" />
                </Col>

                <Col lg="12 mb-2">
                  <Label>
                    the civil defense license picture
                    <strong className="text-danger">* </strong>
                  </Label>
                  <input type="file" id="myFile" name="filename" />
                </Col>

                <Violation handleChange={handleChange} data={data} />
              </Row>
            )}

            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Remarks <strong className="text-danger">*</strong>
                </Label>
                <Input
                  value={data.remarks}
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
            <Row className="mt-1">
              <div className="d-flex">
                <Button color="primary" outline>
                  Submit
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default AddSurvey;
