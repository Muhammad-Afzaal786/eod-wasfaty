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
import { Navigate, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "@utils";
import { SC } from "../Heloper/Apicall/ServerCall";
import { inspection_create } from "../Heloper/Apicall/endPoints";
import toast from "react-hot-toast";

const WizardHorizontal = ({ loading, setLoading }) => {
  const [data, setData] = useState(fieldSurveyObj);
  const [validation, setValidation] = useState(false);

  let navigate = useNavigate();
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
        operator_name: "",
        operator_id: "",
        trade_name: "",
        registration_no: "",
        facility_room_number: "",
        facility_number: "",
        facility_email: "",
        Facility_Mobile_number: "",
        facility_not_working_file: [],
        Reasons_for_not_notifying: "",
      });
    }
  }, [data.facility_working]);
  useEffect(() => {
    if (data.specified_period) {
      setData({
        ...data,
        Reasons_for_not_notifying: "",
      });
    } else if (data.license_valid) {
      setData({
        ...data,
        not_renewing_the_license: "",
      });
    }
  }, [data.specified_period, data.license_valid]);
  const handleSubmit = (value) => {
    const postData = {
      ...data,
      inspectorRelation: data.inspectorRelation.value || "",
      facility_working: data.facility_working.value || "",
      specified_period: data.specified_period.value || "",
      license_valid: data.license_valid.value || "",
      update_method: data.update_method.value || "",

      tourism_License_number: data.tourism_License_number?._id,
      reasonOpt: data.reasonOpt?.value || "",
      violation_item: value,
    };
    SC.postCall(inspection_create, postData).then((res) => {
      if (res.status === 200 && res.data) {
        toast.success(res.data.data);
        navigate("/fieldSurvey/list");
      }
    });
  };
  console.log(data);
  const [stepper, setStepper] = useState(null);
  const steps = [
    {
      id: "account-details",
      title: "Step-1",
      key: 0,
      subtitle: "Facility Information",
      content: (
        <AccountDetails
          stepper={stepper}
          handleChange={handleChange}
          data={data}
          setLoading={setLoading}
          loading={loading}
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
      key: 0,

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
      key: 2,
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
