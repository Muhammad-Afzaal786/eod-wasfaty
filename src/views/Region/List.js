import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { region_index } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { regionCol, userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { regionHeader } from "../Heloper/Header";

const RegionList = () => {
  const pagination = useRef();
  const deleteOpt = useSelector((state) => state.layout.deleteAction);
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
        downloadFileName={"regionList"}
        minRows={5}
        history={history}
        headers={regionHeader}
        endPoint={region_index}
        // selectMulti
        deleteActive={deleteOpt}
        // activateUser
        title="Region List"
      />
    </Fragment>
  );
};

export default RegionList;
