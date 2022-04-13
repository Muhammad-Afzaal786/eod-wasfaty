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
import { regionCreateObj, userCreateObj } from "../Heloper/Object";
import Validation from "../Heloper/Components/FieldValidation";

const AddRegion = () => {
  const [data, setData] = useState(regionCreateObj);
  const [validation, setValidation] = useState(false);

  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">Add Region</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mt-1">
              <Col lg="12">
                <Label>
                  Name(En) <strong className="text-danger">*</strong>
                </Label>
                <Input
                  placeholder="user name"
                  value={data.name_en}
                  onChange={(e) => handleChange("name_en", e.target.value)}
                  invalid={data.name_en === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.name_en}
                  validation={validation}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col lg="12">
                <Label>Name(Ar)</Label>
                <Input
                  placeholder="father name"
                  value={data.name_ar}
                  onChange={(e) => handleChange("name_ar", e.target.value)}
                  invalid={data.name_ar === "" && validation ? true : false}
                />
                <Validation
                  type="text"
                  value={data.name_ar}
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

export default AddRegion;
