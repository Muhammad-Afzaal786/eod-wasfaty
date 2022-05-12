import React, { useContext,useState, useEffect } from "react";
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
import {
  region_create,
  region_update,
  region_show,
  region_delete,
} from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { isUserLoggedIn } from "@utils";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../utility/context/Internationalization";

const AddRegion = () => {
  const [data, setData] = useState(regionCreateObj);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let context = useContext(IntlContext);


  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, []);

  //get data for update user
  const getData = (id) => {
    SC.getCall(region_show + "/" + id).then((res) => {
      if (res.status === 200 && res.data) {
        let rowData = res.data.data;
        setData({
          name_en: rowData.name,
          name_ar: rowData.name_ar || "",
        });
      }
    });
  };

  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      name: data.name_en,
      name_ar: data.name_ar,
    };

    if (postData.name === "" || postData.name_ar === "") {
      setValidation(true);
    } else {
      if (params.id) {
        SC.putCall(region_update + "/" + params.id, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/region/list");
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
        SC.postCall(region_create, postData).then(
          (res) => {
            if (res.status === 200 && res.data) {
              toast.success(res.data?.data);
              navigate("/region/list");
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
            {params.id ? (
                <FormattedMessage
                  id={"Update Region"}
                  defaultMessage="Update Region"
                />
              ) : (
                <FormattedMessage
                  id={"Create Region"}
                  defaultMessage="Create Region"
                />
              )}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row className="mt-1">
                <Col lg="12">
                  <Label>
                  <FormattedMessage id={"Name(En)"} defaultMessage="Name(En)" />
                   <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder={
                      context.locale === "sa" ? "الاسم (بالإنجليزية)" : "name (En)"
                    }
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
                  <Label>
                  <FormattedMessage id={"Name(Ar)"} defaultMessage="Name(Ar)" />
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    placeholder={
                      context.locale === "sa" ? "الاسم (بالعربية)" : "name (Ar)"
                    }
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
  } else {
    return <Navigate to="/login" />;
  }
};

export default AddRegion;
