// ** React Imports
import { Fragment } from "react";

// ** Third Party Components
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import SwitchIcons from "../../Heloper/Components/Switcher";
import FileUploader from "../../Heloper/Components/FileUploader";

const defaultValues = {
  lastName: "",
  firstName: "",
};

const PersonalInfo = ({
  stepper,
  handleChange,
  data,
  validation,
  setData,
  setValidation,
}) => {
  // ** Hooks
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data) {
      stepper.next();
    }
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
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!data.inspectorRelation && (
          <Row className="mt-1">
            <div className="d-flex justify-content-between">
              <Label className="switchLabel">
                Is the facility working
                <strong className="text-danger"> *</strong>
              </Label>

              <SwitchIcons
                name="facility_working"
                handleChange={handleChange}
                value={data.facility_working}
              />
            </div>
          </Row>
        )}
        {!data?.facility_working && (
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
              <Label className="mb-50">
                Picture if the facility not working
                <strong className="text-danger">*</strong>
              </Label>
              <FileUploader handleChange={handleChange} />
            </Col>
          </Row>
        )}
        {data.facility_working && (
          <Row className="mt-1">
            <Col lg="12" className="mb-1">
              <Label className="mb-50">
                A picture of the building showing the sign, the commercial name
                and the main entrance
                <strong className="text-danger"> * </strong>
              </Label>
              <FileUploader handleChange={handleChange} />
            </Col>
            <div className="d-flex justify-content-between">
              <Label className="switchLabel">
                Have you been notified of registration in the calendar tourism
                licensing platform within the specified period of 4 days?{" "}
                <strong className="text-danger"> *</strong>
              </Label>
              <SwitchIcons
                value={data?.specified_period}
                name="specified_period"
                handleChange={handleChange}
              />
            </div>
            {!data?.specified_period && (
              <Col lg="12" className="mb-1">
                <Label>
                  Reasons for not notifying the facility of registration in the
                  tourism licensing platform{" "}
                  <strong className="text-danger">*</strong>
                </Label>
                <Input />
              </Col>
            )}
            <div className="d-flex justify-content-between mb-1">
              <Label className="switchLabel">
                Was the facility provided with the registration link and update
                method? <strong className="text-danger"> *</strong>
              </Label>
              <SwitchIcons
                value={data?.update_method}
                name="update_method"
                handleChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-between">
              <Label className="switchLabel">
                Is the tourist license valid?{" "}
                <strong className="text-danger"> *</strong>
              </Label>
              <SwitchIcons
                value={data?.license_valid}
                name="license_valid"
                handleChange={handleChange}
              />
            </div>
            {!data?.license_valid && (
              <Col lg="12" className="mb-1">
                <Label>
                  Reasons for not renewing the license?
                  <strong className="text-danger">*</strong>
                </Label>
                <Input
                  value={data.not_renewing_the_license}
                  onChange={(e) =>
                    handleChange("not_renewing_the_license", e.target.value)
                  }
                />
              </Col>
            )}
            <Col lg="12 mb-2">
              <Label>
                operator name
                <strong className="text-danger"> *</strong>
              </Label>
              <Input
                value={data.operator_name}
                onChange={(e) => handleChange("operator_name", e.target.value)}
              />
            </Col>
            <Col lg="12 mb-2">
              <Label>
                operator ID
                <strong className="text-danger"> *</strong>
              </Label>
              <Input
                type="number"
                value={data.operator_id}
                onChange={(e) => handleChange("operator_id", e.target.value)}
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>The trade name according to license</Label>
              <Input
                type="text"
                value={data.trade_name}
                onChange={(e) => handleChange("trade_name", e.target.value)}
              />
            </Col>
            <Col lg="12 mb-2">
              <Label>Commercial Registration No.</Label>
              <Input
                type="number"
                value={data.registration_no}
                onChange={(e) =>
                  handleChange("registration_no", e.target.value)
                }
              />
            </Col>
            <Col lg="12 mb-1">
              <Label className="mb-50">Commercial Registration Image </Label>
              <FileUploader
                handleChange={handleChange}
                name="registration_image"
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>Facility Mobile number</Label>
              <Input
                type="number"
                value={data.Facility_Mobile_number}
                onChange={(e) =>
                  handleChange("Facility_Mobile_number", e.target.value)
                }
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>Facility number</Label>
              <Input
                type="number"
                value={data.facility_number}
                onChange={(e) =>
                  handleChange("facility_number", e.target.value)
                }
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>facility email</Label>
              <Input
                type="email"
                value={data.facility_email}
                onChange={(e) => handleChange("facility_email", e.target.value)}
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                Facility Room Number
                <strong className="text-danger">*</strong>
              </Label>
              <Input
                type="number"
                value={data.facility_room_number}
                onChange={(e) =>
                  handleChange("facility_room_number", e.target.value)
                }
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                Tourist license copy?
                <strong className="text-danger"> * </strong>
              </Label>
              <FileUploader handleChange={handleChange} />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                Municipal license picture
                <strong className="text-danger">*</strong>
              </Label>
              <FileUploader handleChange={handleChange} />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                the civil defense license picture
                <strong className="text-danger">* </strong>
              </Label>
              <FileUploader handleChange={handleChange} />
            </Col>
          </Row>
        )}

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
          <Button type="submit" color="primary" className="btn-next">
            <span className="align-middle d-sm-inline-block d-none">Next</span>
            <ArrowRight
              size={14}
              className="align-middle ms-sm-25 ms-0"
            ></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default PersonalInfo;
