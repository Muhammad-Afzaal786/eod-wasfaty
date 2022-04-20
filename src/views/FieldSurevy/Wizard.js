// ** React Imports
import { useEffect, useRef, useState } from "react";

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
import { SC } from "../Heloper/Apicall/ServerCall";
import { inspection_create } from "../Heloper/Apicall/endPoints";

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
  useEffect(() => {
    if (data.facility_working) {
      setData({
        ...data,
        reasonOpt: [],
        facility_not_working_file: [],
        Reasons_for_not_notifying: !data.specified_period
          ? data.Reasons_for_not_notifying
          : "",
      });
    }
  }, [data.facility_working, data.specified_period]);
  const handleSubmit = (value) => {
    const postData = {
      ...data,
      region: data.region?._id,
      city: data.city?._id,
      tourism_License_number: data.tourism_License_number?._id,
      reasonOpt: data.reasonOpt?.value || "",
      violation_item: value,
    };
    console.log("postData", postData);
    SC.postCall(inspection_create, postData).then((res) => {
      console.log(res);
    });
  };
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
          dataSubmit={handleSubmit}
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
          dataSubmit={handleSubmit}
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
          dataSubmit={handleSubmit}
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
