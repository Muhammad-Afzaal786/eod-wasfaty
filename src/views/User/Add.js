import React, { useState } from "react";
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
import { userCreateObj } from "../Heloper/Object";
import Validation from "../Heloper/Components/FieldValidation";

const Add = () => {
  const [data, setData] = useState(userCreateObj);
  const [validation, setValidation] = useState(false);

  const ruleOpt = [
    { label: "Admin", value: "admin" },
    { label: "Inspector", value: "inspector" },
  ];
  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">Field Survey</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Name <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="user name"
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  invalid={data.name === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.name}
                  validation={validation}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Father Name <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="father name"
                  value={data.father_name}
                  onChange={(e) => handleChange("father_name", e.target.value)}
                  invalid={data.father_name === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.father_name}
                  validation={validation}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Family Name <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="family name"
                  value={data.family_name}
                  onChange={(e) => handleChange("family_name", e.target.value)}
                  invalid={data.family_name === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.family_name}
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
                  placeholder="user email"
                  // type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  invalid={data.email === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.email}
                  validation={validation}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Password <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="user Password"
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  invalid={data.password === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.password}
                  validation={validation}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Rule <strong className="text-danger">*</strong>
                </Label>
                <Select
                  options={ruleOpt}
                  className="react-select"
                  classNamePrefix="select"
                  value={data.rule}
                  onChange={(e) => handleChange("rule", e)}
                />
                <Validation
                  type="select"
                  value={data.rule}
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
