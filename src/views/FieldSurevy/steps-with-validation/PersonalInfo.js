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
import Validation from "../../Heloper/Components/FieldValidation";

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
  dataSubmit,
}) => {
  // ** Hooks
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    if (data.facility_working) {
      if (
        data.building_showing_the_sign?.length === 0 ||
        data.operator_name === "" ||
        data.registration_image?.length === 0 ||
        data.facility_room_number === "" ||
        data.Tourist_license_copy?.length === 0 ||
        data.Municipal_license_picture?.length === 0 ||
        data.the_civil_defense_license_picture?.length === 0
      ) {
        setValidation(true);
      } else if (
        !data.specified_period &&
        data.Reasons_for_not_notifying === ""
      ) {
        setValidation(true);
      } else if (!data.license_valid && data.not_renewing_the_license === "") {
        setValidation(true);
      } else {
        stepper.next();
        setValidation(false);
      }
    } else {
      if (data.reasonOpt?.length === 0) setValidation(true);
      else if (
        data?.reasonOpt?.value ===
          "Converting the activity to month and annual" ||
        data?.reasonOpt?.value ===
          "There is no way point for the facility and it is not possibles" ||
        data?.reasonOpt?.value === "The Facility Does not Exist"
      ) {
        if (data.facility_not_working_file?.length === 0) setValidation(true);
        else dataSubmit([]);
      } else {
        stepper.next();
        setValidation(false);
      }
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
            <Validation
              type="select"
              value={data?.reasonOpt}
              validation={validation}
            />
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
              <FileUploader
                handleChange={handleChange}
                name="facility_not_working_file"
                value={data.facility_not_working_file}
              />
              <Validation
                type="select"
                value={data.facility_not_working_file}
                validation={validation}
              />
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
              <FileUploader
                handleChange={handleChange}
                name="building_showing_the_sign"
              />
              <Validation
                validation={validation}
                value={data.building_showing_the_sign}
                type="select"
              />
            </Col>
            <div className="d-flex justify-content-between mb-1">
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
                  tourism licensing platform
                  <strong className="text-danger">*</strong>
                </Label>
                <Input
                  value={data.Reasons_for_not_notifying}
                  onChange={(e) =>
                    handleChange("Reasons_for_not_notifying", e.target.value)
                  }
                  invalid={
                    data.Reasons_for_not_notifying === "" && validation
                      ? true
                      : false
                  }
                />
                <Validation
                  type="text"
                  value={data.Reasons_for_not_notifying}
                  validation={validation}
                />
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
                  invalid={
                    data.not_renewing_the_license === "" && validation
                      ? true
                      : false
                  }
                />
                <Validation
                  type="text"
                  value={data.not_renewing_the_license}
                  validation={validation}
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
                invalid={data.operator_name === "" && validation ? true : false}
              />
              <Validation
                type="text"
                value={data.operator_name}
                validation={validation}
              />
            </Col>
            <Col lg="12 mb-2">
              <Label>operator ID</Label>
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
              <Label className="mb-50">
                Commercial Registration Image{" "}
                <strong className="text-danger"> *</strong>{" "}
              </Label>
              <FileUploader
                handleChange={handleChange}
                name="registration_image"
              />
              <Validation
                validation={validation}
                value={data.registration_image}
                type="select"
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
                invalid={
                  data.facility_room_number === "" && validation ? true : false
                }
              />
              <Validation
                type="text"
                value={data.facility_room_number}
                validation={validation}
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                Tourist license copy?
                <strong className="text-danger"> * </strong>
              </Label>
              <FileUploader
                handleChange={handleChange}
                name="Tourist_license_copy"
              />
              <Validation
                type="select"
                value={data.Tourist_license_copy}
                validation={validation}
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                Municipal license picture
                <strong className="text-danger">*</strong>
              </Label>
              <FileUploader
                handleChange={handleChange}
                name={"Municipal_license_picture"}
              />
              <Validation
                value={data.Municipal_license_picture}
                type="select"
                validation={validation}
              />
            </Col>

            <Col lg="12 mb-2">
              <Label>
                the civil defense license picture
                <strong className="text-danger">* </strong>
              </Label>
              <FileUploader
                handleChange={handleChange}
                name={"the_civil_defense_license_picture"}
              />
              <Validation
                value={data.the_civil_defense_license_picture}
                type="select"
                validation={validation}
              />
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
            <span className="align-middle d-sm-inline-block d-none">
              {data.facility_working ? "Save & Continue" : "Submit"}
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

export default PersonalInfo;
