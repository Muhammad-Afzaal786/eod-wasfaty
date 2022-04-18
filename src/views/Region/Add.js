import React, { useState,useEffect } from "react";
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
import {region_create, 
  region_update,
  region_show,
  region_delete
} from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
const AddRegion = () => {
  const [data, setData] = useState(regionCreateObj);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate()
  const params = useParams();
  
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
      console.log(rowData);
      setData({
        name: rowData.name,
       fname: rowData.fname,
      });
    }
  });
};
  
  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  }
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    const postData ={
      name : data.name_en,
      fname:data.name_ar
    }

  if ( postData.name === "" || postData.fname === " " ) {
      setValidation(true);
    } 
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
    }
    if (params.id) {
      console.log(params.id)
      SC.deleteCall(region_delete + "/" + params.id).then(
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
    else 
    {
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



  return (
    <React.Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <CardTitle className="text-white">{params.id ? "Update Region" : "Create Region"}</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
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
