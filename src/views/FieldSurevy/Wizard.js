// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
import Address from "./steps-with-validation/Address";
import SocialLinks from "./steps-with-validation/SocialLinks";
import PersonalInfo from "./steps-with-validation/PersonalInfo";
import AccountDetails from "./steps-with-validation/AccountDetails";
import { fieldSurveyObj } from "../Heloper/Object";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "@utils";

const WizardHorizontal = () => {
  const [data, setData] = useState(fieldSurveyObj);
  const [validation, setValidation] = useState(false);

  //handle inputs value
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  // ** Ref
  const ref = useRef(null);
  // ** State
  console.log(data);
  const [stepper, setStepper] = useState(null);
  const steps = [
    {
      id: "account-details",
      title: "Step-1",
      subtitle: "Facility Information",
      content: (
        <AccountDetails
          stepper={stepper}
          handleChange={handleChange}
          data={data}
          validation={validation}
          setValidation={setValidation}
          setData={setData}
        />
      ),
    },
    {
      id: "personal-info",
      title: "Step-2",
      subtitle: "Is Facility Working",
      content: (
        <PersonalInfo
          stepper={stepper}
          handleChange={handleChange}
          data={data}
          validation={validation}
          setValidation={setValidation}
          setData={setData}
        />
      ),
    },
    {
      id: "step-address",
      title: "Step-3",
      subtitle: "Violation",
      content: (
        <Address
          stepper={stepper}
          handleChange={handleChange}
          data={data}
          validation={validation}
          setValidation={setValidation}
          setData={setData}
        />
      ),
    },
  ];

  if (isUserLoggedIn) {
    return (
      <div className="horizontal-wizard">
        <Wizard instance={(el) => setStepper(el)} ref={ref} steps={steps} />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default WizardHorizontal;
