// ** Icons Imports
import { Check, X } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Label,
} from "reactstrap";

const CustomLabel = ({ htmlFor, name, handleChange }) => {
  return (
    <Label className="form-check-label" htmlFor={htmlFor}>
      <span
        className="switch-icon-left"
        onClick={() => {
          handleChange(name, false);
        }}
      >
        Yes
      </span>
      <span
        className="switch-icon-right text-white"
        onClick={() => {
          handleChange(name, true);
        }}
      >
        No
      </span>
    </Label>
  );
};

const SwitchIcons = ({ handleChange, name, value, call }) => {
  return (
    <div className="d-flex flex-column">
      <div className="form-switch form-check-success">
        <Input
          type="switch"
          // defaultChecked
          id={name}
          checked={value}
          className="customWidth"
          name={name}
          onChange={(e) => handleChange(name, e.target.checked)}
        />
        <CustomLabel
          htmlFor="icon-primary"
          name={name}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};
export default SwitchIcons;
