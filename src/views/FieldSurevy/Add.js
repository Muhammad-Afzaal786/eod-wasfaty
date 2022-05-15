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
  Spinner,
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
  const [loading, setLoading] = useState(true);
  let context = useContext(IntlContext);

  return (
    <React.Fragment>
      <Row>
        <div className="d-flex flex-row">
          <h2 className="stepFromTitle">{context.locale === "sa" ? "نموذج عملية التخلص من الذخائر المتفجرة" : "EOD Operation Form"}</h2>
          {loading && <Spinner color="primary" className="ms-25" />}
        </div>
      </Row>
      <Row>
        <Col lg="12">
          <WizardHorizontal setLoading={setLoading} loading={loading} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddSurvey;
