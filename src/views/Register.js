// ** React Imports
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub, LogOut } from "react-feather";
// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";
// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import logoPic from "../assets/images/pages/MOT.png";
// ** Styles
import "@styles/react/pages/page-authentication.scss";
import PowerBy from "./Heloper/PowerBy";
const Register = () => {
  // useStateHooks
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    fname: "",
    sirname: "",
    email: "",
    password: "",
  });
  // ** Hooks
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((preVal) => {
      console.log(preVal);
      return {
        ...preVal,
        [id]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data };
    setRecords([...records, newRecord]);
    navigate("/login");
  };
  return (
    <div>
      <div className="app-content content ">
        <div className="content-wrapper ">
          <Row className="auth-inner py-2 content-header ">
            <Col className="mx-auto " lg="4" sm="12">
              <div className="content-header row ">
                <div className="content-body">
                  <div className="auth-wrapper auth-v1 px-2">
                    <div className="auth-inner my-auto">
                      <div className="card-header ">
                        <Col
                          className="px-xl-2 mx-auto"
                          xs="12"
                          sm="8"
                          md="6"
                          lg="12"
                        >
                          <div className="card mb-0 bg-blue">
                            <CardTitle tag="h2" className="fw-bold mb-1 ">
                              <img
                                src={logoPic}
                                className="img-fluid "
                                alt="mot-logo"
                              />
                            </CardTitle>
                            <div className="card mb-0">
                              <div className=" card-body">
                                <CardText>
                                  <h4 className="card-title mb-1">
                                    EOD-MOT 👋
                                  </h4>
                                  Please Register your account and start the
                                  adventure{" "}
                                </CardText>
                                <Form
                                  className="auth-register-form mt-2"
                                  onSubmit={handleSubmit}
                                >
                                  <div className="mb-1">
                                    <Label
                                      className="form-label"
                                      for="username"
                                    >
                                      Name
                                    </Label>
                                    <Input
                                      type="text"
                                      id="username"
                                      value={data.username}
                                      onChange={handleChange}
                                      placeholder="john"
                                      autoFocus
                                      required
                                    />
                                  </div>
                                  <div className="mb-1">
                                    <Label className="form-label" for="fname">
                                      Father Name
                                    </Label>
                                    <Input
                                      type="text"
                                      id="fname"
                                      placeholder="john"
                                      value={data.fname}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className="mb-1">
                                    <Label className="form-label" for="sirname">
                                      Family Name
                                    </Label>
                                    <Input
                                      type="text"
                                      placeholder="john"
                                      id="sirname"
                                      value={data.sirname}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className="mb-1">
                                    <Label className="form-label" for="email">
                                      Email
                                    </Label>
                                    <Input
                                      type="email"
                                      id="email"
                                      placeholder="john@ascend.com.sa"
                                      value={data.email}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className="mb-1">
                                    <Label
                                      className="form-label"
                                      for="password"
                                    >
                                      Password
                                    </Label>
                                    <InputPasswordToggle
                                      className="input-group-merge"
                                      id="password"
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <Button color="success" block>
                                    Register
                                  </Button>
                                </Form>
                                <PowerBy />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Register;
