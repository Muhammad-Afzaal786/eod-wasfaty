import React, { Fragment, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { get_user } from "../Heloper/Apicall/endPoints";
import { SC } from "../Heloper/Apicall/ServerCall";
import { userCol } from "../Heloper/Columns";
import Pagination from "../Heloper/Components/Pagination";

const List = () => {
  const pagination = useRef();

  const paginationCall = (data) => {
    return SC.getCall(
      get_user + `?page=${data.page}&per_page=${data.pageSize}`
    );
  };
  return (
    <Fragment>
      <Card>
        <CardBody className="rounded">
          <Pagination
            refs={pagination}
            columns={userCol}
            getDataCall={paginationCall}
            filterView={false}
            showAllToggle={true}
            navigate={Navigate}
            downloadData={true}
            downloadFileName={"userList"}
            minRows={5}
            history={history}
            // headers={userRequestHeader}
            endPoint={get_user}
            // selectMulti
            // activateUser
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default List;
