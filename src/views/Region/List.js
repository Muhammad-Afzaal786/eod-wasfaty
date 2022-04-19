import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { region_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";

const RegionList = () => {
  const pagination = useRef();
  const navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      region_index + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  return (
    <Fragment>
      <Pagination
        refs={pagination}
        columns={regionCol}
        getDataCall={paginationCall}
        filterView={false}
        navigate={navigate}
        showAllToggle={true}
        downloadData={true}
        downloadFileName={"userRequest"}
        minRows={5}
        history={history}
        // headers={userRequestHeader}
        endPoint={region_index}
        // selectMulti
        // activateUser
        title="Region List"
      />
    </Fragment>
  );
};

export default RegionList;
