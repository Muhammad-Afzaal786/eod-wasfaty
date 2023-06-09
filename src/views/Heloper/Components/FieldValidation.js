import React from "react";
import { FormattedMessage } from "react-intl";
import { Input, FormFeedback } from "reactstrap";
function Validation(props) {
  return (
    <React.Fragment>
      {props.type === "select" ? (
        <>
          <Input
            type="text"
            hidden
            invalid={
              props.value?.length === 0 && props.validation ? true : false
            }
          />
          <FormFeedback
            className="ml-1"
            invalid={
              props.value?.length === 0 && props.validation ? "true" : "false"
            }
          >
            <FormattedMessage
              id={"This Option is required!"}
              defaultMessage="This Option is required!"
            />
          </FormFeedback>
        </>
      ) : props.type === "text" ? (
        <FormFeedback
          className="ml-1"
          invalid={props.value === "" && props.validation ? "true" : "false"}
        >
          <FormattedMessage
            id={"This Option is required!"}
            defaultMessage="This Option is required!"
          />
        </FormFeedback>
      ) : (
        <FormFeedback
          className="ml-1"
          invalid={!props.value && props.validation ? "true" : "false"}
        >
          <FormattedMessage
            id={"This Option is required!"}
            defaultMessage="This Option is required!"
          />
        </FormFeedback>
      )}
    </React.Fragment>
  );
}

export default Validation;
