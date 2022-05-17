import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Ascend from "../assets/images/logo/Footer-2.svg";
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
  Alert,
} from "reactstrap";
import "@styles/react/pages/page-authentication.scss";
import logo from "../assets/images/pages/MOT.png";
import toast from "react-hot-toast";
import { SC } from "./Heloper/Apicall/ServerCall";
import { login, loginUser } from "./Heloper/Apicall/endPoints";
import { X } from "react-feather";
import { errorHandle } from "./Heloper/Action/ErrorHandle";
import PowerBy from "./Heloper/PowerBy";
const Login = () => {
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");
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
    const data = {
      email: formData.email,
      password: formData.password,
    };
    if (data.email === "" || data.password === "") {
      setValidation(true);
    } else {
      SC.postCallLoginAdmin(login, data).then(
        (res) => {
          if (res.status === 200 && res.data) {
            let token = res.data;
            localStorage.setItem("userData", JSON.stringify(token));
            SC.getCall(loginUser).then((res) => {
              if (res.status === 200 && res.data) {
                let userData = res.data.data?.user;
                localStorage.setItem("loginUser", JSON.stringify(userData));
                navigate("/");
              }
            });
          }
        },
        (error) => {
          if (error.response?.data) {
            setError(error.response?.data?.error);
            setValidation(true);
          } else {
            errorHandle(error);
          }
        }
      );
    }
  };

  return (
    <div className="loginMain">
      <Row>
        <Col className="mx-auto " lg="4" sm="12">
          <div className="content-header row ">
            <div className="content-body">
              <div>
                <div>
                  <div className="card-header ">
                    <Col className="px-xl-2 mx-auto " sm="8" md="6" lg="12">
                      <div className="card mb-0 ">
                        <div className="card-header">
                          <CardTitle tag="h2" className="fw-bold mb-1 ">
                            <img
                              src={logo}
                              className="img-fluid "
                              alt="mot-logo"
                            />
                          </CardTitle>
                        </div>
                        <div className="card-body">
                          <Alert color="danger" isOpen={validation}>
                            <div className="alert-body">
                              <X
                                size={15}
                                onClick={() => setValidation(false)}
                                className="curser-pointer"
                              />
                              <span>{error}</span>
                            </div>
                          </Alert>
                          <div className="d-flex flex-column">
                            <h4 className="">Welcome to EOD-MOT 👋</h4>
                            <p className="card-text">
                              Please sign-in to your account and start the
                              adventure
                            </p>
                          </div>
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
                                  <Link to="#">
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
                      <div className="d-flex justify-content-center w-100 mt-1">
                        <PowerBy
                          textClass={"customPowerTitle"}
                          icons={Ascend}
                        />
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
  );
};

export default Login;
