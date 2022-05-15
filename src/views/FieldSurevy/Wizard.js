// ** React Imports
import { useContext,useEffect, useRef, useState } from "react";

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
import { IntlContext } from "../../utility/context/Internationalization";

const WizardHorizontal = () => {
  const [data, setData] = useState(fieldSurveyObj);
  const [validation, setValidation] = useState(false);
  let navigate = useNavigate();
  let context = useContext(IntlContext);
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
  const [stepper, setStepper] = useState(null);
  const steps = [
    {
      id: "account-details",
      title: context.locale === "sa" ? "الخطوة 1" : "Step-1",
      key: 0,
      subtitle:context.locale === "sa" ? "معلومات المنشأة" : "Facility Information",
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
      title: context.locale === "sa" ? "الخطوة 2" : " Step-2",
      subtitle:context.locale === "sa" ? "تعمل المنشأة" : "Is Facility Working",
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
      title: context.locale === "sa" ? "الخطوه 3" : " Step-3",
      subtitle:context.locale === "sa" ? "انتهاك": "Violation",
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
