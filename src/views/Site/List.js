import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import {site_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { SiteCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";

const SiteList = () => {
  const pagination = useRef();
  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      site_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  return (
    <Fragment>
      <Pagination
        refs={pagination}
        columns={SiteCol}
        getDataCall={paginationCall}
        filterView={false}
        navigate={navigate}
        showAllToggle={true}
        downloadData={true}
        downloadFileName={"userRequest"}
        minRows={5}
        history={history}
        // headers={userRequestHeader}
        endPoint={site_index}
        // selectMulti
        // activateUser
        title="SiteList"
      />
    </Fragment>
  );
};

export default SiteList;