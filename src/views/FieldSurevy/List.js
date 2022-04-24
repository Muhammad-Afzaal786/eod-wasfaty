import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { inspection_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { fieldSurveyCol, regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { FieldSurveyHeader } from "../Heloper/Header";

const FieldSurveyList = () => {
  const pagination = useRef();
  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      inspection_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
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
        title="Field Survey List"
        headers={FieldSurveyHeader}
        endPoint={inspection_index}
        // selectMulti
        // activateUser
      />
    </Fragment>
  );
};

export default FieldSurveyList;
