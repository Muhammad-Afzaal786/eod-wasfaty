import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { site_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { SiteCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { hasRule } from "../Heloper/HasRule";
import { isUserLoggedIn } from "@utils";
const SiteList = () => {
  const pagination = useRef();
  const deleteOpt = useSelector((state) => state.layout.deleteAction);

  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      site_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  if (isUserLoggedIn() && hasRule() === "admin") {
    return (
      <Fragment>
        <Pagination
          refs={pagination}
          columns={SiteCol}
          getDataCall={paginationCall}
          filterView={false}
          navigate={navigate}
          showAllToggle={true}
          downloadData={false}
          deleteActive={deleteOpt}
          downloadFileName={"siteList"}
          minRows={5}
          history={history}
          // headers={userRequestHeader}
          endPoint={site_index}
          // selectMulti
          // activateUser
          title="Site list"
        />
      </Fragment>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default SiteList;
