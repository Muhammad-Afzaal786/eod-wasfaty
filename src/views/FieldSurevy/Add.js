import React, { useContext,useEffect, useState } from "react";
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
import {
  fieldSurveyObj,
  regionCreateObj,
  userCreateObj,
} from "../Heloper/Object";
import Validation from "../Heloper/Components/FieldValidation";
import Violation from "./Violation";
import WizardHorizontal from "./Wizard";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../utility/context/Internationalization";
const AddSurvey = () => {
  let context = useContext(IntlContext);
  console.log(context)
  return (
    <React.Fragment>
      <Row>
        <h2 className="stepFromTitle">{context.locale === "sa" ? "نموذج عملية التخلص من الذخائر المتفجرة" : "EOD Operation Form" } </h2>
      </Row>
      <Row>
        <Col lg="12">
          <WizardHorizontal />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddSurvey;
