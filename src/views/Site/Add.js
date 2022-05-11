import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import Validation from "../Heloper/Components/FieldValidation";
import { SC } from "../Heloper/Apicall/ServerCall";
import toast from "react-hot-toast";
import { siteCreateObj } from "../Heloper/Object";
import Flatpickr from "react-flatpickr";
// import "../../@core/scss/react/libs/flatpickr/flatpickr.scss";
import { isUserLoggedIn } from "@utils";
import {
  site_show,
  site_update,
  site_create,
} from "../Heloper/Apicall/endPoints";
import { DateFormat } from "../Heloper/DateFormat";
const Add = () => {
  const [data, setData] = useState(siteCreateObj);
  const [validation, setValidation] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, []);
  //get data for update site
  const getData = (id) => {
    SC.getCall(site_show + "/" + id).then((res) => {
      if (res.status === 200 && res.data) {
        let rowData = res.data?.data[0];
        setData({
          licenseNumber: rowData.licenseNumber,
          licienceType: rowData.licienceType,
          issueDate: rowData.issueDate,
          startDate: rowData.startDate,
          endDate: rowData.endDate,
          ownerIdentity: rowData.ownerIdentity,
          ownerName: rowData.ownerName,
          operatorIdentity: rowData.operatorIdentity,
          operatorNameAr: rowData.operatorNameAr,
          operatorNameEn: rowData.operatorNameEn,
          CRNumber: rowData.CRNumber,
          latitude: rowData.latitude,
          longitude: rowData.longitude,
          buildingNumber: rowData.buildingNumber,
          streetNameAr: rowData.streetNameAr,
          districtAreaAr: rowData.districtAreaAr,
          POBox: rowData.POBox,
          mobile: rowData.mobile,
          phone: rowData.phone,
          email: rowData.email,
          facilityTypeEn: rowData.facilityTypeEn,
          facilityTypeAr: rowData.facilityTypeAr,
          classificationAr: rowData.classificationAr,
          classificationEn: rowData.classificationEn,
          regionId: rowData.regionId,
          cityId: rowData.cityId,
        });
      }
    });
  };

  // HandleInputValue
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  // Form Submit Change
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      licenseNumber: data.licenseNumber,
      licienceType: data.licienceType,
      issueDate: DateFormat(data.issueDate),
      startDate: DateFormat(data.startDate),
      endDate: DateFormat(data.endDate),
      ownerIdentity: data.ownerIdentity,
      ownerName: data.ownerName,
      operatorIdentity: data.operatorIdentity,
      operatorNameAr: data.operatorNameAr,
      operatorNameEn: data.operatorNameEn,
      CRNumber: data.CRNumber,
      latitude: data.latitude,
      longitude: data.longitude,
      buildingNumber: data.buildingNumber,
      streetNameAr: data.streetNameAr,
      districtAreaAr: data.districtAreaAr,
      POBox: data.POBox,
      mobile: data.mobile,
      phone: data.phone,
      email: data.email,
      facilityTypeEn: data.facilityTypeEn,
      facilityTypeAr: data.facilityTypeAr,
      classificationAr: data.classificationAr,
      classificationEn: data.classificationEn,
      regionId: data.regionId,
      cityId: data.cityId,
    };

    if (
      postData.licenseNumber === "" ||
      postData.licienceType === "" ||
      postData.issueDate === "" ||
      postData.startDate === "" ||
      postData.endDate === "" ||
      postData.ownerIdentity === "" ||
      postData.ownerName === "" ||
      postData.operatorIdentity === "" ||
      postData.operatorNameAr === "" ||
      postData.operatorNameEn === "" ||
      postData.CRNumber === "" ||
      postData.latitude === "" ||
      postData.longitude === "" ||
      postData.buildingNumber === "" ||
      postData.streetNameAr === "" ||
      postData.districtAreaAr === "" ||
      postData.POBox === "" ||
      postData.mobile === "" ||
      postData.phone === "" ||
      postData.email === "" ||
      postData.facilityTypeEn === "" ||
      postData.facilityTypeAr === "" ||
      postData.classificationAr === "" ||
      postData.classificationEn === "" ||
      postData.regionId === "" ||
      postData.cityId === ""
    ) {
      setValidation(true);
    } else {
      if (params.id) {
        SC.putCall(site_update + "/" + params.id, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/site/list");
            }
          },
          (error) => {
            if (error.response?.status === 422 && error.response?.data) {
              setEmailMsg(error.response.data?.errors?.email);
              setValidation(true);
              toast.error(error.response.data?.message);
            }
          }
        );
      } else {
        SC.postCall(site_create, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/site/list");
            }
          },
          (error) => {
            if (error.response?.status === 422 && error.response?.data) {
              setEmailMsg(error.response.data?.errors?.email);
              setValidation(true);
              toast.error(error.response.data?.message);
            }
          }
        );
      }
    }
  };

  if (isUserLoggedIn) {
    return (
      <React.Fragment>
        <Card>
          <CardHeader className="bg-primary">
            <CardTitle className="text-white">
              {params.id ? "Update Site" : "Create Site"}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    License Number <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="license Number"
                    type="number"
                    value={data.licenseNumber}
                    onChange={(e) =>
                      handleChange("licenseNumber", e.target.value)
                    }
                    invalid={
                      data.licenseNumber === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="number"
                    value={data.licenseNumber}
                    validation={validation}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Licience Type <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="licience Type"
                    value={data.licienceType}
                    onChange={(e) =>
                      handleChange("licienceType", e.target.value)
                    }
                    invalid={
                      data.licienceType === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="number"
                    value={data.licienceType}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label className="d-block">
                    Issue Date <strong className="text-danger ">*</strong>
                  </Label>

                  <Flatpickr
                    placeholder="Year-month-day "
                    className="form-control"
                    options={{
                      dateFormat: "Y-m-d",
                    }}
                    value={data.issueDate}
                    onChange={(e) => handleChange("issueDate", e[0])}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Start Date <strong className="text-danger">*</strong>
                  </Label>

                  <Flatpickr
                    className="form-control"
                    placeholder="Year-month-day"
                    options={{
                      dateFormat: "Y-m-d",
                    }}
                    value={data.startDate}
                    onChange={(e) => handleChange("startDate", e[0])}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    End Date <strong className="text-danger">*</strong>
                  </Label>
                  <Flatpickr
                    className="form-control"
                    placeholder="Year-month-day"
                    options={{
                      dateFormat: "Y-m-d",
                    }}
                    value={data.endDate}
                    onChange={(e) => handleChange("endDate", e[0])}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Owner Identity <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="Owner Identity"
                    value={data.ownerIdentity}
                    onChange={(e) =>
                      handleChange("ownerIdentity", e.target.value)
                    }
                    invalid={
                      data.ownerIdentity === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.ownerIdentity}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Owner Name <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="ownerName"
                    value={data.ownerName}
                    onChange={(e) => handleChange("ownerName", e.target.value)}
                    invalid={data.ownerName === "" && validation ? true : false}
                  />
                  <Validation
                    type="text"
                    value={data.ownerName}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    operator Identity<strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="operator Identity"
                    value={data.operatorIdentity}
                    onChange={(e) =>
                      handleChange("operatorIdentity", e.target.value)
                    }
                    invalid={
                      data.operatorIdentity === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.operatorIdentity}
                    validation={validation}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Operator Name (Ar){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="operator Name Ar"
                    value={data.operatorNameAr}
                    onChange={(e) =>
                      handleChange("operatorNameAr", e.target.value)
                    }
                    invalid={
                      data.operatorNameAr === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.operatorNameAr}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Operator Name (En){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="operator Name En"
                    value={data.operatorNameEn}
                    onChange={(e) =>
                      handleChange("operatorNameEn", e.target.value)
                    }
                    invalid={
                      data.operatorNameEn === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.operatorNameEn}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    CR Number <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="CR Number"
                    value={data.CRNumber}
                    onChange={(e) => handleChange("CRNumber", e.target.value)}
                    invalid={data.CRNumber === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.CRNumber}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Latitude <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="latitude"
                    value={data.latitude}
                    onChange={(e) => handleChange("latitude", e.target.value)}
                    invalid={data.latitude === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.latitude}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Longitude <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="longitude"
                    value={data.longitude}
                    onChange={(e) => handleChange("longitude", e.target.value)}
                    invalid={data.longitude === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.longitude}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Building Number <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="building Number"
                    value={data.buildingNumber}
                    onChange={(e) =>
                      handleChange("buildingNumber", e.target.value)
                    }
                    invalid={
                      data.buildingNumber === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="number"
                    value={data.buildingNumber}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Street Name (Ar) <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="street Name Ar"
                    value={data.streetNameAr}
                    onChange={(e) =>
                      handleChange("streetNameAr", e.target.value)
                    }
                    invalid={
                      data.streetNameAr === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.streetNameAr}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    District Area (Ar){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="district Area Ar"
                    value={data.districtAreaAr}
                    onChange={(e) =>
                      handleChange("districtAreaAr", e.target.value)
                    }
                    invalid={
                      data.districtAreaAr === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.districtAreaAr}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    PO Box <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="PO Box"
                    value={data.POBox}
                    onChange={(e) => handleChange("POBox", e.target.value)}
                    invalid={data.POBox === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.POBox}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Mobile <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="mobile"
                    value={data.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    invalid={data.mobile === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.mobile}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Phone <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="phone"
                    value={data.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    invalid={data.phone === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.phone}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Email <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="email"
                    placeholder="email"
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    invalid={data.email === "" && validation ? true : false}
                  />
                  <Validation
                    type="email"
                    value={data.email}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Facility Type (En){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="facility Type En"
                    value={data.facilityTypeEn}
                    onChange={(e) =>
                      handleChange("facilityTypeEn", e.target.value)
                    }
                    invalid={
                      data.facilityTypeEn === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.facilityTypeEn}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Facility Type (Ar){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="facility Type Ar"
                    value={data.facilityTypeAr}
                    onChange={(e) =>
                      handleChange("facilityTypeAr", e.target.value)
                    }
                    invalid={
                      data.facilityTypeAr === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.facilityTypeAr}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Classification (Ar){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="classification Ar"
                    value={data.classificationAr}
                    onChange={(e) =>
                      handleChange("classificationAr", e.target.value)
                    }
                    invalid={
                      data.classificationAr === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.classificationAr}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Classification (En){" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder="classification En"
                    value={data.classificationEn}
                    onChange={(e) =>
                      handleChange("classificationEn", e.target.value)
                    }
                    invalid={
                      data.classificationEn === "" && validation ? true : false
                    }
                  />
                  <Validation
                    type="text"
                    value={data.classificationEn}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    Region <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="region"
                    value={data.regionId}
                    onChange={(e) => handleChange("regionId", e.target.value)}
                    invalid={data.regionId === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.regionId}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    City<strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    type="number"
                    placeholder="city"
                    value={data.cityId}
                    onChange={(e) => handleChange("cityId", e.target.value)}
                    invalid={data.cityId === "" && validation ? true : false}
                  />
                  <Validation
                    type="number"
                    value={data.cityId}
                    validation={validation}
                  />
                </Col>
              </Row>

              <Row>
                <div className="mt-1">
                  <Button color="primary">Submit</Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default Add;
