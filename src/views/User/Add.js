import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select, { components } from "react-select";
import { userCreateObj } from "../Heloper/Object";
import Validation from "../Heloper/Components/FieldValidation";
import { SC } from "../Heloper/Apicall/ServerCall";
import {
  create_user,
  show_user,
  update_user,
} from "../Heloper/Apicall/endPoints";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useParams, Navigate } from "react-router-dom";
import { isUserLoggedIn } from "@utils";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../utility/context/Internationalization";

const Add = () => {
  const [data, setData] = useState(userCreateObj);
  const [validation, setValidation] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  let context = useContext(IntlContext);
  let navigate = useNavigate();
  const params = useParams();
  const ruleOpt = [
    { label: "Admin", value: "admin" },
    { label: "Inspector", value: "inspector" },
  ];
  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, []);
  //get data for update user
  const getData = (id) => {
    SC.getCall(show_user + "/" + id).then((res) => {
      if (res.status === 200 && res.data) {
        let rowData = res.data.data;
        setData({
          name: rowData.name,
          email: rowData.email,
          password: rowData.password,
          family_name: rowData.familyName,
          father_name: rowData.fatherName,
          rule: { label: rowData.type, value: rowData.type },
        });
      }
    });
  };
  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  //submit data for user creation
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: data.name,
      email: data.email,
      password: data.password,
      fatherName: data.father_name,
      familyName: data.family_name,
      type: data.rule?.value || "",
    };
    if (
      postData.name === "" ||
      postData.password === "" ||
      postData.email === "" ||
      postData.familyName === "" ||
      postData.fatherName === "" ||
      postData.type === ""
    ) {
      setValidation(true);
    } else {
      if (params.id) {
        SC.putCall(update_user + "/" + params.id, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/user/list");
            }
          },
          (error) => {
            if (error.response?.status === 422 && error.response?.data) {
              setEmailMsg(error.response.data?.errors?.email);
              setValidation(true);
              // toast.error(error.response.data?.message);
            }
          }
        );
      } else {
        SC.postCall(create_user, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/user/list");
            }
          },
          (error) => {
            if (error.response?.status === 422 && error.response?.data) {
              setEmailMsg(error.response.data?.errors?.email);
              setValidation(true);
              // toast.error(error.response.data?.message);
            }
          }
        );
      }
    }
  };
  console.log(context.locale);
  if (isUserLoggedIn()) {
    return (
      <React.Fragment>
        <Card>
          <CardHeader className="bg-primary">
            <CardTitle className="text-white">
              {params.id ? (
                <FormattedMessage
                  id={"Update user"}
                  defaultMessage="Update user"
                />
              ) : (
                <FormattedMessage
                  id={"Create user"}
                  defaultMessage="Create user"
                />
              )}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                    <FormattedMessage id={"Name"} defaultMessage="Name" />
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder={
                      context.locale === "sa" ? "اسم االمستخدم" : "user name"
                    }
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
                    onChange={(e) =>
                      handleChange("father_name", e.target.value)
                    }
                    invalid={
                      data.father_name === "" && validation ? true : false
                    }
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
                    onChange={(e) =>
                      handleChange("family_name", e.target.value)
                    }
                    invalid={
                      data.family_name === "" && validation ? true : false
                    }
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
                    type="email"
                    value={data.email}
                    disabled={params.id ? true : false}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                      setEmailMsg([]);
                    }}
                    invalid={
                      (data.email === "" || emailMsg?.length > 0) && validation
                        ? true
                        : false
                    }
                  />
                  {emailMsg?.length > 0 ? (
                    <FormFeedback
                      invalid={
                        emailMsg?.length > 0 && validation ? "true" : "false"
                      }
                    >
                      {emailMsg[0]}
                    </FormFeedback>
                  ) : (
                    <Validation
                      type="text"
                      value={data.email}
                      validation={validation}
                    />
                  )}
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
                    onChange={(e) =>
                      handleChange("password", e.target.value?.trim())
                    }
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
                    Role <strong className="text-danger">*</strong>
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
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
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
