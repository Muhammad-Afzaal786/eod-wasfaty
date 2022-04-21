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

export default Add;