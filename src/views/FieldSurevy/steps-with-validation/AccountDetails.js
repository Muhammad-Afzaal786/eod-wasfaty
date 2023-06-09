// ** React Imports
import { useContext, Fragment, useEffect, useState } from "react";

// ** Utils
import { isObjEmpty } from "@utils";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../../utility/context/Internationalization";
// ** Third Party Components
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "react-feather";
import { yupResolver } from "@hookform/resolvers/yup";
// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from "reactstrap";
import Select, { components } from "react-select";
import { fieldSurveyObj } from "../../Heloper/Object";
import Validation from "../../Heloper/Components/FieldValidation";
import { SC } from "../../Heloper/Apicall/ServerCall";
import {
  get_form_city,
  get_form_region,
  get_form_siteData,
} from "../../Heloper/Apicall/endPoints";
import { errorHandle } from "../../Heloper/Action/ErrorHandle";
import { useNavigate } from "react-router-dom";
import Selector from "../../Heloper/Components/Selector";

const AccountDetails = ({
  stepper,
  handleChange,
  data,
  validation,
  setData,
  setValidation,
  dataSubmit,
  setLoading,
  loading,
}) => {
  // ** Hooks
  const navigate = useNavigate();
  const [region, setRegion] = useState([]);
  const [city, setCity] = useState([]);
  const [site, setSite] = useState([]);
  let context = useContext(IntlContext);

  useEffect(() => {
    getSite();
  }, []);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    if (
      // data.region?.length === 0 ||
      data.location.latitude === "" ||
      data.tourism_License_number?.length === 0 ||
      data.inspectorRelation?.length === 0 ||
      data.location.longitude === "" ||
      data.remarks === ""
    ) {
      setValidation(true);
    } else {
      if (data.inspectorRelation.value === "no") {
        stepper.next();
        setValidation(false);
      } else dataSubmit([]);
    }
  };
  //get region from api
  const getRegion = () => {
    SC.getCall(get_form_region).then(
      (res) => {
        if (res.status === 200 && res.data) {
          let rowData = res.data.data;
          setRegion(rowData);
        }
      },
      (error) => {
        errorHandle(error, navigate);
      }
    );
  };
  //get city from api
  const getCity = () => {
    SC.getCall(get_form_city).then(
      (res) => {
        if (res.status === 200 && res.data) {
          let rowData = res.data.data;
          setCity(rowData);
        }
      },
      (error) => {
        errorHandle(error, navigate);
      }
    );
  };
  //get city from api
  const getSite = () => {
    SC.getCall(get_form_siteData).then(
      (res) => {
        if (res.status === 200 && res.data) {
          let rowData = res.data.data;
          setSite(rowData);
          setLoading(false);
        }
      },
      (error) => {
        errorHandle(error, navigate);
      }
    );
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
  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">loading...</span>
      </components.NoOptionsMessage>
    );
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* <Col lg="4">
            <Label>
              Region <strong className="text-danger">*</strong>
            </Label>
            <Select
              options={region}
              className="react-select"
              classNamePrefix="select"
              getOptionLabel={(Opt) => Opt.name}
              getOptionValue={(Opt) => Opt._id}
              value={data.region}
              onChange={(e) => handleChange("region", e)}
            />
            <Validation
              validation={validation}
              type="select"
              value={data.region}
            />
          </Col>
          <Col lg="4">
            <Label>
              City <strong className="text-danger">*</strong>
            </Label>
            <Select
              options={city}
              className="react-select"
              classNamePrefix="select"
              getOptionLabel={(Opt) => Opt.name}
              getOptionValue={(Opt) => Opt._id}
              value={data.city}
              onChange={(e) => handleChange("city", e)}
            />
            <Validation
              validation={validation}
              type="select"
              value={data.city}
            />
          </Col> */}
          <Col lg="12">
            <Label>
              <FormattedMessage
                id={"Tourism License number"}
                defaultMessage="Tourism License number"
              />

              <strong className="text-danger">*</strong>
            </Label>
            <Select
              placeholder={context.locale === "sa" ? "تحديد" : "select"}
              options={site}
              className="react-select"
              classNamePrefix="select"
              components={{ NoOptionsMessage }}
              getOptionLabel={(Opt) => Opt.licenseNumber}
              getOptionValue={(Opt) => Opt._id}
              value={data.tourism_License_number}
              onChange={(e) => handleChange("tourism_License_number", e)}
            />
            <Validation
              validation={validation}
              type="select"
              value={data.tourism_License_number}
            />
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg="12">
            <span>
              <FormattedMessage
                id={
                  "Is the inspector have a relationship the owner of the facility?"
                }
                defaultMessage="Is the inspector have a relationship the owner of the facility?"
              />

              <strong className="text-danger">*</strong>
            </span>
          </Col>

          <Col lg="12">
            <Selector
              placeholder={context.locale === "sa" ? "تحديد" : "select"}
              handleChange={handleChange}
              name="inspectorRelation"
              value={data.inspectorRelation}
              validation={validation}
            />
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg="12">
            <Label>
              <FormattedMessage id={"Longitude"} defaultMessage="Longitude" />

              <strong className="text-danger">*</strong>
            </Label>
            <Input
              type="number"
              value={data.location.longitude}
              disabled
              invalid={
                data.location.longitude === "" && validation ? true : false
              }
            />
            <Validation
              type="text"
              value={data.location.longitude}
              validation={validation}
            />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col lg="12">
            <Label>
              <FormattedMessage id={"Latitude"} defaultMessage="Latitude" />

              <strong className="text-danger">*</strong>
            </Label>
            <Input
              type="number"
              value={data.location.latitude}
              disabled
              invalid={
                data.location.latitude === "" && validation ? true : false
              }
            />
            <Validation
              type="text"
              value={data.location.latitude}
              validation={validation}
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
              {context.locale === "sa"
                ? "احصل على إحداثيات"
                : "Get Coordinates"}
            </Button>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col lg="12">
            <Label>
              <FormattedMessage id={"Remarks"} defaultMessage="Remarks" />

              <strong className="text-danger">*</strong>
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
              {data.inspectorRelation.value === "no"
                ? context.locale === "sa"
                  ? "حفظ ومتابعة"
                  : "Save & Continue"
                : context.locale === "sa"
                ? "إرسال"
                : "Submit"}
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
