import React from "react";
import {
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

const Add = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">Add user</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mt-1">
              <Col lg="12">
                <Label>Name</Label>
                <Input placeholder="user name" />
              </Col>

              <Col lg="12">
                <Label>Father Name</Label>
                <Input placeholder="father name" />
              </Col>
              <Col lg="12">
                <Label>Family Name</Label>
                <Input placeholder="family name" />
              </Col>
              <Col lg="12">
                <Label>Email</Label>
                <Input placeholder="user email" />
              </Col>
              <Col lg="12">
                <Label>Password</Label>
                <Input placeholder="user Password" />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Add;
