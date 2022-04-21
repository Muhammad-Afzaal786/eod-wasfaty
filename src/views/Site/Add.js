import React,{useState} from "react";
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
  import { isUserLoggedIn } from "@utils";




  

 const Add = () => {
    const [data, setData] = useState("");
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();
     const params =useParams();

  // HandleInputValue
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };



  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">
            {params.id ? "Update Site" : "Create Site"}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form >
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                license Number <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="license Number"
                  value={data.licenseNumber}
                  onChange={(e) => handleChange("licenseNumber", e.target.value)}
                  invalid={data.licenseNumber === "" && validation ? true : false}
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
                licience Type <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="licience Type"
                  value={data.licienceType}
                  onChange={(e) => handleChange("licienceType", e.target.value)}
                  invalid={data.licienceType === "" && validation ? true : false}
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
                <Label>
                issue Date <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="issueDate"
                  value={data.issueDate}
                  onChange={(e) => handleChange("issueDate", e.target.value)}
                  invalid={data.issueDate === "" && validation ? true : false}
                />
                <Validation
                  type="date"
                  value={data.issueDate}
                  validation={validation}
                />
              </Col>
            </Row>
          
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                start Date <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="start Date"
                  value={data.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  invalid={data.startDate === "" && validation ? true : false}
                />
                <Validation
                  type="date"
                  value={data.startDate}
                  validation={validation}
                />
              </Col>
            </Row>
            
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                end Date <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="end Date"
                  value={data.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  invalid={data.endDate === "" && validation ? true : false}
                />
                <Validation
                type="date" 
                  value={data.endDate}
                  validation={validation}
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
                  onChange={(e) => handleChange("ownerIdentity", e.target.value)}
                  invalid={data.ownerIdentity === "" && validation ? true : false}
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
                owner Name <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="ownerName"
                  value={data.ownerName}
                  onChange={(e) => handleChange("ownerName", e.target.value)}
                  invalid={data.ownerName === "" && validation ? true : false}
                />
                <Validation
                  type="date"
                  value={data.ownerName}
                  validation={validation}
                />
              </Col>
            </Row>
            
            <Row className="mt-1">
              <Col lg="12">
                <Label>operator Identity</Label>
                <Input
                  placeholder="operator Identity"
                  value={data.operatorIdentity}
                  onChange={(e) => handleChange("operatorIdentity", e.target.value)}
                  invalid={data.operatorIdentity === "" && validation ? true : false}
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
                <Label>operator Name Ar</Label>
                <Input
                  placeholder="operator Name Ar"
                  value={data.operatorNameAr}
                  onChange={(e) => handleChange("operatorNameAr", e.target.value)}
                  invalid={data.operatorNameAr === "" && validation ? true : false}
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
                <Label>operator Name En</Label>
                <Input
                  placeholder="operator Name En"
                  value={data.operatorNameEn}
                  onChange={(e) => handleChange("operatorNameEn", e.target.value)}
                  invalid={data.operatorNameEn === "" && validation ? true : false}
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
                <Label>CR Number</Label>
                <Input
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
                <Label>latitude</Label>
                <Input
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
                <Label>longitude</Label>
                <Input
                  placeholder="CR Number"
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
                <Label>building Number</Label>
                <Input
                  placeholder="building Number"
                  value={data.buildingNumber}
                  onChange={(e) => handleChange("buildingNumber", e.target.value)}
                  invalid={data.buildingNumber === "" && validation ? true : false}
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
                <Label>street Name Ar</Label>
                <Input
                  placeholder="street Name Ar"
                  value={data.streetNameAr}
                  onChange={(e) => handleChange("streetNameAr", e.target.value)}
                  invalid={data.streetNameAr === "" && validation ? true : false}
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
                <Label>district AreaAr</Label>
                <Input
                  placeholder="district Area Ar"
                  value={data.districtAreaAr}
                  onChange={(e) => handleChange("districtAreaAr", e.target.value)}
                  invalid={data.districtAreaAr === "" && validation ? true : false}
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
                <Label>PO Box</Label>
                <Input
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
                <Label>Mobile</Label>
                <Input
                  placeholder="mobile"
                  value={data.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  invalid={data.mobile === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.mobile}
                  validation={validation}
                />
              </Col>
            </Row>
           
            <Row className="mt-1">
              <Col lg="12">
                <Label>phone</Label>
                <Input
                  placeholder="phone"
                  value={data.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  invalid={data.phone === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.phone}
                  validation={validation}
                />
              </Col>
            </Row>
           
            <Row className="mt-1">
              <Col lg="12">
                <Label>email</Label>
                <Input
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
                <Label>facility Type En</Label>
                <Input
                  placeholder="facility Type En"
                  value={data.facilityTypeEn}
                  onChange={(e) => handleChange("facilityTypeEn", e.target.value)}
                  invalid={data.facilityTypeEn === "" && validation ? true : false}
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
                <Label>facility Type Ar</Label>
                <Input
                  placeholder="facility Type Ar"
                  value={data.facilityTypeAr}
                  onChange={(e) => handleChange("facilityTypeAr", e.target.value)}
                  invalid={data.facilityTypeAr === "" && validation ? true : false}
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
                <Label>classification Ar</Label>
                <Input
                  placeholder="classification Ar"
                  value={data.classificationAr}
                  onChange={(e) => handleChange("classificationAr", e.target.value)}
                  invalid={data.classificationAr === "" && validation ? true : false}
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
                <Label>classification En</Label>
                <Input
                  placeholder="classification En"
                  value={data.classificationEn}
                  onChange={(e) => handleChange("classificationEn", e.target.value)}
                  invalid={data.classificationEn === "" && validation ? true : false}
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
                <Label>region Id</Label>
                <Input
                  placeholder="region Id"
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
                <Label>city Id</Label>
                <Input
                  placeholder="city Id"
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
};

export default Add;