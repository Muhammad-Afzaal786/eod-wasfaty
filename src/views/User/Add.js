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
          <CardTitle className="text-white">Field Survey</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mt-1">
              <Col lg="3">
                <Label>
                  Region <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1" ></option>
                  <option value="2">Test_Region</option>
                </select>
              </Col>
              <Col lg="3">
                <Label>
                  City <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>
              <Col lg="3">
                <Label>
                  Neighborhood <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>
              <Col lg="3">
                <Label>
                  Street <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>

              <Col lg="12 mb-2">
                <Label>
                  Tourism License number{" "}
                  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="number" />
              </Col>
              <Col lg="12">
                <Label>
                  Is the inspector have a relationship the owner of the
                  facility?<strong style={{ color: "red" }}> *</strong>
                </Label>

                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>
        
              <Col lg="2 mb-1 mt-1">
                <button
                  className=" btn btn-primary btn-sm waves-effect waves-float waves-light"
                  type="button"
                >
                  Get Location
                </button>
              </Col>
              <Col lg="12 mb-2">
                <Label>
                  Longitude <strong style={{ color: "red" }}> *</strong>
                </Label>
                <input type="number" min="0" class="form-control" name="longitude" readonly="" id="lat" value=""/>
              </Col>
              <Col lg="12 mb-2">
                <Label>
                  Latitude <strong style={{ color: "red" }}> *</strong>
                </Label>
                <input type="number" min="0" class="form-control" name="longitude" readonly="" id="lat" value=""/>
              </Col>
              <Col lg="12 mb-2">
                <Label>
                  Is the facility working{" "}
                  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>

              {/* For Yes Case */}

              <Col lg="12 mb-2">
                <form>
               <label> A picture of the building showing the sign, the commercial
                    name and the main entrance
                  <span>
                   {" "}
                    <strong style={{ color: "red" }}> *  </strong>
                  </span> {" "}</label>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>

              <Col lg="12 mb-2">
                <Label>
                  Have you been notified of registration in the calendar tourism
                  licensing platform within the specified period of 4 days?{" "}
                  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>

              <Col lg="12 mb-2">
                <Label>
                  Was the facility provided with the registration link and
                  update method? <strong style={{ color: "red" }}> * </strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>

              <Col lg="12 mb-2">
                <Label>
                Is the tourist license valid? <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>

              {/* if yes then again Repeater */}
              <Col lg="12 mb-2">
                <Label>Reasons for not renewing the license 
                   <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>

            {/* end Yes */}
            <Col lg="12 mb-2">
                <Label>operator name
                   <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>
            <Col lg="12 mb-2">
                <Label>operator ID 
                   <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>

              <Col lg="12 mb-2">
                <Label>The trade name according to license
                   
                </Label>
                <Input type="text" />
              </Col>
              <Col lg="12 mb-2">
                <Label>Commercial Registration No.
                
                </Label>
                <input type="number" class="form-control" name="comercial_registration" id="comercial_registration_val"/>
              </Col>
              <Col lg="12 mb-2">
                <form>
                  <span>
                  Commercial Registration Image{" "}
            
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>
              
              <Col lg="12 mb-2">
                <Label>Facility Mobile number
       
                </Label>
                <Input type="number" />
              </Col>

              <Col lg="12 mb-2">
                <Label>facility number
            
                </Label>
                <Input type="number" />
              </Col>

              <Col lg="12 mb-2">
                <Label>facility email
                
                </Label>
                <Input type="email" />
              </Col>

              <Col lg="12 mb-2">
                <Label>Facility Room Number 
                <strong style={{ color: "red" }}> * </strong>
                </Label>
                <Input type="number" />
              </Col>

              <Col lg="12 mb-2">
                <form>
                  <span>
                  Tourist license copy?{" "}
                  <strong style={{ color: "red" }}> * </strong>
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>
            
             <Col lg="12 mb-2">
                <form>
                  <span>
                  Municipal license picture {" "}
                  <strong style={{ color: "red" }}> * </strong>
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>
             
              <Col lg="12 mb-2">
                <form>
                  <span>
                  the civil defense license picture {" "}
                  <strong style={{ color: "red" }}> * </strong>
            
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>
              
              <Col lg="12 mb-2">
                <Label>
                Is there a violation  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </Col>
              {/* for yes case If there is violation */}
              <Col lg="12 mb-2">
                <Label>
                violation items  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">practicing the activity before obtaining the licensing</option>
                  <option value="2">did not comply with the license renewal request within 30 days before the expiry of the license</option>
                  <option value="3">closure of the facility temporary closure of the entire facility or part of it without notifying the ministry</option>
                  <option value="4">closure of the facility permanent closure of entire facility and cancellation of the license without notifying the ministry</option>
                  <option value="5">failure to update data of all the tourist accommodation facilities in electronic system for licensing tourist accommodation as soon as it changes</option>
                  <option value="6">Other</option>
                </select>
              </Col>
              <Col lg="3 mb-2">
              <button class="btn btn-outline-primary" type="button" id="addSection">Adding a new violation</button>
              </Col>

              <Col lg="12 mb-2">
                <Label>violation Number 
                <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input type="text" />
              </Col>
              
              <Col lg="12 mb-2">
                <form>
                  <span>
                  Record Picture  {" "}
                  <strong style={{ color: "red" }}> * </strong>
            
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col>
              {/* For No Case */}
              <Col lg="12 mb-2">
                <Label>
                  Reasons for not working
                  <strong style={{ color: "red" }}> *</strong>
                </Label>
                <select class="form-select" aria-label="Default select example">
                  <option selected> Select Options</option>
                  <option value="1">The Facility Does not Exist</option>
                  <option value="2">The Facility is closed Permanent closure</option>
                  <option value="3">Converting the activity to month and annual</option>
                  <option value="4">The location is wrong</option>
                  <option value="5"> There is no way point for the facility and it is not
                    possibles</option>
                </select>
              </Col>
             {/* if facility not  */}

              <Col lg="12 mb-2">
                <form>
                  <span>
                    Picture if the facility not working{" "}
                    <strong style={{ color: "red" }}> * </strong>
                  </span>
                  <input type="file" id="myFile" name="filename" />
                </form>
              </Col> 
              <Col lg="12 mb-2">
                <Label>
                  Remarks <strong style={{ color: "red" }}> *</strong>
                </Label>
                <Input />
              </Col>
              <Col lg="2" >
                <button
                  type="submit"
                  class="btn btn-outline-primary waves-effect"
                >
                  Submit
                </button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Add;
