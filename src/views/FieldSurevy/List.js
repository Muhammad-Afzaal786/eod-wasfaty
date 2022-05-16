import React, { useContext,Fragment, useRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { inspection_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { fieldSurveyCol, regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { FieldSurveyHeader } from "../Heloper/Header";
import { isUserLoggedIn } from "@utils";
import { hasRule } from "../Heloper/HasRule";
import { IntlContext } from "../../utility/context/Internationalization";

const FieldSurveyList = () => {
  const pagination = useRef();
  const context = useContext(IntlContext)
  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      inspection_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  if (isUserLoggedIn() && hasRule() === "admin") {
    return (
      <Fragment>
        <Pagination
          refs={pagination}
          columns={fieldSurveyCol}
          getDataCall={paginationCall}
          filterView={false}
          showAllToggle={true}
          downloadData={true}
          navigate={navigate}
          downloadFileName={"FieldSurveyList"}
          minRows={5}
          history={history}
          title={context.locale === "sa" ? "قائمة المسح الميداني" : "Field survey list"}
          headers={FieldSurveyHeader}
          endPoint={inspection_index}
          // selectMulti
          // activateUser
        />
      </Fragment>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default FieldSurveyList;
