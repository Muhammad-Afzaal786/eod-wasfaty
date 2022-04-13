import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from "@components/input-password-toggle";
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
import "@styles/react/pages/page-authentication.scss";
import logo from "../assets/images/pages/MOT.png";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setformData((preVal) => {
      return {
        ...preVal,
        [id]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="app-content content ">
      <div className="content-wrapper">
        <Row className="auth-inner py-2 content-header  ">
          <Col className="mx-auto " lg="4" sm="12">
            <div className="content-header row ">
              <div className="content-body">
                <div className="auth-wrapper auth-v1 px-2">
                  <div className="auth-inner my-auto">
                    <div className="card-header ">
                      <Col className="px-xl-2 mx-auto " sm="8" md="6" lg="12">
                        <div className="card mb-0 bg-blue">
                          <div className="card-header">
                            <CardTitle tag="h2" className="fw-bold mb-1 ">
                              <img src={logo} className="img-fluid " alt="mot-logo" />
                            </CardTitle>
                          </div>
                          <div className="card-body">
                            <CardText>
                              <h4 className="card-title mb-1">Welcome to EOD-MOT 👋</h4>
                              <p className="card-text">
                                Please sign-in to your account and start the adventure
                              </p>{" "}
                            </CardText>
                            <div className="">
                              <Form
                                className="auth-login-form mt-2 "
                                onSubmit={handleSubmit}
                              >
                                <div className="mb-1">
                                  <Label className="form-label" for="email">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                    value={formData.email}
                                  />
                                </div>
                                <div className="mb-1">
                                  <div className="d-flex justify-content-between">
                                    <Label className="form-label" for="password">
                                      Password
                                    </Label>
                                    <Link to="/forgot-password">
                                      <small>Forgot Password?</small>
                                    </Link>
                                  </div>
                                  <InputPasswordToggle
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="input-group-merge"
                                    id="password"
                                    required
                                  />
                                </div>
                                <div className="form-check mb-1">
                                  <Input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value={formData.remember}
                                  />
                                  <Label className="form-check-label">
                                    Remember Me
                                  </Label>
                                </div>
                                <Button color="primary" block>
                                  Sign in
                                </Button>
                                <Button
                                  tag={Link}
                                  to="/register"
                                  color="success"
                                  block
                                  className="mt-1"
                                >
                                  Register
                                </Button>
                              </Form>
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
  );
};

export default Login;
