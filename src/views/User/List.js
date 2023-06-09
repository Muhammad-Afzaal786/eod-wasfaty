import React, { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { get_user } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";
import { userHeader } from "../Heloper/Header";
import { hasRule } from "../Heloper/HasRule";
import { isUserLoggedIn } from "@utils";

const List = () => {
  const pagination = useRef();
  const deleteOpt = useSelector((state) => state.layout.deleteAction);
  let navigate = useNavigate();
  const paginationCall = (data) => {
    return SC.getCall(
      get_user + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  if (isUserLoggedIn() && hasRule() === "admin") {
    return (
      <Fragment>
        <Pagination
          refs={pagination}
          columns={userCol}
          getDataCall={paginationCall}
          filterView={false}
          showAllToggle={true}
          navigate={navigate}
          downloadData={true}
          downloadFileName={"userList"}
          minRows={5}
          deleteActive={deleteOpt}
          history={history}
          headers={userHeader}
          endPoint={get_user}
          // selectMulti
          // activateUser
          title="User list"
        />
      </Fragment>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default List;
